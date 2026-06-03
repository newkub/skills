# SEO

## Overview

แนวทางการ optimize สำหรับ search engines

## Core SEO Elements

| Element | Purpose | Implementation |
|---------|---------|----------------|
| **Title Tag** | Clickable headline | < 60 characters |
| **Meta Description** | Search snippet | < 160 characters |
| **H1 Tag** | Page topic | One per page |
| **Canonical URL** | Preferred version | Prevent duplicates |

## Technical SEO

### 1. Crawlability

| Factor | Checklist |
|--------|-----------|
| **Robots.txt** | Allow crawlers, sitemap link |
| **Sitemap.xml** | All pages, update frequency |
| **Internal Links** | Connect pages |
| **Speed** | LCP < 2.5s |
| **Mobile-First** | Responsive design |

### 2. Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Title",
  "description": "Page description",
  "url": "https://example.com/page"
}
```

| Schema Type | Use Case |
|------------|----------|
| **Article** | Blog posts, news |
| **Product** | E-commerce products |
| **LocalBusiness** | Physical locations |
| **FAQPage** | FAQ sections |

### 3. Performance Impact

| Metric | SEO Weight |
|--------|------------|
| **LCP** | Direct (Core Web Vitals) |
| **FID** | Direct (Core Web Vitals) |
| **CLS** | Direct (SEO 0.1 target) |
| **TTFB** | Indirect (crawl budget) |

## On-Page SEO

| Element | Best Practice |
|---------|---------------|
| **Title** | Include keyword, < 60 chars |
| **H1** | One per page, include keyword |
| **H2-H6** | Logical hierarchy |
| **Images** | Alt text, descriptive names |
| **Links** | Descriptive anchor text |

## Summary

| Category | Practice |
|----------|----------|
| **Core Elements** | Title, meta, H1, canonical |
| **Technical** | Sitemap, robots, speed |
| **Structured Data** | Schema.org markup |
| **Performance** | Core Web Vitals |
| **On-Page** | Keywords, image alt, links |
