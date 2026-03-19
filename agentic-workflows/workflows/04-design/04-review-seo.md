---
title: Review SEO
description: ตรวจสอบ SEO implementation, meta tags, structured data, และ technical SEO
auto_execution_mode: 3
file-patterns:
  - "**/workflows/04-design/*-review-seo.md"
---

## Prerequisites

- เข้าใจ SEO fundamentals (on-page, technical, content)
- รู้จัก meta tags, Open Graph, Twitter Cards
- เข้าใจ structured data (Schema.org, JSON-LD)
- รู้จัก Core Web Vitals และ page performance impact

## 3.1 Precondition

- มี web application หรือ website
- มี access ไปยัง HTML และ routing
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน HTML templates และ routing
- เตรียม SEO audit tools (Lighthouse, Screaming Frog)
- ทำ checklist ตาม SEO best practices
- ระบุ target keywords และ pages

## 3.3 Execute

1. ตรวจสอบ meta tags
   - Title tags (unique, 50-60 chars)
   - Meta descriptions (150-160 chars)
   - Canonical URLs
   - Robots meta tags
   - Viewport meta tag

2. ตรวจสอบ Open Graph และ Twitter Cards
   - og:title, og:description, og:image
   - og:url, og:type
   - twitter:card, twitter:title
   - Social share previews

3. ตรวจสอบ structured data
   - JSON-LD implementation
   - Schema.org types (Organization, Article, Product)
   - Rich snippets eligibility
   - Testing ด้วย Google Rich Results Test

4. ตรวจสอบ URL structure
   - SEO-friendly URLs
   - Slug conventions
   - ไม่มี query parameters ที่ไม่จำเป็น
   - URL normalization

5. ตรวจสอบ content SEO
   - Heading hierarchy (H1-H6)
   - Image alt texts
   - Internal linking
   - Content uniqueness

6. ตรวจสอบ technical SEO
   - Sitemap.xml
   - Robots.txt
   - Canonical tags
   - 301 redirects
   - 404 handling

7. ตรวจสอบ mobile SEO
   - Mobile-first indexing
   - Responsive design
   - Mobile performance
   - Touch targets

8. ตรวจสอบ international SEO (ถ้ามี)
   - Hreflang tags
   - Language targeting
   - Geo-targeting

## 3.4 Validate

- [ ] Meta tags unique และ optimized
- [ ] Open Graph tags complete
- [ ] Structured data valid
- [ ] URLs SEO-friendly
- [ ] Heading hierarchy ถูกต้อง
- [ ] Sitemap และ robots.txt มีอยู่
- [ ] Mobile-friendly
- [ ] ไม่มี duplicate content

## 3.5 Verify

- [ ] Google Rich Results Test ผ่าน
- [ ] Lighthouse SEO score สูง
- [ ] Social share previews แสดงถูกต้อง
- [ ] Pages indexable
