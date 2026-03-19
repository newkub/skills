---
description: Grid layout ใน Markdown
title: grid
tags: [markdown, grid, layout, css]
goals:
  - แสดงตัวอย่างการสร้าง grid layouts
  - สอนวิธีจัดวางเนื้อหาแบบ grid
---

## Basic Grid

````markdown
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
<div style="background: #f0f0f0; padding: 20px; text-align: center;">Item 1</div>
<div style="background: #f0f0f0; padding: 20px; text-align: center;">Item 2</div>
<div style="background: #f0f0f0; padding: 20px; text-align: center;">Item 3</div>
</div>
````

## Responsive Grid

````markdown
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
<div style="border: 1px solid #ddd; padding: 16px;">Item 1</div>
<div style="border: 1px solid #ddd; padding: 16px;">Item 2</div>
<div style="border: 1px solid #ddd; padding: 16px;">Item 3</div>
<div style="border: 1px solid #ddd; padding: 16px;">Item 4</div>
</div>
````

## Grid with Different Sizes

````markdown
<div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
<div style="background: #e3f2fd; padding: 20px;">Large (2fr)</div>
<div style="background: #e8f5e9; padding: 20px;">Small (1fr)</div>
<div style="background: #fff3e0; padding: 20px;">Small (1fr)</div>
</div>
````

## Grid Cards

````markdown
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
<div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px;">
<h3>Feature 1</h3>
<p>Description here</p>
</div>
<div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px;">
<h3>Feature 2</h3>
<p>Description here</p>
</div>
</div>
````

## Masonry-style Grid

````markdown
<div style="column-count: 3; column-gap: 16px;">
<div style="break-inside: avoid; margin-bottom: 16px; background: #f5f5f5; padding: 16px;">
<h4>Item 1</h4>
<p>Short content</p>
</div>
<div style="break-inside: avoid; margin-bottom: 16px; background: #f5f5f5; padding: 16px;">
<h4>Item 2</h4>
<p>Longer content that takes more space</p>
</div>
</div>
````
