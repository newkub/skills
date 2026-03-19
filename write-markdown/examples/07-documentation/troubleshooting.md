---
description: การแก้ไขปัญหาใน Markdown
title: troubleshooting
tags: [markdown, troubleshooting, issues]
goals:
  - แสดงตัวอย่างการเขียนเอกสารแก้ไขปัญหา
  - สอนวิธีสร้าง troubleshooting guides
---

## Common Issues

### Build fails

**อาการ:** Build process หยุดทำงาน

**สาเหตุ:** ขาด dependencies

**วิธีแก้ไข:**

```bash
bun install --force
```

### Port already in use

**อาการ:** Error "Port 3000 is already in use"

**วิธีแก้ไข:**

```bash
lsof -i :3000
kill -9 <PID>
```

## Performance Issues

### Slow page load

**อาการ:** หน้าเว็บโหลดช้า

**สาเหตุ:** Large bundle size

**วิธีแก้ไข:**

```bash
bun run build:analyze
```

```typescript
const LazyComponent = lazy(() => import('./LazyComponent'))
```

## Environment Issues

### Environment variables not working

**อาการ:** `process.env` คืนค่า undefined

**วิธีแก้ไข:**

```bash
cp .env.example .env
bun run dev
```

## Database Issues

### Database connection failed

**อาการ:** Cannot connect to database

**วิธีแก้ไข:**

```bash
docker ps | grep postgres
psql "postgresql://user:pass@localhost/db"
docker logs <container-id>
```
