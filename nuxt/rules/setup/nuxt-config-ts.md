---
trigger: always_on
description: ตั้งค่า nuxt.config.ts สำหรับโปรเจกต์ Nuxt
condition: |
  ใช้เมื่อเริ่มต้นโปรเจกต์ Nuxt ใหม่
  ใช้เมื่อต้องการเพิ่มหรือปรับปรุงการตั้งค่าใน nuxt.config.ts
---

## 1. Dependency Installation (การติดตั้ง Dependencies)

- **Dependencies**: ติดตั้ง dependencies หลักสำหรับ Nuxt project.
- **Dev Dependencies**: ติดตั้ง dev dependencies สำหรับ development tools.

````bash
# Dependencies
bun add @vue-macros/nuxt @nuxtjs/color-mode @vueuse/nuxt @unocss/nuxt @pinia/nuxt nuxt-mcp-dev @nuxt/icon @scalar/nuxt @nuxt/a11y @nuxt/fonts @nuxt/image @nuxt/hints @vite-pwa/nuxt nuxt-og-image @nuxtjs/storybook

# Dev Dependencies
bun add -d vite-plugin-checker dprint oxlint @nuxt/test-utils sonda
````

---

## 2. Configuration (`nuxt.config.ts`)

- **Structure**: สร้างไฟล์ `nuxt.config.ts` และกำหนดค่าพื้นฐาน, modules, Nitro, และ Vite plugins.

````typescript
import checker from "vite-plugin-checker";

export default defineNuxtConfig({
    compatibilityDate: "latest",
    devtools: { enabled: true },
    modules: [
        // Must have
        "@vue-macros/nuxt",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "@unocss/nuxt",
        "@pinia/nuxt",
        "nuxt-mcp-dev",
        "@nuxt/icon",
        "@scalar/nuxt",
        
        // Optional
        "@nuxt/a11y",
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxt/hints",
        "@vite-pwa/nuxt",
        "nuxt-og-image",
        "@nuxtjs/storybook"
    ],

    scalar: {
        url: 'https://registry.scalar.com/@scalar/apis/galaxy?format=yaml',
    },

    typescript: {
		strict: true,
		typeCheck: true,
	},

    colorMode: {
        preference: "system",
        fallback: "light",
        classSuffix: "",
    },

    icon: {
        serverBundle: {
            collections: ['mdi']
        }
    },

    nitro: {
        experimental: {
            openAPI: true,
        },
        preset: "cloudflare_module",
    },

    vite: {
        plugins: [
            checker({
                overlay: { initialIsOpen: false },
                typescript: true,
                vueTsc: true,
                oxlint: true,
            }),
        ],
    }
});
````

---

## 3. Related Workflows (Workflows ที่เกี่ยวข้อง)

- **UnoCSS**: ทำตาม `/follow-unocss-nuxt` เพื่อตั้งค่า UnoCSS.
- **TypeScript**: ทำตาม `/follow-nuxt-tsconfig-json` เพื่อตั้งค่า TypeScript.