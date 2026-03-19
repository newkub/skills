---
description: สารบัญหลายระดับ (Table of Contents) ใน Markdown
title: toc
tags: [markdown, toc, navigation]
goals:
  - แสดงตัวอย่างการสร้าง table of contents
  - สอนวิธีใช้ multi-level TOC
---

## Simple TOC

````markdown
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
````

## Nested TOC

````markdown
## Table of Contents

- [Introduction](#introduction)
  - [Overview](#overview)
  - [Goals](#goals)
- [Features](#features)
  - [Core Features](#core-features)
  - [Advanced Features](#advanced-features)
- [Installation](#installation)
  - [Requirements](#requirements)
  - [Setup](#setup)
````

## Auto-Generated TOC

````markdown
<!-- Some Markdown processors auto-generate TOC -->
[[TOC]]

<!-- Or -->
[TOC]
````

## HTML TOC

````markdown
<nav class="table-of-contents">
  <ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#install">Installation</a></li>
  </ul>
</nav>
````

## Collapsible TOC

````markdown
<details>
<summary>Table of Contents</summary>

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)

</details>
````
