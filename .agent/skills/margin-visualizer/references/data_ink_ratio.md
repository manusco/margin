# Tufte's Data-Ink Ratio (Visual Efficiency)

> "Above all else show the data." - Edward Tufte

## The Formula
$$DataInkRatio = \frac{\text{Ink used to display data}}{\text{Total ink used to print the graphic}}$$

## The Purge
Remove anything that is not Data:
1.  **Remove the Backgrounds**: No grey boxes behind charts.
2.  **Remove the Grids**: Unless asking for specific value lookup, grid lines are noise.
3.  **Remove the Borders**: A chart doesn't need a box.
4.  **Remove the Legends**: Label the lines directly. Don't make the eye jump back and forth.
5.  **Remove 3D Effects**: 3D bars lie about the value.

## Sparklines
Small, intense, simple dataframes embedded in text.
*Example*: "Revenue is up <svg>...</svg> (20%)".
Use these for density.
