# Key Concept

## แนวคิดหลักของ Git

### Git คืออะไร?

Git เป็น distributed version control system ที่ใช้ติดตามการเปลี่ยนแปลงของ code ช่วยให้ทำงานเป็นทีมได้อย่างมีประสิทธิภาพ

### Core Concepts

| Concept | Description |
|---------|-------------|
| **Repository** | ที่เก็บ project และ history ของการเปลี่ยนแปลงทั้งหมด |
| **Commit** | Snapshot ของไฟล์ในช่วงเวลาหนึ่ง พร้อมรายละเอียดผู้ commit |
| **Branch** | เส้นทางการพัฒนาที่แยกออกมา ใช้สำหรับพัฒนา feature ใหม่ |
| **Merge** | การรวม changes จาก branch หนึ่งไปยังอีก branch หนึ่ง |
| **Remote** | Repository ที่อยู่บน server ใช้สำหรับ collaboration |
| **Clone** | การทำสำเนา repository มาไว้ที่ local |

### Git Workflow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Working Directory│────▶│   Staging Area  │────▶│   Repository    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
       git add                  git commit
```

| Stage | Description |
|-------|-------------|
| **Working Directory** | ไฟล์ที่กำลังแก้ไขอยู่ในเครื่อง |
| **Staging Area** | ไฟล์ที่เตรียมจะ commit |
| **Repository** | ฐานข้อมูลที่เก็บ commits ทั้งหมด |

### Key Terms

| Term | Description |
|------|-------------|
| **HEAD** | Pointer ชี้ไปยัง commit ปัจจุบัน |
| **Origin** | ชื่อ default ของ remote repository |
| **Master/Main** | Branch หลักของ project |
| **Conflict** | สถานการณ์ที่ไฟล์ถูกแก้ไขในที่เดียวกัน |
| **Stash** | การเก็บ changes ชั่วคราวไว้ |

### เมื่อไหร่ควรใช้ Git?

| สถานการณ์ | เหตุผล |
|-----------|--------|
| ทำงานเป็นทีม | ติดตามการเปลี่ยนแปลงและแก้ conflict ได้ |
| ต้องการ backup | Repository สามารถเก็บไว้บน remote server |
| ทดลองเปลี่ยนแปลง | สร้าง branch แยกทดลองได้โดยไม่กระทบ code หลัก |
| ต้องการ rollback | กลับไป version เก่าได้เสมอ |
| Code review | ดู history และเปรียบเทียบการเปลี่ยนแปลงได้ |