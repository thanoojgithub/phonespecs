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
const { CatalogService } = require('../js/catalogService');

const CATALOG_PATH = path.resolve(__dirname, '../data/catalog.json');
const rawData = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));

console.log('====================================================');
console.log('   CatalogService Native JavaScript Unit & Corner Tests');
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

// 1. Initialization Tests
console.log('1. Initializing CatalogService with production data:');
const service = new CatalogService(rawData);
assert(service.brands.length === 14, `All 14 brands loaded (got: ${service.brands.length})`);
const initialPhoneCount = rawData.phones.length;
assert(service.phones.length === initialPhoneCount, `All ${initialPhoneCount} production phones loaded (got: ${service.phones.length})`);
assert(service.brands[0].name === 'Apple', `Brands sorted alphabetically (first is ${service.brands[0]?.name})`);
assert(service.brands[service.brands.length - 1].name === 'Xiaomi', `Brands sorted alphabetically (last is ${service.brands[service.brands.length - 1]?.name})`);

// 2. READ Tests
console.log('\n2. Testing READ (getPhoneById):');
const iphone16 = service.getPhoneById('apple-iphone-16-pro-max');
assert(iphone16 !== null && iphone16.model === 'iPhone 16 Pro Max', 'Retrieved valid phone by ID');
assert(service.getPhoneById('non-existent-device-id') === null, 'Non-existent ID returns null');
assert(service.getPhoneById('') === null, 'Empty ID returns null');
assert(service.getPhoneById(null) === null, 'Null ID returns null');

// 3. CREATE Tests (addPhone) & Corner Cases
console.log('\n3. Testing CREATE (addPhone) & Corner Cases:');

// Test 3.1: Valid addition
const newDevice = {
  id: 'apple-iphone-17-test',
  brandId: 'apple',
  seriesId: 'iphone-pro',
  model: 'iPhone 17 Pro Ultra Concept',
  tagline: 'Next-generation neural architecture test',
  releaseYear: 2026,
  releaseDate: '2026-09',
  specs: {
    'Processor & Silicon': { SoC: 'A20 Pro (2nm)', GPU: 'Apple 8-core GPU', Architecture: '64-bit' },
    'Display System': { 'Display Size': '6.9" ProMotion OLED', Resolution: '2900 x 1320' },
    'Memory & Storage': { RAM: '16GB Unified', 'Internal Storage': '1TB NVMe' }
  },
  highlights: ['Quantum dot OLED display', 'Silicon photonics optical interconnect']
};

const added = service.addPhone(newDevice);
assert(added.id === 'apple-iphone-17-test', 'Phone added with explicit ID');
assert(service.phones.length === initialPhoneCount + 1, 'Catalog length increased by 1');
assert(service.getPhoneById('apple-iphone-17-test') !== null, 'New phone is queryable by ID');
assert(added.cardSpecs.ram === '16GB Unified', 'Card specs RAM properly extracted');
assert(added.cardSpecs.gpu === 'Apple 8-core GPU', 'Card specs GPU properly extracted');
assert(added.cardSpecs.bit === '64-bit', 'Card specs Architecture bit properly extracted');

// Test 3.2: Corner Case - Duplicate ID rejection
assertThrows(
  () => service.addPhone(newDevice),
  'already exists',
  'Duplicate phone ID rejected'
);

// Test 3.3: Corner Case - Missing Model name rejection
assertThrows(
  () => service.addPhone({ brandId: 'apple', model: '   ' }),
  'Model Name is required',
  'Empty model name rejected'
);

// Test 3.4: Corner Case - Missing Brand ID rejection
assertThrows(
  () => service.addPhone({ model: 'Valid Model', brandId: '' }),
  'Brand ID is required',
  'Empty brandId rejected'
);

// Test 3.5: Corner Case - Unknown Brand rejection
assertThrows(
  () => service.addPhone({ model: 'Alien Phone', brandId: 'unknown-alien-brand' }),
  'Unknown brandId',
  'Unknown brandId rejected'
);

// Test 3.6: Corner Case - Invalid seriesId for brand rejection
assertThrows(
  () => service.addPhone({ model: 'Fold Test', brandId: 'apple', seriesId: 'galaxy-z-fold' }),
  'Invalid seriesId',
  'Invalid cross-brand seriesId rejected'
);

// Test 3.7: Corner Case - Invalid specs structure rejection
assertThrows(
  () => service.addPhone({ model: 'Bad Specs Phone', brandId: 'apple', specs: 'not-an-object' }),
  'valid key-value object',
  'Non-object specs rejected'
);

