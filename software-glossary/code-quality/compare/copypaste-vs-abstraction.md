# Copy-Paste vs Abstraction

## เปรียบเทียบ

| หัวข้อ | Copy-Paste | Abstraction |
|--------|-----------|-------------|
| **Speed** | Immediate | Requires design |
| **Duplication** | High | Eliminated |
| **Risk** | Drift between copies | Wrong abstraction |
| **Coupling** | None | Introduces coupling |
| **Flexibility** | Per-case customization | Unified behavior |
| **Testing** | Multiple test suites | Single test suite |
| **Refactoring** | Painful (many places) | Single place |
| **Indirection** | None | Navigation required |
| **Best For** | One-off, diverging needs | Reusable patterns |
| **Maintainability** | Poor long-term | Good with right abstraction |

## เมื่อไหร่ใช้อะไร

- **Copy-Paste**: Prototypes, diverging requirements, short-lived code
- **Abstraction**: Proven patterns, stable requirements, shared libraries
