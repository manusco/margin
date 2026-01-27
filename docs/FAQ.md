# FAQ & Troubleshooting

## ❓ Frequently Asked Questions

### Why `.margin` folder?
This stores your "Project Brain". The `brief_template.md` and `theme-presets.json` live here so you can customize the defaults without breaking the core engine.

### Can I use React/Vue?
**No.** MARGIN is "Static First". We use vanilla HTML/JS because it renders faster in the PDF engine and is easier for AI to write/edit without dependency hell.

---

## 🔧 Troubleshooting

### "Playwright Executable Not Found"
**Fix**: `npx playwright install`
(This installs the headless browser needed for PDF export).

### "Content Cut Off in PDF"
**Fix**: Check the `margin-ui.js` overlay in Dev Mode. If it says "Overflow: Yes", you have too much text.
*   **Action**: Split the slide into two pages.

### "Theme Not Applying"
**Fix**: Ensure `class="theme-swiss"` is on the `<body>` tag, not a `<div>`.
