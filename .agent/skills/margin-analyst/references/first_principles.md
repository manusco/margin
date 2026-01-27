# The First Principles Analysis (Root Cause)

> "Boil things down to the most fundamental truths and reason up from there."

## The 5 Whys (Recursive Interrogation)

**Problem**: The application is slow.
1.  **Why?**: The database query takes 2 seconds.
2.  **Why?**: It is scanning the whole table.
3.  **Why?**: There is no index on `user_id`.
4.  **Why?**: The migration failed silently last week.
5.  **Why?**: **Root Cause**: Our CI/CD pipeline swallows migration errors.

## The Output
The Analyst does not report "Add an index".
The Analyst reports "Fix the CI/CD pipeline error handling".

## Physics vs. Analogy
*   **Analogy**: "We should do X because Uber does X." (Lazy).
*   **Physics**: "We should do X because the latency cost of Y is technically unavoidable due to the speed of light/network constraints." (First Principle).
