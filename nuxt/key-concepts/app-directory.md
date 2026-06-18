# app/ Directory Structure

## Goal

เข้าใจโครงสร้าง `app/` directory ใน Nuxt v4 และการเปลี่ยนแปลงจาก Nuxt 3

## โครงสร้าง

```
my-nuxt-app/
├── app/                      # Application code (Nuxt v4 default)
│   ├── assets/               # Static assets (CSS, images)
│   ├── components/           # Vue components
│   ├── composables/          # Vue composables
│   ├── layouts/              # Layout components
│   ├── middleware/           # Route middleware
│   ├── pages/                # File-based routing
│   ├── plugins/              # Vue plugins
│   ├── utils/                # Utility functions
│   ├── app.vue               # Root component
│   ├── app.config.ts         # App configuration
│   └── error.vue             # Error component
├── content/                  # Content for @nuxt/content
├── public/                   # Static files
├── shared/                   # Shared code (client + server)
├── server/                   # Server code (API routes, middleware)
└── nuxt.config.ts            # Nuxt configuration
```

## การเปลี่ยนแปลงจาก Nuxt 3

- **Nuxt 3**: Application code อยู่ที่ root directory
- **Nuxt 4**: Application code ย้ายไป `app/` directory

## ประโยชน์

- **Performance**: File watchers เร็วขึ้น (โดยเฉพาะบน Windows และ Linux)
- **IDE Context**: แยก client/server code ชัดเจน
- **Organization**: แยก application code จาก `node_modules/` และ `.git/`

## Directories ที่อยู่นอก app/

- `content/` - Content สำหรับ @nuxt/content
- `public/` - Static files
- `shared/` - Shared code (client + server)
- `server/` - Server code (API routes, middleware)
- `nuxt.config.ts` - Nuxt configuration

## Migration

เมื่อ upgrade จาก Nuxt 3 เป็น Nuxt 4:
- ย้าย application code ไป `app/`
- คง `content/`, `layers/`, `modules/`, `public/`, `shared/`, `server/` ไว้ที่ root
- อัปเดต third-party config files (tailwind, eslint)

## อ้างอิง

- [Nuxt Directory Structure](https://nuxt.com/docs/4.x/directory-structure)
- [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
