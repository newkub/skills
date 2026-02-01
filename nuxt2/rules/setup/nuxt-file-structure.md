---
 trigger: manual
 description: อธิบายสถาปัตยกรรมและ data flow ของ Nuxt4
 condition: |
  ใช้เมื่อต้องทำความเข้าใจสถาปัตยกรรม Nuxt4
  ใช้เมื่อต้องจัดโครงสร้างโปรเจกต์ Nuxt4 ให้เป็นมาตรฐาน
  ใช้เมื่อต้อง review ว่าไฟล์ควรอยู่ในโฟลเดอร์ไหน
---

# Nuxt4 Architecture & Data Flow

## 1. Project Structure (ใช้เมื่อต้องการจัดโครงสร้างโปรเจกต์ Nuxt4)
 
 1.1. `root/` : เริ่มโปรเจกต์ Nuxt -> วางไฟล์ config และโฟลเดอร์หลัก (ห้ามเอา business logic ไปไว้ที่ root)
 
 1.2. `app/` : โค้ดฝั่ง CLIENT/SSR rendering -> วาง UI, pages, composables, stores, client-only utils
 
 1.3. `server/` : โค้ดฝั่ง NITRO SERVER -> วาง API, middleware, plugins, server utils/lib/db
 
 1.4. `shared/` : โค้ดที่ใช้ร่วมกัน -> วาง types/contracts/utils ที่ไม่มี side effects
 
 ````plaintext
 .
 ├── app/
 │   ├── assets/                # client assets (ถูก bundle)
 │   ├── components/            # reusable UI components
 │   ├── composables/           # client composables (useXxx)
 │   ├── layouts/               # layouts
 │   ├── middleware/            # route middleware
 │   ├── pages/                 # pages (routes)
 │   ├── plugins/               # client plugins
 │   ├── stores/                # pinia stores
 │   ├── types/                 # client-only types
 │   ├── utils/                 # client-only pure utils
 │   ├── app.config.ts          # defineAppConfig()
 │   ├── app.vue                # root component
 │   └── error.vue              # error page
 ├── public/                    # static files (เสิร์ฟตรง ไม่ถูก bundle)
 ├── server/
 │   ├── api/                   # /api/* endpoints
 │   ├── middleware/            # nitro middleware
 │   ├── plugins/               # nitro plugins
 │   ├── composables/           # server composables (useXxx)
 │   ├── db/                    # db access layer (queries, client)
 │   ├── lib/                   # business logic/services (server)
 │   ├── types/                 # server-only types
 │   └── utils/                 # server-only utils (H3/Nitro helpers)
 ├── shared/
 │   ├── types/                 # shared types/contracts
 │   └── utils/                 # shared pure utils
 ├── modules/                   # local nuxt modules
 ├── layers/                    # nuxt layers (optional)
 ├── content/                   # content module files (optional)
 ├── test/                      # tests (unit/e2e)
 ├── nuxt.config.ts
 ├── tsconfig.json
 ├── package.json
 └── .env
 ````
 
 ---
 
 ## 2. Directory Responsibilities (ใช้เมื่อต้องตัดสินใจว่าไฟล์ควรอยู่ที่ไหน)
 
 2.1. `app/pages/` : สร้าง route -> วาง UI + orchestration (ห้ามวาง business logic หนัก)
 
 2.2. `app/components/` : สร้าง UI reusable -> วาง UI components (ห้าม import server code)
 
 2.3. `app/composables/` : แชร์ logic ฝั่ง client -> วาง useXxx (แยก `*.client.ts`/`*.server.ts` เมื่อจำเป็น)
 
 2.4. `app/stores/` : แชร์ state -> วาง Pinia stores (ห้ามผูกกับ UI rendering)
 
 2.5. `app/plugins/` : ต้องการ inject -> วาง Nuxt plugins (ห้ามทำ heavy work ต่อ request)
 
 2.6. `server/api/` : ทำ endpoint -> วาง handler ที่บาง (บาง = validate + call service + return)
 
 2.7. `server/lib/` : ทำ business logic -> วาง services/use-cases ที่ testable
 
 2.8. `server/db/` : ทำ database access -> วาง query helpers/clients (ห้ามรู้จัก HTTP/H3)
 
 2.9. `server/middleware/` : ทำ cross-cutting concerns -> auth/cors/rate limit (ห้ามทำ business logic)
 
 2.10. `shared/types/` : แชร์ contracts -> วาง DTO/types/schemas ที่ใช้ทั้ง client และ server
 
 2.11. `shared/utils/` : แชร์ pure functions -> วาง deterministic utils (ห้าม IO/network/env)
 
 ````ts
 // Example: shared contract
 export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: { code: string; message: string } }
 ````
 
 ---
 
 ## 3. Boundary Rules (ใช้เมื่อกำหนดกฏการ import ระหว่าง layer)
 
 3.1. `server/**` : ต้องการ import -> `shared/**`, `server/**` -> ห้าม import จาก `app/**`
 
 3.2. `app/**` : ต้องการ import -> `shared/**`, `app/**` -> ห้าม import server-only modules (เช่น node:fs)
 
 3.3. `shared/**` : ต้องการ import -> pure libs เท่านั้น -> ห้าม import Nuxt/Vue/Nitro-specific APIs
 
 ````ts
 // Anti-pattern
 // app/components/Foo.vue importing from server/lib/*
 // Fix: expose as /api/* แล้วเรียกผ่าน useFetch/useAsyncData
 ````
 
 ---
 
 ## 4. Data Flow (ใช้เมื่อต้องอธิบาย end-to-end request/response)
 
 4.1. `page` : ผู้ใช้เข้า route -> `app/pages/*` เรียก `useAsyncData()`/`useFetch()`
 
 4.2. `api` : client call -> `server/api/*` ทำ VALIDATE แล้วเรียก `server/lib/*`
 
 4.3. `service` : business logic -> `server/lib/*` เรียก `server/db/*` หรือ integrations
 
 4.4. `db` : queries -> `server/db/*` คืนผลลัพธ์แบบ deterministic
 
 4.5. `result` : response -> server คืน JSON -> client hydrate แล้ว render UI
 
 ````
 app/pages -> app/composables -> (HTTP) /api/* -> server/api -> server/lib -> server/db -> response -> UI
 ````

---

## 5. MOVE Mapping (ใช้เมื่อต้องตัดสินใจย้ายไฟล์ให้ถูกที่)

5.1. `page logic` : มี business logic หนักใน `app/pages/*` -> MOVE ไป `app/composables/*` หรือ `server/lib/*` (ขึ้นกับเป็น client/server)

5.2. `cross-page state` : มี state ใช้ข้ามหลายหน้า -> MOVE ไป `app/stores/*`

5.3. `api logic` : มี logic หนักใน `server/api/*` -> MOVE ไป `server/lib/*` และให้ handler เหลือแค่ VALIDATE + CALL + RETURN

5.4. `db queries` : มี query กระจายอยู่ใน `server/api/*`/`server/lib/*` -> MOVE ไป `server/db/*`

5.5. `shared types` : types ใช้ทั้ง client และ server -> MOVE ไป `shared/types/*`

5.6. `shared utils` : function pure/deterministic -> MOVE ไป `shared/utils/*`

5.7. `client-only utils` : ใช้ browser APIs หรือ UI-only -> MOVE ไป `app/utils/*`

5.8. `server-only utils` : ใช้ H3/Nitro/Node APIs -> MOVE ไป `server/utils/*`

````typescript
// Example: ทำให้ server/api บางลง
// Before: server/api/users.get.ts ทำ query เอง + map response เอง
// After: server/api/users.get.ts -> call server/lib/users/getUsers() -> lib เรียก server/db/users.list()
````

````typescript
// Example: ทำให้ server/api บางลง
// Before: server/api/users.get.ts ทำ query เอง + map response เอง
// After: server/api/users.get.ts -> call server/lib/users/getUsers() -> lib เรียก server/db/users.list()
````
