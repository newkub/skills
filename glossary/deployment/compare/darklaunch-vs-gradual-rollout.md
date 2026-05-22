# Dark Launch vs Gradual Rollout

## เปรียบเทียบ

| หัวข้อ | Dark Launch | Gradual Rollout |
|--------|-------------|-----------------|
| **Visibility** | Invisible to users | Visible to subset |
| **Traffic** | Shadow/dual write | Real production traffic |
| **Risk** | Zero user impact | Minimal user impact |
| **Purpose** | Test in production safely | Validate with real users |
| **Data** | Compare responses | Collect user feedback |
| **Complexity** | Higher (infrastructure) | Lower (feature flags) |
| **Duration** | Hours to days | Days to weeks |
| **Metrics** | System performance | User metrics |
| **Rollback** | Stop shadow traffic | Reduce percentage |
| **Best For** | Critical systems, refactors | New features, experiments |

## เมื่อไหร่ใช้อะไร

- **Dark Launch**: Critical refactors, performance testing, zero-risk validation
- **Gradual Rollout**: New features, user validation, risk mitigation
