# Unit Tests First vs Integration Tests First

## เปรียบเทียบ

| หัวข้อ | Unit Tests First | Integration Tests First |
|--------|------------------|-------------------------|
| **Scope** | Isolated functions | End-to-end workflows |
| **Speed** | Fast (ms) | Slow (seconds) |
| **Confidence** | Implementation detail | User behavior |
| **Refactoring** | Safe, catch logic changes | Brittle to UI changes |
| **Feedback** | Immediate | Delayed |
| **Debugging** | Pinpoint location | Black box |
| **Setup** | Minimal mocks | Infrastructure needed |
| **Coverage** | High percentage | Lower percentage |
| **Test Pyramid** | Base (70%) | Middle/Top (20%) |
| **Best For** | Algorithms, utilities | APIs, user flows |

## เมื่อไหร่ใช้อะไร

- **Unit First**: Libraries, algorithms, TDD practitioners
- **Integration First**: API development, user-centric, behavior validation

---

**หมวดหมู่**: Quality & Testing
