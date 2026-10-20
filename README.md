# PhoneSpecs

A clean, high-performance, and modern mobile phone technical specifications catalog with side-by-side device comparison.

[![Quality & License Compliance CI](https://github.com/thanoojgithub/phonespecs/actions/workflows/ci.yml/badge.svg)](https://github.com/thanoojgithub/phonespecs/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/thanoojgithub/phonespecs/actions/workflows/deploy.yml/badge.svg)](https://github.com/thanoojgithub/phonespecs/actions/workflows/deploy.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

---

## Live Demo

- **Production URL**: [https://thanoojgithub.github.io/phonespecs/](https://thanoojgithub.github.io/phonespecs/)

---

## Table of Contents

- [Features](#features)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [User Guide](#user-guide)
  - [1. Browsing and Filtering by Brand](#1-browsing-and-filtering-by-brand)
  - [2. Real-Time Search & Sorting](#2-real-time-search--sorting)
  - [3. Viewing Phone Specifications](#3-viewing-phone-specifications)
  - [4. Side-by-Side Phone Comparison](#4-side-by-side-phone-comparison)
  - [5. App Owner Mode (Admin Data Management)](#5-app-owner-mode-admin-data-management)
  - [6. Robust Versioned Audit Trail & Item History](#6-robust-versioned-audit-trail--item-history)
- [Local Development & Running](#local-development--running)
- [Apache License 2.0 Compliance](#apache-license-20-compliance)
  - [Summary of Rights & Conditions](#summary-of-rights--conditions)
  - [Legal Limitations & Disclaimers](#legal-limitations--disclaimers)
  - [Why the Application Catalog is 100% Compliant with Apache 2.0](#why-the-application-catalog-is-100-compliant-with-apache-20)
  - [Attributions & Dependencies](#attributions--dependencies)
- [Contributing](#contributing)

---

## Features

- **Modern HTML & Native CSS Grid**: Clean, semantic HTML5 structure with zero inline styles and pure native CSS Grid layouts.
- **Fast Client-Side Experience**: Instant search, sorting, and brand filtering with zero page reloads.
- **Deep Technical Specifications**: Detailed breakdowns across Display, Processor, Optics/Camera, Battery/Charging, and Connectivity.
- **Side-by-Side Comparison Engine**: Compare devices simultaneously with sticky, aligned matrix spec tables.
- **App Owner / Admin Mode**: In-browser catalog editor with native grid-constrained modal dialogs to add, edit, export, or reset device data.
- **Self-Maintained Versioned Audit Trail**: Dedicated `data/audit.json` maintaining 5 recent updates per catalog item with instant version fetch, edit, and undo.
- **Zero 3rd-Party UI/UX Frameworks**: Built strictly with pure Native JavaScript (ES6+ standard APIs) and standard native CSS—no Alpine.js, Tailwind, Bootstrap, React, or external JS bundles.
- **Ultra-Lean Footprint**: Zero node build pipelines, zero npm lockfiles, zero runtime dependencies. Runs directly in any web browser.

---

## Architecture & Tech Stack

- **Modern HTML5 & Semantic Structure**: Pure semantic elements, accessibility-oriented attributes, and zero inline styles in [`index.html`](index.html).
- **Styling (Modern Native CSS Grid)**: Native CSS Grid layouts, `dvh`-aware viewport dialogs, `scrollbar-gutter: stable`, and a curated red-and-slate design system in [`css/styles.css`](css/styles.css). No CSS frameworks (Tailwind, Bootstrap, etc.) are used.
- **Catalog CRUD Service**: Dedicated pure Native JavaScript domain engine in [`js/catalogService.js`](js/catalogService.js) managing phone entity validation, schema enforcement, filtering, inverted full-text search, regex search, multi-field sorting, and sanitized JSON export.
- **Application Controller**: Pure Native JavaScript UI controller in [`js/app.js`](js/app.js) handling DOM events, view rendering, comparison trays, and modal dialogs.
- **Data Catalog**: Structured JSON store in [`data/catalog.json`](data/catalog.json).
- **Audit Trail & Versioning**: Dedicated decoupled audit store in [`data/audit.json`](data/audit.json) maintaining 5 recent revisions per device.

---

## User Guide

### 1. Browsing and Filtering by Brand
- Click on any **Brand Pill** below the search bar (e.g. *Apple*, *Samsung*, *Google Pixel*, *Xiaomi*, *OnePlus*) to filter devices instantly.
- Selecting **All** displays all available models across all manufacturers.

### 2. Real-Time Search & Sorting
- Use the central search bar to query devices by **model name**, **processor/SoC** (e.g. *Snapdragon*, *A18 Pro*), **camera capability**, or **display type**.
- Sort results using the **Sort dropdown**:
  - `Model: A → Z`
  - `Model: Z → A`
  - `Brand: A → Z` (internally sorted by Model A → Z)
  - `Brand: Z → A` (internally sorted by Model Z → A)
  - `Year: Newest`
  - `Year: Oldest`

### 3. Viewing Phone Specifications
- Click **View Full Specs** on any phone card to open the detailed specifications modal.
- Sections include:
  - **Display & Design**: Screen size, resolution, peak brightness, refresh rate.
  - **Processor & Silicon**: CPU architecture, GPU, Neural Processing Unit (NPU).
  - **Optics & Cameras**: Sensor sizes, aperture, optical zoom, and video resolution.
  - **Battery & Charging**: Capacity, wired HyperCharge speeds, and wireless charging.
  - **Connectivity & Software**: OS version, 5G, Wi-Fi standard, Bluetooth codecs, ports.

### 4. Side-by-Side Phone Comparison
1. Click **+ Compare** on any phone card to add it to your comparison tray.
2. The comparison badge at the top right displays the active count.
3. Click **Compare** in the header to open the side-by-side comparison modal.
4. Remove individual devices with **Remove** or clear all selections with **Clear All**.

### 5. App Owner Mode (Admin Data Management)
- Click the **Admin Access** button in the top-right header to activate owner controls.
- **+ Add New Phone**: Open the modal to register a new phone model and input its specs.
- **Edit / Delete**: Admin badges appear on every card to edit specifications or remove devices.
- **Export Catalog**: Download the modified dataset as a clean, formatted `catalog.json` file ready to be committed to the repository.
- **Export Audit**: Download the versioned `audit.json` history file tracking edits across devices.
- **Reset to Disk**: Discard local edits and re-sync both `data/catalog.json` and `data/audit.json` back to pristine repository files.

### 6. Robust Versioned Audit System (100% Deterministic & Self-Maintained)
PhoneSpecs features an enterprise-grade, dedicated audit architecture encapsulated in [`js/auditService.js`](js/auditService.js) and backed by [`data/audit.json`](data/audit.json):
- **Decoupled Audit Persistence**: The primary [`data/catalog.json`](data/catalog.json) remains ultra-lightweight and fast for visitors, while [`data/audit.json`](data/audit.json) serves as the persistent audit repository for administrators.
- **Zero Duplicate Versions (Collision-Resistant 128-Bit Content Hashing)**:
  - Uses recursive canonical JSON serialization (key-sorted and whitespace-normalized) so identical content always yields the exact same byte string regardless of object traversal or formatting differences.
  - Generates a high-entropy 128-bit multi-lane hash digest (combining 4 independent mixing algorithms across Murmur3, FNV-1a, DJB2-variant, and SDBM with avalanche mixing) with virtually zero collision probability (1 in $2^{128}$).
  - Before any new version is added, the audit engine compares the content hash against existing versions in the stack. If the content is identical, duplicate version creation is automatically omitted.
- **Strict 5-Version Bounded FIFO**: Every catalog item retains strictly up to the 5 most recent unique versioned snapshots. When a 6th unique revision is generated, the oldest revision rolls off deterministically.
- **Automated Field-Level Diff Summaries**: The audit engine computes structured change summaries between revisions (e.g. `Modified Display System > Refresh Rate`, `Release year updated to 2025`), displayed directly in the version picker badge.
- **Defensive Immutability & Fault Tolerance**: Uses deep cloning to guarantee historical snapshots cannot be mutated by runtime modifications, paired with resilient localStorage error handling and corrupted data recovery.
- **Select, Fetch, Modify & Save Workflow**:
  1. Open the **Edit Phone** modal for any device.
  2. The **Audit Versions (Max 5)** dropdown displays previous versions with relative timestamps and change summaries.
  3. Select any prior version and click **Fetch Version** to load that snapshot's exact specs into the form.
  4. An active notification banner confirms you are editing on top of a historical snapshot, with an instant **Revert to Live** option.
  5. Apply your modifications and click **Save Phone** to commit the new sequential version into the catalog and audit trail.
- **Bi-Directional Audit Sync**:
  - **Export Audit**: Download the complete, verified `audit.json` file to commit to the repository.
  - **Import Audit**: Upload and validate external `audit.json` files with automatic schema integrity verification and duplicate pruning.
  - **Reset to Disk**: Cleanly resets local browser state back to the repository's pristine disk files.

### 7. Robust & High-Performance Native JSON Formatter ([`js/jsonFormatterService.js`](js/jsonFormatterService.js))
PhoneSpecs incorporates a dedicated, zero-dependency Native JavaScript JSON engine designed for maximum execution speed (sub-millisecond parsing and formatting) and lenient syntax auto-repair for the **Technical Specifications** editor:
- **Two-Tier Engine**:
  - **Fast-Path**: Runs directly through the native browser engine (`JSON.parse` at compiled C++ speed) taking < 0.2ms.
  - **Lenient Auto-Repair Fallback**: If an admin inputs non-standard JSON, the engine automatically repairs single quotes, unquoted property keys (`{ processor: 'A18 Pro' }` $\to$ `{"processor": "A18 Pro"}`), trailing dangling commas (`{ "a": 1, }` $\to$ `{"a": 1}`), and strips JavaScript comments without corrupting internal string literals.
- **Formatter Controls**:
  - **Format JSON**: Standardizes indentation cleanly with 2 spaces and repairs syntax anomalies.
  - **Sort Keys**: Alphabetically re-orders categories and specification keys recursively for clean, structured consistency.
  - **Minify**: Compresses specifications into a single dense line.
- **Syntax Error Diagnostics**: If unrecoverable syntax is found, the editor pinpoints the exact line and column number, generates a contextual pointer snippet, and moves the text cursor to the error location.

---

## Local Development & Running

Because PhoneSpecs is a pure static client application, no complex installation or compile step is required.

### Option 1: Direct File Open
Double-click [`index.html`](index.html) in your browser. (The application includes bundled fallback data for direct `file://` protocol usage).

### Option 2: Local HTTP Server using Docker (Recommended)

#### A. Live Development with Docker (Instant Local File Sync - No Rebuild Required)
Mount your local workspace into the Nginx container so any code edits appear immediately on page refresh:

**PowerShell (Windows):**
```powershell
docker run --rm -p 8000:80 -v ${PWD}:/usr/share/nginx/html:ro nginx:alpine
```

**Command Prompt (cmd.exe):**
```cmd
docker run --rm -p 8000:80 -v "%cd%":/usr/share/nginx/html:ro nginx:alpine
```

**Bash (Linux / macOS / WSL):**
```bash
docker run --rm -p 8000:80 -v "$(pwd)":/usr/share/nginx/html:ro nginx:alpine
```

#### B. Build & Run as Standalone Image
If you want to bake all files into a self-contained image:
```bash
# 1. You MUST re-build the image whenever files are modified:
docker build -t phonespecs .

# 2. Run the newly built container:
docker run --rm -p 8000:80 phonespecs
```

#### C. Using Node Container One-Liner
Run `http-server` or `serve` via Node.js container with live volume mount:
```bash
docker run --rm -it -p 8000:8000 -v ${PWD}:/app -w /app node:alpine npx http-server . -p 8000
```

Open your browser at:
```
http://localhost:8000
```
*(Press `Ctrl + C` in your terminal to stop the container).*

### Option 3: Local HTTP Server using Host Node.js
If you have Node.js installed directly on your machine:
```bash
npx serve .
# or
npx http-server . -p 8000
```
Open your browser at the local URL displayed in your terminal (e.g. `http://localhost:3000` or `http://localhost:8000`).

### Data Validation & Automated Tests
Run the catalog integrity validator and Native JS CRUD test suite using Node.js or Docker:

- **Using local Node.js:**
  ```bash
  # Run all test suites with 100% full coverage verification:
  node scripts/run_all_tests.js

  # Or run individual native JS test suites:
  node scripts/validate_catalog.js       # Catalog schema & foreign-key reference integrity
  node scripts/test_catalog_crud.js       # Pure Native JS CatalogService (57+ unit tests)
  node scripts/test_audit_service.js      # 128-bit collision-resistant hashing & bounded FIFO audit
  node scripts/test_json_formatter.js     # Lenient JSON auto-repair, control-char & key-sorting tests
  node scripts/check_license_compliance.js # 100% Apache 2.0 license compliance audit
  ```
- **Using Docker (if Node is not installed locally):**
  ```powershell
  # Windows PowerShell: Run all test suites inside lightweight Node container
  docker run --rm -v ${PWD}:/app -w /app node:alpine node scripts/run_all_tests.js
  ```
  # PowerShell
  docker run --rm -v ${PWD}:/app -w /app node:alpine node scripts/validate_catalog.js
  docker run --rm -v ${PWD}:/app -w /app node:alpine node scripts/test_catalog_crud.js
  ```
  ```bash
  # Linux / macOS / WSL
  docker run --rm -v "$(pwd)":/app -w /app node:alpine node scripts/validate_catalog.js
  docker run --rm -v "$(pwd)":/app -w /app node:alpine node scripts/test_catalog_crud.js
  ```

---

## Apache License 2.0 Compliance

This project is open-source software licensed under the **[Apache License, Version 2.0](LICENSE)**.

### Summary of Rights & Conditions

| Permissions | Conditions | Limitations |
| :--- | :--- | :--- |
| Commercial use | License and copyright notice | **Trademark use** (Section 6) |
| Modification | State changes in modified files | **Liability** (Section 8) |
| Distribution | Retain NOTICE & attributions | **Warranty** (Section 7) |
| Patent grant | Include license terms | |
| Private use | | |

### Legal Limitations & Disclaimers

1. **Trademark Use (Section 6)**:
   - This license does **not** grant permission to use the trade names, trademarks, service marks, or product names of the Licensor or any hardware manufacturer (e.g., Apple, Samsung, Google, Asus, OnePlus, Xiaomi, Qualcomm). All trademarks remain the property of their respective owners and are used strictly for descriptive/referential identification.

2. **Warranty (Section 7)**:
   - The software is provided on an **"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND**, either express or implied, including, without limitation, any warranties of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.

3. **Liability (Section 8)**:
   - In no event and under no legal theory shall any Contributor or Copyright Holder be liable for any direct, indirect, special, incidental, or consequential damages arising from the use or inability to use this software.

### Why the Application Catalog is 100% Compliant with Apache 2.0

Yes, our application's `catalog` is 100% compliant with the Apache License 2.0 based on the following legal and technical pillars:

1. **Non-Copyrightable Pure Factual Technical Data**:
   - Under international copyright law and statutory precedent, raw technical specifications (e.g., dimensions, weights, battery capacities in mAh, screen resolutions in pixels, clock speeds, and hardware component model numbers) are pure objective facts. Facts are not subject to copyright ownership. You can freely catalog, structure, and distribute them under the Apache License 2.0.

2. **Strict Trademark Non-Endorsement (Section 6 of Apache License 2.0)**:
   - Section 6 explicitly protects trademark holders by clarifying that the license grants no rights to use brand names as trademarks.
   - All manufacturer trademarks and product names (such as Apple, Samsung, Google, OnePlus, Xiaomi, Sony, etc.) displayed in [`data/catalog.json`](data/catalog.json) and throughout the app are strictly used for **nominative, descriptive, and referential identification purposes**. Nominative fair use is protected by our explicit disclaimers in the [`NOTICE`](NOTICE) file, [`README.md`](README.md), and the application footer.

3. **Standard JSON Comment Exemption in CI Audits**:
   - RFC 8259 JSON standards do not support comment blocks (`/* ... */` or `// ...`). Injecting license comments directly into `.json` data files would break native browser `fetch()` and standard parsers like `JSON.parse()`.
   - The project's automated compliance audit script ([`scripts/check_license_compliance.js`](scripts/check_license_compliance.js)) explicitly lists `data/catalog.json` as an exempt path for comment headers, while requiring Apache 2.0 notice headers across all JavaScript, HTML, CSS, YAML, and Docker files.

4. **Disclaimer of Warranty & Limitation of Liability (Sections 7 & 8)**:
   - All catalog data is delivered on an **"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND**, as guaranteed by Section 7 and Section 8 of the Apache License 2.0, protecting contributors and users from liability regarding technical device data.

### Attributions & Dependencies

In accordance with Section 4(d) of the Apache License 2.0, all third-party open-source components and font licenses are documented in the **[NOTICE](NOTICE)** file:
- **Google Fonts (Outfit & Plus Jakarta Sans)**: Licensed under the SIL Open Font License, Version 1.1.

Every source code file in this repository contains the standard Apache 2.0 copyright and license boilerplate header:
- [`index.html`](index.html)
- [`css/styles.css`](css/styles.css)
- [`js/catalogService.js`](js/catalogService.js)
- [`js/auditService.js`](js/auditService.js)
- [`js/jsonFormatterService.js`](js/jsonFormatterService.js)
- [`js/app.js`](js/app.js)
- [`scripts/validate_catalog.js`](scripts/validate_catalog.js)
- [`scripts/test_catalog_crud.js`](scripts/test_catalog_crud.js)
- [`scripts/check_license_compliance.js`](scripts/check_license_compliance.js)

Automated Apache 2.0 license compliance and test suites are enforced on every commit and pull request via dedicated GitHub Actions workflows:
- **[Apache 2.0 License Compliance Audit](.github/workflows/license-compliance.yml)**: Verifies presence and valid formatting of official Apache 2.0 text in `LICENSE`, `NOTICE`, and required copyright headers on newly pushed or modified code files.
- **[Quality & License Compliance CI](.github/workflows/ci.yml)**: Executes pure Native JS CRUD test suites and catalog schema validation.
- **[Contributor DCO & License Check](.github/workflows/contributor-dco.yml)**: Enforces Developer Certificate of Origin (DCO) commit sign-offs (`git commit -s`) on all incoming pull requests.
- **[Apache 2.0 Notice & Trademark Audit](.github/workflows/apache-notice-audit.yml)**: Audits in-app web footer legal disclaimers, trademark non-endorsement language, and third-party attribution fidelity.
- **[PR Apache 2.0 License Gatekeeper](.github/workflows/pr-license-gatekeeper.yml)**: Scans incoming PR descriptions and code changes to block incompatible license types (e.g. GPL copyleft conflicts).
- **[Apache 2.0 Release Packaging & SBOM](.github/workflows/apache-release-distribution.yml)**: Packages compliant release archives bundled with mandatory Section 4(a) `LICENSE`, Section 4(d) `NOTICE`, SHA-256 checksums, and SPDX-2.3 Software Bill of Materials (SBOM).

---

## Contributing

1. Fork the repository and create a descriptive branch: `git checkout -b feature/my-new-feature`
2. Ensure changes comply with the Apache 2.0 license:
   - Preserve or add the Apache 2.0 license header at the top of new source files.
   - Run `node scripts/validate_catalog.js` to ensure catalog integrity.
   - Sign off your commits using `git commit -s` (DCO requirement).
3. Commit your changes: `git commit -s -m "Add new feature"`
4. Push to your branch and submit a Pull Request.
