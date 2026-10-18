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
- [Local Development & Running](#local-development--running)
- [Apache License 2.0 Compliance](#apache-license-20-compliance)
  - [Summary of Rights & Conditions](#summary-of-rights--conditions)
  - [Legal Limitations & Disclaimers](#legal-limitations--disclaimers)
  - [Attributions & Dependencies](#attributions--dependencies)
- [Contributing](#contributing)

---

## Features

- **Modern HTML & Native CSS Grid**: Clean, semantic HTML5 structure with zero inline styles and pure native CSS Grid layouts.
- **Fast Client-Side Experience**: Instant search, sorting, and brand filtering with zero page reloads.
- **Deep Technical Specifications**: Detailed breakdowns across Display, Processor, Optics/Camera, Battery/Charging, and Connectivity.
- **Side-by-Side Comparison Engine**: Compare devices simultaneously with sticky, aligned matrix spec tables.
- **App Owner / Admin Mode**: In-browser catalog editor with native grid-constrained modal dialogs to add, edit, export, or reset device data.
- **Zero 3rd-Party UI/UX Frameworks**: Built strictly with [Alpine.js](https://alpinejs.dev/) for declarative reactivity and standard native CSS—no Tailwind, Bootstrap, React, or heavy JS bundles.
- **Ultra-Lean Footprint**: Zero node build pipelines, zero npm lockfiles, zero server requirements. Runs directly in any web browser.

---

## Architecture & Tech Stack

- **Modern HTML5 & Semantic Structure**: Pure semantic elements, accessibility-oriented attributes, and zero inline styles in [`index.html`](index.html).
- **Styling (Modern Native CSS Grid)**: Native CSS Grid layouts, `dvh`-aware viewport dialogs, `scrollbar-gutter: stable`, and a curated red-and-slate design system in [`css/styles.css`](css/styles.css). No CSS frameworks (Tailwind, Bootstrap, etc.) are used.
- **Reactive UI Engine**: [Alpine.js](https://alpinejs.dev) (~15 KB CDN) for lightweight declarative reactive state management. Strictly no other UI or JavaScript frameworks.
- **Application Logic**: Vanilla JavaScript in [`js/app.js`](js/app.js).
- **Data Catalog**: Structured JSON store in [`data/catalog.json`](data/catalog.json).

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
- **Export JSON**: Download the modified dataset as a clean, formatted `catalog.json` file ready to be committed to the repository.
- **Reset to Disk**: Discard in-memory edits and restore the original `data/catalog.json` state.

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

### Data Validation
Run the catalog integrity validator using Node.js or Docker:

- **Using local Node.js:**
  ```bash
  node scripts/validate_catalog.js
  ```
- **Using Docker (if Node is not installed locally):**
  ```powershell
  # PowerShell
  docker run --rm -v ${PWD}:/app -w /app node:alpine node scripts/validate_catalog.js
  ```
  ```bash
  # Linux / macOS / WSL
  docker run --rm -v "$(pwd)":/app -w /app node:alpine node scripts/validate_catalog.js
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

### Attributions & Dependencies

In accordance with Section 4(d) of the Apache License 2.0, all third-party open-source components and font licenses are documented in the **[NOTICE](NOTICE)** file:
- **Alpine.js**: Licensed under the MIT License. Copyright (c) Caleb Porzio.
- **Google Fonts (Outfit & Plus Jakarta Sans)**: Licensed under the SIL Open Font License, Version 1.1.

Every source code file in this repository contains the standard Apache 2.0 copyright and license boilerplate header:
- [`index.html`](index.html)
- [`css/styles.css`](css/styles.css)
- [`js/app.js`](js/app.js)
- [`scripts/validate_catalog.js`](scripts/validate_catalog.js)

Automated license compliance is enforced on every commit and pull request via the [Quality & License Compliance CI](.github/workflows/ci.yml) workflow.

---

## Contributing

1. Fork the repository and create a descriptive branch: `git checkout -b feature/my-new-feature`
2. Ensure changes comply with the Apache 2.0 license:
   - Preserve or add the Apache 2.0 license header at the top of new source files.
   - Run `node scripts/validate_catalog.js` to ensure catalog integrity.
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to your branch and submit a Pull Request.
