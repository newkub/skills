## Website Optimization

### Description
ปรับปรุง performance และ SEO ให้ website โหลดเร็วและค้นหาง่าย

### Examples
```html
<!-- ใช้ lazy loading -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- ใช้ meta tags -->
<meta name="description" content="Website description">
<meta property="og:title" content="Page Title">

<!-- ใช้ semantic HTML -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
```

### Anti-patterns
❌ ไม่ optimize images และ assets
❌ ไม่ใช้ semantic HTML
❌ ไม่มี meta tags สำหรับ SEO
❌ ไม่คำนึงถึง mobile performance

## Verification
1. ตรวจสอบ performance score ด้วย Lighthouse
2. ทดสอบ SEO ด้วย Lighthouse SEO audit
3. ตรวจสอบ loading speed บน mobile devices
