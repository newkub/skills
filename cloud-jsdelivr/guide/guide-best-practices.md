# jsDelivr Best Practices

แนวทางการใช้งาน jsDelivr ที่ดีที่สุดเพื่อประสิทธิภาพ ความปลอดภัย และความเสถียร

## 1. Version Management

### ✅ ทำ: ใช้ Exact Versions ใน Production

```html
<!-- ดี: ระบุ version เต็ม -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.js"></script>

<!-- ดี: ใช้ SRI ร่วมกัน -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.js"
        integrity="sha384-..."
        crossorigin="anonymous"></script>
```

### ❌ อย่าทำ: ใช้ Latest ใน Production

```html
<!-- ไม่ดี: อาจมี breaking changes -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
```

### ✅ ทำ: ใช้ Minor Version ใน Development

```html
<!-- ดีสำหรับ dev: ได้ patch updates -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

## 2. Security Practices

### Subresource Integrity (SRI)

ทุกไฟล์ที่ load จาก external CDN ควรมี SRI:

```html
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
        integrity="sha384-HnMc7D7e0n..."
        crossorigin="anonymous"></script>
```

#### วิธีสร้าง SRI Hash

```bash
# ใช้ Node.js
const crypto = require('crypto');
const fs = require('fs');

const file = fs.readFileSync('library.min.js');
const hash = crypto.createHash('sha384').update(file).digest('base64');
console.log(`sha384-${hash}`);

# หรือใช้ online: https://www.srihash.org/
# หรือใช้ browser devtools:
# 1. เปิด Network tab
# 2. คลิกขวาที่ request
# 3. Copy -> Copy as cURL
# 4. ใช้ openssl สร้าง hash
```

### Content Security Policy (CSP)

ตั้งค่า CSP ให้อนุญาติ jsDelivr:

```http
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://cdn.jsdelivr.net https://esm.run;
  style-src 'self' https://cdn.jsdelivr.net 'unsafe-inline';
  connect-src 'self';
  img-src 'self' data: https:;
  font-src 'self' https://cdn.jsdelivr.net;
```

### CORS

เพิ่ม `crossorigin` attribute เมื่อใช้ SRI:

```html
<script src="https://cdn.jsdelivr.net/npm/lib@1/lib.min.js"
        crossorigin="anonymous"
        integrity="sha384-..."></script>
```

## 3. Performance Optimization

### Preconnect และ DNS-Prefetch

```html
<head>
  <!-- Preconnect ก่อนโหลด resources -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="preconnect" href="https://esm.run" crossorigin>

  <!-- DNS prefetch เป็น fallback -->
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="dns-prefetch" href="https://esm.run">
</head>
```

### Preload Critical Resources

```html
<head>
  <!-- Preload main library -->
  <link rel="preload" 
        href="https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.js" 
        as="script" 
        crossorigin>

  <!-- Preload critical CSS -->
  <link rel="preload" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        as="style">

  <!-- Preconnect ไปยัง API -->
  <link rel="preconnect" href="https://api.example.com">
</head>
```

### Loading Strategy

#### Async สำหรับ Non-Critical Scripts

```html
<!-- Analytics, tracking, ฯลฯ -->
<script src="https://cdn.jsdelivr.net/npm/analytics-lib/analytics.min.js" async></script>
```

#### Defer สำหรับ DOM-Dependent Scripts

```html
<!-- ที่ต้องการ DOM แต่ไม่ต้องการ block rendering -->
<script src="https://cdn.jsdelivr.net/npm/dom-lib/lib.min.js" defer></script>
```

#### Module สำหรับ ES Modules

```html
<!-- โหลด async และ execute หลัง HTML parsed -->
<script type="module" src="./app.js"></script>
```

### File Combining

รวมหลายไฟล์เป็น request เดียว (สูงสุด 10 ไฟล์):

```html
<!-- ดี: รวมเป็น request เดียว -->
<script src="https://cdn.jsdelivr.net/combine/npm/vue@3/dist/vue.global.js,npm/lodash@4/lodash.min.js,npm/axios@1/dist/axios.min.js"></script>

<!-- ไม่ดี: หลาย requests -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4/lodash.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@1/dist/axios.min.js"></script>
```

### Caching Strategy

| Version Format | Cache Duration | Use Case |
|----------------|---------------|----------|
| `package@1.2.3` | 1 year | Production |
| `package@1.2` | 7 days | Semi-stable |
| `package@1` | 7 days | Development |
| `package` | 12 hours | Testing only |

## 4. Error Handling

### Fallback Strategy

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.js"></script>
<script>
  // ตรวจสอบว่า library โหลดสำเร็จ
  if (typeof Vue === 'undefined') {
    // Load from fallback CDN
    document.write('<script src="https://unpkg.com/vue@3.4.21/dist/vue.global.js"><\/script>');

    // หรือ load from local
    // document.write('<script src="./fallback/vue.global.js"><\/script>');
  }
</script>
```

### Global Error Handler

```javascript
window.addEventListener('error', function(e) {
  if (e.target.tagName === 'SCRIPT') {
    console.error('Failed to load:', e.target.src);

    // Log to monitoring service
    // analytics.track('cdn_error', { url: e.target.src });
  }
}, true);
```

## 5. Development vs Production

### Development

```html
<!-- Non-minified versions สำหรับ debugging -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>

<!-- Source maps ใช้ได้โดยอัตโนมัติ -->
```

