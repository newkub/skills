# การติดตั้ง UnoCSS

## Package Managers

ติดตั้ง UnoCSS ด้วย package manager ที่ถนัด:

```bash
# npm
npm install -D unocss

# yarn
yarn add -D unocss

# pnpm
pnpm add -D unocss

# bun
bun add -D unocss
```

## Preset Packages

ติดตั้ง presets แยกตามต้องการ:

| Package | คำอธิบาย |
|---------|----------|
| `@unocss/preset-uno` | Tailwind/Windi compatible (รวมใน `unocss`) |
| `@unocss/preset-attributify` | Attributify mode |
| `@unocss/preset-icons` | Iconify icons |
| `@unocss/preset-typography` | Typography (prose) |
| `@unocss/preset-web-fonts` | Web fonts auto-loading |
| `@unocss/preset-tagify` | Tagify mode |

```bash
# ติดตั้ง presets แยก
npm i -D @unocss/preset-attributify @unocss/preset-icons

# ติดตั้ง icon collections
npm i -D @iconify-json/carbon
npm i -D @iconify-json/mdi
npm i -D @iconify-json/heroicons
```

## Build Tool Integration

### Vite (แนะนำ)

```bash
npm i -D unocss
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [UnoCSS()],
})
```

```typescript
// main.ts
import 'virtual:uno.css'
```

### Webpack

```bash
npm i -D unocss @unocss/webpack
```

```javascript
// webpack.config.js
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [UnoCSS()],
}
```

### PostCSS

```bash
npm i -D unocss @unocss/postcss
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@unocss/postcss': {},
  },
}
```

### CLI (Standalone)

```bash
npm i -D @unocss/cli

# หรือใช้ npx/bunx โดยไม่ต้องติดตั้ง
npx unocss "src/**/*.html" -o dist/uno.css
bunx unocss "src/**/*.tsx" -o dist/uno.css
```

## Config File

สร้างไฟล์ configuration:

```typescript
// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
})
```

ไฟล์ config ที่รองรับ:

| File Name | Format |
|-----------|--------|
| `uno.config.ts` | TypeScript (แนะนำ) |
| `uno.config.js` | JavaScript |
| `uno.config.mjs` | ES Module |
| `unocss.config.ts` | Alternative name |

## Verify Installation

ตรวจสอบว่าติดตั้งถูกต้อง:

```bash
# รัน dev server
npm run dev

# หรือ generate CSS ด้วย CLI
npx unocss "src/**/*.html" -o dist/uno.css
```

ตรวจสอบว่ามี CSS output:

```bash
cat dist/uno.css
```

## TypeScript Support

เพิ่ม types ใน `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["unocss"]
  }
}
```

## Requirements

| Requirement | Minimum Version |
|-------------|-----------------|
| **Node.js** | >= 14.18 |
| **Vite** | >= 3.0 |
| **Webpack** | >= 4.0 |
| **PostCSS** | >= 8.0 |
