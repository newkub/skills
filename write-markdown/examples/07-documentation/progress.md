---
description: Progress bars และ progress indicators ใน Markdown
title: progress
tags: [markdown, progress, progress-bar, indicators, status]
goals:
  - แสดงตัวอย่างการสร้าง progress bars
  - สอนวิธีใช้ progress indicators
---

## Simple Progress Bar

````markdown
**Progress:** ████████████████████░░░░░ 80%

**Progress:** ▰▰▰▰▰▰▰▰▱▱▱ 70%
````

## Task Completion

````markdown
- [x] Setup project (100%)
- [x] Configure TypeScript (100%)
- [x] Add linting (100%)
- [ ] Write tests (60%) ⏳
- [ ] Deploy (0%) ⏸️

**Overall:** ▓▓▓▓▓▓▓░░░ 70% Complete
````

## Milestone Progress

````markdown
### Phase 1: Foundation ✅

```text
████████████████████ 100%
```

### Phase 2: Development 🚧

```text
████████████░░░░░░░░ 60%
```

### Phase 3: Testing ⏳

```text
██░░░░░░░░░░░░░░░░░░ 10%
```
````

## Emoji Progress

````markdown
🟢🟢🟢🟢🟢🟢🟡⚪⚪⚪ 60%

✅✅✅✅✅✅⏳⏸️⏸️⏸️ 60%

🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪ 60%
````

## Download/Upload Progress

````markdown
**Downloading:** `file.zip`

```text
[████████████████░░░░] 84% - 42MB/50MB
```

**Uploading:** `backup.tar`

```text
[████████████░░░░░░░░] 60% - 12MB/20MB
```
````
