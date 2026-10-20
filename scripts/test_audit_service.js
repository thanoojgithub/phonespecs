/*
 * Copyright 2026 Thanooj Kalathuru
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { AuditService } = require('../js/auditService');

console.log('====================================================');
console.log('   AuditService 100% Comprehensive Native JS Tests  ');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ [FAIL] ${message}`);
  }
}

function assertThrows(fn, expectedSubstr, message) {
  totalTests++;
  try {
    fn();
    failedTests++;
    console.error(`  ✗ [FAIL] ${message} (Expected error containing "${expectedSubstr}", but no error thrown)`);
  } catch (err) {
    if (expectedSubstr && !err.message.includes(expectedSubstr)) {
      failedTests++;
      console.error(`  ✗ [FAIL] ${message} (Expected message containing "${expectedSubstr}", got "${err.message}")`);
    } else {
      passedTests++;
      console.log(`  ✓ [PASS] ${message}`);
    }
  }
}

// 1. Static Canonical Stringification & 128-bit Hashing Tests
console.log('--- 1. Canonical Stringification & Hash Consistency ---');
const sampleA = { b: 2, a: 1, c: { y: "test", x: 10 } };
const sampleB = { a: 1, c: { x: 10, y: "test" }, b: 2 };

const canonA = AuditService.canonicalStringify(sampleA);
const canonB = AuditService.canonicalStringify(sampleB);
assert(canonA === canonB, 'canonicalStringify sorts keys recursively across objects');

const hashA = AuditService.computeContentHash(sampleA);
const hashB = AuditService.computeContentHash(sampleB);
assert(hashA === hashB, 'Identical objects produce identical 128-bit contentHash regardless of key order');
assert(hashA.length === 32, `128-bit hash produces 32-character hex string: ${hashA}`);

const hashAlias = AuditService.computeChecksum(sampleA);
assert(hashAlias === hashA, 'computeChecksum alias matches computeContentHash');

// Primitive and edge case stringifications
assert(AuditService.canonicalStringify(null) === 'null', 'canonicalStringify handles null');
assert(AuditService.canonicalStringify(undefined) === 'null', 'canonicalStringify handles undefined');
assert(AuditService.canonicalStringify(123) === '123', 'canonicalStringify handles numbers');
assert(AuditService.canonicalStringify(true) === 'true', 'canonicalStringify handles booleans');
assert(AuditService.canonicalStringify("  hello  ") === '"hello"', 'canonicalStringify trims string literals');
assert(AuditService.canonicalStringify([3, 1, 2]) === '[3,1,2]', 'canonicalStringify handles arrays');

// 2. Validation & Sanitization Tests
console.log('\n--- 2. Snapshot Validation & Sanitization ---');
assert(AuditService.validateSnapshot(null) === false, 'validateSnapshot rejects null');
assert(AuditService.validateSnapshot({}) === false, 'validateSnapshot rejects empty object');
assert(AuditService.validateSnapshot({ id: 'test' }) === false, 'validateSnapshot rejects missing model & brand');
assert(AuditService.validateSnapshot({ id: 'test', model: 'Test Model', brandId: 'test-brand' }) === true, 'validateSnapshot accepts valid snapshot');

const rawRecord = {
  id: 'phone-1',
  brandId: 'brand-a',
  brandName: 'Brand A',
  seriesId: 'series-x',
  seriesName: 'Series X',
  model: 'Model Pro',
  tagline: 'Speed Redefined',
  releaseDate: '2025-01',
  releaseYear: 2025,
  specs: { "Display": { "Size": "6.7 inch" } },
  highlights: ['Feature 1', 'Feature 2'],
  _searchText: 'INTERNAL BUFFER' // should be stripped
};

const clean = AuditService.sanitizePhoneRecord(rawRecord);
assert(clean.id === 'phone-1', 'sanitizePhoneRecord preserves ID');
assert(clean.model === 'Model Pro', 'sanitizePhoneRecord preserves model');
assert(clean._searchText === undefined, 'sanitizePhoneRecord strips runtime search buffers');
assert(AuditService.sanitizePhoneRecord(null) === null, 'sanitizePhoneRecord handles null');

// 3. Diff Engine & Change Summaries
console.log('\n--- 3. Deterministic Diff Engine ---');
assert(AuditService.computeChangeSummary(null, clean) === 'Initial version baseline', 'computeChangeSummary handles initial baseline');

const modifiedRecord = {
  ...clean,
  model: 'Model Pro Max',
  releaseYear: 2026,
  specs: {
    "Display": { "Size": "6.9 inch" },
    "Battery": { "Capacity": "5000 mAh" }
  },
  highlights: ['Feature 1', 'Feature 2', 'Feature 3']
};

const diff = AuditService.computeChangeSummary(clean, modifiedRecord);
assert(diff.includes('Model name changed'), 'Diff detects model change');
assert(diff.includes('Release year updated to 2026'), 'Diff detects year change');
assert(diff.includes('Modified Display > Size'), 'Diff detects spec modification');
assert(diff.includes('Added specs section "Battery"'), 'Diff detects added section');
assert(diff.includes('Key Features updated'), 'Diff detects highlight changes');

const noChangeDiff = AuditService.computeChangeSummary(clean, clean);
assert(noChangeDiff === 'Re-saved without field alterations', 'Diff detects identical content');

// 4. Version Recording, Bounded FIFO & Zero Duplicate Verification
console.log('\n--- 4. Version Recording & Zero Duplicate Enforcement ---');
const audit = new AuditService();
assert(Object.keys(audit.data.items).length === 0, 'AuditService initializes empty container');

// Record v1
const v1 = audit.recordVersion('phone-1', clean, null, 'Initial baseline');
assert(v1 !== null, 'v1 recorded successfully');
assert(v1.version === 1, 'v1 version number is 1');
assert(v1.contentHash.length === 32, 'v1 has 32-char contentHash');
assert(audit.getVersions('phone-1').length === 1, 'phone-1 has 1 version in audit');

// Attempt duplicate record with exact same content
const dupResult = audit.recordVersion('phone-1', clean, null, 'Duplicate attempt');
assert(dupResult === null, 'Duplicate version insertion is strictly omitted (returns null)');
assert(audit.getVersions('phone-1').length === 1, 'Version count remains 1 after duplicate attempt');

// Record updates up to 6 revisions to test 5-version bounded FIFO
const phoneStates = [];
for (let i = 2; i <= 7; i++) {
  const state = { ...clean, model: `Model Update ${i}` };
  phoneStates.push(state);
  const rec = audit.recordVersion('phone-1', state, null, `Update #${i}`);
  assert(rec !== null, `Version for Update #${i} recorded`);
}

const versionsNow = audit.getVersions('phone-1');
assert(versionsNow.length === 5, `Strict 5-version FIFO maintained (expected 5, got ${versionsNow.length})`);
assert(versionsNow[0].version > versionsNow[4].version, 'Latest version is prepended at index 0');

// Retrieval by version identifier
const fetchedByVersionId = audit.getVersion('phone-1', versionsNow[0].versionId);
assert(fetchedByVersionId !== null, 'getVersion retrieves by versionId string');
const fetchedByNum = audit.getVersion('phone-1', versionsNow[0].version);
assert(fetchedByNum !== null, 'getVersion retrieves by numeric version number');
assert(audit.getVersion('phone-1', 'nonexistent') === null, 'getVersion returns null for unknown version');
assert(audit.getVersions('nonexistent-phone').length === 0, 'getVersions returns empty array for unknown phone');

// 5. Pop / Undo and Remove
console.log('\n--- 5. Undo & Removal Operations ---');
const popped = audit.popVersion('phone-1');
assert(popped !== null, 'popVersion successfully pops latest version');
assert(audit.getVersions('phone-1').length === 4, 'Remaining version count is 4 after pop');
assert(audit.popVersion('unknown') === null, 'popVersion returns null on unknown device');

const removed = audit.removeItem('phone-1');
assert(removed === true, 'removeItem removes existing device from audit');
assert(audit.getVersions('phone-1').length === 0, 'Versions cleared after removeItem');
assert(audit.removeItem('phone-1') === false, 'removeItem returns false for non-existent device');

// 6. JSON Export & Import with Validation
console.log('\n--- 6. Export, Import & Schema Validation ---');
const exported = audit.exportJSON();
assert(typeof exported === 'string' && exported.includes('PhoneSpecs Catalog Versioned Audit Trail'), 'exportJSON produces valid JSON string');

const importAudit = new AuditService();
const importCount = importAudit.importJSON(exported);
assert(importCount === 0, 'Imported empty audit cleanly');

assertThrows(() => {
  importAudit.importJSON('INVALID JSON STRING');
}, 'Invalid JSON format', 'importJSON throws on malformed JSON string');

assertThrows(() => {
  importAudit.importJSON(JSON.stringify({ schemaVersion: "1.0.0" }));
}, 'Missing "items"', 'importJSON throws on schema mismatch');

// Mock localStorage persistence
console.log('\n--- 7. Mock LocalStorage Persistence ---');
const mockStore = {};
global.localStorage = {
  getItem: (key) => mockStore[key] || null,
  setItem: (key, val) => { mockStore[key] = String(val); },
  removeItem: (key) => { delete mockStore[key]; }
};

const storageAudit = new AuditService();
storageAudit.recordVersion('device-x', clean, null, 'Test storage');
const persisted = storageAudit.persistToStorage('test_audit_key');
assert(persisted === true, 'persistToStorage writes to localStorage successfully');

const loadedAudit = new AuditService();
const loadOk = loadedAudit.loadFromStorage('test_audit_key');
assert(loadOk === true, 'loadFromStorage reloads from localStorage successfully');
assert(loadedAudit.getVersions('device-x').length === 1, 'Loaded audit has restored version');

storageAudit.clearStorage('test_audit_key');
assert(mockStore['test_audit_key'] === undefined, 'clearStorage removes key from localStorage');

console.log(`\n====================================================`);
console.log(` AuditService Tests: Total: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
console.log(`====================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}
