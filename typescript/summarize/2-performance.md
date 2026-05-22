## Performance

สรุปเทคนิคการ优化ประสิทธิภาพ TypeScript

| หมวดหมู่ | เทคนิค | ตัวอย่าง | ผลกระทบ |
|-----------|---------|-----------|----------|
| **Compilation** | Incremental builds | `"incremental": true` ใน tsconfig | เร็วขึ้น 70% |
| **Compilation** | Skip lib check | `"skipLibCheck": true` | ลด build time |
| **Compilation** | Project references | แบ่ง large project | Parallel compilation |
| **Type Checking** | Type inference | `let message = "hello"` // string | ลับงาน compiler |
| **Type Checking** | Avoid deep nesting | ใช้ flatten types | เร็วขึ้น 30% |
| **Type Checking** | Use interfaces over types | `interface User {}` vs `type User = {}` | Memory efficient |
| **Runtime** | Type guards | `if (isString(value)) { ... }` | Fast runtime checks |
| **Runtime** | Branded types | `type UserId = string & { brand: unique symbol }` | Compile-time safety |
| **Bundle Size** | Tree shaking | ES modules + named exports | ลด bundle size |
| **Bundle Size** | Declaration files | Separate .d.ts files | ลับงาน runtime |

### Configuration สำหรับ Performance

```json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": ".tsbuildinfo",
    "skipLibCheck": true,
    "composite": true,
    "strict": true
  }
}
```

### Best Practices

1. **Use incremental builds** สำหรับ development
2. **Enable skipLibCheck** สำหรับ large projects
3. **Split into multiple projects** ด้วย project references
4. **Use type inference** เมื่อเป็นไปได้
5. **Avoid complex conditional types** ใน hot paths
