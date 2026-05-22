# GitOps vs ClickOps

## เปรียบเทียบ

| หัวข้อ | GitOps | ClickOps |
|--------|--------|----------|
| **Interface** | Git repository | Cloud console |
| **Auditing** | Git history | Cloud logs |
| **Approval** | PR/MR review | IAM permissions |
| **Rollback** | Git revert | Manual undo |
| **Drift Detection** | Automated | Manual/never |
| **Consistency** | Infrastructure matches code | Prone to drift |
| **Tooling** | ArgoCD, Flux, Terraform Cloud | AWS Console, Azure Portal |
| **Learning Curve** | Git + tooling | Point and click |
| **Reproducibility** | 100% reproducible | Hard to reproduce |
| **Best For** | Kubernetes, modern infra | Learning, one-off changes |

## เมื่อไหร่ใช้อะไร

- **GitOps**: Production systems, teams, compliance, Kubernetes
- **ClickOps**: Learning, experimentation, emergency fixes
