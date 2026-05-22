# Blue-Green vs A/B Testing

## เปรียบเทียบ

| หัวข้อ | Blue-Green Deployment | A/B Testing |
|--------|------------------------|-------------|
| **Purpose** | Zero-downtime deploy | Compare variants |
| **Traffic Split** | 100% switch or instant | Percentage-based |
| **Duration** | Minutes | Days to weeks |
| **Metrics** | Health checks, errors | Business metrics, conversion |
| **Decision** | Smoke test passes | Statistical significance |
| **Rollback** | Instant switch | Stop test |
| **Infrastructure** | Double capacity needed | Normal capacity |
| **Code Difference** | Same code, different deploy | Different code variants |
| **Use Case** | Safe deployment | Product optimization |
| **Complexity** | Load balancer setup | Analytics integration |

## เมื่อไหร่ใช้อะไร

- **Blue-Green**: Risk-free deployments, quick rollbacks, infrastructure changes
- **A/B Testing**: Product decisions, UX optimization, conversion improvement
