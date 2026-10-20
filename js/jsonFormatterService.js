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
 * Robust, High-Performance Native JavaScript JSON Formatter & Sanitizer
 *
 * FEATURES & CAPABILITIES:
 * 1. Zero External Dependencies: Pure native JavaScript.
 * 2. Self-Healing & Lenient Parsing:
 *    - Repairs unquoted / single-quoted object keys (`{ name: 'val' }` -> `{"name": "val"}`)
 *    - Cleans dangling / trailing commas (`{ "a": 1, }` -> `{ "a": 1 }`)
 *    - Converts single quotes to standard JSON double quotes (`'text'` -> `"text"`)
 *    - Strips JavaScript-style comments (`// ...` and `/* ... * /`)
 * 3. High-Performance Tokenizer & Formatter:
 *    - Performs fast single-pass stringification with customizable indentation
 *    - Optional alphabetical key sorting for clean canonical presentation
 *    - Sub-millisecond formatting time on typical mobile specifications objects
 * 4. Precise Diagnostics:
 *    - If unrecoverable syntax errors exist, pinpoints exact line, column, and context snippet
 * 5. Compression / Minification:
 *    - One-click minification without whitespace overhead
 */

class JsonFormatterService {
  /**
   * Sanitizes lenient JavaScript object literal notation into valid JSON syntax
   * @param {string} rawText
   * @returns {string} Clean valid JSON candidate
   */
  static sanitizeRelaxedJson(rawText) {
    if (!rawText || typeof rawText !== 'string') return '';
    let text = rawText.trim();

    // 1. First Pass: State machine that escapes bad control characters (0x00-0x1F, unescaped newlines/tabs)
    // inside strings, while converting single-quoted strings to double-quoted strings.
    let pass1 = '';
    let inString = false;
    let quoteType = '';
    let isEscaped = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const code = text.charCodeAt(i);

      if (inString) {
        if (isEscaped) {
          pass1 += char;
          isEscaped = false;
        } else if (char === '\\') {
          pass1 += char;
          isEscaped = true;
        } else if (char === quoteType) {
          pass1 += '"'; // always close with double quote
          inString = false;
        } else if (char === '"' && quoteType === "'") {
          pass1 += '\\"'; // escape literal double quotes found within single-quoted string
        } else if (char === '\n') {
          pass1 += '\\n';
        } else if (char === '\r') {
          pass1 += '\\r';
        } else if (char === '\t') {
          pass1 += '\\t';
        } else if (code < 32) {
          // ASCII control codes 0-31
          pass1 += '\\u' + code.toString(16).padStart(4, '0');
        } else {
          pass1 += char;
        }
        continue;
      }

      // Check comments outside of strings
      const nextChar = i + 1 < text.length ? text[i + 1] : '';
      if (char === '/' && nextChar === '/') {
        // Skip until newline
        i += 2;
        while (i < text.length && text[i] !== '\n' && text[i] !== '\r') i++;
        if (i < text.length) pass1 += text[i];
        continue;
      }
      if (char === '/' && nextChar === '*') {
        // Skip until */
        i += 2;
        while (i + 1 < text.length && !(text[i] === '*' && text[i + 1] === '/')) i++;
        i++; // skip /
        continue;
      }

      if (char === '"' || char === "'") {
        inString = true;
        quoteType = char;
        pass1 += '"'; // always open with double quote
        continue;
      }

      pass1 += char;
    }

    text = pass1;

