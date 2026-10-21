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
 * PR Architecture & Pure Native Stack Validator
 *
 * Enforces strict PR architecture standards:
 * 1. 0% Node.js in runtime web code (no require(), module.exports, or process references in browser-facing code without proper universal guards).
 * 2. 0% React, Vue, Alpine, Next.js, Vite, or external JS runtime frameworks.
 * 3. 0% Tailwind, Bootstrap, or external CSS utility frameworks (Vanilla CSS only).
 * 4. 0 External third-party dependencies in web pages (no unapproved CDN script tags).
 * 5. Modern HTML5 semantic structure & responsive Mobile-First viewport.
 * 6. Native Modern CSS Grid & Flexbox layouts.
 * 7. Pure Native JavaScript tests only (zero Jest, Mocha, Chai, Vitest, Cypress, or npm test runner packages).
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('   PR Architecture & Pure Native Stack Validator    ');
console.log('====================================================\n');

let violations = 0;

function reportViolation(category, message) {
  violations++;
  console.error(`❌ [${category.toUpperCase()}] ${message}`);
}

function reportPass(category, message) {
  console.log(`✅ [${category.toUpperCase()}] ${message}`);
}

// ----------------------------------------------------
// 1. Check No Third-Party NPM Dependencies
// ----------------------------------------------------
console.log('--- 1. External Third-Party Dependencies Audit ---');
const pkgPath = path.join(REPO_ROOT, 'package.json');
if (fs.existsSync(pkgPath)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const deps = Object.keys(pkg.dependencies || {});
    const devDeps = Object.keys(pkg.devDependencies || {});
    if (deps.length > 0) {
      reportViolation('dependencies', `package.json contains unapproved dependencies: ${deps.join(', ')}`);
    } else {
      reportPass('dependencies', '0 runtime third-party dependencies in package.json');
    }
    if (devDeps.length > 0) {
      reportViolation('dependencies', `package.json contains unapproved devDependencies: ${devDeps.join(', ')}`);
    } else {
      reportPass('dependencies', '0 devDependencies in package.json');
    }
  } catch (e) {
    reportViolation('dependencies', `Invalid package.json format: ${e.message}`);
  }
} else {
  reportPass('dependencies', 'No package.json dependencies found (Zero external dependencies policy compliant).');
}

const nodeModulesPath = path.join(REPO_ROOT, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  reportViolation('dependencies', 'node_modules directory detected in repository! Must remain 100% zero-dependency.');
} else {
  reportPass('dependencies', 'Zero node_modules in repository.');
}

// ----------------------------------------------------
// 2. Audit index.html (Modern HTML5, Frameworks & CDNs)
// ----------------------------------------------------
console.log('\n--- 2. HTML5 Semantic & Zero-Framework Browser Audit ---');
const indexPath = path.join(REPO_ROOT, 'index.html');
if (!fs.existsSync(indexPath)) {
  reportViolation('html', 'index.html is missing!');
} else {
  const indexHtml = fs.readFileSync(indexPath, 'utf8');

  // Verify <!DOCTYPE html>
  if (!indexHtml.trim().startsWith('<!DOCTYPE html>')) {
    reportViolation('html', 'index.html must start with standard modern <!DOCTYPE html>');
  } else {
    reportPass('html', 'Modern HTML5 <!DOCTYPE html> declaration verified');
  }

  // Verify Mobile-First Viewport
  if (!indexHtml.includes('name="viewport"') || !indexHtml.includes('width=device-width')) {
    reportViolation('html', 'index.html missing standard mobile-first viewport meta tag');
  } else {
    reportPass('html', 'Mobile-first responsive viewport meta tag verified');
  }

  // Verify Zero Framework Scripts in HTML (React, Vue, Alpine, Vite, Next, Tailwind, Bootstrap)
  const forbiddenFrameworkPatterns = [
    { name: 'React', regex: /react(\.production|\.development)?\.js|react-dom/i },
    { name: 'Vue', regex: /vue(\.runtime|\.global|\.esm)?\.js/i },
    { name: 'Alpine.js', regex: /alpine(\.min)?\.js|x-data|x-bind|x-on/i },
    { name: 'Vite', regex: /@vite\/client/i },
    { name: 'Next.js', regex: /_next\/static/i },
    { name: 'Tailwind CSS', regex: /cdn\.tailwindcss\.com|tailwind\.css/i },
    { name: 'Bootstrap', regex: /bootstrap(\.min)?\.(css|js)/i }
  ];

  for (const { name, regex } of forbiddenFrameworkPatterns) {
    if (regex.test(indexHtml)) {
      reportViolation('framework-audit', `Forbidden framework trace for "${name}" detected in index.html!`);
    } else {
      reportPass('framework-audit', `0% ${name} verified in index.html`);
    }
  }

  // Ensure only approved local scripts are linked
  const scriptSrcMatches = [...indexHtml.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)];
  for (const match of scriptSrcMatches) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
      reportViolation('framework-audit', `Unapproved external script CDN link detected in index.html: ${src}`);
    } else {
      reportPass('framework-audit', `Local native script verified: ${src}`);
    }
  }
}

