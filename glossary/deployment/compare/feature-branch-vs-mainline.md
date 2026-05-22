# Feature Branch vs Mainline Development

## เปรียบเทียบ

| หัวข้อ | Feature Branch | Mainline Development |
|--------|----------------|----------------------|
| **Branching** | Long-lived branches | Short-lived or trunk |
| **Integration** | Merge at end | Continuous |
| **Conflict Resolution** | Large, complex merges | Small, frequent |
| **Risk** | Integration hell | Always shippable |
| **Feature Flags** | Not needed | Required |
| **CI/CD** | Per-branch pipelines | Single trunk pipeline |
| **Code Review** | Pre-merge | Post-commit or pair |
| **Best For** | Traditional workflows | Continuous delivery |
| **Complexity** | Higher | Lower |
| **Team Size** | Any | Experienced teams |

## เมื่อไหร่ใช้อะไร

- **Feature Branch**: Traditional development, long features, stability needs
- **Mainline**: Continuous delivery, DevOps culture, rapid iteration
