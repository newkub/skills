---
description: จุดเชื่อมโยงภายในหน้า (Anchors) ใน Markdown
title: anchors
tags: [markdown, navigation, links]
goals:
  - แสดงตัวอย่างการสร้าง anchors
  - สอนวิธีลิงก์ไปยังส่วนต่างๆ ของเอกสาร
---

## Creating Anchors with IDs

````markdown
## Section Title {#section-id}

### Another Section {#another-section}
````

## Linking to Anchors

````markdown
[Go to Section](#section-id)
[Go to Another Section](#another-section)
````

## HTML Anchor

````markdown
<a id="my-anchor"></a>

[Link to anchor](#my-anchor)
````

## Automatic Anchors

````markdown
## Section Title

Automatically creates: #section-title
````

## Back to Top

````markdown
[↑ Back to Top](#top)

<a id="top"></a>
````

## Table of Contents with Anchors

````markdown
- [Introduction](#introduction)
- [Features](#features)
- [Conclusion](#conclusion)

## Introduction {#introduction}

## Features {#features}

## Conclusion {#conclusion}
````
