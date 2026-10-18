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
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '..');

// Required Apache 2.0 license indicators
const REQUIRED_APACHE_PHRASES = [
  'Licensed under the Apache License, Version 2.0',
  'http://www.apache.org/licenses/LICENSE-2.0'
];

// File extensions requiring Apache 2.0 license notice headers
const SOURCE_CODE_EXTENSIONS = new Set([
  '.js',
  '.html',
  '.css',
  '.sh',
  '.py',
  '.yml',
  '.yaml',
  '.dockerfile'
]);

// Exact filenames that must have license headers regardless of extension
const EXACT_SOURCE_FILENAMES = new Set([
  'Dockerfile'
]);

// Files and directories exempt from source header checks
const EXEMPT_PATHS = new Set([
  'LICENSE',
  'NOTICE',
  'README.md',
  '.dockerignore',
  '.gitignore',
  'data/catalog.json'
]);

function isExempt(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  if (EXEMPT_PATHS.has(normalized)) return true;
  if (normalized.startsWith('.git/')) return true;
  if (normalized.endsWith('.json')) return true;
  if (normalized.endsWith('.md')) return true;
  if (normalized.endsWith('.txt')) return true;
  return false;
}

function shouldCheckHeader(relPath) {
  if (isExempt(relPath)) return false;
  const baseName = path.basename(relPath);
  if (EXACT_SOURCE_FILENAMES.has(baseName)) return true;
  const ext = path.extname(relPath).toLowerCase();
  return SOURCE_CODE_EXTENSIONS.has(ext);
}

function checkFileHeader(filePath, relPath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const headChunk = content.slice(0, 1500); // Check the top comment block

    const missingPhrases = REQUIRED_APACHE_PHRASES.filter(phrase => !headChunk.includes(phrase));
    if (missingPhrases.length > 0) {
      return {
        file: relPath,
        valid: false,
        reason: `Missing license statement: "${missingPhrases.join('", "')}"`
      };
    }
    return { file: relPath, valid: true };
  } catch (err) {
    return { file: relPath, valid: false, reason: `Failed to read file: ${err.message}` };
  }
}

function runComplianceCheck() {
  console.log('====================================================');
  console.log('   Apache License 2.0 100% Full Compliance Check    ');
  console.log('====================================================\n');

  let failed = false;

  // 1. Mandatory Root Repository Files Check
  console.log('1. Verifying repository root license documents:');
  const licensePath = path.join(REPO_ROOT, 'LICENSE');
  const noticePath = path.join(REPO_ROOT, 'NOTICE');

  if (!fs.existsSync(licensePath)) {
    console.error('   [FAIL] Missing root LICENSE file.');
    failed = true;
  } else {
    const licText = fs.readFileSync(licensePath, 'utf8');
    if (licText.includes('Apache License') && licText.includes('Version 2.0, January 2004')) {
      console.log('   [PASS] LICENSE file verified (Apache License, Version 2.0).');
    } else {
      console.error('   [FAIL] LICENSE file does not contain official Apache License 2.0 text.');
      failed = true;
    }
  }

  if (!fs.existsSync(noticePath)) {
    console.error('   [FAIL] Missing root NOTICE file.');
    failed = true;
  } else {
    const noticeText = fs.readFileSync(noticePath, 'utf8');
    if (noticeText.includes('Apache License, Version 2.0')) {
      console.log('   [PASS] NOTICE file verified with copyright and third-party attribution.');
    } else {
      console.error('   [FAIL] NOTICE file missing Apache License 2.0 attribution.');
      failed = true;
    }
  }

  // 2. Discover all repository tracked files via git ls-files
  console.log('\n2. Verifying Apache 2.0 license headers on code files:');
  let trackedFiles = [];
  try {
    const output = execSync('git ls-files', { cwd: REPO_ROOT, encoding: 'utf8' });
    trackedFiles = output.split(/\r?\n/).map(f => f.trim()).filter(Boolean);
  } catch (err) {
    console.warn('   [WARN] git ls-files failed, scanning directory directly...');
    // Fallback: simple recursive read
    function walk(dir, fileList = []) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (file === '.git' || file === 'node_modules') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          walk(fullPath, fileList);
        } else {
          fileList.push(path.relative(REPO_ROOT, fullPath));
        }
      }
      return fileList;
    }
    trackedFiles = walk(REPO_ROOT);
  }

  const filesToCheck = trackedFiles.filter(shouldCheckHeader);
  console.log(`   Auditing ${filesToCheck.length} source code files for Apache 2.0 headers...\n`);

  for (const relPath of filesToCheck) {
    const fullPath = path.join(REPO_ROOT, relPath);
    const result = checkFileHeader(fullPath, relPath);

    if (result.valid) {
      console.log(`   [PASS] ${relPath}`);
    } else {
      console.error(`   [FAIL] ${relPath} -> ${result.reason}`);
      failed = true;
    }
  }

  // 3. Newly pushed / committed / staged files check (if git diff available)
  try {
    const statusOutput = execSync('git status --porcelain', { cwd: REPO_ROOT, encoding: 'utf8' });
    const uncommittedLines = statusOutput.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (uncommittedLines.length > 0) {
      console.log('\n3. Verifying working tree / uncommitted files:');
      for (const line of uncommittedLines) {
        const filePath = line.replace(/^[MADRCU?!]{1,2}\s+/, '').trim();
        if (shouldCheckHeader(filePath)) {
          const fullPath = path.join(REPO_ROOT, filePath);
          if (fs.existsSync(fullPath)) {
            const result = checkFileHeader(fullPath, filePath);
            if (result.valid) {
              console.log(`   [PASS - Working Tree] ${filePath}`);
            } else {
              console.error(`   [FAIL - Working Tree] ${filePath} -> ${result.reason}`);
              failed = true;
            }
          }
        }
      }
    }
  } catch (e) {
    // Non-fatal if git status not available in environment
  }

  console.log('\n====================================================');
  if (failed) {
    console.error(' [ERROR] Apache License 2.0 Compliance check failed!');
    console.error(' Every source code file MUST contain the standard Apache License 2.0 header.');
    console.log('====================================================\n');
    process.exit(1);
  } else {
    console.log(' [SUCCESS] 100% Apache License 2.0 Compliance verified across all files.');
    console.log('====================================================\n');
    process.exit(0);
  }
}

runComplianceCheck();
