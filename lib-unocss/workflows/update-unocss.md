---
description: Update UnoCSS และ dependencies ให้เป็น latest version
---

## Goal

Update UnoCSS และ dependencies ให้เป็น latest version และ handle breaking changes

## Scope

### 1. ตรวจสอบ Current Version

ตรวจสอบ version ปัจจุบันของ UnoCSS

```bash
# ตรวจสอบ package.json
cat package.json | grep unocss

# หรือใช้ bun
bun pm ls | grep unocss
```

### 2. ตรวจสอบ Latest Version

ตรวจสอบ latest version ของ UnoCSS

```bash
# ตรวจสอบ latest version
bunx npm view unocss version

# หรือตรวจสอบ changelog
bunx npm view unocss versions --json
```

### 3. อัปเดต UnoCSS

อัปเดต UnoCSS เป็น latest version

```bash
# Bun
bun add -D unocss@latest

# npm
npm install -D unocss@latest

# pnpm
pnpm add -D unocss@latest

# yarn
yarn add -D unocss@latest
```

### 4. อัปเดต Framework Integration

อัปเดต framework integration packages

```bash
# Nuxt
bun add -D @unocss/nuxt@latest

# Next.js
bun add -D @unocss/next@latest

# ตรวจสอบ packages อื่นๆ ที่เกี่ยวข้อง
bun add -D @unocss/preset-icons@latest
```

### 5. ตรวจสอบ Breaking Changes

ตรวจสอบ breaking changes ใน changelog

```bash
# ตรวจสอบ changelog
bunx npm view unocss --json | jq '.versions'
```

หรือเข้าไปดูที่:
- https://github.com/unocss/unocss/blob/main/packages/core/CHANGELOG.md
- https://unocss.dev/changelog

### 6. อัปเดต Configuration

อัปเดต configuration หากมี breaking changes

```typescript
// uno.config.ts
// ตรวจสอบว่า options ยัง valid หรือไม่
export default defineConfig({
  // อัปเดต options ตาม breaking changes
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
})
```

### 7. ทดสอบ Application

ทดสอบว่า application ทำงานได้หลังอัปเดต

```bash
# รัน dev server
bun run dev

# รัน build
bun run build

# รัน tests
bun run test
```

### 8. ตรวจสอบ CSS Output

ตรวจสอบว่า CSS ถูก generate อย่างถูกต้อง

```bash
# ตรวจสอบ CSS output
cat dist/assets/*.css
```

### 9. อัปเดต Documentation

อัปเดต documentation หากมี breaking changes

```markdown
# Update Notes

## UnoCSS Update

- Updated from v0.x to v1.x
- Breaking changes: ...
- Migration steps: ...
```

## Rules

### 1. อัปเดตทีละ Package

อัปเดต UnoCSS ก่อน แล้วค่อยอัปเดต integration packages

### 2. ตรวจสอบ Breaking Changes

ตรวจสอบ breaking changes ก่อนอัปเดต production

### 3. Test Thoroughly

Test application อย่างละเอียดหลังอัปเดต

### 4. Backup Configuration

Backup configuration ก่อนอัปเดต

```bash
# Backup uno.config.ts
cp uno.config.ts uno.config.ts.backup
```

### 5. Update Documentation

อัปเดต documentation สำหรับ breaking changes

## Common Breaking Changes

### Preset Changes

บาง presets อาจถูก rename หรือ deprecated

```typescript
// Old
import { presetWind } from 'unocss'

// New
import { presetUno } from 'unocss'
```

### Configuration Options

บาง options อาจถูก change หรือ remove

```typescript
// Old
export default defineConfig({
  attributify: true,
})

// New
export default defineConfig({
  presets: [presetAttributify()],
})
```

### API Changes

บาง APIs อาจถูก change

```typescript
// Old
import { createGenerator } from 'unocss'

// New
import { createGenerator } from '@unocss/core'
```

## Rollback Strategy

ถ้ามีปัญหาหลังอัปเดต:

```bash
# Rollback ไป version เดิม
bun add -D unocss@<previous-version>

# Restore configuration
cp uno.config.ts.backup uno.config.ts

# Test อีกครั้ง
bun run dev
```

## Expected Outcome

- UnoCSS ถูกอัปเดตเป็น latest version
- Integration packages ถูกอัปเดต
- Breaking changes ถูก handle แล้ว
- Application ทำงานได้ปกติ
- Documentation ถูกอัปเดตแล้ว
