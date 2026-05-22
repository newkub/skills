# Unit Testing vs E2E Testing

## เปรียบเทียบ

| หัวข้อ | Unit Testing | E2E Testing |
|--------|--------------|-------------|
| **Scope** | Isolated functions | Full user flows |
| **Speed** | Fast (milliseconds) | Slow (seconds) |
| **Cost** | Low maintenance | High maintenance |
| **Confidence** | Implementation | User behavior |
| **Debugging** | Easy, pinpoint | Hard, distributed |
| **Flakiness** | Rare | Common |
| **Tooling** | Jest, Vitest, xUnit | Playwright, Cypress |
| **Test Pyramid** | Base (70%) | Top (10%) |
| **Setup** | Minimal | Complex |
| **Best For** | Logic, utilities | Critical paths |

## เมื่อไหร่ใช้อะไร

- **Unit Testing**: Algorithms, utilities, TDD, fast feedback
- **E2E Testing**: User flows, cross-system, critical validation
