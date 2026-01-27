# The Motion Trinity (Interaction Design)

> "Nothing in nature teleports. Why should your UI?"

## The 3 States of Existence
Every interactive element must have definitions for:

1.  **Entrance (The Hello)**
    *   How does it appear?
    *   *Standard*: Fade in + Slide Up (20px).
    *   *Duration*: 400ms.
    *   *Easing*: `cubic-bezier(0.16, 1, 0.3, 1)` (The "Apple" ease).

2.  **Hover (The Handshake)**
    *   How does it acknowledge me?
    *   *Standard*: Scale x 1.02 + Brightness + 10%.
    *   *Constraint*: Must happen instantly (Duration < 100ms).

3.  **Active/Click (The Action)**
    *   How does it confirm the command?
    *   *Standard*: Scale x 0.98. (Tactile recoil).

## Choreography (Stagger)
Never animate a list of items all at once (Wall of motion).
**Stagger** them by 50ms - 100ms.
*   Item 1: 0ms
*   Item 2: 50ms
*   Item 3: 100ms
This guides the eye down the list.
