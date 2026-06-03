# Best Practices

## Performance

- **ใช้ Oxlint สำหรับ large repositories** - Oxlint ถูกออกแบบมาสำหรับ large repos และ CI environments
- **50-100x faster than ESLint** - ใช้ประโยชน์จาก performance improvements ใน CI/CD pipelines
- **Multi-file analysis** - เปิดใช้งาน multi-file analysis สำหรับ cross-file checks ที่มีประสิทธิภาพ
- **Parallel processing** - Oxlint ประมวลผล files แบบ parallel โดยอัตโนมัติ

## Security

- **Type-aware linting** - ใช้ type-aware rules เพื่อตรวจสอบ security issues ที่ต้องการ type information
- **Correctness-focused defaults** - เปิดใช้งาน correctness category สำหรับ security best practices
- **Review suspicious rules** - ตรวจสอบ rules ในกลุ่ม suspicious สำหรับ potential security issues

## Code Quality

- **Use recommended categories** - เริ่มต้นด้วย correctness category สำหรับ high-signal checks
- **Enable type-aware rules** - ใช้ TypeScript rules สำหรับ type-aware linting
- **Customize incrementally** - เพิ่ม rules ตามความต้องการของ team
- **Use migration tools** - ใช้ @oxlint/migrate สำหรับ migration จาก ESLint

## Common Pitfalls

- **Not using type-aware linting** - อย่าปิด type-aware rules ที่สำคัญเช่น no-floating-promises
- **Overriding correctness rules** - อย่าปิด correctness rules โดยไม่จำเป็น
- **Ignoring framework files** - อย่า ignore .vue, .svelte, .astro files โดยไม่จำเป็น
- **Not using migration tools** - ใช้ @oxlint/migrate แทนการ migrate ด้วยตนเอง

## Migration from ESLint

- **Use @oxlint/migrate** - Tool สำหรับ automatic ESLint config migration
- **Choose adoption path** - Replace ESLint (recommended) หรือ migrate incrementally
- **Use eslint-plugin-oxlint** - สำหรับ disable overlapping ESLint rules ระหว่าง transition
- **Test thoroughly** - ทดสอบ codebase หลัง migration
- **Update CI/CD** - อัปเดต CI/CD pipelines ให้ใช้ Oxlint แทน ESLint
