---
name: wxt-entrypoints
description: กำหนดกฏและแนวปฏิบัติสำหรับการใช้งาน entrypoints ใน WXT
priority: 2
impact: HIGH
---

# Entrypoints (จุดเข้าสู่ Extension)

## 1. Overview (ภาพรวม)

WXT ใช้ไฟล์ใน `entrypoints/` เป็น inputs เมื่อ bundle extension แต่ละ entrypoint ถูกกำหนดจากชื่อไฟล์หรือโฟลเดอร์

| หัวข้อ | คำอธิบาย |
|--------|----------|
| Entrypoints | ไฟล์ใน `entrypoints/` directory ที่ใช้เป็น inputs |
| Bundle | กระบวนการรวมไฟล์เป็น extension |

## 2. Entrypoint Definition (คำนิยาม Entrypoint)

Entrypoint คือ single file หรือ directory (with an index file) ใน `entrypoints/` directory

### 2.1. File Structure (โครงสร้างไฟล์)

````text
📂 entrypoints/
├── {name}.{ext}           # Single file entrypoint
└── {name}/
    └── index.{ext}        # Directory entrypoint with index file
````

| ประเภท | คำอธิบาย |
|--------|----------|
| Single file | ไฟล์เดียว เช่น `popup.html` |
| Directory | โฟลเดอร์ที่มี `index.{ext}` |

## 3. Entrypoint Types (ประเภท Entrypoint)

### 3.1. Listed Entrypoints (Entrypoints ที่ถูกอ้างอิง)

Entrypoints ที่ถูก referenced ใน manifest.json

### 3.2. Unlisted Entrypoints (Entrypoints ที่ไม่ถูกอ้างอิง)

Entrypoints ที่ไม่ถูก referenced ใน manifest.json แต่ยังถูกใช้โดย extension

| ประเภท | คำอธิบาย |
|--------|----------|
| Listed | ถูกอ้างอิงใน manifest.json |
| Unlisted | ไม่ถูกอ้างอิงแต่ยังถูกใช้งาน |

## 4. Common Entrypoint Names (ชื่อ Entrypoints ทั่วไป)

| Name | Type | Description |
|------|------|-------------|
| `background.ts` | Background Script | Service worker หรือ background page |
| `popup.html` | Popup Page | Popup UI สำหรับ extension |
| `options.html` | Options Page | Options/settings UI |
| `content.ts` | Content Script | Script ที่ inject เข้าไปใน web pages |
| `devtools.html` | Devtools Panel | Devtools panel |
| `history.html` | History Page | History replacement page |
| `newtab.html` | New Tab Page | New tab replacement page |

| ประเภท | คำอธิบาย |
|--------|----------|
| Background Script | Service worker หรือ background page |
| Popup Page | Popup UI สำหรับ extension |
| Content Script | Script ที่ inject เข้าไปใน web pages |

## 5. Defining Manifest Options (การกำหนด Manifest Options)

### 5.1. Content Scripts

USE `defineContentScript` เพื่อกำหนด options:

````typescript
export default defineContentScript({
  matches: ['*://*.wxt.dev/*'],
  main() {
    // Content script logic
  },
});
````

### 5.2. HTML Entrypoints

USE `<meta>` tags เพื่อกำหนด options:

````html
<!doctype html>
<html lang="en">
  <head>
    <meta name="manifest.type" content="page_action" />
  </head>
</html>
````

| ประเภท | วิธีกำหนด |
|--------|-----------|
| Content Scripts | ใช้ `defineContentScript` |
| HTML Entrypoints | ใช้ `<meta>` tags |

## 6. Filtering Entrypoints (การกรอง Entrypoints)

### 6.1. Include/Exclude Options

USE `include` และ `exclude` เพื่อ filter entrypoints สำหรับ browsers ที่ต้องการ

````typescript
// Content script only built when targeting firefox
export default defineContentScript({
  include: ['firefox'],
  main(ctx) {
    // ...
  },
});
````

````html
<!-- HTML file only built for all targets other than chrome -->
<!doctype html>
<html lang="en">
  <head>
    <meta name="manifest.exclude" content="['chrome', ...]" />
  </head>
</html>
````

| ตัวเลือก | คำอธิบาย |
|--------|----------|
| `include` | Build เฉพาะสำหรับ browsers ที่ระบุ |
| `exclude` | ไม่ Build สำหรับ browsers ที่ระบุ |

## 7. Best Practices (แนวปฏิบัติที่ดี)

1. USE descriptive names: ตั้งชื่อ entrypoints ให้ชัดเจน
2. USE defineContentScript: ใช้ helper functions ที่ WXT ให้มา
3. FILTER appropriately: ใช้ include/exclude เพื่อ optimize build
4. KEEP entrypoints focused: แต่ละ entrypoint ควรมีความรับผิดชอบชัดเจน
5. USE unlisted entrypoints: สำหรับ files ที่ไม่ต้องการใน manifest

| แนวปฏิบัติ | คำอธิบาย |
|-------------|----------|
| Descriptive names | ตั้งชื่อ entrypoints ให้ชัดเจน |
| Helper functions | ใช้ `defineContentScript` |
| Filtering | ใช้ include/exclude |
| Focused | แต่ละ entrypoint มีความรับผิดชอบชัดเจน |

## 8. Common Mistakes (ข้อผิดพลาดทั่วไป)

1. AVOID wrong file names: ชื่อไฟล์ไม่ตรงกับ entrypoint types
2. AVOID not using defineContentScript: ไม่ใช้ helper functions
3. AVOID forgetting manifest options: ไม่กำหนด manifest options ที่จำเป็น
4. AVOID not filtering: Build entrypoints ที่ไม่จำเป็นสำหรับบาง browsers

| ข้อผิดพลาด | วิธีแก้ไข |
|-------------|----------|
| Wrong file names | ตรวจสอบชื่อไฟล์ให้ตรงกับ entrypoint types |
| Not using helpers | ใช้ `defineContentScript` |
| Forgetting options | กำหนด manifest options ที่จำเป็น |
| Not filtering | ใช้ include/exclude |

## 9. References (แหล่งอ้างอิง)

- [Entrypoints](https://wxt.dev/guide/essentials/entrypoints)
- [Content Scripts](https://wxt.dev/guide/essentials/content-scripts)
