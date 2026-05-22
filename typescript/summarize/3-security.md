## Security

สรุปแนวทางการรักษาความปลอดภัยใน TypeScript

| หมวดดหมู่ | แนวทาง | ตัวอย่าง | ผลกระทบ |
|-----------|---------|-----------|----------|
| **Input Validation** | Runtime type guards | `function isUser(data: unknown): data is User {}` | ป้องกัน injection |
| **Input Validation** | Schema validation | `zod.parse(input)` | Validate external data |
| **Type Safety** | Avoid any | `function processData(data: unknown) {}` | ลับงาน security holes |
| **Type Safety** | Strict null checks | `"strictNullChecks": true` | ป้องกัน null/undefined |
| **API Security** | Branded types | `type UserId = string & { brand: unique symbol }` | Compile-time validation |
| **API Security** | Request/Response types | `interface ApiRequest { token: string; }` | Type-safe API calls |
| **Data Access** | Readonly interfaces | `interface Config { readonly apiKey: string; }` | Prevent mutation |
| **Data Access** | Private class members | `class Service { #secret = ""; }` | Encapsulation |
| **Authentication** | Type-safe auth | `type AuthenticatedUser = User & { token: string; }` | Clear auth state |
| **Authorization** | Role-based types | `interface AdminUser extends User { role: "admin"; }` | Type-safe permissions |

### Security Patterns

```typescript
// ✅ Input validation
function validateInput<T>(schema: z.ZodSchema<T>, input: unknown): T {
  return schema.parse(input);
}

// ✅ Secure API client
class SecureApiClient {
  constructor(private token: string) {}

  async request<T>(endpoint: string): Promise<T> {
    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${this.token}` }
    });
    return response.json();
  }
}

// ✅ Readonly configuration
interface AppConfig {
  readonly databaseUrl: string;
  readonly jwtSecret: string;
  readonly port: number;
}
```

### Security Checklist

- [ ] ใช้ strict mode ใน tsconfig
- [ ] Validate external data ที่ runtime
- [ ] ใช้ branded types สำหรับ sensitive data
- [ ] หลีกเลี่ยง any type
- [ ] ใช้ readonly สำหรับ configuration
- [ ] Implement type guards สำหรับ user input
