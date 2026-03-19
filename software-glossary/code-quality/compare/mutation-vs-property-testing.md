# Mutation Testing vs Property-Based Testing

## เปรียบเทียบ

| หัวข้อ | Mutation Testing | Property-Based Testing |
|--------|------------------|------------------------|
| **Approach** | Mutate code, check tests | Generate inputs, verify properties |
| **Coverage** | Test suite quality | Edge case discovery |
| **Examples** | Stryker, Infection | Hypothesis, fast-check |
| **Randomness** | Deterministic mutations | Random input generation |
| **Shrinking** | N/A | Find minimal failing case |
| **Cost** | Expensive (many mutants) | Cheap per test, many iterations |
| **Learning** | Understand mutation operators | Define invariants |
| **False Positives** | Equivalent mutants | N/A |
| **Best For** | Test quality assessment | Input validation, algorithms |
| **Together** | Assure test quality | Discover missing cases |

## เมื่อไหร่ใช้อะไร

- **Mutation Testing**: Evaluating test suite effectiveness, quality gates
- **Property-Based Testing**: Finding edge cases, testing invariants
