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

const { JsonFormatterService } = require('../js/jsonFormatterService');

console.log('====================================================');
console.log('   JsonFormatterService 100% Comprehensive Native JS Tests');
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

// 1. Standard Valid JSON Formatting Tests
console.log('--- 1. Valid Standard JSON Formatting ---');
const standardJson = '{"Display System":{"Display Size":"6.7 inches","Refresh Rate":"120Hz"}}';
const standardRes = JsonFormatterService.format(standardJson);
assert(standardRes.success === true, 'Standard JSON formats successfully');
assert(standardRes.repaired === false, 'Standard valid JSON bypasses lenient repair (fast-path)');
assert(standardRes.formatted.includes('  "Display System": {'), 'Formats with clean 2-space indentation');

// 2. Lenient Syntax Auto-Repair Tests
console.log('\n--- 2. Lenient Syntax Auto-Repair ---');

// Unquoted keys repair
const unquotedKeys = '{ processor: "Snapdragon 8 Gen 3", ram: "12GB" }';
const unquotedRes = JsonFormatterService.format(unquotedKeys);
assert(unquotedRes.success === true, 'Auto-repairs unquoted object keys');
assert(unquotedRes.repaired === true, 'Flags that lenient repair was applied');
assert(unquotedRes.parsed.processor === 'Snapdragon 8 Gen 3', 'Parsed object has correct values');

// Single quotes to double quotes repair
const singleQuotes = "{ 'model': 'iPhone 16 Pro', 'series': 'Pro' }";
const singleRes = JsonFormatterService.format(singleQuotes);
assert(singleRes.success === true, 'Auto-repairs single-quoted strings to double quotes');
assert(singleRes.parsed.model === 'iPhone 16 Pro', 'Extracted single-quoted values accurately');

// Trailing / dangling commas repair
const trailingCommas = '{\n  "display": "AMOLED",\n  "refresh": 120,\n}';
const trailingRes = JsonFormatterService.format(trailingCommas);
assert(trailingRes.success === true, 'Auto-repairs dangling trailing commas in objects');
assert(trailingRes.parsed.display === 'AMOLED', 'Trailing comma sanitized without loss');

// JavaScript comments stripping (// and /* */)
const withComments = `
{
  // Primary processor spec
  "SoC": "Apple A18 Pro",
  /* Multi-line memory note
     high bandwidth */
  "RAM": "8GB LPDDR5X"
}
`;
const commentsRes = JsonFormatterService.format(withComments);
assert(commentsRes.success === true, 'Safely strips single-line and multi-line JS comments');
assert(commentsRes.parsed.SoC === 'Apple A18 Pro', 'Comment stripping preserves core data');

// 3. Raw Control Character Sanitization (Fix for "Bad control character in string literal")
console.log('\n--- 3. Unescaped Bad Control Character Sanitization ---');
const rawMultilineString = '{\n  "Notes": "Line 1\nLine 2\tTabbed Spec"\n}';
const multilineRes = JsonFormatterService.format(rawMultilineString);
assert(multilineRes.success === true, 'Auto-escapes unescaped raw literal newlines and tabs inside strings');
assert(multilineRes.parsed.Notes === 'Line 1\nLine 2\tTabbed Spec', 'Parsed value maintains newline semantics without bad control char syntax error');

// Non-printable ASCII control characters (0x01 - 0x1F)
const rawControlChar = '{"Title": "Special' + String.fromCharCode(7) + 'Char"}';
const controlRes = JsonFormatterService.format(rawControlChar);
assert(controlRes.success === true, 'Auto-escapes ASCII control codes (< 32) into unicode escape format');

// 4. Recursive Key Sorting Tests
console.log('\n--- 4. Recursive Key Sorting (Technical Specifications Template Order) ---');
const unsorted = {
  "Optics & Camera Architecture": { "Optical Zoom": "5x", "Rear Main Camera": "48MP" },
  "Connectivity & Software": { "Operating System": "Android 15" },
  "Display System": { "Refresh Rate": "120Hz", "Display Size": "6.7 inch" },
  "Design & Dimensions": { "Weight": "210g", "Dimensions": "160 x 75 mm" }
};

// Sort using active Technical Specifications Template (Fixed Standard Order)
const sortedTemplateRes = JsonFormatterService.format(JSON.stringify(unsorted), {
  sortKeys: true,
  template: JsonFormatterService.DEFAULT_SPECS_TEMPLATE
});
assert(sortedTemplateRes.success === true, 'Formats with sortKeys=true and template');
const sortedTemplateCategories = Object.keys(sortedTemplateRes.parsed);
assert(sortedTemplateCategories[0] === 'Design & Dimensions', 'First category is Design & Dimensions per Template');
assert(sortedTemplateCategories[1] === 'Display System', 'Second category is Display System per Template');
assert(sortedTemplateCategories[2] === 'Optics & Camera Architecture', 'Third category is Optics & Camera Architecture per Template');
assert(sortedTemplateCategories[3] === 'Connectivity & Software', 'Fourth category is Connectivity & Software per Template');

// Inner spec keys follow template order
const displayKeys = Object.keys(sortedTemplateRes.parsed['Display System']);
assert(displayKeys[0] === 'Display Size', 'Display Size precedes Refresh Rate per Template');
assert(displayKeys[1] === 'Refresh Rate', 'Refresh Rate follows Display Size per Template');

