# Scheduled vs On-Demand Deployment

## เปรียบเทียบ

| หัวข้อ | Scheduled Deployment | On-Demand Deployment |
|--------|---------------------|------------------------|
| **Trigger** | Time-based (nightly, weekly) | Event-based (merge) |
| **Planning** | Requires coordination | Automatic |
| **Window** | Maintenance window | Anytime |
| **Risk** | Batch changes | Small, isolated changes |
| **Downtime** | Planned, communicated | Minimized |
| **Emergency** | Hotfix process | Just deploy |
| **Automation** | Release management | Full CI/CD |
| **Testing** | Regression suites | Continuous testing |
| **Best For** | Legacy, batch releases | Modern web, SaaS |
| **Speed to Market** | Days to weeks | Minutes to hours |

## เมื่อไหร่ใช้อะไร

- **Scheduled**: Enterprise, compliance, planned maintenance
- **On-Demand**: Continuous delivery, SaaS, rapid iteration
