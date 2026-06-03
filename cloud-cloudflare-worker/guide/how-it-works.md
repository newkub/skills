# Cloudflare Workers - How It Works

ภาพรวมการทำงานของ Cloudflare Workers

## Architecture Overview

```text
                    ┌─────────────────────┐
                    │   Cloudflare Edge   │
                    │   (300+ locations)   │
                    └──────────┬──────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
         ▼                     ▼                     ▼
   ┌───────────┐        ┌───────────┐        ┌───────────┐
   │  Workers  │        │  Workers  │        │  Workers  │
   │  (V8 Isolate)     │  (V8 Isolate)     │  (V8 Isolate)
   └───────────┘        └───────────┘        └───────────┘
         │                     │                     │
         ▼                     ▼                     ▼
   ┌───────────┐        ┌───────────┐        ┌───────────┐
   │    KV     │        │    D1     │        │    R2     │
   └───────────┘        └───────────┘        └───────────┘
```

## Request Flow

### Step 1: DNS Resolution

```text
User → www.example.com
         ↓
    Cloudflare DNS
         ↓
    Edge Location (ใกล้ user ที่สุด)
```

### Step 2: Worker Execution

```text
Edge Location
     ↓
┌─────────────────────────────────────┐
│         V8 Isolate Pool             │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐│
│  │ Is1 │  │ Is2 │  │ Is3 │  │ Is4 ││
│  └─────┘  └─────┘  └─────┘  └─────┘│
└─────────────────────────────────────┘
     ↓
 Worker Code Execution
     ↓
 Response Return
```

### Step 3: Response Caching

```text
Response
     │
     ├──▶ Browser Cache (ตาม Cache-Control)
     │
     ├──▶ Edge Cache (CDN cache)
     │
     └──▶ Worker Cache (Cache API)
```

## V8 Isolate Model

### Traditional vs Cloudflare

```
Traditional Container Model:
┌─────────────────────────────────────┐
│           VM / Container            │
│  ┌─────────────────────────────┐    │
│  │        Node.js Runtime      │    │
│  │  ┌───────────────────────┐ │    │
│  │  │     Your Code         │ │    │
│  │  └───────────────────────┘ │    │
│  └─────────────────────────────┘    │
│  Memory: 128MB+, Cold start: 500ms  │
└─────────────────────────────────────┘

Cloudflare V8 Isolate Model:
┌─────────────────────────────────────┐
│           V8 Isolate Pool            │
│  ┌───────────┐  ┌───────────┐       │
│  │  Isolate  │  │  Isolate  │       │
│  │  (Your)   │  │  (Other)  │       │
│  └───────────┘  └───────────┘       │
│  Memory: ~5MB, Cold start: <5ms     │
└─────────────────────────────────────┘
```

### Isolate Lifecycle

```text
┌──────────────────────────────────────────────────────────┐
│                    Isolate Lifecycle                      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Request 1 ──▶ Execute ──▶ Response ──▶ (idle) ──▶ GC   │
│                      │                                    │
│                      ▼                                    │
│              ┌─────────────┐                             │
│              │  Persisted  │  (for stateless requests)   │
│              │   Global    │                             │
│              └─────────────┘                             │
│                                                           │
│  Request 2 ──▶ Execute ──▶ Response                       │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

## Data Flow with Bindings

```text
Worker Code
     │
     ├──┬─▶ KV Namespace
     │       │
     │       ▼
     │   ┌───────────────────────┐
     │   │   Global Key-Value    │
     │   │   (CDN-backed)       │
     │   └───────────────────────┘
     │
     ├──▶ D1 Database
     │       │
     │       ▼
     │   ┌───────────────────────┐
     │   │   SQLite at Edge      │
     │   └───────────────────────┘
     │
     ├──▶ R2 Bucket
     │       │
     │       ▼
     │   ┌───────────────────────┐
     │   │   Object Storage      │
     │   └───────────────────────┘
     │
     └──▶ Durable Objects
             │
             ▼
       ┌───────────────────────┐
       │  Stateful Actor Model │
       │  (Single instance)    │
       └───────────────────────┘
```

## Cold Start Comparison

```text
Cold Start Time (ms)
│
│   ████████████████████████████████
│   █                                           █
│   █                                           █
│   █                                           █
0──┴────────────────────────────────────────────┴──▶
   Lambda      Cloudflare      Vercel      Deno
   (1-3s)      Workers         Edge        Deploy
               (<5ms)          (<50ms)     (<15ms)
```

## Global Network

```text
                    World Map
                    
        ┌────────────────────────┐
        │    North America       │
        │  ┌──┐ ┌──┐ ┌──┐       │
        │  │  │ │  │ │  │ 100+   │
        │  └──┘ └──┘ └──┘       │
        └────────────┬───────────┘
                     │
        ┌───────────┴───────────┐
        │       Europe          │
        │  ┌──┐ ┌──┐ ┌──┐      │
        │  │  │ │  │ │  │ 80+  │
        │  └──┘ └──┘ └──┘      │
        └───────────┬───────────┘
                    │
        ┌───────────┴───────────┐
        │       Asia Pacific    │
        │  ┌──┐ ┌──┐ ┌──┐       │
        │  │  │ │  │ │  │ 100+  │
        │  └──┘ └──┘ └──┘      │
        └────────────────────────┘
                     │
        ┌───────────┴───────────┐
        │       Others          │
        │  ┌──┐ ┌──┐            │
        │  │  │ │  │  20+        │
        │  └──┘ └──┘            │
        └────────────────────────┘

Total: 300+ edge locations worldwide
```

## Security Model

```text
┌─────────────────────────────────────────────────┐
│              Security Layers                     │
├─────────────────────────────────────────────────┤
│                                                   │
│  1. DDoS Protection (always on)                   │
│         ↓                                        │
│  2. WAF Rules (customizable)                     │
│         ↓                                        │
│  3. Rate Limiting                                │
│         ↓                                        │
│  4. Worker Execution (V8 isolates)                │
│         ↓                                        │
│  5. Secrets (encrypted at rest)                  │
│                                                   │
└─────────────────────────────────────────────────┘
```

## สรุป

1. Workers ทำงานบน edge network ที่กระจายทั่วโลก
2. ใช้ V8 Isolates สำหรับ cold start ที่เร็วมาก
3. รองรับหลาย bindings (KV, D1, R2, etc.)
4. Cache API ช่วยให้ caching ง่าย
5. Security layers ถูก apply ก่อนถึง Worker