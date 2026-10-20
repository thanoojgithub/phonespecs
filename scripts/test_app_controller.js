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

// Setup mock browser DOM environment before requiring app.js
class MockClassList {
  constructor() { this.classes = new Set(); }
  add(c) { this.classes.add(c); }
  remove(c) { this.classes.delete(c); }
  contains(c) { return this.classes.has(c); }
}

class MockElement {
  constructor(id = '', tagName = 'div') {
    this.id = id;
    this.tagName = tagName.toUpperCase();
    this.classList = new MockClassList();
    this.children = [];
    this._value = '';
    this._textContent = '';
    this._innerHTML = '';
    this.attributes = {};
    this.listeners = {};
    this.style = {};
  }
  get value() { return this._value; }
  set value(v) { this._value = String(v); }
  get textContent() { return this._textContent; }
  set textContent(v) { this._textContent = String(v); }
  get innerHTML() { return this._innerHTML; }
  set innerHTML(v) { this._innerHTML = String(v); }
  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
  dispatch(event, e = {}) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(fn => fn(e));
    }
  }
  focus() {}
  setSelectionRange() {}
  getAttribute(attr) { return this.attributes[attr] || null; }
  setAttribute(attr, val) { this.attributes[attr] = String(val); }
  querySelector(sel) { return null; }
  querySelectorAll(sel) { return []; }
  closest(sel) { return null; }
}

const elementsMap = {};
function getOrCreateElem(id, tagName = 'div') {
  if (!elementsMap[id]) elementsMap[id] = new MockElement(id, tagName);
  return elementsMap[id];
}

global.document = {
  getElementById: (id) => getOrCreateElem(id),
  createElement: (tagName) => new MockElement('', tagName),
  querySelector: () => null,
  querySelectorAll: () => [],
  body: new MockElement('app-body', 'body')
};

global.window = {
  addEventListener: () => {},
  location: { hash: '#/all', reload: () => {} }
};

const mockStorage = {};
global.localStorage = {
  getItem: (k) => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; }
};

const mockSession = {};
global.sessionStorage = {
  getItem: (k) => mockSession[k] || null,
  setItem: (k, v) => { mockSession[k] = String(v); },
  removeItem: (k) => { delete mockSession[k]; }
};

const { PhoneSpecsApp } = require('../js/app');
const { CatalogService } = require('../js/catalogService');
const { AuditService } = require('../js/auditService');
const { JsonFormatterService } = require('../js/jsonFormatterService');

console.log('====================================================');
console.log('   PhoneSpecsApp Native JS Controller Tests (100%)  ');
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

// 1. Controller Initialization & State
console.log('--- 1. Application Controller Initialization ---');
const app = new PhoneSpecsApp();
assert(app !== null, 'PhoneSpecsApp instantiates cleanly');
assert(app.auditService instanceof AuditService, 'auditService instance created');
assert(app.catalogService instanceof CatalogService, 'catalogService instance created');
assert(app.isAnyModalOpen === false, 'isAnyModalOpen returns false by default');

app.cacheDomElements();
assert(app.dom.body !== undefined, 'cacheDomElements binds body');
assert(app.dom.btnAdminToggle !== undefined, 'cacheDomElements binds admin toggle');
assert(app.dom.formSpecsJson !== undefined, 'cacheDomElements binds formSpecsJson');

// 2. Modals & Route Handling
console.log('\n--- 2. Modal States & Route Navigation ---');
app.showDetailsModal = true;
assert(app.isAnyModalOpen === true, 'isAnyModalOpen true when details modal open');
app.closeAllModals();
assert(app.isAnyModalOpen === false, 'closeAllModals closes all modals');

app.handleHashRoute();
assert(app.selectedBrand === 'all', 'handleHashRoute handles default route');

// 3. Admin Authentication & Toggle
console.log('\n--- 3. Admin Access & Authentication ---');
assert(app.adminMode === false, 'adminMode false initially');
// Prompt mock for password
global.prompt = () => 'admin123';
app.toggleAdmin();
assert(app.adminMode === true, 'toggleAdmin with correct password enables admin mode');
app.toggleAdmin();
assert(app.adminMode === false, 'toggleAdmin toggles admin mode off');

// 4. Toast Notifications & HTML Escaping
console.log('\n--- 4. Toasts & Escaping ---');
app.showToast('Test Toast Message', 'success');
assert(app.toasts.length === 1, 'showToast adds toast to queue');
assert(app.toasts[0].message === 'Test Toast Message', 'Toast contains correct message');

const escaped = app.escapeHtml('<script>alert("xss")</script>');
assert(!escaped.includes('<script>') && escaped.includes('&lt;script&gt;'), 'escapeHtml sanitizes tags and quotes');

