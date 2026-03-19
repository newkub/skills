# Husky vs lint-staged

## เปรียบเทียบ

| หัวข้อ | Husky | lint-staged |
|--------|-------|-------------|
| **Purpose** | Git hooks manager | Run linters on staged files |
| **Level** | Hook installer | File runner |
| **Together** | Often paired | Often paired |
| **Config** | .husky/ directory | package.json config |
| **Speed** | Hook overhead | Only staged files |
| **Scope** | All git hooks | Pre-commit linting |
| **Migration** | v4 to v8 breaking | Consistent |
| **Alternative** | Native git hooks | git pre-commit |
| **Best For** | Managing all hooks | Optimizing pre-commit |
| **Usage** | npm prepare | npx lint-staged |

## เมื่อไหร่ใช้อะไร

- **Husky**: All git hooks (commit-msg, pre-push, etc.)
- **lint-staged**: Fast pre-commit linting only
- **Together**: Husky runs lint-staged for optimal pre-commit
