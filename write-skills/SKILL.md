---
name: write-skills
description: แนวทางการสร้างและจัดระเบียน skills ตามประเภทต่างๆ
goal: สร้างเอกสาร skills ที่มีโครงสร้างสม่ำเสมอและครอบคลุมทุกด้าน
outcome: ไฟล์ skills ที่มีมาตรฐานเดียวกัน ตรวจสอบได้ และใช้งานได้จริง
---

# Write Skills

## When to Execute

ใช้นี้เมื่อต้องการสร้างเอกสาร skills ใหม่หรือจัดระเบียน skills ที่มีอยู่

## Quick Start

1. เลือกประเภท skill ที่เหมาะสมจาก [skills-types](skills-types.md)
2. สร้างโครงสร้างไดเรกทอรีตามที่กำหนด
3. เขียนเอกสารสำหรับแต่ละไฟล์
4. ตรวจสอบเกณฑ์การตรวจสอบทั้งหมด

## ตารางสรุปประเภท Skills

| ประเภท | วัตถุประสงค์ | เหมาะสำหรับ |
|--------|--------------|--------------|
| **Library** | เอกสารไลบรารีและ API | ไลบรารี, SDK, Framework |
| **Blog** | แนวทางการเขียนบล็อก | Content creators, Writers |
| **Project** | การจัดการโปรเจกต์ | Project managers, DevOps |
| **Product** | เอกสารผลิตภัณฑ์ | Product managers, Support |
| **Scripts** | สคริปต์และออโตเมชัน | Developers, Sysadmins |
| **Business** | การดำเนินธุรกิจ | Entrepreneurs, Managers |
| **Personal Dev** | การพัฒนาตนเอง | Self-improvement, Life coaches |
| **Communication** | การสื่อสาร | Public speakers, Writers |
| **Research** | การวิจัยและการวิเคราะห์ | Researchers, Academics |
| **Programming Language** | การเรียนรู้และพัฒนาภาษาโปรแกรม | Developers, Students, Educators |

ดูรายละเอียดประเภท skills ทั้งหมายได้ที่ [skills-types/](skills-types/README.md)

## กฎการเขียนเอกสาร

### General Rules
- ทุก `.md` ไฟล์ใน skill ต้องทำตาม [write-rules](../write-rules/AGENTs.md) guidelines
- ใช้ active voice เท่านั้น
- ประโยคสั้นไม่เกิน 20 คำ
- Technical terms ใช้ภาษาอังกฤษเท่านั้น

### Structure Requirements
- ทำตามโครงสร้างที่กำหนดอย่างเคร่งครัด
- ใช้ naming conventions ที่กำหนด
- มี verification steps ที่ชัดเจน

## การตรวจสอบคุณภาพ

### Verification Checklist
- [ ] โครงสร้างไฟล์ถูกต้องตามประเภท
- [ ] ทุกไฟล์ที่จำเป็นมีอยู่
- [ ] เอกสารครอบคลุมทุกด้าน
- [ ] ผ่าน write-rules ทั้งหมาย
- [ ] มีตัวอย่างที่ชัดเจน

### Quality Metrics
- ไม่มี lint errors หรือ warnings
- Code coverage ตรง threshold ที่กำหนด
- ไม่มี security vulnerabilities
- ไม่มี performance bottlenecks