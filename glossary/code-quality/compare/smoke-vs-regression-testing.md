# Smoke Testing vs Regression Testing

## เปรียบเทียบ

| หัวข้อ | Smoke Testing | Regression Testing |
|--------|---------------|------------------|
| **Purpose** | Quick health check | Prevent old bugs |
| **Scope** | Critical paths only | Broad coverage |
| **Speed** | Minutes | Hours |
| **Timing** | After deploy, build | Before release |
| **Failures** | Stop pipeline | Fix and rerun |
| **Maintenance** | Minimal | High |
| **Tooling** | Simple scripts | Full test suite |
| **Automation** | Essential | Essential |
| **Confidence** | Basic | Comprehensive |
| **Best For** | CI/CD gates | Release validation |

## เมื่อไหร่ใช้อะไร

- **Smoke Testing**: Post-deploy checks, build validation, quick feedback
- **Regression Testing**: Release preparation, comprehensive validation
