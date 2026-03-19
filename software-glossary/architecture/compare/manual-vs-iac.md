# Manual Infrastructure vs Infrastructure as Code

## เปรียบเทียบ

| หัวข้อ | Manual (Click-Ops) | Infrastructure as Code |
|--------|-------------------|------------------------|
| **Provisioning** | Console clicking | Terraform/CloudFormation |
| **Repeatability** | Error-prone | Consistent, versioned |
| **Speed** | Fast for one-off | Slow setup, fast repeat |
| **Documentation** | Wiki screenshots | Self-documenting |
| **Rollback** | Manual recovery | Version controlled |
| **Cost Visibility** | Hard to track | Code review, PRs |
| **Drift** | Configuration drift | Detected, reconciled |
| **Team Scale** | Bottleneck on ops | Distributed ownership |
| **Audit** | Screenshots, logs | Git history |
| **Best For** | Experiments, learning | Production, scale |

## เมื่อไหร่ใช้อะไร

- **Manual**: Learning, one-off experiments, emergencies
- **IaC**: Production, compliance, disaster recovery, scale

---

**หมวดหมู่**: Architecture & Planning
