---
description: การใช้ HTML comments ใน Markdown
title: comments
tags: [markdown, comments, html]
goals:
  - แสดงตัวอย่างการใช้ HTML comments
  - สอนวิธีซ่อนข้อความในเอกสาร
---

## Single Line Comments

````markdown
<!-- This is a hidden comment -->
````

## Multi-line Comments

````markdown
<!--
This is a multi-line comment
that spans several lines
and won't be rendered
-->
````

## Conditional Comments

````markdown
<!-- [if IE]>
This content only shows in IE
<![endif] -->
````

## Comment with Markdown Inside

````markdown
<!--
[This link won't render](https://example.com)
**Bold text won't render**
-->
````
