---
description: การแจ้งเตือนและการแจ้งข้อความใน Markdown
title: notifications
tags: [markdown, notification, alert, message]
goals:
  - แสดงตัวอย่างการใช้ notifications
  - สอนวิธีสร้างการแจ้งเตือนต่างๆ
---

## Success Notification

````markdown
✅ **สำเร็จ**

การดำเนินการเสร็จสมบูรณ์ ไฟล์ของคุณได้รับการบันทึกแล้ว
````

## Error Notification

````markdown
❌ **ผิดพลาด**

ไม่สามารถบันทึกไฟล์ได้ กรุณาลองใหม่อีกครั้ง

- ตรวจสอบสิทธิ์การเขียนไฟล์
- ตรวจสอบพื้นที่จัดเก็บข้อมูล
````

## Warning Notification

````markdown
⚠️ **คำเตือน**

การดำเนินการต่อไปนี้จะลบข้อมูลทั้งหมด:

| รายการ | จำนวน |
|--------|--------|
| ไฟล์ | 15 รายการ |
| โฟลเดอร์ | 3 รายการ |
| ขนาดรวม | 2.5 GB |
````

## Info Notification

````markdown
ℹ️ **ข้อมูล**

เวอร์ชันใหม่พร้อมให้ใช้งานแล้ว:

- **เวอร์ชัน**: 2.5.0
- **วันที่**: 2024-03-15
- [ดู changelog](./changelog.md)
````

## Notification with Action

````markdown
🔔 **แจ้งเตือน**

มีอัพเดตสำคัญที่ต้องดำเนินการ

[อัพเดตเดี๋ยวนี้](./update) | [เลื่อนไว้ก่อน](#)
````

## Inline Notification

````markdown
<span class="badge-success">พร้อมใช้งาน</span>
<span class="badge-warning">กำลังบำรุงรักษา</span>
<span class="badge-error">ไม่พร้อมใช้งาน</span>
<span class="badge-info">รอดำเนินการ</span>
````

## Toast Notification Example

````markdown
<div class="toast toast-success">
  <span class="toast-icon">🎉</span>
  <span class="toast-message">บันทึกสำเร็จ!</span>
</div>

<div class="toast toast-error">
  <span class="toast-icon">💥</span>
  <span class="toast-message">เกิดข้อผิดพลาด</span>
</div>
````

## System Status

````markdown
## สถานะระบบ

| บริการ | สถานะ | อัพเดตล่าสุด |
|--------|--------|--------------|
| API | 🟢 ทำงานปกติ | 1 นาทีที่แล้ว |
| Database | 🟢 ทำงานปกติ | 2 นาทีที่แล้ว |
| CDN | 🟡 ช้าลงเล็กน้อย | 5 นาทีที่แล้ว |
| Queue | 🔴 ไม่พร้อมใช้งาน | 10 นาทีที่แล้ว |
````
