# Canary Release vs Blue-Green Deployment

## เปรียบเทียบ

| หัวข้อ | Canary Release | Blue-Green Deployment |
|--------|----------------|----------------------|
| **Traffic Shift** | Gradual percentage | Instant switch |
| **Risk Level** | Low (limited exposure) | Medium (all users) |
| **Rollback** | Stop canary traffic | Switch back to blue |
| **Infrastructure** | Standard + small canary | Double capacity |
| **Testing** | Real user validation | Smoke tests |
| **Duration** | Hours to days | Minutes |
| **Monitoring** | Extended observation | Health checks |
| **Cost** | Lower | Higher (2x capacity) |
| **Complexity** | Traffic routing | Load balancer setup |
| **Best For** | Risk mitigation, validation | Zero downtime, simple rollback |

## เมื่อไหร่ใช้อะไร

- **Canary**: Risky changes, validation needed, gradual adoption
- **Blue-Green**: Zero downtime requirement, simple rollbacks
