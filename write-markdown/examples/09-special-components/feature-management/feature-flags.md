---
description: การจัดการ Feature Flags ใน Markdown
title: feature-flags
tags: [markdown, feature-flags, toggle, configuration]
goals:
  - แสดงตัวอย่างการใช้ feature flags
  - สอนวิธีสร้างเอกสารสำหรับ feature toggles
---

## Feature Flag Status Table

````markdown
| ฟีเจอร์ | สถานะ | เปิดใช้งาน | หมายเหตุ |
|---------|--------|-----------|----------|
| Dark Mode | ✅ พร้อมใช้งาน | 100% | เวอร์ชัน 2.0+ |
| AI Assistant | 🧪 Beta | 25% | กลุ่มทดสอบ |
| New Dashboard | 🚧 กำลังพัฒนา | 0% | รอเวอร์ชัน 3.0 |
| Real-time Sync | ⏸️ ระงับ | 0% | ปัญหาด้าน performance |
````

## Environment Configuration

````markdown
## การตั้งค่าตามสภาพแวดล้อม

### Development

```env
FEATURE_DARK_MODE=true
FEATURE_AI_ASSISTANT=true
FEATURE_NEW_DASHBOARD=true
```

### Production

```env
FEATURE_DARK_MODE=true
FEATURE_AI_ASSISTANT=false
FEATURE_NEW_DASHBOARD=false
```
````

## Feature Flag Documentation

````markdown
### Dark Mode

- **Key**: `feature.dark_mode`
- **Default**: `true`
- **เปิดใช้งาน**: 2024-01-15
- **คำอธิบาย**: โหมดมืดสำหรับการแสดงผลตอนกลางคืน
- **ผลกระทบ**: UI/UX ทั้งหมด
````

## Rollout Progress

````markdown
## ความคืบหน้าการเปิดใช้งาน

```text
Dark Mode      ████████████████████ 100% ✅
AI Assistant   ██████░░░░░░░░░░░░░░  30% 🧪
New Dashboard  ███░░░░░░░░░░░░░░░░░  15% 🚧
Export PDF     ░░░░░░░░░░░░░░░░░░░░   0% 📋
```

| เปอร์เซ็นต์ | จำนวนผู้ใช้ | สถานะ |
|------------|------------|--------|
| 0% | 0 | ปิด |
| 25% | 2,500 | Beta |
| 50% | 5,000 | ทยอยเปิด |
| 100% | 10,000 | เต็มรูปแบบ |
````

## Conditional Content

````markdown
<!-- #if feature.ai_assistant -->

## 🤖 AI Assistant

ฟีเจอร์ AI Assistant พร้อมให้ใช้งานแล้ว!

- [เริ่มต้นใช้งาน](./ai-assistant.md)
- [คู่มือการใช้งาน](./ai-guide.md)

<!-- #else -->

## 🤖 AI Assistant (เร็วๆ นี้)

ฟีเจอร์นี้กำลังอยู่ในระหว่างการพัฒนา สมัครรอบ Beta ได้ที่นี่:

[สมัคร Beta](#register)

<!-- #endif -->
````

## Feature Comparison

````markdown
| แผน | ฟีเจอร์พื้นฐาน | AI Assistant | Priority Support |
|-----|----------------|--------------|------------------|
| Free | ✅ | ❌ | ❌ |
| Pro | ✅ | ✅ | ❌ |
| Enterprise | ✅ | ✅ | ✅ |
````
