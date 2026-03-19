---
description: ขีดฆ่าข้อความ (Strikethrough) ใน Markdown
title: strikethrough
tags: [markdown, formatting, text]
goals:
  - แสดงตัวอย่างการใช้ strikethrough
  - สอนวิธีขีดฆ่าข้อความ
---

## Basic Strikethrough

````markdown
~~This text is deleted~~
````

## In Context

````markdown
~~Old price: $100~~ New price: $50
````

## Task Items

````markdown
- [x] ~~Task completed~~
- [ ] Task pending
````

## HTML Alternative

````markdown
<del>Deleted content</del>
<ins>Inserted content</ins>
````

## Combined Formatting

````markdown
~~**Bold and strikethrough**~~
~~*Italic and strikethrough*~~
~~***Bold italic and strikethrough***~~
````

## Showing Changes

````markdown
- ~~Remove this~~
- Add this
- ~~Change from~~ → To this
````