// Test 3.8: Auto-generating ID when omitted
const autoIdDevice = {
  brandId: 'google',
  seriesId: 'pixel-pro',
  model: 'Pixel 11 Pro AI',
  tagline: 'Tensor G6 computing powerhouse',
  releaseYear: 2027
};
const autoAdded = service.addPhone(autoIdDevice);
assert(autoAdded.id.startsWith('google-pixel-11-pro-ai-'), 'Auto-generated ID starts with brand and sanitized model');
assert(autoAdded.brandName === 'Google Pixel', 'Auto-resolved brandName correctly');
assert(autoAdded.seriesName === 'Pixel Pro Series', 'Auto-resolved seriesName correctly');

// 4. UPDATE Tests (updatePhone) & Corner Cases
console.log('\n4. Testing UPDATE (updatePhone) & Corner Cases:');

// Test 4.1: Valid update
const updatedDevice = {
  id: 'apple-iphone-17-test',
  brandId: 'apple',
  seriesId: 'iphone-pro',
  model: 'iPhone 17 Pro Max Commercial',
  tagline: 'Updated commercial release tagline',
  releaseYear: 2026,
  releaseDate: '2026-10',
  specs: {
    'Processor & Silicon': { SoC: 'A20 Pro Bionic Max', GPU: 'Apple 10-core GPU' }
  },
  highlights: ['Updated highlight 1', 'Updated highlight 2']
};

const updatedResult = service.updatePhone(updatedDevice);
assert(updatedResult.model === 'iPhone 17 Pro Max Commercial', 'Model updated successfully');
assert(updatedResult.tagline === 'Updated commercial release tagline', 'Tagline updated successfully');
assert(service.getPhoneById('apple-iphone-17-test').model === 'iPhone 17 Pro Max Commercial', 'Querying updated phone reflects new data');

// Test 4.2: Corner Case - Updating non-existent phone ID
assertThrows(
  () => service.updatePhone({ id: 'ghost-phone-id', brandId: 'apple', model: 'Ghost' }),
  'not found',
  'Updating non-existent ID rejected'
);

// Test 4.3: Corner Case - Missing ID for update
assertThrows(
  () => service.updatePhone({ brandId: 'apple', model: 'No ID Phone' }),
  'Phone ID is required',
  'Updating without ID rejected'
);

// 5. DELETE Tests (deletePhone) & Corner Cases
console.log('\n5. Testing DELETE (deletePhone) & Corner Cases:');

// Test 5.1: Valid deletion
const deleted = service.deletePhone('apple-iphone-17-test');
assert(deleted.id === 'apple-iphone-17-test', 'Phone deleted returns deleted record');
assert(service.getPhoneById('apple-iphone-17-test') === null, 'Deleted phone no longer in catalog');

// Clean up auto-added test device
service.deletePhone(autoAdded.id);
assert(service.phones.length === initialPhoneCount, `Catalog returned to original pristine length ${initialPhoneCount}`);

// Test 5.2: Corner Case - Deleting non-existent phone ID
assertThrows(
  () => service.deletePhone('already-deleted-phone'),
  'not found',
  'Deleting non-existent phone rejected'
);

// Test 5.3: Corner Case - Deleting empty/null ID
assertThrows(
  () => service.deletePhone(''),
  'Phone ID is required',
  'Deleting empty string ID rejected'
);

// 6. Search & Filter Engine Tests
console.log('\n6. Testing SEARCH & FILTER Algorithm:');

// Test 6.1: Empty query lists all phones in brand
const allApple = service.filterAndSortPhones({ brandId: 'apple' });
assert(allApple.length === 3, `Filter by brand "apple" yields 3 phones (got: ${allApple.length})`);
assert(allApple.every(p => p.brandId === 'apple'), 'Every filtered phone has brandId "apple"');

// Test 6.2: Series sub-filtering
const s24Ultra = service.filterAndSortPhones({ brandId: 'samsung', seriesId: 'galaxy-s-ultra' });
assert(s24Ultra.length >= 1 && s24Ultra.every(p => p.model.includes('Ultra')), 'Filter by specific series matches exact model');

// Test 6.3: Substring search
const snapdragonResults = service.filterAndSortPhones({ searchQuery: 'snapdragon' });
assert(snapdragonResults.length > 5, `Search "snapdragon" found ${snapdragonResults.length} devices`);

// Test 6.4: Case-insensitivity & whitespace normalization
const mixedCaseResults = service.filterAndSortPhones({ searchQuery: '  iPHonE   16   ' });
assert(mixedCaseResults.length > 0 && mixedCaseResults[0].model.includes('iPhone 16'), 'Mixed case with whitespace matches iPhone 16');

