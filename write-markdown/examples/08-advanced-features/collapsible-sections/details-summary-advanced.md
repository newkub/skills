---
description: รายละเอียดแบบพับได้ใน Markdown
title: details-summary
tags: [markdown, details, summary, collapsible]
goals:
  - แสดงตัวอย่างการใช้ details/summary
  - สอนวิธีสร้างเนื้อหาที่พับ/ขยายได้
---

## Basic Details

````markdown
<details>
  <summary>คลิกเพื่อดูรายละเอียดเพิ่มเติม</summary>

เนื้อหาที่ซ่อนอยู่จะแสดงเมื่อคลิก

- รายการที่ 1
- รายการที่ 2
- รายการที่ 3

</details>
````

## Details with Open State

````markdown
<details open>
  <summary>รายละเอียดที่เปิดอยู่</summary>

เนื้อหานี้จะแสดงโดยอัตโนมัติ

```bash
npm install package-name
```

</details>
````

## Nested Details

````markdown
<details>
  <summary>ขั้นตอนที่ 1: ติดตั้ง</summary>

  <details>
    <summary>ตัวเลือก A: ใช้ npm</summary>
    ```bash
    npm install
    ```
  </details>

  <details>
    <summary>ตัวเลือก B: ใช้ yarn</summary>
    ```bash
    yarn install
    ```
  </details>

</details>
````

## Styled Summary

````markdown
<details>
  <summary>📋 รายการงานที่ต้องทำ</summary>

- [x] งานที่เสร็จแล้ว
- [ ] งานที่ยังไม่เสร็จ
- [ ] งานที่รอดำเนินการ

> 💡 Tip: คลิกเพื่อพับ/ขยายรายการ

</details>
````

## API Response Example

````markdown
<details>
  <summary>🌐 Response (200 OK)</summary>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "name": "Example"
  }
}
```

</details>
````
