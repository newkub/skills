---
description: YAML Frontmatter ใน Markdown
title: yaml-frontmatter
tags: [markdown, yaml, frontmatter, metadata]
goals:
  - แสดงตัวอย่างการใช้ YAML frontmatter
  - สอนวิธีเพิ่ม metadata ใน Markdown
---

## Basic Frontmatter

````markdown
---
title: Document Title
description: A brief description
author: John Doe
date: 2024-01-15
---

## Content starts here
````

## With Tags

````markdown
---
title: My Post
description: Post description
tags: [markdown, tutorial, guide]
categories: [documentation]
---
````

## With Custom Fields

````markdown
---
title: API Documentation
version: 1.0.0
draft: false
published: true
lastUpdated: 2024-01-15T10:30:00Z
author:
  name: Jane Smith
  email: jane@example.com
---
````

## With Redirects

````markdown
---
title: Old Page
redirect: /new-page-location
permanent: true
---
````

## Complex Frontmatter

````markdown
---
title: Complex Document
meta:
  description: Meta description
  keywords: [key1, key2, key3]
seo:
  title: SEO Title
  description: SEO Description
  ogImage: /images/og.png
sidebar:
  order: 1
  label: Introduction
---
````
