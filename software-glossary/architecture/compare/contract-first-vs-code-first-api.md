# Contract-First vs Code-First API Design

## เปรียบเทียบ

| หัวข้อ | Contract-First | Code-First |
|--------|----------------|------------|
| **Starting Point** | OpenAPI/GraphQL schema | Implementation code |
| **Consumers** | Involved early | Consulted after |
| **Parallel Work** | Frontend mocks while backend builds | Sequential dependency |
| **Changes** | Schema versions | Refactoring |
| **Documentation** | Auto-generated from contract | Generated from code |
| **Design Quality** | Thoughtful interfaces | Implementation-driven |
| **Tooling** | Swagger, Prism, Stoplight | Framework annotations |
| **Review** | Contract review | PR review |
| **Client Generation** | Easy SDK generation | Manual or generated |
| **Best For** | Public APIs, microservices | Internal APIs, rapid prototyping |

## เมื่อไหร่ใช้อะไร

- **Contract-First**: Public APIs, multiple consumers, stability needed
- **Code-First**: Internal tools, single consumer, speed to market

---

**หมวดหมู่**: Architecture & Planning
