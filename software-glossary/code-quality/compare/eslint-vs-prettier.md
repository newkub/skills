# ESLint vs Prettier

## เปรียบเทียบ

| หัวข้อ | ESLint | Prettier |
|--------|--------|----------|
| **Purpose** | Code quality, bugs | Code formatting |
| **Rules** | Configurable, extendable | Opinionated |
| **Fixing** | Some auto-fix | Full auto-format |
| **Integration** | IDE, CI, pre-commit | IDE, CI, pre-commit |
| **Config** | Extensive | Minimal |
| **Overlap** | Some formatting rules | No linting |
| **Together** | Prettier for format | ESLint for quality |
| **Speed** | Slower (analysis) | Fast (parsing) |
| **Plugins** | Rich ecosystem | Limited |
| **Best For** | Bug prevention | Consistent style |

## เมื่อไหร่ใช้อะไร

- **ESLint**: Catching bugs, enforcing patterns, code quality
- **Prettier**: Consistent formatting, no style debates

## ใช้ด้วยกัน

Prettier จัด formatting + ESLint จัด code quality (disable ESLint formatting rules)
