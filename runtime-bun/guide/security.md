# Security

## Security Features

### Built-in Security

- **Sandboxing** - รองรับ worker isolation
- **Secure by default** - ไม่มี dangerous APIs เปิดใช้โดย default
- **Type safety** - TypeScript integration

## Best Practices

### 1. Environment Variables

ใช้ `.env` และไม่ commit secrets:

```bash
# .env
API_KEY=your_secret_key
DATABASE_URL=postgres://...
```

```typescript
// ใช้ใน code
const apiKey = process.env.API_KEY;
```

### 2. Input Validation

ใช้ Zod หรือ libraries สำหรับ validation:

```typescript
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

### 3. Dependency Security

ตรวจสอบ dependencies อย่างสม่ำเสมอ:

```bash
bun audit
```

### 4. Secure HTTP

ใช้ HTTPS เสมอและ validate certificates:

```typescript
const response = await fetch('https://api.example.com', {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});
```

### 5. File System Access

จำกัดการเข้าถึง file system:

```typescript
// ❌ อันตราย
const data = await Bun.file(userInput).text();

// ✅ ปลอดภัย
const allowedPath = './data/safe.txt';
const data = await Bun.file(allowedPath).text();
```

## Common Vulnerabilities

### XSS Prevention

Escape user input ก่อน render:

```typescript
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
```

### SQL Injection

ใช้ parameterized queries:

```typescript
// ❌ อันตราย
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ ปลอดภัย
const query = 'SELECT * FROM users WHERE id = $1';
```
