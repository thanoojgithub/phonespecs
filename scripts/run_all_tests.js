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

const { execSync } = require('child_process');
const path = require('path');

console.log('====================================================');
console.log('   PhoneSpecs 100% Native JS Test Suite Runner      ');
console.log('====================================================\n');

const testSuites = [
  { name: 'Catalog Integrity & Schema Validation', file: 'validate_catalog.js' },
  { name: 'CatalogService Native CRUD & Search Engine', file: 'test_catalog_crud.js' },
  { name: 'AuditService 128-Bit Versioning & Zero Duplicates', file: 'test_audit_service.js' },
  { name: 'JsonFormatterService & Control Character Sanitizer', file: 'test_json_formatter.js' },
  { name: 'PhoneSpecsApp Controller & UI State Engine', file: 'test_app_controller.js' },
  { name: '100% ECMAScript 2026 (ES2026) Standards Gate', file: 'check_es2026_compliance.js' },
  { name: 'Pure Native Stack & Architecture Gate', file: 'check_native_stack_compliance.js' },
  { name: '100% Code Coverage & PR Enforcement Gate', file: 'check_code_coverage.js' },
  { name: 'Apache License 2.0 Full Tree Compliance Audit', file: 'check_license_compliance.js' }
];

let failedSuites = 0;

for (const suite of testSuites) {
  console.log(`>>> Running Suite: ${suite.name} (${suite.file})`);
  try {
    const filePath = path.resolve(__dirname, suite.file);
    execSync(`"${process.execPath}" "${filePath}"`, { stdio: 'inherit' });
    console.log(`\n----------------------------------------------------\n`);
  } catch (err) {
    console.error(`\n❌ Test Suite Failed: ${suite.name}\n`);
    failedSuites++;
  }
}

if (failedSuites > 0) {
  console.error(`\n====================================================`);
  console.error(` ❌ SUMMARY: ${failedSuites} of ${testSuites.length} test suites failed!`);
  console.error(`====================================================\n`);
  process.exit(1);
} else {
  console.log(`\n====================================================`);
  console.log(` ✅ ALL ${testSuites.length} TEST SUITES PASSED (100% COVERAGE VERIFIED)`);
  console.log(`====================================================\n`);
}
