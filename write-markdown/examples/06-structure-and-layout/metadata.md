---
description: ข้อมูลเมตาและ frontmatter ใน Markdown
title: metadata
tags: [markdown, metadata, frontmatter, yaml]
goals:
  - แสดงตัวอย่างการใช้ metadata
  - สอนวิธีสร้าง frontmatter ที่มีประสิทธิภาพ
---

## Basic Frontmatter

````markdown
---
title: ชื่อเอกสาร
description: คำอธิบายสั้นๆ เกี่ยวกับเอกสาร
author: ชื่อผู้เขียน
date: 2024-03-15
tags: [tag1, tag2, tag3]
---
````

## Extended Frontmatter

````markdown
---
title: Complete Metadata Example
description: ตัวอย่าง frontmatter แบบสมบูรณ์
author:
  name: John Doe
  email: john@example.com
  url: https://johndoe.com
date: 2024-03-15T10:30:00+07:00
lastmod: 2024-03-16T14:20:00+07:00
draft: false
categories:
  - Tutorial
  - Guide
tags:
  - markdown
  - metadata
  - frontmatter
slug: complete-metadata-example
aliases:
  - /old-url/
  - /previous-url/
cover:
  image: /images/cover.jpg
  alt: Cover image description
  caption: Photo by Photographer
---
````

## Documentation Frontmatter

````markdown
---
title: API Reference
description: เอกสารอ้างอิง API สำหรับ developers
version: 2.5.0
api_version: v1
deprecated: false
experimental: false
see_also:
  - /docs/getting-started
  - /docs/authentication
related:
  - title: Authentication Guide
    url: /guides/auth
  - title: Error Handling
    url: /guides/errors
changelog:
  - version: 2.5.0
    date: 2024-03-15
    changes:
      - Added new endpoints
      - Improved error messages
---
````

## Blog Post Frontmatter

````markdown
---
title: "10 Markdown Tips ที่ควรรู้"
description: เคล็ดลับการใช้งาน Markdown อย่างมีประสิทธิภาพ
author: Jane Smith
date: 2024-03-15
updated: 2024-03-16
category: Tutorial
tags: [markdown, productivity, writing]
featured: true
pinned: false
reading_time: 5
series:
  name: Markdown Mastery
  part: 3
  total: 10
cover_image: /images/markdown-tips.jpg
canonical_url: https://example.com/markdown-tips
---
````

## Technical Frontmatter

````markdown
---
title: Performance Optimization
description: คู่มือการปรับแต่งประสิทธิภาพ
requirements:
  - Node.js 18+
  - 4GB RAM
  - SSD Storage
compatibility:
  browsers:
    - Chrome 90+
    - Firefox 88+
    - Safari 14+
  os:
    - Windows 10+
    - macOS 11+
    - Ubuntu 20.04+
test_coverage: 95%
complexity: intermediate
estimated_time: 30 minutes
---
````

## SEO Metadata

````markdown
---
title: SEO Best Practices 2024
meta_title: Complete SEO Guide for 2024 | Example Site
meta_description: เรียนรู้เทคนิค SEO ล่าสุดที่จะช่วยให้เว็บไซต์ของคุณติดอันดับ Google
keywords:
  - SEO
  - search engine optimization
  - ranking
  - google
og_title: SEO Best Practices 2024
og_description: คู่มือ SEO ฉบับสมบูรณ์สำหรับปี 2024
og_image: https://example.com/og-seo.jpg
og_type: article
twitter_card: summary_large_image
twitter_creator: @example
robots: index, follow
sitemap:
  priority: 0.8
  changefreq: weekly
---
````

## Dynamic Metadata

````markdown
---
title: "{{ page.title }}"
description: "{{ site.description }}"
variables:
  site_name: "My Documentation"
  version: "{{ env.VERSION }}"
  build_date: "{{ now | date: '%Y-%m-%d' }}"
---

## {{ page.title }}

เวอร์ชัน: {{ version }}
สร้างเมื่อ: {{ build_date }}
````
