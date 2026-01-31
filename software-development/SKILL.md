# Software Development Best Practices (แนวปฏิบัติที่ดีที่สุดสำหรับ Software Development)

## When to Apply (เมื่อใช้)

Skill นี้ให้ rules และ best practices ที่ครอบคลุมสำหรับการพัฒนา software ที่ maintainable, scalable, และ testable ใช้ guidelines เหล่านี้เมื่อ:

- WRITE code ที่ maintainable และ readable
- IMPLEMENT testing strategies ที่ครอบคลุม
- SETUP CI/CD pipelines สำหรับ automation
- FOLLOW coding standards และ best practices

## Rule Categories by Priority (หมวดหมู่ Rules ตามลำดับความสำคัญ)

| Priority | Category | Impact | Prefix |
| :--- | :--- | :--- | :--- |
| 1 | Coding Practices (แนวปฏิบัติการเขียนโค้ด) | `HIGH` | `dev-` |
| 2 | Testing (การทดสอบ) | `HIGH` | `dev-` |
| 3 | Workflows (เวิร์กโฟลว์การพัฒนา) | `HIGH` | `dev-` |

## Quick Reference (อ้างอิงด่วน)

### 1. Coding Practices (`HIGH`)
- `dev-code-quality` - Code quality และ readability
- `dev-error-handling` - Error handling และ logging
- `dev-naming-conventions` - Naming conventions ที่ consistent

### 2. Testing (`HIGH`)
- `dev-testing-strategies` - Testing strategies และ best practices
- `dev-unit-testing` - Unit testing สำหรับ functions และ modules
- `dev-integration-testing` - Integration testing สำหรับ APIs และ databases

### 3. Workflows (`HIGH`)
- `dev-git-workflow` - Git workflow และ commit conventions
- `dev-code-review` - Code review process และ checklist
- `dev-ci-cd` - CI/CD pipelines และ automation

## How to Use (วิธีใช้)

แต่ละ rule ถูก detail ในไฟล์ markdown แยกต่างกันภายใน `./rules/` directory ไฟล์เหล่านี้ให้ rationale, bad practices, good practices, และ references สำหรับแต่ละ rule

- [`./rules/dev-code-quality.md`](./rules/dev-code-quality.md)
- [`./rules/dev-error-handling.md`](./rules/dev-error-handling.md)
- [`./rules/dev-naming-conventions.md`](./rules/dev-naming-conventions.md)
- [`./rules/dev-testing-strategies.md`](./rules/dev-testing-strategies.md)
- [`./rules/dev-unit-testing.md`](./rules/dev-unit-testing.md)
- [`./rules/dev-integration-testing.md`](./rules/dev-integration-testing.md)
- [`./rules/dev-git-workflow.md`](./rules/dev-git-workflow.md)
- [`./rules/dev-code-review.md`](./rules/dev-code-review.md)
- [`./rules/dev-ci-cd.md`](./rules/dev-ci-cd.md)