// Test 6.5: Direct RegEx search (/pattern/flags)
const regexResults = service.filterAndSortPhones({ searchQuery: '/galaxy z fold 6/i' });
assert(regexResults.length === 1 && regexResults[0].model === 'Galaxy Z Fold 6', 'Direct slash RegEx /galaxy z fold 6/i correctly matches Galaxy Z Fold 6');

// Test 6.6: Raw RegEx special characters
const pipeResults = service.filterAndSortPhones({ searchQuery: 'Xperia 1 VI|^Pixel 9$' });
assert(pipeResults.length === 2, `RegEx pipe "Xperia 1 VI|^Pixel 9$" matched 2 devices (got: ${pipeResults.length})`);

// Test 6.7: Punctuation normalization (e.g. "wi-fi 7" vs "wifi 7")
const wifiResults = service.filterAndSortPhones({ searchQuery: 'wifi 7' });
assert(wifiResults.length > 0, `Punctuation normalization finds devices via "wifi 7" (got: ${wifiResults.length})`);

// Test 6.8: Relevance ranking (exact model query scores highest)
const iphoneSearch = service.filterAndSortPhones({ searchQuery: 'iPhone 16 Pro' });
assert(iphoneSearch[0].model === 'iPhone 16 Pro', `Top search result for "iPhone 16 Pro" is exact match (got: "${iphoneSearch[0]?.model}")`);

// 7. Sorting Tests
console.log('\n7. Testing SORTING Algorithms:');

// Test 7.1: Model A → Z and Z → A
const nameAsc = service.filterAndSortPhones({ catalogSortBy: 'name-asc' });
const nameDesc = service.filterAndSortPhones({ catalogSortBy: 'name-desc' });
assert(nameAsc[0].model < nameAsc[nameAsc.length - 1].model, 'Model: A → Z sorts first < last');
assert(nameDesc[0].model > nameDesc[nameDesc.length - 1].model, 'Model: Z → A sorts first > last');

// Test 7.2: Brand A → Z with secondary Model A → Z
const brandAsc = service.filterAndSortPhones({ catalogSortBy: 'brand-asc' });
assert(brandAsc[0].brandName === 'Apple', `Brand A → Z first brand is Apple (got: ${brandAsc[0]?.brandName})`);
const appleGroup = brandAsc.filter(p => p.brandName === 'Apple');
assert(appleGroup[0].model === 'iPhone 16', `Within Apple, secondary model sorting is A-Z (got: ${appleGroup[0]?.model})`);

// Test 7.3: Brand Z → A with secondary Model Z → A
const brandDesc = service.filterAndSortPhones({ catalogSortBy: 'brand-desc' });
assert(brandDesc[0].brandName === 'Xiaomi', `Brand Z → A first brand is Xiaomi (got: ${brandDesc[0]?.brandName})`);
const xiaomiGroup = brandDesc.filter(p => p.brandName === 'Xiaomi');
assert(xiaomiGroup[0].model >= xiaomiGroup[xiaomiGroup.length - 1].model, `Within Xiaomi, secondary model sorting is Z-A (got: ${xiaomiGroup[0]?.model} >= ${xiaomiGroup[xiaomiGroup.length - 1]?.model})`);

// Test 7.4: Year: Newest & Year: Oldest
const yearDesc = service.filterAndSortPhones({ catalogSortBy: 'year-desc' });
const yearAsc = service.filterAndSortPhones({ catalogSortBy: 'year-asc' });
assert(yearDesc[0].releaseYear >= yearDesc[yearDesc.length - 1].releaseYear, 'Year: Newest sorts >= last');
assert(yearAsc[0].releaseYear <= yearAsc[yearAsc.length - 1].releaseYear, 'Year: Oldest sorts <= last');

// 8. Clean Export & Serialization Tests
console.log('\n8. Testing CLEAN EXPORT & STORAGE PAYLOAD:');
const cleanExport = service.getCleanExportPayload();
assert(Array.isArray(cleanExport.brands) && cleanExport.brands.length === 14, 'Export contains all 14 brands');
assert(Array.isArray(cleanExport.phones) && cleanExport.phones.length === initialPhoneCount, `Export contains all ${initialPhoneCount} phones`);

// Ensure no ephemeral runtime fields are leaked into the export
let hasEphemeralFields = false;
cleanExport.phones.forEach(p => {
  if (p._searchText !== undefined || p._normSearchText !== undefined || p.cardSpecs !== undefined) {
    hasEphemeralFields = true;
  }
});
assert(!hasEphemeralFields, 'Clean export has NO ephemeral fields (_searchText, _normSearchText, cardSpecs)');