// 5. Compare Drawer & Tray Operations
console.log('\n--- 5. Comparison Tray Operations ---');
const samplePhone = { id: 'phone-test', model: 'Test Phone', brandId: 'brand-a', specs: {} };
app.toggleCompare(samplePhone);
assert(app.compareList.length === 1, 'toggleCompare adds phone to compare tray');
app.toggleCompare(samplePhone);
assert(app.compareList.length === 0, 'toggleCompare removes phone if already in tray');

app.toggleCompare(samplePhone);
app.clearCompare();
assert(app.compareList.length === 0, 'clearCompare empties comparison tray');

// 6. Specs Formatting Integration
console.log('\n--- 6. Specs Formatting & Key Sorting Integration ---');
app.dom.formSpecsJson.value = '{ processor: "Snapdragon", ram: "16GB" }';
app.formatFormSpecs(false);
assert(app.dom.formSpecsJson.value.includes('"processor": "Snapdragon"'), 'formatFormSpecs repairs unquoted keys');

app.formatFormSpecs(true);
assert(app.dom.formSpecsJson.value.includes('"processor": "Snapdragon"'), 'formatFormSpecs with sortKeys formats cleanly');

app.minifyFormSpecs();
assert(!app.dom.formSpecsJson.value.includes('\n'), 'minifyFormSpecs compresses to single line');

// 7. Edit Modal & Version History Integration
console.log('\n--- 7. Edit Modal, Versions & Safe Commit ---');
app.openAddModal();
assert(app.showFormModal === true, 'openAddModal opens modal');
assert(app.dom.formSpecsJson.value.includes('Design & Dimensions'), 'openAddModal loads starter specs with Technical Specifications Template structure');
app.closeFormModal();
assert(app.showFormModal === false, 'closeFormModal closes modal');

const targetPhone = app.catalogService.getPhoneById('apple-iphone-16-pro-max');
assert(targetPhone !== null, 'apple-iphone-16-pro-max exists in catalog');
app.openEditModal(targetPhone);
assert(app.showFormModal === true, 'openEditModal opens modal for phone');
assert(app.dom.formPhoneId.value === targetPhone.id, 'openEditModal populates formPhoneId');

// Test savePhone
app.dom.formModel.value = 'iPhone 16 Pro Max Updated';
app.dom.formSpecsJson.value = '{"Optics & Camera Architecture":{"Rear Main Camera":"50MP"},"Design & Dimensions":{"Weight":"220g"}}';
app.dom.formBrandId.value = 'apple';
app.dom.formSeriesId.value = 'iphone-pro';
app.dom.formReleaseYear.value = '2024';

app.savePhone();
assert(app.showFormModal === false, 'savePhone saves record and closes modal');
const savedPhone = app.catalogService.getPhoneById(targetPhone.id);
assert(savedPhone !== null, 'Saved phone is in catalog');
assert(savedPhone.model === 'iPhone 16 Pro Max Updated', 'Model updated');
const savedCategories = Object.keys(savedPhone.specs);
assert(savedCategories[0] === 'Design & Dimensions', 'savePhone automatically sorts specs categories by Technical Specifications Template');
assert(savedCategories[1] === 'Optics & Camera Architecture', 'Subsequent categories follow template ordering');

// 8. Technical Specifications Template Management (Admin-Only)
console.log('\n--- 8. Technical Specifications Template Management (Admin-Only) ---');
// Verify non-admin blocked
app.adminMode = false;
app.openTemplateModal();
assert(app.showTemplateModal === false, 'Non-admin cannot open Technical Specifications Template modal');

// Verify admin access
app.adminMode = true;
app.openTemplateModal();
assert(app.showTemplateModal === true, 'Admin can open Technical Specifications Template modal');
assert(app.dom.templateSpecsJson.value.includes('Design & Dimensions'), 'Template modal loads current active master template');

// Test format template JSON
app.dom.templateSpecsJson.value = '{ "Display System": { "Size": "6.8 inch" } }';
app.formatTemplateJson();
assert(app.dom.templateSpecsJson.value.includes('  "Display System": {'), 'formatTemplateJson formats with 2-space indentation');

// Test saving updated template
app.saveMasterTemplate();
assert(app.showTemplateModal === false, 'saveMasterTemplate saves and closes template modal');
assert(app.specsTemplate['Display System'] !== undefined, 'Master specsTemplate updated in controller');

// Test reset to factory default
global.confirm = () => true;
app.resetTemplateToFactoryDefault();
assert(app.dom.templateSpecsJson.value.includes('Design & Dimensions'), 'resetTemplateToFactoryDefault restores factory baseline');
app.saveMasterTemplate();

app.closeAllModals();
assert(app.showTemplateModal === false, 'closeAllModals closes template modal');

console.log(`\n====================================================`);
console.log(` PhoneSpecsApp Tests: Total: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
console.log(`====================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}
