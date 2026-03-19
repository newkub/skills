# Static Analysis vs Dynamic Analysis

## เปรียบเทียบ

| หัวข้อ | Static Analysis | Dynamic Analysis |
|--------|-----------------|------------------|
| **Timing** | Compile/build time | Runtime |
| **Execution** | No code execution | Requires running code |
| **Coverage** | All code paths | Executed paths only |
| **Performance** | No runtime impact | Overhead |
| **False Positives** | Common | Rare |
| **Examples** | ESLint, TypeScript, Sonar | Profiling, monitoring |
| **Bugs Found** | Potential issues | Actual behavior |
| **Cost** | Early (cheap) | Late (expensive) |
| **Tooling** | IDE integration | APM, profilers |
| **Best For** | Prevention, standards | Performance, real issues |

## เมื่อไหร่ใช้อะไร

- **Static Analysis**: Code quality gates, standards, early prevention
- **Dynamic Analysis**: Performance tuning, production issues, verification
