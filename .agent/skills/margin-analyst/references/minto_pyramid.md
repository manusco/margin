# The Minto Pyramid Principle (Logic Structure)

> "Ideas in writing should always form a pyramid under a single thought."

## Top-Down Logic

1.  **The Summit (The Key Takeaway)**
    *   Start with the answer.
    *   *Example*: "We should switch to Postgres." (Not "Here is a history of databases...")

2.  **The Key Line (The Main Arguments)**
    *   Why? Because:
        1.  It handles our JSON scale better. (Argument A)
        2.  It is cheaper than DynamoDB. (Argument B)
        3.  The team already knows SQL. (Argument C)

3.  **The Support (The Data)**
    *   **Evidence for A**: Benchmark result X.
    *   **Evidence for B**: Pricing calculator snapshot Y.
    *   **Evidence for C**: Internal survey Z.

## The Rule of MECE
**Mutually Exclusive, Collectively Exhaustive.**
*   **Mutually Exclusive**: Arguments A, B, and C do not overlap.
*   **Collectively Exhaustive**: Together, they cover the *entire* reason space. There is no missing "Argument D".
