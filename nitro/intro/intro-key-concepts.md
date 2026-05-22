# Nitro Key Concepts

## Core Concepts

### 1. File-based Routing

- แต่ละไฟล์ใน `routes/` directory จะ map เป็น URL path
- รองรับ dynamic routing ด้วย square brackets `[param]`
- รองม catch-all routes ด้วย `[...param]`

### 2. Runtime Agnostic

- เขียน code ครั้งเดียว รันได้บนหลาย runtime
- ไม่ต้องเปลี่ยน code เมื่อเปลี่ยน deployment target
- รองรับ Node.js, Bun, Deno, Cloudflare Workers, เป็นต้น

### 3. Build-time Compilation

- Routes ถูก compile ตอน build time
- ลด runtime overhead และ boot time
- เหมาะสำหรับ serverless hosting

### 4. Storage Layer

- Runtime-agnostic key-value storage
- รองรับ drivers หลากหลาย (FS, Redis, S3, เป็นต้น)
- สามารถ attach ไปยัง namespaces ต่างๆ ได้

### 5. Caching System

- Built-in caching สำหรับ routes และ functions
- ใช้ storage layer เป็นฐาน
- รองรับ caching strategies ต่างๆ

### 6. Database Integration

- Built-in SQL database
- ใช้ SQLite เป็น default
- รองรับ Postgres, MySQL, PGLite และอื่นๆ

## Architecture Patterns

### Universal Rendering

- รองรับ server-side rendering
- ใช้ templating engines หรือ component libraries
- รองรับ React, Vue, Svelte บน server

### Meta-Framework Foundation

- ใช้เป็นฐานสำหรับสร้าง meta-frameworks
- Nuxt, SolidStart, TanStack Start ใช้ Nitro เป็นพื้นฐาน
- สามารถ extend และ customize ได้

## Performance Characteristics

- **Near-zero boot time**: ด้วย build-time compilation
- **Optimized bundles**: โหลดเฉพาะ code ที่จำเป็น
- **Memory efficient**: ไม่มี runtime router overhead
- **Serverless ready**: ออกแบบมาสำหรับ serverless environments
