# The Vibe-Chart Taxonomy (SVG Recipes)

> "Don't use a Bar Chart when you need a Neon Donut."

## 1. The Area Glow (Trend)
*   **Use for**: Growth over time.
*   **The Vibe**: "Everything feels up and to the right."
*   **Tech**: `<path fill="url(#gradient)">`. The gradient must fade to opacity 0 at the bottom.

## 2. The Neon Donut (Distribution)
*   **Use for**: Market Share / Breakdown.
*   **The Vibe**: "Cyberpunk HUD".
*   **Tech**: `stroke-dasharray`. Rotate -90deg. Add a glow filter (`drop-shadow`).

## 3. The Metric Stack (KPIS)
*   **Use for**: Big Number + Tiny Context.
*   **The Vibe**: "Stock Market Terminal".
*   **Layout**:
    *   **Big**: 72px Bold Number (The Hero).
    *   **Small**: 14px "vs last month" (The Context).
    *   **Tiny**: Sparkline below.

## 4. The Heatmap Grid (Density)
*   **Use for**: Activity / Geographic / Frequency.
*   **The Vibe**: military precision.
*   **Tech**: A grid of small squares with varying opacity (alpha).
