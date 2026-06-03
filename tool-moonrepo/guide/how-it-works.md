# How It Works

## Architecture

Moon เป็น task runner และ monorepo management tool สำหรับ web ecosystem ที่เขียนด้วย Rust:

```
┌─────────────────────────────────────┐
│          Moon Architecture             │
├─────────────────────────────────────┤
│  Smart Hashing  │  Remote Caching    │
├─────────────────────────────────────┤
│  Project Graph  │  Dependency Graph  │
├─────────────────────────────────────┤
│  Action Pipeline  │  Task Inheritance │
├─────────────────────────────────────┤
│  Integrated Toolchain  │  Git Hooks   │
└─────────────────────────────────────┘
```

## Workflow

1. **Configure** - สร้าง `moon.yml` configuration file
2. **Setup** - Initialize workspace ด้วย `moon init`
3. **Define Tasks** - Define tasks ใน `moon.yml` หรือ inherit จาก root
4. **Execute** - รัน tasks ด้วย `moon run <task>`
5. **Cache** - Smart hashing และ remote caching สำหรับ faster builds
6. **Monitor** - Monitor pipeline health ด้วย notifications และ webhooks

## Key Concepts

- **Smart Hashing** - Collects inputs จาก multiple sources สำหรับ deterministic builds
- **Remote Caching** - Persists builds, hashes, และ caches ระหว่าง teammates และ CI/CD
- **Project Graph** - Generates graph สำหรับ dependency และ dependent relationships
- **Task Inheritance** - Define task once และ inherit โดย all หรือ scoped projects
- **Action Pipeline** - Executes actions ใน parallel และ order โดยใช้ dependency graph
- **Incremental Builds** - Only rebuild projects ที่ changed ด้วย smart hashing
- **Integrated Toolchain** - Automatically downloads และ installs explicit versions ของ tools
- **Multi-platform** - Runs on Linux, macOS, และ Windows
