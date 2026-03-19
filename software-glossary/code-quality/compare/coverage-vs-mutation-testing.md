# Code Coverage vs Mutation Testing

## เปรียบเทียบ

| หัวข้อ | Code Coverage | Mutation Testing |
|--------|---------------|------------------|
| **Metric** | Lines/branches hit | Mutants killed |
| **Purpose** | Measure test execution | Measure test quality |
| **False Confidence** | High coverage, weak tests | Better indicator |
| **Speed** | Fast to collect | Slow (many mutations) |
| **Value** | "What's tested" | "How well it's tested" |
| **Target** | 80%+ common | 70%+ mutants killed |
| **Tooling** | Built into test runners | Stryker, Infection |
| **CI Cost** | Minimal | Significant |
| **Use Case** | Baseline metric | Quality gate |
| **Best For** | Tracking trends | Critical systems |

## เมื่อไหร่ใช้อะไร

- **Code Coverage**: Baseline tracking, CI gates, general projects
- **Mutation Testing**: High-assurance systems, test quality focus
