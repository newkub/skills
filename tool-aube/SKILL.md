# aube

Package manager สำหรับ Node.js ที่เร็วที่สุด รองรับ lockfiles หลายรูปแบบ มี security defaults ที่ดีที่สุด และใช้ disk น้อยกว่าด้วย global content-addressable store

## โครงสร้าง

```
tool-aube/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   └── best-practices.md
└── references/
    ├── cli.md
    └── api.md
```


## When to use



## Skills Related



## References


## เนื้อหา

| หมวด | ไฟล์ | คำอธิบาย |
|------|------|----------|
| **Core** | SKILL.md | Index หลัก |
| **Guide** | guide/key-concept.md | แนวคิดหลัก |
| **Guide** | guide/how-it-works.md | วิธีการทำงาน |
| **Guide** | guide/features.md | ฟีเจอร์ทั้งหมด |
| **Guide** | guide/installation.md | วิธีติดตั้ง |
| **Guide** | guide/configuration.md | การตั้งค่า |
| **Guide** | guide/best-practices.md | แนวทางปฏิบัติ |
| **Ref** | references/cli.md | CLI reference |
| **Ref** | [api.md](references/api.md) | Programmatic API |

## คำสั่งพื้นฐาน

```bash
aubr test       # run script + auto-install
aube add react  # เพิ่ม dependency
aube install    # install เฉยๆ
aube ci         # CI mode
```