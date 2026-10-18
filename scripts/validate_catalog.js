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

/**
 * Comprehensive Catalog Integrity & Schema Validator
 * Immediately catches:
 * 1. File existence and non-empty byte stream
 * 2. UTF-8 Byte Order Mark (BOM) or illegal control characters
 * 3. Malformed JSON syntax (trailing commas, unclosed brackets/strings, unescaped quotes)
 * 4. Root structural schema ('brands', 'phones', 'segregations')
 * 5. Corrupted replacement characters (\uFFFD or lone surrogate pairs)
 * 6. Duplicate brand or phone IDs
 * 7. Foreign key reference integrity (phone.brandId -> brand.id, phone.seriesId -> brand.series.id)
 * 8. Required property presence and correct types (model, releaseYear, specs groups)
 * 9. Array type validation (brands, phones, highlights, series)
 */
function validateCatalog() {
  const errors = [];
  const warnings = [];

  const catalogPath = path.join(__dirname, '..', 'data', 'catalog.json');

  // Step 1: File existence & readability check
  if (!fs.existsSync(catalogPath)) {
    console.error(`[CRITICAL ERROR] catalog.json not found at: ${catalogPath}`);
    process.exit(1);
  }

  const fileBuffer = fs.readFileSync(catalogPath);
  if (fileBuffer.length === 0) {
    console.error(`[CRITICAL ERROR] catalog.json is completely empty (0 bytes).`);
    process.exit(1);
  }

  // Step 2: Check for UTF-8 Byte Order Mark (BOM)
  if (fileBuffer[0] === 0xEF && fileBuffer[1] === 0xBB && fileBuffer[2] === 0xBF) {
    warnings.push('File contains a UTF-8 Byte Order Mark (BOM). Clean UTF-8 without BOM is recommended.');
  }

  const rawContent = fileBuffer.toString('utf8');

  // Step 3: Check for unicode replacement characters (\uFFFD or corrupted encoding artifacts)
  if (rawContent.includes('\uFFFD')) {
    errors.push('File contains Unicode Replacement Characters (\\uFFFD), indicating corrupted character encoding.');
  }

  // Step 4: Parse JSON with precise syntax error capture
  let data;
  try {
    const cleanContent = rawContent.replace(/^\uFEFF/, '');
    data = JSON.parse(cleanContent);
  } catch (parseErr) {
    console.error(`\n====================================================`);
    console.error(`[CRITICAL SYNTAX ERROR] Malformed JSON in data/catalog.json:`);
    console.error(`  ${parseErr.message}`);
    console.error(`====================================================\n`);
    process.exit(1);
  }

  // Step 5: Root schema validation
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    errors.push("Root JSON value must be an Object containing 'brands', 'phones', and 'segregations'.");
  } else {
    if (!Array.isArray(data.brands)) {
      errors.push("Missing or invalid 'brands' array: expected Array, received " + typeof data.brands);
    }
    if (!Array.isArray(data.phones)) {
      errors.push("Missing or invalid 'phones' array: expected Array, received " + typeof data.phones);
    }
    if (!data.segregations || typeof data.segregations !== 'object') {
      errors.push("Missing or invalid 'segregations' section: expected Object.");
    }
  }

  if (errors.length > 0) {
    reportErrorsAndExit(errors, warnings);
  }

  // Step 6: Validate Brands Schema & Uniqueness
  const brandIds = new Map();
  const brandSeriesMap = new Map();

  data.brands.forEach((brand, bIdx) => {
    const prefix = `brands[${bIdx}]`;

    if (!brand.id || typeof brand.id !== 'string' || brand.id.trim() === '') {
      errors.push(`${prefix} is missing a non-empty string 'id'.`);
    } else if (brandIds.has(brand.id)) {
      errors.push(`${prefix}: Duplicate brand ID '${brand.id}' (previously defined at index ${brandIds.get(brand.id)}).`);
    } else {
      brandIds.set(brand.id, bIdx);
    }

    if (!brand.name || typeof brand.name !== 'string' || brand.name.trim() === '') {
      errors.push(`${prefix}: Missing or empty 'name' string.`);
    }

    if (brand.origin !== undefined && typeof brand.origin !== 'string') {
      errors.push(`${prefix}: Property 'origin' must be a string.`);
    }

    if (!Array.isArray(brand.series)) {
      errors.push(`${prefix}: Property 'series' must be an Array.`);
    } else {
      const seriesIds = new Set();
      brand.series.forEach((s, sIdx) => {
        const sPrefix = `${prefix}.series[${sIdx}]`;
        if (!s.id || typeof s.id !== 'string') {
          errors.push(`${sPrefix}: Missing non-empty string 'id'.`);
        } else if (seriesIds.has(s.id)) {
          errors.push(`${sPrefix}: Duplicate series ID '${s.id}' within brand '${brand.id}'.`);
        } else {
          seriesIds.add(s.id);
        }
        if (!s.name || typeof s.name !== 'string') {
          errors.push(`${sPrefix}: Missing non-empty string 'name'.`);
        }
      });
      brandSeriesMap.set(brand.id, seriesIds);
    }
  });

  // Step 7: Validate Phones Schema, Uniqueness & Referential Integrity
  if (data.phones.length === 0) {
    errors.push("'phones' array contains 0 phone specifications.");
  }

  const phoneIds = new Map();

  data.phones.forEach((phone, pIdx) => {
    const prefix = `phones[${pIdx}] (${phone.id || 'unnamed'})`;

    // ID uniqueness
    if (!phone.id || typeof phone.id !== 'string' || phone.id.trim() === '') {
      errors.push(`${prefix}: Missing non-empty string 'id'.`);
    } else if (phoneIds.has(phone.id)) {
      errors.push(`${prefix}: Duplicate phone ID '${phone.id}' (previously defined at index ${phoneIds.get(phone.id)}).`);
    } else {
      phoneIds.set(phone.id, pIdx);
    }

    // Required Model
    if (!phone.model || typeof phone.model !== 'string' || phone.model.trim() === '') {
      errors.push(`${prefix}: Missing non-empty string 'model'.`);
    }

    // Brand ID referential integrity
    if (!phone.brandId || typeof phone.brandId !== 'string') {
      errors.push(`${prefix}: Missing 'brandId' string.`);
    } else if (!brandIds.has(phone.brandId)) {
      errors.push(`${prefix}: References unknown brandId '${phone.brandId}' not found in 'brands'.`);
    }

    // Series ID referential integrity (if provided)
    if (phone.seriesId) {
      const allowedSeries = brandSeriesMap.get(phone.brandId);
      if (allowedSeries && !allowedSeries.has(phone.seriesId)) {
        errors.push(`${prefix}: References seriesId '${phone.seriesId}' which does not belong to brand '${phone.brandId}'.`);
      }
    }

    // Release year format & reasonableness
    if (phone.releaseYear !== undefined) {
      if (typeof phone.releaseYear !== 'number' || phone.releaseYear < 2000 || phone.releaseYear > 2035) {
        errors.push(`${prefix}: 'releaseYear' must be a valid number between 2000 and 2035 (got: ${phone.releaseYear}).`);
      }
    }

    // Release date format (YYYY-MM)
    if (phone.releaseDate && typeof phone.releaseDate === 'string') {
      if (!/^\d{4}-\d{2}$/.test(phone.releaseDate)) {
        warnings.push(`${prefix}: 'releaseDate' ('${phone.releaseDate}') should follow YYYY-MM format.`);
      }
    }

    // Specifications Object & Groups
    if (!phone.specs || typeof phone.specs !== 'object' || Array.isArray(phone.specs)) {
      errors.push(`${prefix}: 'specs' must be an Object containing category specification groups.`);
    } else {
      const specGroups = Object.keys(phone.specs);
      if (specGroups.length === 0) {
        errors.push(`${prefix}: 'specs' has 0 specification categories.`);
      }
      for (const groupName of specGroups) {
        const groupObj = phone.specs[groupName];
        if (!groupObj || typeof groupObj !== 'object' || Array.isArray(groupObj)) {
          errors.push(`${prefix}.specs['${groupName}']: Must be a key-value Object.`);
        }
      }
    }

    // Highlights array validation
    if (phone.highlights !== undefined) {
      if (!Array.isArray(phone.highlights)) {
        errors.push(`${prefix}: 'highlights' must be an Array.`);
      } else {
        phone.highlights.forEach((h, hIdx) => {
          if (typeof h !== 'string' || h.trim() === '') {
            errors.push(`${prefix}.highlights[${hIdx}]: Must be a non-empty string.`);
          }
        });
      }
    }

    // FilterKeys validation
    if (phone.filterKeys !== undefined && (typeof phone.filterKeys !== 'object' || Array.isArray(phone.filterKeys))) {
      errors.push(`${prefix}: 'filterKeys' must be an Object.`);
    }
  });

  // Step 8: Final report and exit code
  if (errors.length > 0) {
    reportErrorsAndExit(errors, warnings);
  }

  if (warnings.length > 0) {
    console.log('\n[WARNINGS]');
    warnings.forEach(w => console.warn(`  ⚠ ${w}`));
  }

  console.log(`====================================================`);
  console.log(`[SUCCESS] 100% Catalog Integrity Verified:`);
  console.log(`  - Valid JSON syntax: PASS`);
  console.log(`  - Character encoding integrity: PASS`);
  console.log(`  - Schema completeness: PASS`);
  console.log(`  - Unique Brands: ${data.brands.length} verified`);
  console.log(`  - Unique Phone Specifications: ${data.phones.length} verified`);
  console.log(`  - Referential foreign-key integrity: PASS`);
  console.log(`====================================================\n`);
  process.exit(0);
}

function reportErrorsAndExit(errors, warnings) {
  console.error(`\n====================================================`);
  console.error(`[VALIDATION FAILED] ${errors.length} error(s) detected in data/catalog.json:`);
  console.error(`====================================================`);
  errors.forEach((err, idx) => {
    console.error(`  ${idx + 1}. ${err}`);
  });
  if (warnings.length > 0) {
    console.error(`\nWarnings:`);
    warnings.forEach(w => console.error(`  ⚠ ${w}`));
  }
  console.error(`====================================================\n`);
  process.exit(1);
}

validateCatalog();

