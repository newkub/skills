---
description: การแก้ปัญหาที่พบบ่อยใน Bun
---

## Goal

อธิบายปัญหาที่พบบ่อยและวิธีแก้ไข

## Scope

สำหรับโปรเจกต์ที่ใช้ Bun เป็น runtime

## Common Issues

### 1. Installation Failed

**Problem:** ไม่สามารถติดตั้ง Bun ได้

**Solution:**
```bash
# Windows - รัน PowerShell ในฐานะ Administrator
irm bun.sh/install.ps1 | iex

# macOS/Linux - ตรวจสอบ permissions
curl -fsSL https://bun.sh/install | bash
```

### 2. TypeScript Errors

**Problem:** TypeScript ไม่รู้จัก Bun APIs

**Solution:**
เพิ่ม `bun-types` ใน `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["bun-types"]
  }
}
```

### 3. Dependencies Not Found

**Problem:** `bun install` ไม่พบ packages

**Solution:**
```bash
# ลบ lock file และ install ใหม่
rm bun.lockb
bun install
```

### 4. Build Failed

**Problem:** `bun build` ล้มเหลว

**Solution:**
ตรวจสอบ entry point และ dependencies:

```bash
bun build src/index.ts --outdir ./dist
```

### 5. Performance Issues

**Problem:** Application ทำงานช้ากว่าคาดหวัง

**Solution:**
- ใช้ Bun APIs แทน Node.js APIs
- ใช้ `--watch` สำหรับ development
- ใช้ `bun build` สำหรับ production

### 6. Environment Variables Not Loading

**Problem:** `.env` ไม่ถูกโหลด

**Solution:**
ตรวจสอบว่า `.env` อยู่ใน root directory:

```bash
# ตรวจสอบ
ls -la .env

# รันใหม่
bun run dev
```

### 7. Native Modules Not Working

**Problem:** Native modules ไม่รองรับใน Bun

**Solution:**
- หา pure JavaScript alternatives
- ใช้ Node.js compatibility layer
- รอ support จาก Bun

## Debugging Tips

### 1. Enable Debug Mode

```bash
bun --debug run src/index.ts
```

### 2. Check Bun Version

```bash
bun --version
```

### 3. Clear Cache

```bash
rm -rf ~/.bun/install/cache
bun install
```

## Getting Help

- [Bun Discord](https://bun.sh/discord)
- [Bun GitHub Issues](https://github.com/oven-sh/bun/issues)
- [Bun Documentation](https://bun.sh/docs)
