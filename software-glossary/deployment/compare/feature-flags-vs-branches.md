# Feature Flags vs Feature Branches

## เปรียบเทียบ

| หัวข้อ | Feature Flags | Feature Branches |
|--------|---------------|------------------|
| **Release** | Deploy incomplete features | Deploy only complete features |
| **Control** | Runtime toggle | Compile-time separation |
| **Testing** | Test in production (gradual) | Test in isolation |
| **Risk** | Can ship broken code hidden | Cannot ship until done |
| **Cleanup** | Flag removal debt | Merge and delete branch |
| **Visibility** | Dark launches, gradual rollout | All or nothing |
| **Merge Conflicts** | Minimal (trunk) | High (long branches) |
| **Rollback** | Instant flag off | Revert PR |
| **Complexity** | Infrastructure needed | Git complexity |
| **Cost** | Flag management system | Conflict resolution time |

## เมื่อไหร่ใช้อะไร

- **Feature Flags**: Continuous deployment, A/B testing, gradual rollout
- **Feature Branches**: Simple setups, short features, no flag infrastructure

---

**หมวดหมู่**: Deployment & Delivery
