---
description: การแทรกไฟล์อื่น (Includes) ใน Markdown
title: includes
tags: [markdown, includes, content]
goals:
  - แสดงตัวอย่างการ include ไฟล์อื่น
  - สอนวิธี reuse content
---

## Standard Markdown (Not Supported)

Standard Markdown ไม่มี built-in includes ใช้ preprocessor หรือ platform-specific syntax

## MDX Include

````markdown
import Content from './content.mdx'

<Content />
````

## Jekyll Include

````markdown
{% include header.html %}
{% include_relative path/to/file.md %}
````

## MkDocs Include

````markdown
--8<-- "includes/header.md"

--8<-- "includes/chapter1.md:3:10"
````

## Pandoc Include

````markdown
```{.include}
sections/intro.md
sections/method.md
sections/results.md
```
````

## VuePress/VitePress Include

````markdown
<!--@include: ./parts/banner.md-->
````

## Manual Include (Copy Pattern)

````markdown
<!-- BEGIN_INCLUDE: header.md -->
[Content from header.md copied here]
<!-- END_INCLUDE: header.md -->
````
