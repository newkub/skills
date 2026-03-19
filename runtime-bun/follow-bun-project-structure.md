---
description: จัดโครงสร้างโปรเจกต์ Bun + TypeScript ตาม Use Case (CLI, SDK) โดยเน้นการแยก Side Effects
---

## Principle: Functional Core, Imperative Shell

เพื่อสร้างโปรแกรมที่ทดสอบง่ายและจัดการ `side effects` ได้ดี เราจะแบ่งโค้ดเป็น 3 ชั้น:

1. **Core (Pure Logic):** โค้ดส่วนกลางที่ไม่มี `side effects` ทำหน้าที่คำนวณและจัดการ business logic
2. **App/Services (Orchestration):** เป็นตัวกลาง เรียกใช้ `core` และสั่งงาน `adapters`
3. **Adapters (Side Effects):** ส่วนที่ติดต่อกับโลกภายนอกทั้งหมด เช่น I/O, API, Database

---

## Use Case 1: Command-Line (CLI) Application

### CLI Project Structure

```plaintext
.
├── docs/
├── examples/
├── tests/
├── src/
│   ├── core/       # Pure business logic (No side effects)
│   ├── app/        # Orchestration logic
│   ├── adapters/   # All I/O and side effects
│   ├── commands/   # Command definitions
│   ├── types/      # Type definitions
│   ├── error.ts    # Custom error classes
│   └── index.ts    # CLI entry point
├── .gitignore
├── .oxlint.jsonc
├── dprint.json
├── package.json
└── README.md
```

### CLI Summary

| Path            | Core Responsibility       | Abstraction | State      | Side Effects | Testing Strategy | Recommended Libraries         | Example / Convention             |
| :-------------- | :------------------------ | :---------- | :--------- | :----------- | :--------------- | :---------------------------- | :------------------------------- |
| `src/core/`     | Pure Business Logic       | Low         | Stateless  | **No**       | Unit             | `zod`, `effect`               | `user.domain.ts`                 |
| `src/app/`      | Orchestration Logic       | Mid         | Stateful   | **Yes**      | Integration      | -                             | `user.service.ts`                |
| `src/adapters/` | I/O, External Comms       | Low         | Stateful   | **Yes**      | Integration      | `axios`, `drizzle-orm`, `chalk` | `db.adapter.ts`                  |
| `src/commands/` | Command Definitions       | High        | Stateful   | **Yes**      | E2E              | `yargs`, `commander`          | `user/create.command.ts`         |
| `src/types/`    | Type Definitions          | N/A         | Stateless  | No           | N/A              | `zod`                         | `user.types.ts`                  |
| `src/error.ts`  | Custom Error Classes      | Low         | Stateless  | No           | Unit             | `effect`                      | `CliError.ts`                    |
| `src/index.ts`  | Entry Point               | High        | Stateful   | **Yes**      | E2E              | `yargs`, `commander`          | `index.ts`                       |

### Workflow Visualization (CLI)

```plaintext
[ User runs: my-cli user:create ]
              |
              v
┌─────────────▼─────────────┐
│      Imperative Shell     │
│---------------------------│
│         index.ts          │
│             |             │
│             v             │
│         commands/         │
│             |             │
│             v             │
│           app/ <----------┼----┐
│             |             │    |
│             v             │    | [ Functional Core ]
│         adapters/         │    ├-- (Pure Logic)
│             |             │    |
└─────────────|─────────────┘    |
              |                  |
              └------------------┘
              v
[ External World: DB, API, Console ]
```

---

## Use Case 2: Software Development Kit (SDK)

### SDK Project Structure

```plaintext
.
├── docs/
├── examples/
├── tests/
├── src/
│   ├── core/       # Pure business logic (No side effects)
│   ├── services/   # Public-facing methods (Orchestration)
│   ├── adapters/   # All I/O and side effects
│   ├── types/      # Public & internal types
│   ├── error.ts    # Custom error classes
│   └── index.ts    # Public API exports
├── .gitignore
├── .oxlint.jsonc
├── dprint.json
├── package.json
└── README.md
```

### SDK Summary

| Path            | Core Responsibility       | Abstraction | State      | Side Effects | Testing Strategy | Recommended Libraries      | Example / Convention             |
| :-------------- | :------------------------ | :---------- | :--------- | :----------- | :--------------- | :------------------------- | :------------------------------- |
| `src/core/`     | Pure Business Logic       | Low         | Stateless  | **No**       | Unit             | `zod`, `effect`            | `user.logic.ts`                  |
| `src/services/` | Public API Orchestration  | High        | Stateful   | **Yes**      | Integration      | -                          | `users.ts`                       |
| `src/adapters/` | HTTP Client, I/O          | Low         | Stateful   | **Yes**      | Integration      | `axios`                    | `api.adapter.ts`                 |
| `src/types/`    | Public & Internal Types   | N/A         | Stateless  | No           | N/A              | -                          | `types.ts`                       |
| `src/error.ts`  | Custom Error Classes      | Low         | Stateless  | No           | Unit             | `effect`                   | `SDKError.ts`                    |
| `src/index.ts`  | Public API Exports        | High        | Stateless  | **No**       | -                | -                          | `index.ts`                       |

### Workflow Visualization (SDK)

```plaintext
[ Consumer App calls: sdk.users.create() ]
                   |
                   v
┌──────────────────▼──────────────────┐
│      Imperative Shell (SDK)         │
│-------------------------------------│
│              index.ts               │
│                  |                  │
│                  v                  │
│              services/ <------------┼----┐
│                  |                  │    |
│                  v                  │    | [ Functional Core ]
│              adapters/              │    ├-- (Pure Logic)
│                  |                  │    |
└──────────────────|──────────────────┘    |
                   |                      |
                   └----------------------┘
                   v
[ External World: API, Storage ]
```
