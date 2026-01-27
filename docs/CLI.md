# Command Line Interface (CLI)

> Note: Currently MARGIN runs via Agent Prompts, but these prompts map to these conceptual commands.

## Workflows

### `research`
*   **Usage**: `"Run the research workflow for [TOPIC]"`
*   **Input**: Topic String.
*   **Output**: `knowledge_dump.md`, `content_brief.md`.

### `draft`
*   **Usage**: `"Draft the deck based on the brief"`
*   **Input**: `content_brief.md`.
*   **Output**: `index.html`.

### `design`
*   **Usage**: `"Apply the [THEME] theme"`
*   **Input**: `index.html`, Theme Name (e.g., 'Swiss').
*   **Output**: Modified `index.html`.

### `proofread`
*   **Usage**: `"Run the proofread audit"`
*   **Input**: `index.html`.
*   **Checks**:
    *   Slop Words (Delve, Leverage).
    *   Overflow.
    *   Broken Links.
