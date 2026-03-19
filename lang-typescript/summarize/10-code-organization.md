## Code Organization

สรุปแนวทางการจัดรูปแบบโค้ด TypeScript

| หมวดหมู่ | แนวทาง | ตัวอย่าง | ผลกระทบ |
|-----------|---------|-----------|----------|
| **Folder Structure** | Feature-based | `src/features/auth/` | Scalable organization |
| **Folder Structure** | Layered architecture | `src/services/`, `src/types/` | Clear separation |
| **Module Organization** | Barrel exports | `export * from "./user"` | Clean imports |
| **Module Organization** | Index files | `types/index.ts` | Single entry points |
| **Type Organization** | Type modules | `types/user.ts`, `types/api.ts` | Reusable types |
| **Type Organization** | Generic types | `types/common.ts` | Shared abstractions |
| **Dependency Management** | Dependency injection | `constructor(service: UserService)` | Testable code |
| **Dependency Management** | Service containers | `container.register(UserService)` | Loose coupling |
| **Configuration** | Environment types | `interface Config { port: number; }` | Type-safe config |
| **Configuration** | Configuration modules | `config/database.ts` | Organized settings |

### Project Structure

```text
src/
├── types/           # Type definitions
│   ├── user.ts
│   ├── api.ts
│   └── common.ts
├── services/        # Business logic
│   ├── user.service.ts
│   └── auth.service.ts
├── repositories/    # Data access
│   ├── user.repository.ts
│   └── base.repository.ts
├── utils/          # Utility functions
│   ├── validation.ts
│   └── helpers.ts
├── config/         # Configuration
│   ├── database.ts
│   └── app.ts
└── index.ts        # Entry point
```

### Organization Patterns

```typescript
// ✅ Barrel exports
// types/index.ts
export * from "./user";
export * from "./api";
export * from "./common";

// ✅ Type modules
// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type CreateUser = Omit<User, "id">;
export type UpdateUser = Partial<CreateUser>;

// ✅ Service organization
// services/user.service.ts
export class UserService {
  constructor(
    private userRepo: UserRepository,
    private emailService: EmailService
  ) {}

  async createUser(data: CreateUser): Promise<User> {
    const user = await this.userRepo.create(data);
    await this.emailService.sendWelcome(user.email);
    return user;
  }
}

// ✅ Configuration types
// config/app.ts
export interface AppConfig {
  port: number;
  database: DatabaseConfig;
  auth: AuthConfig;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
}
```

### Best Practices

1. **Group related types** ใน modules เดียวกัน
2. **Use barrel exports** สำหรับ clean imports
3. **Separate concerns** ด้วย folder structure
4. **Use dependency injection** สำหรับ testability
5. **Type configuration** สำหรับ type-safe settings
