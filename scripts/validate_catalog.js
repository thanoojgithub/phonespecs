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

const fs = require('fs');
const path = require('path');

function validateCatalog() {
  try {
    const catalogPath = path.join(__dirname, '..', 'data', 'catalog.json');
    const rawContent = fs.readFileSync(catalogPath, 'utf8');

    // Strip UTF-8 Byte Order Mark (BOM) if present
    const cleanContent = rawContent.replace(/^\uFEFF/, '');
    const data = JSON.parse(cleanContent);

    if (!Array.isArray(data.brands)) {
      throw new Error("'brands' must be a JSON array");
    }
    if (!Array.isArray(data.phones)) {
      throw new Error("'phones' must be a JSON array");
    }
    if (data.phones.length === 0) {
      throw new Error("No phone specifications found in catalog");
    }

    console.log(`[SUCCESS] catalog.json is valid: ${data.brands.length} brands, ${data.phones.length} phones verified.`);
    process.exit(0);
  } catch (err) {
    console.error(`[ERROR] Catalog validation failed: ${err.message}`);
    process.exit(1);
  }
}

validateCatalog();
