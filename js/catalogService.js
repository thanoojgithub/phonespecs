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

/**
 * Pure Native JavaScript Catalog CRUD & Search/Filter Service
 * Zero external framework dependencies.
 *
 * Provides:
 * - Full CRUD operations (addPhone, updatePhone, deletePhone, getPhoneById)
 * - Validation & Schema Enforcement
 * - High-Performance Search Buffer & Token Indexing
 * - Regex & Multi-Token Search Algorithm with Intelligent Relevance Scoring
 * - Sorting across Model (A-Z/Z-A), Brand (A-Z/Z-A with secondary Model sort), and Release Year
 * - LocalStorage Persistence & Export Serialization
 */

class CatalogService {
  constructor(initialData = { brands: [], phones: [] }) {
    this.brands = [];
    this.phones = [];
    this.initData(initialData);
  }

  /**
   * Initializes brands and phones, applying immutable indexing and sorting
   */
  initData({ brands = [], phones = [] } = {}) {
    // Sort brands alphabetically A-Z
    const sortedBrands = [...brands].sort((a, b) =>
      (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
    );
    this.brands = Object.freeze(sortedBrands);
    this.phones = Object.freeze(this.processPhonesData(phones));
  }

  /**
   * Pre-processes raw phone records:
   * 1. Precomputes cardSpecs for instant card rendering
   * 2. Builds comprehensive inverted search buffers (_searchText & _normSearchText)
   */
  processPhonesData(phoneList = []) {
    return (phoneList || []).map(phone => {
      const ps = phone?.specs?.['Processor & Silicon'] || {};
      const ms = phone?.specs?.['Memory & Storage'] || {};
      const ds = phone?.specs?.['Display System'] || {};

      // Clean Processor/CPU extraction
      let cpu = ps['CPU'] || ps['SoC'] || '—';
      if (cpu.length > 40) {
        cpu = cpu.split('+')[0].trim();
      }

      // GPU extraction
      let gpu = ps['GPU'] || '—';
      if (gpu.length > 28) {
        gpu = gpu.split(' with ')[0].trim();
      }

      // Architecture bit
      const bit = ps['Architecture'] || ps['Bit'] || '64-bit';

      // RAM
      const ram = ms['RAM'] || '—';

      // Storage
      const storage = ms['Internal Storage'] || ms['Storage'] || '—';

      // Display
      let display = ds['Display Size'] || ds['Screen'] || '—';
      if (display.includes('inches')) {
        const parts = display.split('inches');
        display = `${parts[0].trim()}" ${parts[1] ? parts[1].replace('Super Retina XDR OLED', 'OLED').replace('Dynamic LTPO AMOLED 2X', 'AMOLED').trim() : ''}`.trim();
      }

      const cardSpecs = Object.freeze({ cpu, gpu, bit, ram, storage, display });

      // 100% Comprehensive Inverted Search Buffer
      const parts = [];

      // 1. Brand Names & Aliases
      if (phone.brandName) parts.push(phone.brandName, 'brand ' + phone.brandName, 'brand: ' + phone.brandName);
      if (phone.brandId) parts.push(phone.brandId);
      if (phone.origin) parts.push(phone.origin);

      // 2. Model Names, Series, Release Info & Taglines
      if (phone.model) parts.push(phone.model, 'model ' + phone.model, 'model: ' + phone.model);
      if (phone.seriesName) parts.push(phone.seriesName, 'series ' + phone.seriesName, 'series: ' + phone.seriesName);
      if (phone.seriesId) parts.push(phone.seriesId);
      if (phone.tagline) parts.push(phone.tagline);
      if (phone.releaseYear) parts.push(String(phone.releaseYear), 'year ' + phone.releaseYear, 'year: ' + phone.releaseYear, 'release year ' + phone.releaseYear);
      if (phone.releaseDate) parts.push(phone.releaseDate);

      // 3. Banner Items (All Keys & Values)
      parts.push(
        'processor cpu soc chipset silicon',
        'processor: ' + cpu, 'cpu: ' + cpu, 'soc: ' + cpu, cpu,
        'gpu graphics adreno mali immence ray tracing',
        'gpu: ' + gpu, 'graphics: ' + gpu, gpu,
        'architecture bit 64-bit 64bit',
        'architecture: ' + bit, 'bit: ' + bit, bit,
        'memory ram lpddr lpddr5x lpddr5',
        'memory: ' + ram, 'ram: ' + ram, ram,
        'storage rom internal storage ufs nvme flash',
        'storage: ' + storage, 'rom: ' + storage, storage,
        'display screen oled amoled ltpo retina resolution refresh rate',
        'display: ' + display, 'screen: ' + display, display
      );

      // 4. Highlights
      if (Array.isArray(phone.highlights)) {
        phone.highlights.forEach(h => {
          if (h) parts.push(h);
        });
      }

      // 5. Full Spec Details: Categories, Parameters, and Values
      if (phone.specs && typeof phone.specs === 'object') {
        Object.entries(phone.specs).forEach(([catTitle, group]) => {
          if (catTitle) parts.push(catTitle);
          if (group && typeof group === 'object') {
            Object.entries(group).forEach(([specKey, specVal]) => {
              if (specKey) parts.push(specKey);
              if (specVal !== undefined && specVal !== null) {
                const valStr = String(specVal);
                parts.push(valStr, `${specKey}: ${valStr}`, `${specKey} = ${valStr}`);
              }
            });
          }
        });
      }

      // 6. Filter keys
      if (phone.filterKeys && typeof phone.filterKeys === 'object') {
        Object.entries(phone.filterKeys).forEach(([fk, fv]) => {
          parts.push(fk, String(fv));
        });
      }

      const _searchText = parts.join(' ').toLowerCase();
      const _normSearchText = _searchText.replace(/[^a-z0-9]/g, ' ');
      const _compactSearchText = _searchText.replace(/[^a-z0-9]/g, '');

      return Object.freeze({
        ...phone,
        cardSpecs,
        _searchText,
        _normSearchText,
        _compactSearchText
      });
    });
  }

  /**
   * Validate raw phone input object for CRUD operations
   */
  validatePhoneData(phoneData, isEdit = false) {
    if (!phoneData || typeof phoneData !== 'object') {
      throw new Error('Phone data must be a valid object.');
    }

    const model = (phoneData.model || '').trim();
    if (!model) {
      throw new Error('Phone Model Name is required.');
    }

    if (!phoneData.brandId || typeof phoneData.brandId !== 'string') {
      throw new Error('Manufacturer Brand ID is required.');
    }

    const brandExists = this.brands.some(b => b.id === phoneData.brandId);
    if (!brandExists) {
      throw new Error(`Unknown brandId "${phoneData.brandId}".`);
    }

    if (phoneData.seriesId && typeof phoneData.seriesId === 'string' && phoneData.seriesId !== 'all') {
      const brand = this.brands.find(b => b.id === phoneData.brandId);
      if (brand && Array.isArray(brand.series)) {
        const seriesValid = brand.series.some(s => s.id === phoneData.seriesId);
        if (!seriesValid) {
          throw new Error(`Invalid seriesId "${phoneData.seriesId}" for brand "${phoneData.brandId}".`);
        }
      }
    }

    if (phoneData.specs !== undefined) {
      if (typeof phoneData.specs !== 'object' || phoneData.specs === null || Array.isArray(phoneData.specs)) {
        throw new Error('Specifications must be a valid key-value object.');
      }
    }

    if (isEdit) {
      if (!phoneData.id || typeof phoneData.id !== 'string') {
        throw new Error('Phone ID is required for updating.');
      }
    }

    return true;
  }

  /**
   * CREATE: Add a new phone record
   */
  addPhone(rawPhoneInput) {
    this.validatePhoneData(rawPhoneInput, false);

    const model = (rawPhoneInput.model || '').trim();
    const brandObj = this.brands.find(b => b.id === rawPhoneInput.brandId);
    const seriesObj = brandObj?.series?.find(s => s.id === rawPhoneInput.seriesId);

    // Auto-generate unique ID if not explicitly specified
    const generatedId = (rawPhoneInput.id && rawPhoneInput.id.trim())
      ? rawPhoneInput.id.trim()
      : `${rawPhoneInput.brandId}-${model.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now().toString().slice(-4)}`;

    if (this.phones.some(p => p.id === generatedId)) {
      throw new Error(`A phone with ID "${generatedId}" already exists.`);
    }

    const releaseYear = parseInt(rawPhoneInput.releaseYear, 10) || new Date().getFullYear();
    const releaseDate = (rawPhoneInput.releaseDate || '').trim() || `${releaseYear}-01`;

    const newPhone = {
      id: generatedId,
      brandId: rawPhoneInput.brandId,
      brandName: brandObj ? brandObj.name : rawPhoneInput.brandId,
      seriesId: rawPhoneInput.seriesId || '',
      seriesName: seriesObj ? seriesObj.name : (rawPhoneInput.seriesId || ''),
      model: model,
      tagline: (rawPhoneInput.tagline || '').trim(),
      releaseDate: releaseDate,
      releaseYear: releaseYear,
      specs: rawPhoneInput.specs || {},
      highlights: Array.isArray(rawPhoneInput.highlights) ? rawPhoneInput.highlights.filter(Boolean) : []
    };

    const processed = this.processPhonesData([newPhone])[0];
    this.phones = Object.freeze([processed, ...this.phones]);
    return processed;
  }

  /**
   * READ: Retrieve a single phone by ID
   */
  getPhoneById(phoneId) {
    if (!phoneId) return null;
    return this.phones.find(p => p.id === phoneId) || null;
  }

  /**
   * UPDATE: Update an existing phone record
   */
  updatePhone(rawPhoneInput) {
    this.validatePhoneData(rawPhoneInput, true);

    const targetId = rawPhoneInput.id.trim();
    const existingIndex = this.phones.findIndex(p => p.id === targetId);

    if (existingIndex === -1) {
      throw new Error(`Cannot update: Phone with ID "${targetId}" not found.`);
    }

    const model = (rawPhoneInput.model || '').trim();
    const brandObj = this.brands.find(b => b.id === rawPhoneInput.brandId);
    const seriesObj = brandObj?.series?.find(s => s.id === rawPhoneInput.seriesId);
    const releaseYear = parseInt(rawPhoneInput.releaseYear, 10) || new Date().getFullYear();
    const releaseDate = (rawPhoneInput.releaseDate || '').trim() || `${releaseYear}-01`;

    const updatedPhone = {
      id: targetId,
      brandId: rawPhoneInput.brandId,
      brandName: brandObj ? brandObj.name : rawPhoneInput.brandId,
      seriesId: rawPhoneInput.seriesId || '',
      seriesName: seriesObj ? seriesObj.name : (rawPhoneInput.seriesId || ''),
      model: model,
      tagline: (rawPhoneInput.tagline || '').trim(),
      releaseDate: releaseDate,
      releaseYear: releaseYear,
      specs: rawPhoneInput.specs || {},
      highlights: Array.isArray(rawPhoneInput.highlights) ? rawPhoneInput.highlights.filter(Boolean) : []
    };

    const processed = this.processPhonesData([updatedPhone])[0];
    const newPhoneList = [...this.phones];
    newPhoneList[existingIndex] = processed;
    this.phones = Object.freeze(newPhoneList);
    return processed;
  }

  /**
   * RESTORE: Restore an exact phone snapshot record (for undo/redo)
   */
  setPhone(phoneRecord) {
    if (!phoneRecord || !phoneRecord.id) {
      throw new Error('Valid phone record with ID is required to restore.');
    }
    const processed = this.processPhonesData([phoneRecord])[0];
    const existingIndex = this.phones.findIndex(p => p.id === phoneRecord.id);
    const newPhoneList = [...this.phones];
    if (existingIndex !== -1) {
      newPhoneList[existingIndex] = processed;
    } else {
      newPhoneList.unshift(processed);
    }
    this.phones = Object.freeze(newPhoneList);
    return processed;
  }

  /**
   * DELETE: Remove a phone by ID
   */
  deletePhone(phoneId) {
    if (!phoneId) {
      throw new Error('Phone ID is required for deletion.');
    }

    const existing = this.getPhoneById(phoneId);
    if (!existing) {
      throw new Error(`Cannot delete: Phone with ID "${phoneId}" not found.`);
    }

    this.phones = Object.freeze(this.phones.filter(p => p.id !== phoneId));
    return existing;
  }

  /**
   * SEARCH & FILTER ENGINE:
   * Handles brand selection, series sub-filtering, search queries (with regex and tokens),
   * relevance scoring, and sorting.
   */
  filterAndSortPhones({
    brandId = 'all',
    seriesId = 'all',
    searchQuery = '',
    catalogSortBy = 'name-asc',
    searchSortBy = 'name-asc'
  } = {}) {
    const rawQuery = (searchQuery || '').trim();
    const allPhones = this.phones;

    // Normal Catalog View (No search query active)
    if (!rawQuery) {
      const list = [];
      for (let i = 0; i < allPhones.length; i++) {
        const p = allPhones[i];
        if (brandId !== 'all' && p.brandId !== brandId) continue;
        if (seriesId !== 'all' && p.seriesId !== seriesId) continue;
        list.push(p);
      }
      return this.sortPhoneList(list, catalogSortBy);
    }

    // Active Search Query View (Cross-catalog search)
    let fullRegex = null;
    const slashMatch = rawQuery.match(/^\/(.+)\/([a-z]*)$/);
    if (slashMatch) {
      try {
        const flags = slashMatch[2] ? (slashMatch[2].includes('i') ? slashMatch[2] : slashMatch[2] + 'i') : 'i';
        fullRegex = new RegExp(slashMatch[1], flags);
      } catch (e) {
        fullRegex = null;
      }
    } else if (/[|*+?()\[\]\\^$]/.test(rawQuery)) {
      try {
        fullRegex = new RegExp(rawQuery, 'i');
      } catch (e) {
        fullRegex = null;
      }
    }

    const tokens = rawQuery.split(/\s+/).filter(Boolean);
    const tokenMatchers = tokens.map(token => {
      const lower = token.toLowerCase();
      const clean = lower.replace(/[^a-z0-9]/g, '');
      return { lower, clean };
    });

    const matchedPhones = [];
    for (let i = 0; i < allPhones.length; i++) {
      const phone = allPhones[i];
      const searchStr = phone._searchText || '';
      const normStr = phone._normSearchText || '';
      const compactStr = phone._compactSearchText || '';

      // Strategy A: Whole-query RegEx matches (tested against search buffer, or model name if anchored)
      if (fullRegex) {
        if (fullRegex.test(searchStr) || fullRegex.test(phone.model || '')) {
          matchedPhones.push(phone);
          continue;
        }
      }

      // Strategy B: Multi-token match across literal, normalized, and compact representations
      let allTokensMatch = true;
      for (let j = 0; j < tokenMatchers.length; j++) {
        const tm = tokenMatchers[j];
        let tokenPass = false;

        if (searchStr.includes(tm.lower)) {
          tokenPass = true;
        } else if (tm.clean && normStr.includes(tm.clean)) {
          tokenPass = true;
        } else if (tm.clean && compactStr.includes(tm.clean)) {
          tokenPass = true;
        }

        if (!tokenPass) {
          allTokensMatch = false;
          break;
        }
      }

      if (allTokensMatch) {
        matchedPhones.push(phone);
      }
    }

    // Relevance scoring
    const qLower = rawQuery.toLowerCase();
    const getScore = (p) => {
      const mLower = (p.model || '').toLowerCase();
      const bLower = (p.brandName || '').toLowerCase();
      if (mLower === qLower) return 100;
      if (mLower.startsWith(qLower)) return 90;
      if (mLower.includes(qLower)) return 80;
      if (bLower === qLower) return 70;
      if (bLower.startsWith(qLower)) return 60;
      if (bLower.includes(qLower)) return 50;
      return 10;
    };

    return matchedPhones.sort((a, b) => {
      const scoreDiff = getScore(b) - getScore(a);
      if (scoreDiff !== 0) return scoreDiff;
      return this.comparePhonesBySort(a, b, searchSortBy);
    });
  }

  /**
   * Sort comparator supporting:
   * - name-asc, name-desc (Model A-Z, Z-A)
   * - brand-asc, brand-desc (Brand A-Z, Z-A with secondary Model A-Z / Z-A)
   * - year-desc, year-asc (Release Year & Date)
   */
  comparePhonesBySort(a, b, sortBy) {
    if (sortBy === 'name-asc') {
      return (a.model || '').localeCompare(b.model || '', undefined, { numeric: true, sensitivity: 'base' });
    }
    if (sortBy === 'name-desc') {
      return (b.model || '').localeCompare(a.model || '', undefined, { numeric: true, sensitivity: 'base' });
    }
    if (sortBy === 'brand-asc') {
      const brandComp = (a.brandName || '').localeCompare(b.brandName || '', undefined, { numeric: true, sensitivity: 'base' });
      return brandComp !== 0 ? brandComp : (a.model || '').localeCompare(b.model || '', undefined, { numeric: true, sensitivity: 'base' });
    }
    if (sortBy === 'brand-desc') {
      const brandComp = (b.brandName || '').localeCompare(a.brandName || '', undefined, { numeric: true, sensitivity: 'base' });
      return brandComp !== 0 ? brandComp : (b.model || '').localeCompare(a.model || '', undefined, { numeric: true, sensitivity: 'base' });
    }
    if (sortBy === 'year-desc') {
      const yearDiff = (b.releaseYear || 0) - (a.releaseYear || 0);
      return yearDiff !== 0 ? yearDiff : (b.releaseDate || '').localeCompare(a.releaseDate || '');
    }
    if (sortBy === 'year-asc') {
      const yearDiff = (a.releaseYear || 0) - (b.releaseYear || 0);
      return yearDiff !== 0 ? yearDiff : (a.releaseDate || '').localeCompare(b.releaseDate || '');
    }
    return 0;
  }

  sortPhoneList(list, sortBy) {
    const copy = [...list];
    copy.sort((a, b) => this.comparePhonesBySort(a, b, sortBy));
    return copy;
  }

  /**
   * Generate pristine payload for catalog.json export or persistence
   * Strips ephemeral cached fields (_searchText, _normSearchText, cardSpecs)
   */
  getCleanExportPayload() {
    const cleanPhones = (this.phones || []).map(p => {
      const { _searchText, _normSearchText, _compactSearchText, cardSpecs, ...rest } = p;
      return rest;
    });

    return {
      brands: this.brands || [],
      phones: cleanPhones
    };
  }

  /**
   * Active Series List for a given brandId (filters out series that have 0 models in catalog)
   */
  getActiveSeriesList(brandId) {
    if (!brandId || brandId === 'all') return [];
    const brand = this.brands.find(b => b.id === brandId);
    if (!brand || !Array.isArray(brand.series)) return [];

    const currentBrandPhones = this.phones.filter(p => p.brandId === brandId);
    return brand.series.filter(s => currentBrandPhones.some(p => p.seriesId === s.id));
  }

  /**
   * ECMAScript 2026 Map.prototype.getOrInsert / Map grouping capability
   * Returns a Map of brandId -> phone models array
   */
  getBrandDistributionMap() {
    const map = new Map();
    for (const phone of this.phones) {
      if (typeof map.getOrInsert === 'function') {
        const list = map.getOrInsert(phone.brandId, () => []);
        list.push(phone.model);
      } else {
        if (!map.has(phone.brandId)) {
          map.set(phone.brandId, []);
        }
        map.get(phone.brandId).push(phone.model);
      }
    }
    return map;
  }

  /**
   * ECMAScript 2026 Math.sumPrecise powered summation
   * Computes precise total or average release year / numerical metrics
   */
  calculateAverageReleaseYear() {
    if (!this.phones || this.phones.length === 0) return 0;
    const years = this.phones.map(p => Number(p.releaseYear) || 2024);
    const sum = (typeof Math.sumPrecise === 'function')
      ? Math.sumPrecise(years)
      : years.reduce((acc, y) => acc + y, 0);
    return Math.round(sum / years.length);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CatalogService };
}
