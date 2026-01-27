# MARGIN: The Manual

## Table of Contents
1.  [Concept](#concept)
2.  [Installation](#installation)
3.  [The Workflow Loop](#the-workflow-loop)
4.  [Design System](#design-system)
5.  [Deployment](#deployment)

---

## 1. Concept

MARGIN is a **"Static-First Publishing Engine"**.

It solves the problem: **"I need to ship a high-conversion Lead Magnet that is deeply researched, strategically valuable, and looks expensive—but I don't have 3 weeks to research, write, and design it."**

**Who is this for?**
*   **Growth Architects** who need assets to feed the funnel.
*   **Founders** raising capital who need a deck that stands out.
*   **Marketers** who are tired of fighting with Canva.

It treats content creation like a **Manufacturing Pipeline**:
*   **Compile** your research into a brief.
*   **Build** the narrative structure.
*   **Deploy** to PDF and Web simultaneously.
*   **Vite**: For instant feedback.
*   **Paged.js**: For print layout (margins, page breaks).
*   **Playwright**: For high-fidelity export.
*   **AI Agents**: For content generation.

---

## 2. Installation

```bash
# 1. Clone
git clone https://github.com/manusco/margin
cd margin

# 2. Install Deps
npm install

# 3. Install Browser Binary
npx playwright install
```

---

## 3. The Workflow Loop

You don't just "write". You **compile** a narrative.

### Step A: Research
*   **Command**: `margin research "Topic"`
*   **Agent**: `margin-researcher`
*   **Output**: `.margin/briefs/[topic].md`
*   **Why**: To find the "Contrarian Truth" before you type a word.

### Step B: Draft
*   **Command**: `margin draft "Topic"`
*   **Agent**: `margin-storyteller`
*   **Output**: `projects/[project-name]/index.html`
*   **Why**: To structure the 5-Beat Narrative (Villain -> Spark -> Guide -> Proof -> Gift).

### Step C: Design
*   **Command**: `margin design "Theme Name"`
*   **Agent**: `margin-designer`
*   **Output**: Styled HTML with "Topological Betrayal".
*   **Why**: To look expensive.

---

## 4. Design System

### The "Margin" Classes
We provide utility classes that abstract complex CSS.

*   `.bg-noise`: Adds film grain.
*   `.glass-panel`: Adds backdrop-blur and border.
*   `.text-brand-electric`: The primary action color.

### The "Safety Zone"
Every page has a `.safety-zone` div.
*   **Blue Border** (Dev Mode): Shows safe printable area.
*   **Invisible** (Print Mode): Ensures no text gets cut off.

---

## 5. Deployment

### Static Hosting
Upload the `dist/` folder to any static host (Vercel, Netlify, FTP).
*   The HTML version works as a slide deck.
*   The PDF version is a download link.

### PDF Export
```bash
npm run export-pdf
```
This runs a headless browser, waits for fonts to load, and screenshots every page at 300 DPI.
