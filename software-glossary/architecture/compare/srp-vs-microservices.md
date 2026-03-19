# Single Responsibility vs Microservices

## เปรียบเทียบ

| หัวข้อ | Single Responsibility (Code) | Microservices (Architecture) |
|--------|------------------------------|------------------------------|
| **Level** | Function/class principle | System architecture |
| **Scope** | Code organization | Service boundaries |
| **Team** | Individual developer | Multiple teams |
| **Deployment** | Single unit | Independent services |
| **Communication** | Function calls | Network calls (HTTP/gRPC) |
| **Complexity** | Manageable | Distributed systems |
| **Testing** | Unit tests | Contract tests, integration |
| **Overhead** | Minimal | Significant operational |
| **Scale** | Vertical | Horizontal |
| **Best For** | All codebases | Large orgs, different scaling |

## เมื่อไหร่ใช้อะไร

- **SRP (Code)**: Always apply to code, modules, classes
- **Microservices**: Scale teams, independent deploys, polyglot needs

---

**หมวดหมู่**: Architecture & Planning
