---
name: git-branching-workflows
description: ความรู้เกี่ยวกับ Branching Workflows ใน Git
goal: เข้าใจและใช้งาน Branching Workflows ใน Git ได้อย่างถูกต้อง
outcome: สามารถเลือกและใช้ Branching Workflows ที่เหมาะสมกับ project ได้
---

# Git Branching Workflows

## Overview

Branching Workflows ใน Git เป็นแนวทางการจัดการ branches ที่ช่วยให้ทีมพัฒนาซอฟต์แวร์ได้มีประสิทธิภาพและมีความยืดหยุ่นในการทำงานร่วมกัน

## Long-Running Branches

### Concept

Long-Running Branches คือ branches ที่เปิดไว้นาน ใช้สำหรับขั้นตอนต่างๆ ใน development cycle

### Types of Long-Running Branches

1. **master/main branch**
   - เก็บ code ที่เสถียรที่สุด
   - ใช้สำหรับ releases ทางการ
   - มักมี code ที่ถูก release หรือจะ release

2. **develop/next branch**
   - ใช้สำหรับทำงานหรือทดสอบความเสถียร
   - ไม่จำเป็นต้องเสถียรเสมอ
   - เมื่อเสถียร จะ merge เข้า master
   - ใช้สำหรับ pull in topic branches เมื่อพร้อม

3. **proposed/pu (proposed updates) branch**
   - ใช้สำหรับ branches ที่ยังไม่พร้อมเข้า next หรือ master
   - ใช้ใน projects ขนาดใหญ่

### Workflow

```
proposed (pu)
    ↓
next (develop)
    ↓
master
```

- เมื่อ branch ถึงความเสถียรสูงขึ้น จะ merge เข้า branch ด้านบน
- แต่ละ branch อยู่ความเสถียรต่างกัน
- จัดการ code ได้หลายระดับความเสถียร

### Usage

- เหมาะกับ projects ขนาดใหญ่หรือซับซ้อน
- ช่วยจัดการความเสถียรของ code ได้ดี
- ไม่จำเป็นต้องมีหลาย branches แต่มักช่วยใน projects ขนาดใหญ่

## Topic Branches

### Concept

Topic Branches คือ branches ที่สั้น (short-lived) สร้างขึ้นเพื่อทำงานเฉพาะ feature หรืองานที่เกี่ยวข้องกัน

### Characteristics

- **Short-lived**: สร้าง, ทำงาน, merge, และลบในช่วงสั้น
- **Single purpose**: ใช้สำหรับ feature หรืองานเดียว
- **Easy to create**: Git ทำให้การสร้างและ merge branches ง่าย
- **Context switching**: ช่วยให้สลับ context ได้รวดเร็ว

### Example Usage

```
master
    ↓
iss53 (issue branch)
    ↓
hotfix (hotfix branch)
```

### Workflow Steps

1. สร้าง topic branch จาก master หรือ branch หลัก
2. ทำงานและ commit บน topic branch
3. Merge topic branch เข้า main branch เมื่อพร้อม
4. ลบ topic branch หลัง merge เสร็จ

### Benefits

- **Isolation**: งานแต่ละอย่างแยกจากกัน
- **Code review**: ง่ายต่อการ review code ในแต่ละ topic
- **Flexibility**: เก็บ changes ได้นานเท่าที่ต้องการ
- **Order independence**: สามารถ merge ตามลำดับที่ต้องการไม่ว่าจะสร้างหรือทำงานเมื่อไหร่

### Example Scenario

```
master
    ↓
iss91 (original solution)
    ↓
iss91v2 (alternative solution)
    ↓
dumbidea (experimental)
```

- สามารถลองหลาย solutions บน branches ต่างกัน
- เลือก solution ที่ดีที่สุดแล้ว merge
- ลบ branches ที่ไม่ต้องการ

## Best Practices

### Long-Running Branches

- ใช้สำหรับ projects ขนาดใหญ่หรือซับซ้อน
- กำหนดความเสถียรของแต่ละ branch ชัดเจน
- Merge จาก branch ที่น้อยความเสถียรไป branch ที่มากความเสถียร

### Topic Branches

- สร้าง topic branches สำหรับทุก feature หรือ issue
- ใช้ชื่อที่อธิบายได้ชัดเจน (เช่น `iss53`, `hotfix-login`)
- Merge และลบ branches หลังเสร็จงาน
- ใช้ branches หลายครั้งต่อวันตามความจำเป็น

## References

- [Git Branching - Branching Workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
- [Git Book](https://git-scm.com/book/en/v2)

## Verification

1. ตรวจสอบว่าเข้าใจ Long-Running Branches และ Topic Branches
2. ทดสอบสร้างและใช้งาน branches ตาม workflow
3. ตรวจสอบว่าสามารถเลือก workflow ที่เหมาะสมกับ project ได้
