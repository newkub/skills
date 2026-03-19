---
description: เนื้อหาข้างเคียง (asides) ใน Markdown
title: asides
tags: [markdown, aside, sidebar, note]
goals:
  - แสดงตัวอย่างการใช้ asides
  - สอนวิธีสร้างเนื้อหาข้างเคียง
---

## Info Aside

````markdown
> [!INFO]
> นี่คือข้อมูลเพิ่มเติมที่น่าสนใจ
> สามารถมีหลายบรรทัดได้
````

## Tip Aside

````markdown
> [!TIP]
> 💡 เคล็ดลับ: ใช้คีย์ลัด `Ctrl+S` เพื่อบันทึกไฟล์
````

## Warning Aside

````markdown
> [!WARNING]
> ⚠️ คำเตือน: การดำเนินการนี้ไม่สามารถยกเลิกได้
````

## Important Aside

````markdown
> [!IMPORTANT]
> 📌 สำคัญ: ต้องอ่านส่วนนี้ก่อนดำเนินการต่อ
````

## Note Aside

````markdown
> [!NOTE]
> 📝 บันทึก: ฟีเจอร์นี้ใช้ได้ในเวอร์ชัน 2.0 ขึ้นไป
````

## Custom Styled Aside

````markdown
<aside style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 1rem;">
  <h4>📚 เอกสารอ้างอิง</h4>
  <p>ดูเพิ่มเติมได้ที่ <a href="#">คู่มือผู้ใช้</a></p>
</aside>
````

## Sidebar Example

````markdown
<div class="aside-right">

### บทความที่เกี่ยวข้อง

- [การเริ่มต้นใช้งาน](./getting-started.md)
- [คู่มือขั้นสูง](./advanced.md)
- [แก้ไขปัญหา](./troubleshooting.md)

</div>
````

## Callout Box

````markdown
> 🎯 **เป้าหมาย**
>
> สร้างเอกสารที่อ่านง่ายและเข้าใจได้เร็ว
>
> - ใช้ภาษาที่ชัดเจน
> - มีตัวอย่างประกอบ
> - จัดโครงสร้างเป็นระบบ
````
