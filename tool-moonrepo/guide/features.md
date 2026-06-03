# Features

Features ทั้งหมดของ moonrepo

## Core Features

| Feature | Description |
|---------|-------------|
| **Smart Hashing** | สร้าง hash จาก inputs ทำให้ builds deterministic |
| **Remote Caching** | แชร์ cache ระหว่าง teammates และ CI |
| **Task Running** | รัน tasks ใน monorepo อย่างมีประสิทธิภาพ |
| **Project Graph** | ติดตาม dependencies ระหว่าง projects |
| **Toolchain Management** | จัดการ tools เวอร์ชันต่างๆ อัตโนมัติ |
| **Action Pipeline** | รัน actions ตามลำดับ dependency |

## Task Features

| Feature | Description |
|---------|-------------|
| **Task Inheritance** | define task ครั้งเดียว inherit ไปหลาย projects |
| **Caching** | cache task outputs อัตโนมัติ |
| **Retry** | retry failed tasks |
| **Concurrency** | รันหลาย tasks พร้อมกัน |

## Remote Caching

```bash
# Setup remote cache
moon setup remote

# Sync cache
moon sync
```

## CI Integration

```bash
# Run with cache
moon run build --ci

# Force no cache
moon run build --no-cache
```
