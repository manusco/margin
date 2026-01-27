# Quick Start Guide

## Installation

### 1. Clone & Install
```bash
git clone <your-repo>
cd MARGIN
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install
```

### 3. Start Development Server
```bash
npm run dev
```

The dashboard will open at `http://localhost:5173`

## Your First Document

### Create a New Project
```bash
mkdir projects/my-report
touch projects/my-report/index.html
```

### Basic Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Report</title>
    <script type="module" src="/framework/margin-ui.js"></script>
    <link rel="stylesheet" href="/framework/main.css">
</head>
<body>
    <div class="document a4-portrait">
        
        <!-- Cover Page -->
        <section class="page bg-brand-void text-white">
            <div class="safety-zone"></div>
            <div class="content p-20 flex flex-col justify-center h-full">
                <h1 class="text-6xl font-black">Hello MARGIN</h1>
                <p class="text-2xl text-brand-electric mt-8">Subtitle goes here</p>
            </div>
        </section>

        <!-- Content Page -->
        <section class="page bg-white">
            <div class="safety-zone"></div>
            <div class="content p-12">
                <h2 class="text-4xl font-bold mb-8">Chapter 1</h2>
                <p class="text-lg leading-relaxed">Your content here...</p>
            </div>
        </section>

    </div>
</body>
</html>
```

### Add to Build Config
Edit `vite.config.js`:
```javascript
input: {
  main: resolve(__dirname, 'index.html'),
  'ebook-01': resolve(__dirname, 'projects/ebook-01/index.html'),
  'my-report': resolve(__dirname, 'projects/my-report/index.html') // Add this
}
```

### Preview
Navigate to `http://localhost:5173/projects/my-report/index.html`

### Export to PDF
```bash
npm run build
node framework/pdf-engine.js dist/projects/my-report/index.html dist/my-report.pdf
```

## Using Themes

### Switch Aesthetic Instantly
```html
<!-- Default: Tech-Noir -->
<body>

<!-- Clean Swiss -->
<body class="theme-swiss">

<!-- Luxury Dark -->
<body class="theme-luxury">

<!-- Academic Paper -->
<body class="theme-paper">
```

## Using Snippets

In VS Code, type these shortcuts + Tab:

- `margin-page` → Standard page
- `margin-cover` → Cover page
- `margin-chart-bar` → Bar chart
- `margin-grid-2` → Two columns

## Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Export specific project to PDF
node framework/pdf-engine.js dist/projects/[name]/index.html dist/output.pdf

# Export as 16:9 presentation
node framework/pdf-engine.js dist/projects/deck/index.html dist/slides.pdf presentation
```

## Next Steps

1. Read `docs/FRAMEWORK_GUIDE.md` for deep dive
2.### 1. MARGIN Masterclass (`projects/ebook-01`)
 for A4 example
3. Explore `projects/deck-01` for 16:9 + gating example
4. Customize `framework/main.css` for your brand
MARGIN is designed for the Resonance Framework ecosystem. See `RESONANCE_GUIDELINES.md` for contribution standards.
