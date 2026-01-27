---
description: Ensure the deck is free of errors, jargon, and design flaws before export.
---

# Workflow: The Final Proofread ("The White Glove Audit")

> **Objective**: A final quality gate before the PDF leaves the building.

## Output
A `QA_REPORT.md` listing critical issues.

## 1. The Slop Check (margin-copywriter)
1.  **Scan**: Read `index.html`.
2.  **Verify**: Zero instances of: "delve", "leverage", "comprehensive".
3.  **Check**: Readability score < Grade 8.

## 2. The Visual Check (margin-designer)
1.  **Scan**: Check for overflow warnings.
2.  **Verify**: All Theme Tokens (`--color-brand-electric`) are resolved (no default blue).
3.  **Check**: Links work (if PDF is digital).

## 3. The Fact Check (margin-analyst)
1.  **Scan**: Check all numbers in charts match the numbers in the text.
2.  **Verify**: No "XX%" placeholders.

## Usage
`"Run the proofread workflow on the current deck."`
