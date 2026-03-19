---
description: Decision trees และ flow diagrams
title: decisions
tags: [markdown, diagrams, decision-trees]
goals:
  - แสดงตัวอย่างการสร้าง decision trees
  - สอนวิธีสร้าง flow diagrams ด้วย text
---

## Simple Decision Tree

````text
🤔 ตัดสินใจเลือก Framework
  ├── Vue.js → ✅ เหมาะกับ SPA
  ├── React → ✅ Ecosystem ใหญ่
  └── Angular → ✅ Enterprise Grade
````

## Troubleshooting Tree

````text
🐛 Bug Report
  ├── 🔍 ตรวจสอบ Issue
  │   ├── ✅ Reproduce ได้ → 📝 สร้าง Test Case
  │   └── ❌ Reproduce ไม่ได้ → 📞 ขอข้อมูลเพิ่ม
  ├── 🔧 แก้ไขปัญหา
  │   ├── 🎯 Root Cause พบ → 💡 แก้ไข
  │   └── 🔍 Root Cause ไม่พบ → 🧪 Debug เพิ่ม
  └── ✅ Testing
      ├── ✅ Pass → 🚀 Deploy
      └── ❌ Fail → 🔁 แก้ไขอีกครั้ง
````

## User Journey Flow

````text
👤 ผู้ใช้เข้าสู่ระบบ
  ├── 📱 Login Page
  │   ├── ✅ Login สำเร็จ → 🏠 Dashboard
  │   └── ❌ Login ล้มเหลว → 🔄 ลองใหม่
  ├── 🏠 Dashboard
  │   ├── 📊 View Reports
  │   ├── ⚙️ Settings
  │   └── 📤 Logout
  └── 📤 Logout → 🚪 Exit System
````
