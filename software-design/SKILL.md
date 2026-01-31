# Software Design Best Practices (แนวปฏิบัติที่ดีที่สุดสำหรับ Software Design)

## When to Apply (เมื่อใช้)

Skill นี้ให้ rules และ best practices ที่ครอบคลุมสำหรับการออกแบบ software ที่ maintainable, scalable, และ testable ใช้ guidelines เหล่านี้เมื่อ:

- DESIGN modules, classes, และ APIs ในระดับ component
- APPLY design patterns ที่เหมาะสมกับปัญหาที่เจอ
- CREATE APIs ที่ clean และ intuitive
- IMPLEMENT business logic ที่ maintainable

## Rule Categories by Priority (หมวดหมู่ Rules ตามลำดับความสำคัญ)

| Priority | Category | Impact | Prefix |
| :--- | :--- | :--- | :--- |
| 1 | Design Principles (หลักการออกแบบ) | `CRITICAL` | `design-` |
| 2 | Architecture (สถาปัตยกรรม) | `HIGH` | `design-` |
| 3 | System Design (การออกแบบระบบ) | `HIGH` | `design-` |
| 4 | API Design (การออกแบบ API) | `HIGH` | `design-` |
| 5 | Data Design (การออกแบบข้อมูล) | `HIGH` | `design-` |
| 6 | Performance (ประสิทธิภาพ) | `HIGH` | `design-` |
| 7 | Security (ความปลอดภัย) | `CRITICAL` | `design-` |
| 8 | Maintainability (การบำรุงรักษา) | `HIGH` | `design-` |
| 9 | DX (Developer Experience) | `MEDIUM` | `design-` |

## Quick Reference (อ้างอิงด่วน)

### 1. Design Principles (`CRITICAL`)
- `design-principles` - SOLID, DRY, KISS, YAGNI

### 2. Architecture (`HIGH`)
- `architecture-patterns` - Monolith, Modular, Microservices

### 3. Design Patterns (`HIGH`)
- `design-patterns` - Factory, Strategy, Observer

### 4. System Design (`HIGH`)
- `system-design` - Scalability, Reliability

### 5. API Design (`HIGH`)
- `api-design` - REST, GraphQL, RPC

### 6. Data Design (`HIGH`)
- `data-design` - Schema, Index, Consistency

### 7. Performance (`HIGH`)
- `performance` - Caching, Profiling

### 8. Security (`CRITICAL`)
- `security` - Auth, Encryption, Threat modeling

### 9. Maintainability (`HIGH`)
- `maintainability` - Modularity, Refactoring

### 10. DX (`MEDIUM`)
- `developer-experience` - Tooling, CLI, Docs

## How to Use (วิธีใช้)

แต่ละ rule ถูก detail ในไฟล์ markdown แยกต่างกันภายใน `./rules/` directory ไฟล์เหล่านี้ให้ rationale, bad practices, good practices, และ references สำหรับแต่ละ rule

- [`./rules/design-principles.md`](./rules/design-principles.md)
- [`./rules/architecture-patterns.md`](./rules/architecture-patterns.md)
- [`./rules/design-patterns.md`](./rules/design-patterns.md)
- [`./rules/system-design.md`](./rules/system-design.md)
- [`./rules/api-design.md`](./rules/api-design.md)
- [`./rules/data-design.md`](./rules/data-design.md)
- [`./rules/performance.md`](./rules/performance.md)
- [`./rules/security.md`](./rules/security.md)
- [`./rules/maintainability.md`](./rules/maintainability.md)
- [`./rules/developer-experience.md`](./rules/developer-experience.md)