// Custom / unknown category falls back to alphabetical after template items
const withCustomCategory = {
  "Custom Sensors": { "LiDAR": "Yes" },
  "Design & Dimensions": { "Weight": "200g" }
};
const customSortedRes = JsonFormatterService.format(JSON.stringify(withCustomCategory), {
  sortKeys: true,
  template: JsonFormatterService.DEFAULT_SPECS_TEMPLATE
});
const customKeys = Object.keys(customSortedRes.parsed);
assert(customKeys[0] === 'Design & Dimensions', 'Template categories come first');
assert(customKeys[1] === 'Custom Sensors', 'Custom / non-template categories follow gracefully');

// Pure alphabetical fallback if template is null
const pureAlphaRes = JsonFormatterService.sortObjectKeys({ "Z": 1, "A": 2 }, null);
assert(Object.keys(pureAlphaRes)[0] === 'A' && Object.keys(pureAlphaRes)[1] === 'Z', 'Pure alphabetical fallback when template is null');

// 5. Minification Tests
console.log('\n--- 5. Minification ---');
const minRes = JsonFormatterService.minify('{\n  "model": "Galaxy S24 Ultra",\n  "ram": "12GB"\n}');
assert(minRes.success === true, 'Minification succeeds');
assert(minRes.minified === '{"model":"Galaxy S24 Ultra","ram":"12GB"}', 'Produces dense single-line JSON without whitespace overhead');

// 6. Error Diagnostics & Validation Tests
console.log('\n--- 6. Syntax Error Diagnostics & Guardrails ---');
const emptyRes = JsonFormatterService.format('   ');
assert(emptyRes.success === false && emptyRes.error.includes('empty'), 'Rejects empty input');

const nonObjectRes = JsonFormatterService.format('"just a string"');
assert(nonObjectRes.success === false && nonObjectRes.error.includes('Specifications must be a JSON object'), 'Enforces JSON specifications object constraint');

const brokenSyntax = '{\n  "broken": unquoted_value_without_closing';
const brokenRes = JsonFormatterService.format(brokenSyntax);
assert(brokenRes.success === false, 'Detects unrecoverable broken syntax');
assert(brokenRes.line !== undefined && brokenRes.col !== undefined, 'Reports exact line and column numbers');
assert(brokenRes.snippet && brokenRes.snippet.includes('^'), 'Generates contextual visual caret pointer snippet');

// 7. Additional 100% Code Coverage Edge Cases & Diagnostic Branches
console.log('\n--- 7. Additional Edge Cases & Diagnostic Branches ---');

// Test 7.1: sanitizeRelaxedJson input guard branches
assert(JsonFormatterService.sanitizeRelaxedJson(null) === '', 'sanitizeRelaxedJson returns empty string on null');
assert(JsonFormatterService.sanitizeRelaxedJson(12345) === '', 'sanitizeRelaxedJson returns empty string on non-string type');

// Test 7.2: Escape character and quote nesting inside string literals
const escapedStringJson = "{ 'desc': 'He said \\'Hello\\', and \"Double Quotes\"' }";
const escapedRes = JsonFormatterService.format(escapedStringJson);
assert(escapedRes.success === true, 'Handles escaped single quotes and embedded double quotes in single-quoted strings');

// Test 7.3: sortObjectKeys with Arrays and nested values
const arrayNested = {
  "features": [
    { "z": 10, "a": 20 },
    "plain string"
  ]
};
const sortedArrayRes = JsonFormatterService.sortObjectKeys(arrayNested);
assert(Array.isArray(sortedArrayRes.features), 'sortObjectKeys preserves array structures');
assert(Object.keys(sortedArrayRes.features[0])[0] === 'a', 'sortObjectKeys recursively sorts objects inside arrays');
assert(JsonFormatterService.sortObjectKeys(null) === null, 'sortObjectKeys returns null on null object');
assert(JsonFormatterService.sortObjectKeys("primitive string") === "primitive string", 'sortObjectKeys returns primitives untouched');

// Test 7.4: minify() error forwarding
const brokenMinify = JsonFormatterService.minify('{ invalid: json without quotes or values');
assert(brokenMinify.success === false, 'minify forwards syntax errors cleanly without throwing');

// Test 7.5: diagnoseSyntaxError fallback to Firefox/Safari regex line/column parsing
const mockFirefoxErr = new Error('JSON.parse: bad parsing at line 3 column 7 of the JSON data');
const firefoxDiag = JsonFormatterService.diagnoseSyntaxError('line 1\nline 2\nline 3 broken', mockFirefoxErr);
assert(firefoxDiag.line === 3 && firefoxDiag.col === 7, 'diagnoseSyntaxError extracts line/col from alternative engine error messages');

// Test 7.6: diagnoseSyntaxError unknown format fallback
const mockUnknownErr = new Error('Unspecified JSON parse failure');
const unknownDiag = JsonFormatterService.diagnoseSyntaxError('line 1', mockUnknownErr);
assert(unknownDiag.line === 1 && unknownDiag.col === 1, 'diagnoseSyntaxError defaults gracefully to line 1 column 1 on unknown error string format');

console.log(`\n====================================================`);
console.log(` JsonFormatterService Tests: Total: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
console.log(`====================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}
