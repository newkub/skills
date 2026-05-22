# DRY vs WET

## เปรียบเทียบ

| หัวข้อ | DRY (Don't Repeat Yourself) | WET (Write Everything Twice) |
|--------|-----------------------------|------------------------------|
| **Philosophy** | Eliminate duplication | Tolerate some duplication |
| **Abstraction** | High, shared components | Lower, explicit code |
| **Coupling** | Risk of over-coupling | Loosely coupled |
| **Readability** | Requires navigation | Linear, explicit |
| **Change Cost** | One place to change | Multiple places |
| **Wrong Abstraction** | Expensive to fix | Easy to change |
| **Beginner Friendly** | Harder to trace | Clear, step-by-step |
| **Optimization** | Premature abstraction risk | Duplication until pattern emerges |
| **Best For** | Stable patterns | Evolving requirements |
| **Rule of Three** | Refactor at first duplication | Refactor at third duplication |

## เมื่อไหร่ใช้อะไร

- **DRY**: Stable domains, proven patterns, libraries
- **WET**: Unclear abstractions, evolving code, readability priority
