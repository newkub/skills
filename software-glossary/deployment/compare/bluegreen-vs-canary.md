# Blue-Green vs Canary Deployment

## เปรียบเทียบ

| หัวข้อ | Blue-Green Deployment | Canary Deployment |
|--------|------------------------|-----------------|
| **Infrastructure** | Double production capacity | Standard capacity + small new |
| **Switch** | Instant cutover | Gradual percentage shift |
| **Rollback** | Immediate switch back | Scale down canary |
| **Cost** | High (2x resources) | Lower (small additional) |
| **Risk** | All-or-nothing | Contained to small % |
| **Testing** | Smoke tests before switch | Real user metrics |
| **Complexity** | Load balancer setup | Traffic shaping, monitoring |
| **Duration** | Minutes | Hours to days |
| **Use Case** | Zero-downtime releases | Risky changes validation |
| **Best For** | Simple, database-compatible | Complex, database migrations |

## เมื่อไหร่ใช้อะไร

- **Blue-Green**: Zero downtime requirement, simple rollbacks, stateless
- **Canary**: Risk mitigation, validation with real traffic, gradual rollout

---

**หมวดหมู่**: Deployment & Delivery