### Production

```html
<!-- Minified versions -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>

<!-- กับ SRI -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.prod.js"
        integrity="sha384-..."
        crossorigin="anonymous"></script>
```

## 6. ES Modules Best Practices

### Import Maps

จัดการ dependencies แบบ centralized:

```html
<script type="importmap">
{
  "imports": {
    "vue": "https://esm.run/vue@3.4.21",
    "vue-router": "https://esm.run/vue-router@4",
    "pinia": "https://esm.run/pinia@2",
    "lodash/": "https://esm.run/lodash-es/"
  }
}
</script>

<script type="module">
  // ใช้ bare module specifiers
  import { createApp } from 'vue';
  import { createRouter } from 'vue-router';
  import { debounce } from 'lodash/debounce';
</script>
```

### Dynamic Imports

โหลด code เมื่อจำเป็นเท่านั้น:

```javascript
// โหลด chart library เมื่อ user ต้องการดู chart
async function showChart() {
  const { Chart } = await import('https://esm.run/chart.js/auto');

  new Chart(ctx, {
    type: 'line',
    data: { /* ... */ }
  });
}

document.getElementById('show-chart').addEventListener('click', showChart);
```

### Module Preloading

```html
<link rel="modulepreload" href="https://esm.run/vue@3">
<link rel="modulepreload" href="https://esm.run/vue-router@4">

<script type="module">
  import { createApp } from 'vue';  // Already preloaded
  import { createRouter } from 'vue-router';  // Already preloaded
</script>
```

## 7. Testing และ Debugging

### Verify Package Availability

```javascript
// ตรวจสอบว่า package มีอยู่จริง
async function checkPackage(name, version) {
  const response = await fetch(`https://data.jsdelivr.com/v1/package/npm/${name}@${version}`);

  if (response.ok) {
    const data = await response.json();
    console.log('Available files:', data.files.map(f => f.name));
    return true;
  } else {
    console.error('Package not found');
    return false;
  }
}

checkPackage('vue', '3.4.21');
```

### Network Tab Debugging

1. เปิด DevTools > Network tab
2. ดู waterfall chart สำหรับ jsDelivr requests
3. ตรวจสอบ cache headers
4. ดู response time จาก different edge locations

## 8. Common Pitfalls

### ❌ อย่าทำ: Version Conflicts

```html
<!-- ไม่ดี: โหลด Vue สอง version -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

### ❌ อย่าทำ: Wrong File Path

```html
<!-- ไม่ดี: file อาจไม่มีอยู่ -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/vue.js"></script>

<!-- ดี: ตรวจสอบ path ให้ถูกต้อง -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

### ❌ อย่าทำ: Missing Dependencies

```html
<!-- ไม่ดี: Vue Router ต้องการ Vue ก่อน -->
<script src="https://cdn.jsdelivr.net/npm/vue-router@4/dist/vue-router.global.js"></script>

<!-- ดี: โหลด dependencies ก่อน -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@4/dist/vue-router.global.js"></script>
```

### ❌ อย่าทำ: Blocking Render

```html
<!-- ไม่ดี: block rendering -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/heavy-library/lib.js"></script>
</head>

<!-- ดี: defer หรือ async -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/heavy-library/lib.js" defer></script>
</head>
```

## 9. Monitoring

### Performance Monitoring

```javascript
// วัด load time ของ CDN resources
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name.includes('cdn.jsdelivr.net')) {
      console.log(`Loaded: ${entry.name}`);
      console.log(`Duration: ${entry.duration}ms`);
      console.log(`Transfer size: ${entry.transferSize} bytes`);
    }
  }
});

observer.observe({ entryTypes: ['resource'] });
```

### Availability Monitoring

```javascript
// ตรวจสอบ CDN availability
async function checkCDNHealth() {
  const start = performance.now();
  try {
    const response = await fetch('https://cdn.jsdelivr.net/npm/health-check/ping.txt');
    const duration = performance.now() - start;

    if (response.ok) {
      console.log(`CDN healthy: ${duration.toFixed(2)}ms`);
      return { healthy: true, latency: duration };
    }
  } catch (error) {
    console.error('CDN health check failed:', error);
    return { healthy: false, error };
  }
}

// Run every 30 seconds
setInterval(checkCDNHealth, 30000);
```

## 10. Migration Strategy

### จาก Local/NPM ไป jsDelivr

1. **ทำ Inventory**: รายการทุก dependencies
2. **หา CDN URLs**: ตรวจสอบว่า packages รองรับ CDN
3. **ทดสอบ**: บน development environment
4. **Implement Fallbacks**: สำหรับ production safety
5. **Monitor**: ติดตาม errors และ performance

### Checklist สำหรับ Production Migration

- [ ] ทุก libraries มี CDN support
- [ ] SRI hashes generated
- [ ] CSP configured
- [ ] Fallback strategy implemented
- [ ] Performance monitoring setup
- [ ] Error tracking configured
- [ ] Rollback plan ready

## สรุป

ทำตาม best practices เหล่านี้เพื่อ:

- ✅ Security ด้วย SRI และ CSP
- ✅ Performance ด้วย preconnect/preload
- ✅ Reliability ด้วย fallbacks
- ✅ Maintainability ด้วย version pinning
- ✅ Monitoring สำหรับ production
