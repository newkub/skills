# Test-First vs Test-After

## เปรียบเทียบ

| หัวข้อ | Test-First | Test-After |
|--------|-----------|------------|
| **Timing** | Write test before code | Write test after code |
| **Design** | Forces testable design | May expose design issues |
| **Coverage** | Higher by default | Requires discipline |
| **Confidence** | Immediate verification | Delayed verification |
| **Debugging** | Test guides implementation | Tests verify correctness |
| **Refactoring** | Safe from start | Risky without tests |
| **Discipline** | Required | Optional |
| **Learning** | Steeper curve | Easier start |
| **Best For** | Complex logic, TDD teams | Legacy code, exploration |
| **Red-Green** | Required cycle | Not applicable |

## เมื่อไหร่ใช้อะไร

- **Test-First**: TDD practitioners, complex algorithms, new features
- **Test-After**: Legacy code, spikes, tight deadlines with known requirements
