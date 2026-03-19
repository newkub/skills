---
description: Card components ใน Markdown
title: cards
tags: [markdown, cards, components, ui]
goals:
  - แสดงตัวอย่างการสร้าง card components
  - สอนวิธีใช้ styled cards
---

## Basic Card

````markdown
<div style="border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin: 16px 0;">
<h3>Card Title</h3>
<p>Card content goes here. This is a simple card component.</p>
</div>
````

## Card with Image

````markdown
<div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 300px;">
<img src="image.jpg" alt="Card image" style="width: 100%; height: auto;">
<div style="padding: 16px;">
<h3>Card Title</h3>
<p>Card description text.</p>
<a href="#" style="color: #0066cc;">Learn more →</a>
</div>
</div>
````

## Info Card

````markdown
<div style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 16px; border-radius: 4px;">
<h4 style="margin-top: 0;">💡 Information</h4>
<p>This is an informational card with a colored border.</p>
</div>
````

## Warning Card

````markdown
<div style="background: #fff3cd; border: 1px solid #ffc107; padding: 16px; border-radius: 4px;">
<h4 style="margin-top: 0;">⚠️ Warning</h4>
<p>Be careful with this information.</p>
</div>
````

## Card Grid

````markdown
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
<div style="border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
<h3>Card 1</h3>
<p>Content for card 1</p>
</div>
<div style="border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
<h3>Card 2</h3>
<p>Content for card 2</p>
</div>
</div>
````
