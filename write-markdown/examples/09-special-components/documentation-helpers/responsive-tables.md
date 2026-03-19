---
description: ตารางที่ responsive (Responsive Tables) ใน Markdown
title: responsive-tables
tags: [markdown, tables, responsive, css]
goals:
  - แสดงตัวอย่างการสร้าง responsive tables
  - สอนวิธีทำให้ตารางดูดีบน mobile
---

## Basic Responsive Table

````markdown
<div style="overflow-x: auto;">

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
|----------|----------|----------|----------|----------|
| Data 1   | Data 2   | Data 3   | Data 4   | Data 5   |
| Data A   | Data B   | Data C   | Data D   | Data E   |

</div>
````

## With CSS Class

````markdown
<style>
.responsive-table {
  overflow-x: auto;
  max-width: 100%;
}
.responsive-table table {
  min-width: 600px;
}
</style>

<div class="responsive-table">

| Name | Email | Phone | Address | City |
|------|-------|-------|---------|------|
| John | <john@email.com> | 555-0100 | 123 St | NYC |
| Jane | <jane@email.com> | 555-0101 | 456 Ave | LA |

</div>
````

## Mobile-Friendly Table

````markdown
<div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">

| Product | Price | Stock | Category | Rating |
|---------|-------|-------|----------|--------|
| Item 1  | $10   | 100   | A        | 4.5    |
| Item 2  | $20   | 50    | B        | 4.0    |

</div>
````

## Scroll Hint

````markdown
<div style="overflow-x: auto; position: relative;">
<div style="font-size: 12px; color: #666; margin-bottom: 5px;">
← Scroll horizontally →
</div>

| Col 1 | Col 2 | Col 3 | Col 4 | Col 5 | Col 6 | Col 7 | Col 8 |
|-------|-------|-------|-------|-------|-------|-------|-------|
| A     | B     | C     | D     | E     | F     | G     | H     |

</div>
````

## Collapsed on Mobile

````markdown
<details>
<summary>View Full Data Table</summary>

| Very | Wide | Table | With | Many | Columns |
|------|------|-------|------|------|---------|
| 1    | 2    | 3     | 4    | 5    | 6       |

</details>
````
