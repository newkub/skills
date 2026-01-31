# Vue.js Development Best Practices (แนวปฏิบัติที่ดีที่สุดสำหรับการพัฒนา Vue.js)

## When to Apply (เมื่อใช้)

Skill นี้ให้ rules และ best practices ที่ครอบคลุมสำหรับการพัฒนา Vue.js applications ที่ robust, maintainable, และ high-performance ใช้ guidelines เหล่านี้เมื่อ:

- BUILD new Vue applications จากศูนย์
- REFACTOR existing components เพื่อปรับปรุง quality และ consistency
- ENSURE application security และ accessibility standards
- OPTIMIZE application performance และ reactivity

## Rule Categories by Priority (หมวดหมู่ Rules ตามลำดับความสำคัญ)

| Priority | Category | Impact | Prefix |
| :--- | :--- | :--- | :--- |
| 1 | Security (ความปลอดภัย) | `CRITICAL` | `vue-` |
| 2 | Performance & Optimization (ประสิทธิภาพและการปรับแต่ง) | `HIGH` | `vue-` |
| 3 | Core Concepts & Reusability (แนวคิดหลักและการใช้ซ้ำ) | `HIGH` | `vue-` |
| 4 | Developer Experience (DX) (ประสบการณ์นักพัฒนา) | `MEDIUM` | `vue-` |
| 5 | Accessibility (การเข้าถึง) | `MEDIUM` | `vue-` |

## Quick Reference (อ้างอิงด่วน)

### 1. Security (`CRITICAL`)
- `vue-security` - Guidelines สำหรับการปกป้อง Vue applications จาก vulnerabilities ทั่วไป

### 2. Performance & Optimization (`HIGH`)
- `vue-performance` - Best practices สำหรับการสร้าง high-performance Vue components
- `vue-optimzation` - Techniques สำหรับ optimizing Vue application performance

### 3. Core Concepts & Reusability (`HIGH`)
- `vue-reactivity` - การเข้าใจและใช้ reactivity system ของ Vue อย่างมีประสิทธิภาพ
- `vue-composables` - การสร้างและใช้ composables สำหรับ reusable logic
- `vue-reuseables` - Patterns สำหรับการสร้าง reusable components และ utilities

### 4. Developer Experience (DX) (`MEDIUM`)
- `vue-dx` - Practices สำหรับการปรับปรุง developer experience
- `vue-styles` - Guidelines สำหรับการจัดการ component styling อย่าง scalable

### 5. Accessibility (`MEDIUM`)
- `vue-accessibility` - การรับรองว่า Vue applications ของคุณเข้าถึงได้สำหรับทุก users

## How to Use (วิธีใช้)

แต่ละ rule ถูก detail ในไฟล์ markdown แยกต่างกันภายใน `./rules/` directory ไฟล์เหล่านี้ให้ rationale, bad practices, good practices, และ references สำหรับแต่ละ rule

- [`./rules/vue-accessibility.md`](./rules/vue-accessibility.md)
- [`./rules/vue-composables.md`](./rules/vue-composables.md)
- [`./rules/vue-dx.md`](./rules/vue-dx.md)
- [`./rules/vue-optimzation.md`](./rules/vue-optimzation.md)
- [`./rules/vue-performance.md`](./rules/vue-performance.md)
- [`./rules/vue-reactivity.md`](./rules/vue-reactivity.md)
- [`./rules/vue-reuseables.md`](./rules/vue-reuseables.md)
- [`./rules/vue-security.md`](./rules/vue-security.md)
- [`./rules/vue-styles.md`](./rules/vue-styles.md)