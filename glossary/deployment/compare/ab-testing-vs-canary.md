# A/B Testing vs Canary Releases

## เปรียบเทียบ

| หัวข้อ | A/B Testing | Canary Releases |
|--------|-------------|-----------------|
| **Purpose** | Compare variants for metrics | Reduce blast radius |
| **Traffic Split** | 50/50 or multi-variant | Small percentage |
| **Metrics** | Conversion, engagement | Error rates, latency |
| **Audience** | Random users | Geographic or random |
| **Duration** | Days to weeks | Minutes to hours |
| **Decision** | Statistical significance | Automated rollback threshold |
| **Implementation** | Feature flag + analytics | Load balancer + monitoring |
| **Risk** | Business risk | Technical risk |
| **Tools** | LaunchDarkly, Optimizely | Spinnaker, Argo Rollouts |
| **Outcome** | Winner takes all | Gradual rollout |

## เมื่อไหร่ใช้อะไร

- **A/B Testing**: UI changes, business metrics, conversion optimization
- **Canary**: Infrastructure changes, risky deployments, system stability

---

**หมวดหมู่**: Deployment & Delivery
