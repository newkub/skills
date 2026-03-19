# Rolling Deployment vs Recreate Deployment

## เปรียบเทียบ

| หัวข้อ | Rolling Deployment | Recreate Deployment |
|--------|-------------------|-------------------|
| **Availability** | Zero downtime | Downtime during deploy |
| **Instances** | Gradual replacement | All at once |
| **Resource Cost** | Higher (old + new) | Lower (one set) |
| **Rollback** | Reverse roll | Full redeploy |
| **Complexity** | Higher (orchestration) | Simple |
| **Testing** | Can test subset | All or nothing |
| **Version Mix** | Multiple versions live | Single version |
| **Database** | Must handle both versions | Clean slate |
| **Best For** | Web apps, microservices | Internal tools, maintenance |
| **Risk** | Gradual exposure | Immediate all users |

## เมื่อไหร่ใช้อะไร

- **Rolling**: Customer-facing, 24/7 services, gradual rollout
- **Recreate**: Batch jobs, internal tools, database migrations
