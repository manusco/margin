# Troubleshooting Guide

## Common Issues & Solutions

### 1. Playwright Installation Error

**Error Message**:
```
Executable doesn't exist at C:\Users\...\chrome-headless-shell.exe
Please run: npx playwright install
```

**Root Cause**: Playwright browsers not installed after `npm install`.

**Solution**:
```bash
npx playwright install
```

**Prevention**: Add to `package.json` postinstall:
```json
"scripts": {
  "postinstall": "playwright install chromium"
}
```

---

### 2. Content Overflow in PDF

**Symptom**: Text or images cut off in exported PDF.

**Detection**: 
- Red box shadow appears around page in browser preview
- Dev overlay shows "Overflows: 1" (or higher)

**Root Cause**: Content height exceeds page dimensions.

**Solutions**:
1. **Reduce content**: Remove text or images
2. **Increase pages**: Split into multiple `<section class="page">`
3. **Adjust typography**: Reduce font sizes
4. **Check margins**: Ensure content stays within `.safety-zone`

**Example Fix**:
```html
<!-- Before: Too much content -->
<section class="page">
  <div class="content p-12">
    <p class="text-2xl">Very long text...</p>
    <p class="text-2xl">More text...</p>
    <p class="text-2xl">Even more...</p>
  </div>
</section>

<!-- After: Split across pages -->
<section class="page">
  <div class="content p-12">
    <p class="text-2xl">Very long text...</p>
  </div>
</section>
<section class="page">
  <div class="content p-12">
    <p class="text-2xl">More text...</p>
  </div>
</section>
```

---

### 3. Tailwind Classes Not Working

**Symptom**: Classes like `bg-brand-electric` have no effect.

**Root Cause**: Missing Tailwind v4 configuration.

**Solution**: Verify `vite.config.js`:
```javascript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(), // Must be present
  ],
})
```

**Also check**: No `tailwind.config.js` or `postcss.config.js` should exist (v4 uses CSS-only config).

---

### 4. Theme Not Applying

**Symptom**: `theme-swiss` class doesn't change colors.

**Root Cause**: Theme class applied to wrong element.

**Incorrect**:
```html
<div class="document theme-swiss">
```

**Correct**:
```html
<body class="theme-swiss">
  <div class="document">
```

---

### 5. Dev Overlay Not Showing

**Symptom**: No "MARGIN Dev" panel in top-right.

**Root Cause**: Not running on localhost or missing `?preview=true`.

**Solution**: 
- Ensure dev server is running (`npm run dev`)
- Access via `http://localhost:5173` (not file://)
- Or add `?preview=true` to URL

---

### 6. PDF Export Fails with "Cannot find module"

**Error**:
```
Error: Cannot find module 'pagedjs'
```

**Root Cause**: Dependencies not installed or wrong Node version.

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Verify Node version (must be >=18)
node --version
```

---

### 7. Fonts Not Loading in PDF

**Symptom**: PDF uses fallback fonts instead of Google Fonts.

**Root Cause**: Playwright doesn't wait for font loading.

**Solution**: Add font preload in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
```

**Alternative**: Use `@font-face` with local files for guaranteed loading.

---

### 8. Build Warnings About Chunk Size

**Warning**:
```
Some chunks are larger than 500 kB after minification
```

**Root Cause**: Paged.js is a large library (~500kb).

**Impact**: None for static deployment (acceptable).

**Optional Fix** (if needed):
```javascript
// vite.config.js
build: {
  chunkSizeWarningLimit: 600, // Increase threshold
}
```

---

### 9. Safety Zone Not Visible

**Symptom**: Blue dashed border doesn't appear.

**Root Cause**: 
- Not in dev mode
- Or `.safety-zone` div missing

**Solution**:
1. Ensure running on localhost
2. Verify HTML structure:
```html
<section class="page">
  <div class="safety-zone"></div> <!-- Must be present -->
  <div class="content">...</div>
</section>
```

---

### 10. Gating Overlay Persists After Unlock

**Symptom**: Email form keeps showing even after submission.

**Root Cause**: localStorage key mismatch.

**Solution**: Check `STORAGE_KEY` in HTML matches:
```javascript
const STORAGE_KEY = 'margin_unlocked_deck_01'; // Must match
localStorage.setItem(STORAGE_KEY, 'true');
```

**Debug**: Open browser console and check:
```javascript
localStorage.getItem('margin_unlocked_deck_01')
// Should return 'true'
```

---

## Performance Issues

### Slow PDF Generation

**Symptom**: Export takes >10 seconds.

**Causes**:
- Too many pages (>20)
- Large images (>2MB each)
- Complex SVG animations

**Solutions**:
1. Optimize images (use WebP, compress)
2. Simplify SVG paths
3. Remove animations in print mode (already handled by `main.css`)

### Slow Browser Preview

**Symptom**: Laggy scrolling in dev mode.

**Cause**: Too many Paged.js re-renders.

**Solution**: Reduce auto-save frequency in your editor.

---

## Getting Help

If issue persists:
1. Check `docs/FRAMEWORK_GUIDE.md` for architecture details
2. Review example projects (`projects/ebook-01`, `projects/deck-01`)
3. Inspect browser console for JavaScript errors
4. Verify all dependencies installed: `npm list`
