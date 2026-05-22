# Chaos Engineering vs Load Testing

## เปรียบเทียบ

| หัวข้อ | Chaos Engineering | Load Testing |
|--------|---------------------|--------------|
| **Purpose** | Build resilience | Measure capacity |
| **Approach** | Break things intentionally | Simulate traffic |
| **Timing** | Production (controlled) | Staging or prod |
| **Failure** | Injected faults | Natural load |
| **Tooling** | Gremlin, Chaos Monkey | k6, JMeter, Locust |
| **Scope** | Infrastructure, services | Application endpoints |
| **Safety** | Automatic rollback | Monitor thresholds |
| **Metrics** | Recovery time, MTTR | Response time, errors |
| **Culture** | "Fail fast, learn" | "Measure, optimize" |
| **Best For** | Microservices, resilience | Capacity planning |

## เมื่อไหร่ใช้อะไร

- **Chaos Engineering**: Resilience validation, distributed systems, SRE
- **Load Testing**: Capacity limits, performance baselines, scaling decisions