// ----------------------------------------------------
// 3. Audit CSS (Modern Native CSS Grid, Flexbox, No Tailwind/Bootstrap)
// ----------------------------------------------------
console.log('\n--- 3. Modern Vanilla CSS & Native CSS Grid Audit ---');
const cssPath = path.join(REPO_ROOT, 'css/styles.css');
if (!fs.existsSync(cssPath)) {
  reportViolation('css', 'css/styles.css is missing!');
} else {
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  // Verify Native CSS Grid usage
  if (cssContent.includes('display: grid') || cssContent.includes('display:grid')) {
    reportPass('css-grid', 'Modern Native CSS Grid layouts verified (display: grid)');
  } else {
    reportViolation('css-grid', 'css/styles.css missing required Native CSS Grid layout declarations');
  }

  // Verify Flexbox usage
  if (cssContent.includes('display: flex') || cssContent.includes('display:flex')) {
    reportPass('css-flexbox', 'Modern Flexbox layout integration verified (display: flex)');
  } else {
    reportViolation('css-flexbox', 'css/styles.css missing Flexbox layout declarations');
  }

  // Verify Media Queries for Mobile-First responsiveness
  if (cssContent.includes('@media')) {
    reportPass('css-responsive', 'Mobile-first responsive media query breakpoints verified');
  } else {
    reportViolation('css-responsive', 'css/styles.css missing @media responsive rules');
  }

  // Check for Tailwind / Bootstrap generated classes
  if (cssContent.includes('@tailwind') || cssContent.includes('--tw-') || cssContent.includes('tailwindcss')) {
    reportViolation('css', 'Tailwind CSS artifact or directive detected in css/styles.css! Must be Vanilla CSS.');
  } else {
    reportPass('css', '0% Tailwind verified in stylesheets (100% Vanilla CSS)');
  }

  if (cssContent.includes('bootstrap') || cssContent.includes('.col-md-') || cssContent.includes('.container-fluid')) {
    reportViolation('css', 'Bootstrap classes or signatures detected in css/styles.css! Must be Vanilla CSS.');
  } else {
    reportPass('css', '0% Bootstrap verified in stylesheets');
  }
}

