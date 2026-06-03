# Features

## Core Features

| Feature | คำอธิบาย |
|---------|----------|
| **Intelligent Caching** | Cache task outputs โดยใช้ content hash |
| **Remote Cache** | Share cache ระหว่างเครื่องและ CI |
| **Task Scheduling** | DAG-based execution พร้อม dependency management |
| **Framework Inference** | Auto-detect Next.js, Vite, Remix และอื่นๆ |
| **Environment Modes** | Strict/Louse mode สำหรับ env variables |

## Caching Features

| Feature | คำอธิบาย |
|---------|----------|
| **Local Cache** | เก็บใน `.turbo/cache` ใน repository |
| **Remote Cache** | Vercel remote cache สำหรับ share ระหว่าง team |
| **Cache Signing** | HMAC signature สำหรับ artifact integrity |
| **Cache Pruning** | Automatic eviction ตาม age และ size |
| **Preflight Requests** | ตรวจสอบ remote cache availability |

## Task Configuration

| Feature | คำอธิบาย |
|---------|----------|
| **Pipeline Dependencies** | กำหนด task order ด้วย `dependsOn` |
| **Outputs** | ระบุ files ที่ต้องการ cache |
| **Inputs** | กำหนด files ที่มีผลต่อ task hash |
| **Persistent Tasks** | Long-running tasks (dev servers) |
| **Interactive Tasks** | Tasks ที่รับ stdin input |

## Remote Cache Features

| Feature | คำอธิบาย |
|---------|----------|
| **Vercel Integration** | Login ด้วย Vercel account |
| **Self-hosted Cache** | ใช้ remote cache ของตัวเอง |
| **Artifact Signing** | HMAC-SHA256 signature verification |
| **Team Support** | Multiple teams ด้วย `teamId`/`teamSlug` |

## Developer Experience

| Feature | คำอธิบาย |
|---------|----------|
| **Terminal UI** | Interactive TUI สำหรับ task visualization |
| **Log Streaming** | Real-time log output |
| **Dry Run** | Preview tasks โดยไม่ execute |
| **Graph Export** | Export task graph เป็น image |
| **Run Summaries** | JSON summary ของ task execution |
| **Affected Mode** | Run only tasks affected by changes |

## Configuration Options

| Feature | คำอธิบาย |
|---------|----------|
| **turbo.json** | Root configuration file |
| **Package Configs** | Package-specific overrides |
| **Environment Variables** | System env สำหรับ overrides |
| **CLI Flags** | Per-invocation overrides |
| **$TURBO_DEFAULT$** | Preserve default inputs |

## Advanced Features

| Feature | คำอธิบาย |
|---------|----------|
| **Boundaries** | Enforce package dependency rules |
| **Tags** | Group packages for filtering |
| **OpenTelemetry** | Export metrics to observability backends |
| **Watch Mode** | Auto-rebuild on file changes |
| **Global Configuration** | Namespace global options |