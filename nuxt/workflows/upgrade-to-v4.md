# Upgrade to Nuxt 4

## Goal

Upgrade โปรเจกต์ Nuxt 3 เป็น Nuxt 4 อย่างปลอดภัย

## Execute

### 1. Update Dependencies

```bash
bun update nuxt
# หรือ
bun update nuxt
# หรือ
yarn upgrade nuxt
```

### 2. Update nuxt.config.ts

เพิ่ม `compatibilityDate`:

```ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
})
```

### 3. Migrate to app/ Directory

ย้าย application code ไป `app/` directory:

```bash
# สร้าง app/ directory
mkdir app

# ย้าย directories
mv components app/
mv composables app/
mv layouts app/
mv middleware app/
mv pages app/
mv plugins app/
mv utils app/
mv assets app/
mv app.vue app/
mv app.config.ts app/
mv error.vue app/
```

**Directories ที่คงไว้ที่ root**:
- `content/`
- `layers/`
- `modules/`
- `public/`
- `shared/`
- `server/`
- `nuxt.config.ts`

### 4. Update Third-party Config

อัปเดต config files ที่อ้างอิง paths:
- `tailwind.config.js/ts`
- `eslint.config.js`
- `postcss.config.js`

เปลี่ยน paths ให้ชี้ไป `app/` directory

### 5. Test และ Adjust

```bash
bun run dev
```

ตรวจสอบ:
- File-based routing ทำงานได้
- Auto-imports ทำงานได้
- TypeScript errors
- Build errors

### 6. Optional: Use Migration Tools

ใช้ `@nuxt/kit` migration tools หากมี:

```bash
npx nuxi-upgrade
```

## Rules

- Backup โปรเจกต์ก่อน upgrade
- อ่าน [Official Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
- ทำการทดสอบอย่างละเอียดหลัง upgrade
- รายงาน issues ที่พบบน GitHub

## Expected Outcome

- โปรเจกต์ทำงานบน Nuxt v4
- app/ directory structure ใช้งานได้
- Features ใหม่ของ Nuxt 4 พร้อมใช้งาน