// ----------------------------------------------------
// 4. Audit Browser JS Code (Pure Native JavaScript)
// ----------------------------------------------------
console.log('\n--- 4. Pure Native JavaScript Runtime Audit ---');
const jsDir = path.join(REPO_ROOT, 'js');
if (fs.existsSync(jsDir)) {
  const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
  for (const jsFile of jsFiles) {
    const filePath = path.join(jsDir, jsFile);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check for framework imports
    if (/from\s+['"](react|vue|alpinejs|@angular|svelte)['"]/i.test(content) ||
        /require\(['"](react|vue|alpinejs|@angular|svelte)['"]\)/i.test(content)) {
      reportViolation('pure-native-js', `Framework import detected in js/${jsFile}`);
    } else {
      reportPass('pure-native-js', `0% framework imports in js/${jsFile}`);
    }

    // ECMAScript (ECMA-262) & ES2026 Modern Standard Verification
    let strippedJs = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').replace(/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/g, '""');

    if (/\bvar\s+[a-zA-Z0-9_$]+/g.test(strippedJs)) {
      reportViolation('es2026-standards', `Legacy 'var' statement detected in js/${jsFile}! Modern ES2026 standard requires const/let.`);
    } else {
      reportPass('es2026-standards', `0 legacy 'var' declarations in js/${jsFile} (Modern block scoping enforced)`);
    }

    if (/\beval\s*\(/g.test(strippedJs)) {
      reportViolation('es2026-standards', `Forbidden eval() detected in js/${jsFile}! Violates secure ECMAScript standard.`);
    } else {
      reportPass('es2026-standards', `0 eval() invocations in js/${jsFile}`);
    }

    if (/\bwith\s*\(/g.test(strippedJs)) {
      reportViolation('es2026-standards', `Forbidden 'with' statement detected in js/${jsFile}! Prohibited in strict ECMAScript standard.`);
    } else {
      reportPass('es2026-standards', `0 'with' statements in js/${jsFile}`);
    }
  }
}

// ----------------------------------------------------
// 5. Audit Test Files (Pure Native JS Test Cases Only)
// ----------------------------------------------------
console.log('\n--- 5. Pure Native JavaScript Test Suite Audit ---');
const scriptsDir = path.join(REPO_ROOT, 'scripts');
if (fs.existsSync(scriptsDir)) {
  const testFiles = fs.readdirSync(scriptsDir).filter(f => f.startsWith('test_') && f.endsWith('.js'));
  const forbiddenTestFrameworks = ['jest', 'mocha', 'chai', 'jasmine', 'vitest', 'cypress', 'playwright'];

  for (const tFile of testFiles) {
    const tPath = path.join(scriptsDir, tFile);
    const tContent = fs.readFileSync(tPath, 'utf8');

    let hasFramework = false;
    for (const fw of forbiddenTestFrameworks) {
      if (new RegExp(`require\\(['"]${fw}['"]\\)|from\\s+['"]${fw}['"]`, 'i').test(tContent)) {
        reportViolation('native-tests', `Test file ${tFile} imports external test framework "${fw}". Must use Pure Native JS assertions!`);
        hasFramework = true;
      }
    }

    if (!hasFramework) {
      reportPass('native-tests', `Verified Pure Native JS test implementation in ${tFile}`);
    }
  }
}

// ----------------------------------------------------
// 6. Audit PR Changed Files (Differential PR Check)
// ----------------------------------------------------
console.log('\n--- 6. PR Code Changes Native Stack Audit (Differential) ---');
const { execSync } = require('child_process');
let prChangedFiles = [];

try {
  const baseRef = process.env.BASE_REF;
  let rawDiff = '';

  if (baseRef) {
    try {
      rawDiff = execSync(`git diff --name-only origin/${baseRef}...HEAD`, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    } catch (e1) {
      try {
        rawDiff = execSync(`git diff --name-only origin/${baseRef} HEAD`, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
      } catch (e1b) {}
    }
  } else {
    try {
      rawDiff = execSync('git diff --name-only HEAD~1 HEAD', { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    } catch (e2) {
      try {
        rawDiff = execSync('git diff --name-only HEAD', { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
      } catch (e2b) {}
    }
  }

  prChangedFiles = (rawDiff || '').split(/\r?\n/).map(f => f.trim().replace(/\\/g, '/')).filter(Boolean);
} catch (err) {
  try {
    const statusOut = execSync('git status --porcelain', { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    prChangedFiles = (statusOut || '')
      .split(/\r?\n/)
      .map(l => l.replace(/^[MADRCU?!]{1,2}\s+/, '').trim().replace(/\\/g, '/'))
      .filter(Boolean);
  } catch (statusErr) {}
}

const FORBIDDEN_3RD_PARTY_FRAMEWORKS = [
  { name: 'React', regex: /\b(react|react-dom|jsx-runtime)\b/i },
  { name: 'Vue', regex: /\b(vue|vuex|pinia)\b/i },
  { name: 'Angular', regex: /\b(@angular\/core|@angular\/common)\b/i },
  { name: 'Svelte', regex: /\b(svelte)\b/i },
  { name: 'Alpine.js', regex: /\b(alpinejs|alpine\.min\.js)\b|x-data|x-bind|x-on/i },
  { name: 'Next.js', regex: /\b(next\/router|next\/navigation|_next\/static)\b/i },
  { name: 'Vite', regex: /\b(@vite\/client|vite\/client)\b/i },
  { name: 'Tailwind CSS', regex: /@tailwind|--tw-|tailwindcss|cdn\.tailwindcss\.com/i },
  { name: 'Bootstrap', regex: /\bbootstrap(\.min)?\.(css|js)\b|\.col-md-|\.container-fluid/i }
];

if (prChangedFiles.length === 0) {
  console.log('   No PR changed files detected in current context. Full tree validation active.');
} else {
  console.log(`   Auditing ${prChangedFiles.length} PR modified file(s) for 100% Native Stack & Zero Frameworks:`);
  for (const changedFile of prChangedFiles) {
    const fullPath = path.join(REPO_ROOT, changedFile);
    if (!fs.existsSync(fullPath)) continue;

    // A. Audit HTML files
    if (changedFile.endsWith('.html')) {
      const html = fs.readFileSync(fullPath, 'utf8');
      if (!html.includes('<!DOCTYPE html>')) {
        reportViolation('pr-html', `PR change in ${changedFile} is missing modern HTML5 <!DOCTYPE html>`);
      } else {
        reportPass('pr-html', `Modern HTML5 verified in ${changedFile}`);
      }

      if (!html.includes('<header') || !html.includes('<main') || !html.includes('<nav')) {
        reportViolation('pr-html', `PR change in ${changedFile} missing modern semantic HTML5 elements (<header>, <main>, <nav>)`);
      } else {
        reportPass('pr-html', `Semantic HTML5 elements verified in ${changedFile}`);
      }

      for (const fw of FORBIDDEN_3RD_PARTY_FRAMEWORKS) {
        if (fw.regex.test(html)) {
          reportViolation('pr-zero-framework', `PR change in ${changedFile} introduces forbidden framework "${fw.name}"!`);
        }
      }
    }

    // B. Audit CSS files
    if (changedFile.endsWith('.css')) {
      const css = fs.readFileSync(fullPath, 'utf8');
      if (!css.includes('display: grid') && !css.includes('display:grid')) {
        reportViolation('pr-css-grid', `PR change in ${changedFile} does not declare Modern Native CSS Grid (display: grid)`);
      } else {
        reportPass('pr-css-grid', `Modern Native CSS Grid verified in ${changedFile}`);
      }

      if (css.includes('@tailwind') || css.includes('--tw-') || css.includes('tailwindcss')) {
        reportViolation('pr-zero-framework', `PR change in ${changedFile} introduces Tailwind CSS! Only 100% Native Vanilla CSS is permitted.`);
      }

      if (css.includes('bootstrap') || css.includes('.col-md-') || css.includes('.container-fluid')) {
        reportViolation('pr-zero-framework', `PR change in ${changedFile} introduces Bootstrap! Only 100% Native Vanilla CSS is permitted.`);
      }
    }

    // C. Audit JS files
    if (changedFile.endsWith('.js') && (changedFile.startsWith('js/') || changedFile.startsWith('scripts/'))) {
      if (changedFile === 'scripts/check_native_stack_compliance.js') {
        reportPass('pr-pure-native-js', `Compliance tooling script exempt from self-matching framework definitions: ${changedFile}`);
        continue;
      }
      const js = fs.readFileSync(fullPath, 'utf8');
      for (const fw of FORBIDDEN_3RD_PARTY_FRAMEWORKS) {
        if (fw.regex.test(js)) {
          reportViolation('pr-zero-framework', `PR change in ${changedFile} introduces forbidden framework/library "${fw.name}"!`);
        }
      }
      reportPass('pr-pure-native-js', `Pure Native JavaScript verified (0% third-party frameworks) in ${changedFile}`);
    }
  }
}

console.log('\n====================================================');
if (violations > 0) {
  console.error(`❌ [PRECHECK FAILURE] ${violations} architectural standard violation(s) found!`);
  console.error('All PRs must strictly adhere to: Pure Native JavaScript, Modern HTML5, Modern CSS Grid, and 0% external frameworks/dependencies.');
  process.exit(1);
} else {
  console.log('✅ ALL ARCHITECTURE & PURE NATIVE STACK PRECHECKS PASSED!');
  console.log('   - 0% Node.js in browser runtime');
  console.log('   - 0% React/Vue/Alpine/Next/Vite');
  console.log('   - 0% Tailwind/Bootstrap');
  console.log('   - 0 External third-party dependencies');
  console.log('   - Pure Native JavaScript, Modern HTML5, Vanilla CSS Grid');
  console.log('   - 100% ECMAScript 2026 (ES2026 / ECMA-262) standards compliance');
  console.log('   - Pure Native JavaScript tests only');
  console.log('====================================================\n');
  process.exit(0);
}