    // 2. Fix unquoted property keys: e.g. { processor: "Snapdragon" } -> { "processor": "Snapdragon" }
    // Match unquoted identifiers preceding a colon
    text = text.replace(/([{,]\s*)([a-zA-Z0-9_$-]+)(\s*:)/g, '$1"$2"$3');

    // 3. Strip trailing commas before closing braces/brackets: e.g. { "a": 1, } -> { "a": 1 }
    text = text.replace(/,\s*([}\]])/g, '$1');

    return text;
  }

  /**
   * Sorts object keys recursively for canonical, organized readability
   */
  static sortObjectKeys(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
      return obj.map(item => JsonFormatterService.sortObjectKeys(item));
    }
    const sorted = {};
    const keys = Object.keys(obj).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    for (const key of keys) {
      sorted[key] = JsonFormatterService.sortObjectKeys(obj[key]);
    }
    return sorted;
  }

  /**
   * High-performance format execution:
   * 1. Attempts direct JSON.parse for maximum native C++ engine speed (sub-millisecond)
   * 2. If syntax errors occur, runs self-healing lenient pre-processor and retries
   * 3. Formats with clean 2-space indentation and sorted sections
   *
   * @param {string} rawInput
   * @param {Object} options
   * @returns {{ success: boolean, formatted?: string, parsed?: any, error?: string, line?: number, col?: number }}
   */
  static format(rawInput, { indent = 2, sortKeys = false } = {}) {
    if (!rawInput || !rawInput.trim()) {
      return {
        success: false,
        error: 'JSON input is empty.'
      };
    }

    const trimmed = rawInput.trim();

    // Fast-path: Standard native JSON parse (runs at V8/SpiderMonkey C++ speed)
    let parsed = null;
    let neededRepair = false;

    try {
      parsed = JSON.parse(trimmed);
    } catch (initialErr) {
      // Slow-path: Lenient repair of unquoted keys, trailing commas, or single quotes
      try {
        const repaired = JsonFormatterService.sanitizeRelaxedJson(trimmed);
        parsed = JSON.parse(repaired);
        neededRepair = true;
      } catch (repairErr) {
        // Detailed error diagnostic (use repair error if it provides better position on cleaned text)
        const diagnostics = JsonFormatterService.diagnoseSyntaxError(trimmed, repairErr || initialErr);
        return {
          success: false,
          error: diagnostics.message,
          line: diagnostics.line,
          col: diagnostics.col,
          snippet: diagnostics.snippet
        };
      }
    }

    // Ensure it's a valid object or array for specifications
    if (parsed === null || typeof parsed !== 'object') {
      return {
        success: false,
        error: 'Technical Specifications must be a JSON object mapping categories to attributes (e.g. { "Display System": { ... } }).'
      };
    }

    if (sortKeys) {
      parsed = JsonFormatterService.sortObjectKeys(parsed);
    }

    const formatted = JSON.stringify(parsed, null, indent);
    return {
      success: true,
      formatted,
      parsed,
      repaired: neededRepair
    };
  }

  /**
   * Minifies JSON to compact single line
   */
  static minify(rawInput) {
    const result = JsonFormatterService.format(rawInput, { indent: 0 });
    if (!result.success) return result;
    return {
      success: true,
      minified: JSON.stringify(result.parsed)
    };
  }

  /**
   * Pinpoints exact line and column of JSON syntax errors with contextual snippet
   */
  static diagnoseSyntaxError(text, err) {
    const msg = err.message || '';
    let line = 1;
    let col = 1;

    // Extract position from V8 error message: "Unexpected token ... in JSON at position 123"
    const posMatch = msg.match(/at position (\d+)/i);
    if (posMatch) {
      const pos = parseInt(posMatch[1], 10);
      const before = text.slice(0, pos);
      const lines = before.split('\n');
      line = lines.length;
      col = lines[lines.length - 1].length + 1;
    } else {
      // Extract from Firefox/Safari style: "line 2 column 5"
      const lineColMatch = msg.match(/line (\d+) column (\d+)/i);
      if (lineColMatch) {
        line = parseInt(lineColMatch[1], 10);
        col = parseInt(lineColMatch[2], 10);
      }
    }

    const lines = text.split('\n');
    const errorLine = lines[line - 1] || '';
    const pointer = ' '.repeat(Math.max(0, col - 1)) + '^';
    const snippet = `${errorLine}\n${pointer}`;

    return {
      message: `Syntax error at line ${line}, column ${col}: ${msg}`,
      line,
      col,
      snippet
    };
  }
}

if (typeof window !== 'undefined') {
  window.JsonFormatterService = JsonFormatterService;
}
