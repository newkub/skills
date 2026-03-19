---
description: Multi-column layout ใน Markdown
title: columns
tags: [markdown, columns, layout, css]
goals:
  - แสดงตัวอย่างการสร้าง multi-column layouts
  - สอนวิธีจัดวางเนื้อหาเป็นคอลัมน์
---

## Two Columns

````markdown
<div style="display: flex; gap: 24px;">
<div style="flex: 1;">
<h3>Column 1</h3>
<p>Content for the first column goes here.</p>
</div>
<div style="flex: 1;">
<h3>Column 2</h3>
<p>Content for the second column goes here.</p>
</div>
</div>
````

## Three Columns

````markdown
<div style="display: flex; gap: 24px;">
<div style="flex: 1;">
<h4>Feature A</h4>
<p>Description A</p>
</div>
<div style="flex: 1;">
<h4>Feature B</h4>
<p>Description B</p>
</div>
<div style="flex: 1;">
<h4>Feature C</h4>
<p>Description C</p>
</div>
</div>
````

## Columns with Different Widths

````markdown
<div style="display: flex; gap: 24px;">
<div style="flex: 2;">
<h3>Main Content</h3>
<p>This column takes 2/3 of the space.</p>
</div>
<div style="flex: 1;">
<h3>Sidebar</h3>
<p>This column takes 1/3 of the space.</p>
</div>
</div>
````

## CSS Columns

````markdown
<div style="column-count: 2; column-gap: 40px;">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
</div>
````

## Responsive Columns

````markdown
<div style="display: flex; flex-wrap: wrap; gap: 16px;">
<div style="flex: 1; min-width: 300px;">
<h3>Responsive Column 1</h3>
<p>Stacks on mobile, side by side on desktop.</p>
</div>
<div style="flex: 1; min-width: 300px;">
<h3>Responsive Column 2</h3>
<p>Adapts to screen size automatically.</p>
</div>
</div>
````
