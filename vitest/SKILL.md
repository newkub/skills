# Vitest Best Practices

## When to Apply

Apply this skill when writing or reviewing tests using the Vitest framework to ensure they are clear, maintainable, and effective.

- When creating new tests for components, functions, or modules.
- When refactoring existing tests to improve readability and robustness.

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
| :--- | :--- | :--- | :--- |
| 1 | Naming Conventions | `HIGH` | `name-` |
| 2 | Assertions | `HIGH` | `assert-` |
| 3 | Test Structure | `MEDIUM` | `test-` |

## Quick Reference

### 1. Naming Conventions (`HIGH`)

-   `name-test-descriptions` - Write clear and descriptive test names.

### 2. Assertions (`HIGH`)

-   `assert-meaningful-messages` - Use meaningful messages in assertions.

### 3. Test Structure (`MEDIUM`)

-   `test-isolation` - Ensure tests are independent and do not share state.
-   `use-setup-teardown` - Use setup and teardown hooks for common logic.

## How to Use

Each rule is detailed in its own file within the `rules/` directory. The files explain the rationale behind the rule and provide examples of good and bad practices.

-   [`./rules/name-test-descriptions.md`](./rules/name-test-descriptions.md)
-   [`./rules/assert-meaningful-messages.md`](./rules/assert-meaningful-messages.md)
-   [`./rules/test-isolation.md`](./rules/test-isolation.md)
-   [`./rules/use-setup-teardown.md`](./rules/use-setup-teardown.md)
