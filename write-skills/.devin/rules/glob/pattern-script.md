---
trigger: glob
glob: "**/scripts/*.{sh,bash,ts,js}"
---

เมื่อ task เกี่ยวข้องกับ script files ให้ใช้ template นี้

## วัตถุประสงค์

Template นี้ใช้สำหรับสร้าง script files สำหรับ automation

## Template Content

```bash
#!/usr/bin/env bun

<Script content>
```
