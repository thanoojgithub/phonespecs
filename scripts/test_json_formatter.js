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
console.log('\n--- 4. Recursive Key Sorting ---');
const unsorted = {
  "Optics": { "Z_Telephoto": "5x", "A_Main": "48MP" },
  "Battery": { "Capacity": "5000 mAh" },
  "Display": { "Size": "6.7 inch" }
};

const sortedRes = JsonFormatterService.format(JSON.stringify(unsorted), { sortKeys: true });
assert(sortedRes.success === true, 'Formats with sortKeys=true');
const sortedKeys = Object.keys(sortedRes.parsed);
assert(sortedKeys[0] === 'Battery' && sortedKeys[1] === 'Display' && sortedKeys[2] === 'Optics', 'Sorts top-level category keys alphabetically');
const innerKeys = Object.keys(sortedRes.parsed['Optics']);
assert(innerKeys[0] === 'A_Main' && innerKeys[1] === 'Z_Telephoto', 'Sorts nested specification keys alphabetically');

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

console.log(`\n====================================================`);
console.log(` JsonFormatterService Tests: Total: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
console.log(`====================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}
