---
description: Transform a vague topic into a strategic "Content Brief" using deep research and synthesis.
---

# Workflow: Deep Research Strategy ("The Truth Seeker")

> **Objective**: To move beyond "Google Search" and uncover the *Contrarian Truth* that will anchor the narrative.
> **Philosophy**: "If you write what everyone else writes, you are noise. We are Signal."

## Phase 1: The Hunt (margin-researcher)

1.  **Define the Vector**:
    *   What is the specific topic? (e.g., "The future of DevTools")
    *   What is the *suspected* truth? (Hypothesis)

2.  **Execute Deep Dive**:
    *   **Action**: Use `margin-researcher` to scrape high-signal sources (Engineering Blogs, Whitepapers, GitHub Discussions).
    *   **Constraint**: generic SEO blogs (HubSpot/Neil Patel) are BANNED. Look for primary data.
    *   **Output**: A raw `knowledge_dump.md` file containing at least 20 verified data points and quotes.

3.  **Triangulation**:
    *   **Action**: Verify every potential "Lead Stat" across 3 independent sources.
    *   **Verification**: If a stat is > 2 years old, it is dead. Find the replacement.

## Phase 2: The Synthesis (margin-analyst)

4.  **Find the Villain**:
    *   **Action**: `margin-analyst` reads the dump to identify the *Status Quo Problem*.
    *   *Example*: "The villain isn't 'slow builds'; the villain is 'Context Switching'."

5.  **Construct the Brief**:
    *   **Action**: Fill out `.margin/brief_template.md`.
    *   **Crucial Step**: Define the "Spark" (The moment the user realizes they are wrong).

## Success Criteria (The "1% Check")

*   [ ] Does the Brief contain at least one point that would make an expert say "I hadn't thought of that"?
*   [ ] Is the "Villain" a tangible pain, not an abstract concept?
*   [ ] Are there 3+ hard numbers backing functionality?

## Usage
Run this workflow by instructing the agent:
`"Run the research workflow for the topic: [TOPIC]"`