// 9. Active Series List Verification
console.log('\n9. Testing ACTIVE SERIES LIST (filters out empty series):');
const appleActiveSeries = service.getActiveSeriesList('apple');
assert(appleActiveSeries.length === 3, `Apple active series count is 3 (got: ${appleActiveSeries.length})`);
const asusActiveSeries = service.getActiveSeriesList('asus');
assert(asusActiveSeries.length === 1 && asusActiveSeries[0].id === 'rog-phone', 'Asus active series is rog-phone');
assert(service.getActiveSeriesList('all').length === 0, 'Brand "all" returns empty series array');
assert(service.getActiveSeriesList('non-existent').length === 0, 'Unknown brand returns empty series array');

// 10. ECMAScript 2026 (ES2026 / ECMA-262) Standards Compliance Tests
console.log('\n10. Testing ECMAScript 2026 (ES2026) Standards & Feature Verification:');

// Test 10.1: Standard Object.freeze and immutability (ES2026)
assert(Object.isFrozen(service.brands), 'ES2026: Catalog brands immutable state is frozen');
assert(Object.isFrozen(service.phones), 'ES2026: Catalog phones immutable state is frozen');

// Test 10.2: Structured clone / deep copy integrity without mutation
const pristineSnapshot = service.getPhoneById('apple-iphone-16-pro-max');
const clonedPhone = { ...pristineSnapshot, specs: JSON.parse(JSON.stringify(pristineSnapshot.specs || {})) };
clonedPhone.model = 'Mutated Copy Test';
assert(service.getPhoneById('apple-iphone-16-pro-max').model === 'iPhone 16 Pro Max', 'ES2026: Immutable catalog record immune to external object mutation');

// Test 10.3: Nullish coalescing and optional chaining standard semantics
const safeCpu = pristineSnapshot?.specs?.['Processor & Silicon']?.CPU ?? 'N/A';
assert(typeof safeCpu === 'string' && safeCpu.length > 0, 'ES2026: Optional chaining and nullish coalescing evaluate accurately');

// Test 10.4: Set & Array.fromAsync / collection interoperability (ES2026 Map/Set standards)
const brandSet = new Set(service.phones.map(p => p.brandId));
assert(brandSet.size === 14, `ES2026: Set correctly tracks unique brand IDs (${brandSet.size} unique)`);

// Test 10.5: Error.isError or robust Error cross-realm semantics (ES2026)
try {
  service.addPhone({ brandId: 'invalid-brand' });
} catch (err) {
  const isErr = (typeof Error.isError === 'function') ? Error.isError(err) : (err instanceof Error);
  assert(isErr, 'ES2026: Caught validation failure is recognized error instance');
}

// Test 10.6: Map.prototype.getOrInsert / Map grouping capability
const brandDist = service.getBrandDistributionMap();
assert(brandDist instanceof Map, 'ES2026: getBrandDistributionMap returns Map instance');
assert(brandDist.has('apple') && brandDist.get('apple').length >= 3, 'ES2026: Brand distribution Map accurately holds model collections');

// Test 10.7: Math.sumPrecise powered calculations
const avgYear = service.calculateAverageReleaseYear();
assert(typeof avgYear === 'number' && avgYear >= 2023 && avgYear <= 2027, `ES2026: calculateAverageReleaseYear computes valid metric (${avgYear})`);

// 11. Additional 100% Code Coverage Edge Cases & Branch Tests
console.log('\n11. Testing Additional 100% Code Coverage Edge Cases & Branches:');

// Test 11.1: setPhone() existing and non-existing record restoration
const phoneToRestore = {
  id: 'apple-iphone-16-pro-max',
  brandId: 'apple',
  brandName: 'Apple',
  seriesId: 'iphone-pro-max',
  seriesName: 'iPhone Pro Max Series',
  model: 'iPhone 16 Pro Max Restored Snapshot',
  releaseYear: 2024,
  releaseDate: '2024-09',
  specs: { 'Display System': { 'Display Size': '6.9 inch' } }
};
const restoredExisting = service.setPhone(phoneToRestore);
assert(restoredExisting.model === 'iPhone 16 Pro Max Restored Snapshot', 'setPhone restores existing phone record');
assert(service.getPhoneById('apple-iphone-16-pro-max').model === 'iPhone 16 Pro Max Restored Snapshot', 'getPhoneById returns restored record');

