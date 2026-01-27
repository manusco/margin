<div align="center">

# MARGIN - The Lead Magnet Framework 
### The AI-Native Publishing Engine

[Manual](docs/MANUAL.md) · [CLI Reference](docs/CLI.md) · [Agent Skills](.agent/skills/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Public Beta (v0.1)](https://img.shields.io/badge/Status-Public_Beta_(v0.1)-blueviolet.svg)]()
[![Engine: Vite](https://img.shields.io/badge/Engine-Vite_Is_Fast-green.svg)]()

</div>

---

## 🛑 Stop dragging rectangles. Start compiling narratives.

**MARGIN** is a static-first framework for **Growth Architects** who hate generic templates. It transforms **Raw Ideas** into **High-Conversion Assets** (Research → Copy → Design) using a built-in "Newsroom" of 6 specialized AI Agents.

*   **Input**: A raw "Brain Dump" or strategic brief.
*   **Process**: A pipeline of 6 specialized AI Agents (Researcher -> Analyst -> Storyteller -> Copywriter -> Visualizer -> Designer).
*   **Output**: A single HTML file that works as a **Responsive Slide Deck** AND a **Pixel-Perfect PDF**.

---

## ✨ Features

### 1. The "Newsroom" Architecture
We deploy a team of 6 specialist agents with strictly defined roles and **Refusal Protocols**.
*   **The Analyst** refuses to write until a "Contrarian Truth" is found.
*   **The Copywriter** burns corporate jargon ("delve", "leverage") on sight.
*   **The Designer** uses "Topological Betrayal" to break grid patterns.

### 2. Vibe-Responsive Layouts
One codebase, two outputs.
*   **On Screen**: Scrollable, interactive, shadow-rich presentation.
*   **On Print**: 300 DPI, bleed-ready PDF (CMYK-safe).
*   *Powered by Paged.js and Playwright.*

### 3. Atmospheric Utilities
Forget flat colors. MARGIN ships with a CSS engine for:
*   **Noise & Grain** (Texture)
*   **Glassmorphism** (Depth)
*   **HSL Math** (Algorithmic Color Harmony)

---

## 🧠 The AI Agents

The `.agent/skills` folder contains the "Brain" of the framework.

| Agent | Role | The "1% Skill" |
| :--- | :--- | :--- |
| **`margin-researcher`** | The Scout | **Triangulation Protocol**: Verifies facts across 3 sources. |
| **`margin-analyst`** | The Synthesizer | **First Principles**: Finds the root cause. |
| **`margin-storyteller`** | The Screenwriter | **5-Beat Structure**: Maps facts to narrative arc. |
| **`margin-copywriter`** | The Editor | **Hemingway Law**: Enforces Grade 8 readability. |
| **`margin-visualizer`** | The Data Artist | **Tufte’s Ratio**: Generates SVG charts with max data, min ink. |
| **`margin-designer`** | Creative Director | **Topological Betrayal**: Breaks the grid. |
| **`margin-librarian`** | The Archivist | **Version Control**: Manage changelogs. |

---

## ⚡ Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/manusco/margin.git
cd margin
npm install
npx playwright install
```

### 2. Run a Workflow
Use your AI editor (Cursor/Windsurf) to run the standard workflows defined in `.agent/workflows/`.

**Research Phase:**
```bash
"Run the research workflow for the topic: 'The Death of SaaS'."
```

**Draft Phase:**
```bash
"Draft the deck based on the research brief."
```

**Design Phase:**
```bash
"Apply the 'Swiss International' theme."
```

### 3. Export
```bash
npm run export-pdf
```

---

## 📂 The Architecture

```text
/margin-root
├── .agent/              # The AI "Brain" (Skills & Workflows)
├── .margin/             # Framework Config (Themes, Templates)
├── framework/           # The Engine (CSS/JS core)
├── projects/            # YOUR DOCUMENTS
│   ├── _template/       # Clone this to start
│   └── deck-01/         # Your Project
└── index.html           # Dashboard
```

---

## 🤝 Contributing

We welcome contributions to the **Skills** and **Reference Libraries**.
See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to add new protocols or themes.

---

<div align="center">
Built with 🖤 by the Resonance Team.
</div>