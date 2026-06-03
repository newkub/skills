# How It Works

## Purpose

อธิบายการทำงานภายในของ Nitro server framework เพื่อให้เข้าใจกลไกและ flow การทำงาน

## Scope

- Request Lifecycle
- Filesystem Routing
- Build Pipeline
- Deploy Pipeline

## Request Lifecycle

Nitro รับ request ผ่าน server entry แล้วส่งผ่าน middleware pipeline ไปยัง matched route handler

```
+------------------+     +------------------+     +------------------+
|  Incoming        | --> |  Server Entry    | --> |  Middleware      |
|  HTTP Request    |     |  (global setup)  |     |  Pipeline        |
+------------------+     +------------------+     +------------------+
                                                          |
+------------------+     +------------------+     +------------------+
|  Response        | <-- |  Route Handler   | <-- |  Router Match    |
|  (JSON/HTML)     |     |  (business logic)|     |  (compiled)      |
+------------------+     +------------------+     +------------------+
```

### ขั้นตอนการทำงาน

| Step | Component | Description |
|------|-----------|-------------|
| 1 | Server Entry | รับ request และ setup global context |
| 2 | Middleware | ประมวลผล request ก่อนถึง handler (auth, logging) |
| 3 | Router | จับคู่ URL กับ compiled route |
| 4 | Handler | ประมวลผล business logic และสร้าง response |
| 5 | Response | ส่ง response กลับไปยัง client |

## Filesystem Routing

Nitro ใช้ filesystem routing แปลงโครงสร้างไฟล์เป็น route อัตโนมัติ

```
server/
├── api/
│   ├── users/
│   │   ├── index.ts        -->  /api/users
│   │   └── [id].ts         -->  /api/users/:id
│   └── posts/
│       └── index.ts        -->  /api/posts
└── middleware/
    └── auth.ts             -->  (runs for all routes)
```

### Route Compilation

| Phase | Description |
|-------|-------------|
| Scan | อ่านโครงสร้างไฟล์จาก disk |
| Parse | แปลง file path เป็น route pattern |
| Compile | สร้าง compiled route table (ไม่ต้อง runtime router) |
| Bundle | รวม handler code เป็น chunks ด้วย code-splitting |

## Build Pipeline

Nitro build แปลง source code เป็น optimized bundle สำหรับ target platform

```
+------------------+     +------------------+     +------------------+
|  Source Files    | --> |  Nitro Build     | --> |  Output Bundle   |
|  (routes, etc)   |     |  (Rolldown)      |     |  (optimized)     |
+------------------+     +------------------+     +------------------+
                                  |
                         +------------------+
                         |  Preset Adapter  |
                         |  (deploy target) |
                         +------------------+
```

### Build Steps

| Step | Tool | Description |
|------|------|-------------|
| 1 | Scanner | ค้นหา routes, middleware, plugins |
| 2 | Rolldown | Bundle และ tree-shake |
| 3 | Preset | ปรับ output ให้ตรงกับ platform |
| 4 | Output | สร้าง .output/ directory |

## Deploy Pipeline

Nitro รองรับ zero-config deployment หลาย platform

| Platform | Preset | Output |
|----------|--------|--------|
| Node.js | `node_server` | Standalone server |
| Cloudflare | `cloudflare_pages` | Worker script |
| Vercel | `vercel` | Edge function |
| Netlify | `netlify` | Serverless function |
| Static | `static` | Pre-rendered HTML |