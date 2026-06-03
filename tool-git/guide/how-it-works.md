# How It Works

## หลักการทำงานของ Git

### Architecture Overview

Git เป็น distributed version control system ที่ออกแบบมาเพื่อจัดการ project ทุกขนาดอย่างมีประสิทธิภาพ:

```
┌──────────────────────────────────────────────────────────┐
│                    Git Architecture                       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────┐    ┌────────────────┐              │
│  │Working Directory│    │  Staging Area  │              │
│  └────────┬───────┘    └────────┬───────┘              │
│           │                      │                      │
│           ▼                      ▼                      │
│  ┌────────────────┐    ┌────────────────┐              │
│  │Local Repository│    │  Remote Repo   │              │
│  └────────────────┘    └────────────────┘              │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Branches  │  Commits  │  Tags  │  Stash            ││
│  └─────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────┘
```

### Git Objects

Git เก็บข้อมูลเป็น object ที่เชื่อมโยงกัน:

| Object Type | Description |
|-------------|-------------|
| **Blob** | เก็บเนื้อหาของไฟล์ |
| **Tree** | เก็บ directory structure และ file references |
| **Commit** | เก็บ metadata และ pointer ไปยัง tree |
| **Tag** | Reference ไปยัง specific commit (usually releases) |

### Workflow หลัก

```
1. git init/clone
       │
       ▼
2. แก้ไขไฟล์ใน Working Directory
       │
       ▼
3. git add → เพิ่มไป Staging Area
       │
       ▼
4. git commit → เก็บลง Local Repository
       │
       ▼
5. git push → ส่งไป Remote Repository
```

| Step | Command | Description |
|------|---------|-------------|
| 1 | `git init` | สร้าง repository ใหม่ |
| 1 | `git clone` | Clone repository ที่มีอยู่ |
| 2 | `git status` | ดูไฟล์ที่เปลี่ยนแปลง |
| 3 | `git add` | เพิ่มไฟล์ไป staging |
| 4 | `git commit` | สร้าง commit |
| 5 | `git push` | ส่งไป remote |

### Branching Workflow

```
    main ──────────────────────────────────────
              │                                │
              ▼                                ▼
         feature-A ────▶ merge            bug-fix ────▶ merge
              │                                              │
              ▼                                              ▼
         develop ◀──────────────────────────────────────────
```

| Branch Type | Purpose | Example |
|-------------|---------|---------|
| **main** | Production code | `main`, `master` |
| **develop** | Integration branch | `develop`, `dev` |
| **feature** | New features | `feature/login`, `feat/dashboard` |
| **hotfix** | Emergency fixes | `hotfix/critical-bug` |

### Key Concepts Summary

| Concept | Description |
|---------|-------------|
| **Distributed VCS** | ทุกคนมี full copy ของ project และ history |
| **Snapshots** | Git เก็บ snapshot ไม่ใช่ diff |
| **Integrity** | ทุก object มี SHA-1 hash สำหรับตรวจสอบ |
| **Local Operations** | ทำงานได้โดยไม่ต้องต่อ internet |
| **States** | Modified → Staged → Committed |