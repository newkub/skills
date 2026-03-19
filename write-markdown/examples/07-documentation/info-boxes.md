---
description: กล่องข้อมูล (Info Boxes) ใน Markdown
title: info-boxes
tags: [markdown, info, boxes]
goals:
  - แสดงตัวอย่างการสร้าง info boxes
  - สอนวิธีใช้ styled containers
---

## HTML Info Box

````markdown
<div style="padding: 15px; border-left: 4px solid #2196F3; background: #E3F2FD;">
<strong>Info</strong><br>
This is an information box with custom styling.
</div>
````

## Success Box

````markdown
<div style="padding: 15px; border-left: 4px solid #4CAF50; background: #E8F5E9;">
<strong>✅ Success</strong><br>
Operation completed successfully!
</div>
````

## Warning Box

````markdown
<div style="padding: 15px; border-left: 4px solid #FF9800; background: #FFF3E0;">
<strong>⚠️ Warning</strong><br>
Be careful with this operation.
</div>
````

## Error Box

````markdown
<div style="padding: 15px; border-left: 4px solid #F44336; background: #FFEBEE;">
<strong>❌ Error</strong><br>
Something went wrong. Please try again.
</div>
````

## Tip Box

````markdown
<div style="padding: 15px; border-radius: 5px; background: #F3E5F5; border: 1px solid #9C27B0;">
<strong>💡 Tip</strong><br>
Here's a helpful tip for better results!
</div>
````

## Note Box with Icon

````markdown
<div style="display: flex; align-items: center; padding: 12px; background: #FFF8E1; border-radius: 4px;">
<span style="margin-right: 10px;">📝</span>
<strong>Note:</strong>&nbsp;Important information here
</div>
````
