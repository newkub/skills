# SolidStart CLI Reference

## Overview

SolidStart CLI ใช้สำหรับสร้างและจัดการ SolidStart projects โดยใช้ `npm create solid-start@latest` หรือ `pnpm create solid-start@latest`

## Installation

```bash
# สร้าง project ใหม่
npm create solid-start@latest my-app
# หรือ
pnpm create solid-start@latest my-app
# หรือ
bunx create-solid-start my-app
```

## Commands

### create-solid-start

สร้าง SolidStart project ใหม่ด้วย interactive prompts

```bash
npm create solid-start@latest [project-name] [options]
```

**Options**
- `--template` - เลือก template เฉพาะ
- `--ts` - ใช้ TypeScript (default)
- `--js` - ใช้ JavaScript
- `--server` - เลือก server environment (node, vercel, netlify, cloudflare)
- `--no-install` - ไม่ติดตั้ง dependencies อัตโนมัติ

**Examples**
```bash
# สร้าง project ด้วย default settings
npm create solid-start@latest my-app

# สร้าง project ด้วย TypeScript และ Vercel
npm create solid-start@latest my-app --server vercel

# สร้าง project โดยไม่ติดตั้ง dependencies
npm create solid-start@latest my-app --no-install
```

### dev

รัน development server

```bash
npm run dev
# หรือ
pnpm dev
# หรือ
bun run dev
```

**Options**
- `--port` - กำหนด port (default: 3000)
- `--host` - กำหนด host (default: localhost)

**Examples**
```bash
npm run dev -- --port 4000
npm run dev -- --host 0.0.0.0
```

### build

สร้าง production build

```bash
npm run build
# หรือ
pnpm build
# หรือ
bun run build
```

**Options**
- `--analyze` - analyze bundle size
- `--mode` - กำหนด build mode (production, development)

**Examples**
```bash
npm run build -- --analyze
npm run build -- --mode production
```

### start

รัน production server

```bash
npm run start
# หรือ
pnpm start
# หรือ
bun run start
```

### preview

Preview production build ใน development mode

```bash
npm run preview
# หรือ
pnpm preview
# หรือ
bun run preview
```

## Templates

SolidStart มี templates หลายแบบสำหรับเริ่มต้น:

- **bare** - Minimal setup
- **todos** - Todo app example
- **with-auth** - With authentication
- **with-mdx** - With MDX support
- **with-tailwind** - With Tailwind CSS
- **with-vitest** - With Vitest testing

## Configuration

CLI configuration อยู่ใน `app.config.ts`:

```typescript
export default {
  ssr: true,
  router: {
    base: "/app"
  },
  server: {
    preset: "vercel"
  }
}
```

## Environment Variables

ใช้ `.env` files สำหรับ environment variables:

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=your-public-key
```

## Package Manager Support

SolidStart รองรับ package managers หลายตัว:

- **npm** - Default
- **pnpm** - Recommended (faster, less disk space)
- **bun** - Fastest runtime
- **yarn** - Supported

## Deployment Presets

CLI รองรับ deployment presets หลาย platform:

- **vercel** - Vercel deployment
- **netlify** - Netlify deployment
- **cloudflare** - Cloudflare Pages
- **node** - Node.js server
- **static** - Static site generation

## References

- [SolidStart Getting Started](https://docs.solidjs.com/solid-start/getting-started)
- [SolidStart CLI](https://docs.solidjs.com/solid-start/reference/cli)
