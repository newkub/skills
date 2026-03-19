---
description: การแบ่งหน้า (Page Breaks) ใน Markdown
title: page-breaks
tags: [markdown, page, breaks, print]
goals:
  - แสดงตัวอย่างการสร้าง page breaks
  - สอนวิธีควบคุมการพิมพ์
---

## HTML Page Break

````markdown
<div style="page-break-after: always;"></div>

<div style="page-break-before: always;"></div>

<div style="page-break-inside: avoid;">
Content that should not be split across pages
</div>
````

## CSS Page Break

````markdown
<style>
  @media print {
    .page-break { page-break-after: always; }
    h1 { page-break-before: always; }
    .no-break { page-break-inside: avoid; }
  }
</style>

<div class="page-break"></div>
````

## Common Markdown Page Break

````markdown
---

<!-- Page break above -->
````

## PDF Generation

````markdown
<!-- For Pandoc to PDF -->
\newpage

<!-- Or -->
\pagebreak
````

## Print Specific

````markdown
<details class="page-break-before">
<summary>Print Instructions</summary>
This section will start on a new page when printed.
</details>
````

## Avoid Page Break Inside

````markdown
<div style="page-break-inside: avoid;">

| Table that should stay together |
|----------------------------------|
| Row 1 |
| Row 2 |

</div>
````