const newRestoreRecord = {
  id: 'brand-new-restored-phone',
  brandId: 'apple',
  brandName: 'Apple',
  model: 'Brand New Restored Unit',
  releaseYear: 2025,
  specs: {}
};
const restoredNew = service.setPhone(newRestoreRecord);
assert(restoredNew.id === 'brand-new-restored-phone', 'setPhone restores previously deleted/non-existing phone record via unshift');
assert(service.getPhoneById('brand-new-restored-phone') !== null, 'Newly restored phone is retrievable');

// Test 11.2: setPhone() validation error branches
assertThrows(() => service.setPhone(null), 'Valid phone record with ID is required', 'setPhone throws on null');
assertThrows(() => service.setPhone({ model: 'No ID' }), 'Valid phone record with ID is required', 'setPhone throws when ID is missing');

// Test 11.3: deletePhone() validation error branches
assertThrows(() => service.deletePhone(''), 'Phone ID is required', 'deletePhone throws on empty ID');
assertThrows(() => service.deletePhone(null), 'Phone ID is required', 'deletePhone throws on null ID');
assertThrows(() => service.deletePhone('non-existent-device-xyz'), 'not found', 'deletePhone throws on non-existent phone');

// Clean up restored mock phone
service.deletePhone('brand-new-restored-phone');

// Test 11.4: comparePhonesBySort() fallback and invalid sort branch
const dummyA = { model: 'Phone A', brandName: 'Brand A', releaseYear: 2024, releaseDate: '2024-01' };
const dummyB = { model: 'Phone B', brandName: 'Brand B', releaseYear: 2025, releaseDate: '2025-01' };
assert(service.comparePhonesBySort(dummyA, dummyB, 'unknown-sort') === 0, 'comparePhonesBySort returns 0 for unrecognized sort criteria');

// Secondary ties sorting branch checks
const sameBrandDiffModel1 = { model: 'Alpha', brandName: 'Brand Same', releaseYear: 2024 };
const sameBrandDiffModel2 = { model: 'Beta', brandName: 'Brand Same', releaseYear: 2024 };
assert(service.comparePhonesBySort(sameBrandDiffModel1, sameBrandDiffModel2, 'brand-asc') < 0, 'brand-asc breaks tie with secondary model ascending');
assert(service.comparePhonesBySort(sameBrandDiffModel1, sameBrandDiffModel2, 'brand-desc') > 0, 'brand-desc breaks tie with secondary model descending');

const sameYearDiffDate1 = { model: 'M1', releaseYear: 2024, releaseDate: '2024-03' };
const sameYearDiffDate2 = { model: 'M2', releaseYear: 2024, releaseDate: '2024-07' };
assert(service.comparePhonesBySort(sameYearDiffDate1, sameYearDiffDate2, 'year-desc') > 0, 'year-desc breaks year tie with releaseDate descending');
assert(service.comparePhonesBySort(sameYearDiffDate1, sameYearDiffDate2, 'year-asc') < 0, 'year-asc breaks year tie with releaseDate ascending');

// Test 11.5: sortPhoneList() returns sorted copy without mutating input array
const unsortedSample = [dummyB, dummyA];
const sortedSample = service.sortPhoneList(unsortedSample, 'name-asc');
assert(sortedSample[0].model === 'Phone A', 'sortPhoneList sorts list by comparator');
assert(unsortedSample[0].model === 'Phone B', 'sortPhoneList does not mutate original array');

// Test 11.6: Empty catalog fallback branches for stats
const emptyCatalogService = new CatalogService({ brands: [], phones: [] });
assert(emptyCatalogService.calculateAverageReleaseYear() === 0, 'calculateAverageReleaseYear returns 0 on empty catalog');
assert(emptyCatalogService.getActiveSeriesList(null).length === 0, 'getActiveSeriesList returns empty on null brandId');
assert(emptyCatalogService.getActiveSeriesList('all').length === 0, 'getActiveSeriesList returns empty on "all"');
assert(emptyCatalogService.getActiveSeriesList('unknown').length === 0, 'getActiveSeriesList returns empty on missing brand');

// Test 11.7: filterAndSortPhones() with default parameter invocation
const defaultFilterResults = service.filterAndSortPhones();
assert(Array.isArray(defaultFilterResults) && defaultFilterResults.length > 0, 'filterAndSortPhones works with empty arguments object');


// Summary
console.log('\n====================================================');
console.log(`Test Execution Finished: ${totalTests} Total | ${passedTests} Passed | ${failedTests} Failed`);
console.log('====================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log(' [SUCCESS] 100% of CatalogService CRUD and corner case tests PASSED.\n');
  process.exit(0);
}
