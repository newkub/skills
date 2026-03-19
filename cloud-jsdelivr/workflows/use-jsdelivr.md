# ใช้งาน jsDelivr CDN

Workflow สำหรับการใช้งาน jsDelivr CDN ในโปรเจกต์

## Prerequisites

- Web browser ที่รองรับ
- Internet connection
- เข้าใจโครงสร้าง URL ของ jsDelivr

## ขั้นตอนการใช้งาน

### 1. เลือก Package และ Version

ตัดสินใจว่าจะใช้:

- **Exact version** (แนะนำสำหรับ production) - เช่น `vue@3.4.21`
- **Major version** (แนะนำสำหรับ development) - เช่น `vue@3`
- **Latest** (สำหรับ testing เท่านั้น) - เช่น `vue`

### 2. สร้าง jsDelivr URL

#### สำหรับ npm Package

```text
https://cdn.jsdelivr.net/npm/{package}@{version}/{path}
```

#### สำหรับ ES Modules

```text
https://esm.run/{package}@{version}
```

### 3. เพิ่ม Preconnect (Performance)

เพิ่มใน `<head>`:

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="preconnect" href="https://esm.run" crossorigin>
```

### 4. ใส่ Script Tag

#### Global Variable (UMD)

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

#### ES Module

```html
<script type="module">
  import { createApp } from 'https://esm.run/vue@3';
</script>
```

### 5. เพิ่ม SRI (Production)

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"
        integrity="sha384-..."
        crossorigin="anonymous"></script>
```

## ตัวอย่าง Use Cases

### สร้าง Vue App แบบ No-Build

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">{{ message }}</div>
  <script>
    const { createApp } = Vue;
    createApp({ data: () => ({ message: 'Hello!' }) }).mount('#app');
  </script>
</body>
</html>
```

### ใช้ ES Modules

```html
<script type="module">
  import { debounce } from 'https://esm.run/lodash-es';
  import axios from 'https://esm.run/axios';

  const fetchData = debounce(async () => {
    const { data } = await axios.get('/api/data');
    return data;
  }, 300);
</script>
```

### รวมหลาย Libraries

```html
<script src="https://cdn.jsdelivr.net/combine/npm/vue@3/dist/vue.global.js,npm/lodash@4/lodash.min.js"></script>
```

## Best Practices

- ✅ ใช้ exact version ใน production
- ✅ เพิ่ม SRI hashes
- ✅ ใช้ preconnect
- ✅ ใช้ defer/async เมื่อเหมาะสม
- ❌ อย่าใช้ latest ใน production
- ❌ อย่า load libraries ซ้ำซ้อน

## การแก้ไขปัญหา

### Library ไม่โหลด

1. ตรวจสอบ URL ให้ถูกต้อง
2. ตรวจสอบว่า package มี file ที่ระบุ
3. ลองเปิด URL โดยตรงใน browser

### Version ไม่เจอ

1. ตรวจสอบว่า version มีอยู่จริง
2. ใช้ Data API: `https://data.jsdelivr.com/v1/package/npm/{package}`

### CORS Error

1. เพิ่ม `crossorigin="anonymous"`
2. ตรวจสอบ CSP headers

## ลิงก์อ้างอิง

- [jsDelivr Website](https://www.jsdelivr.com)
- [Documentation](https://www.jsdelivr.com/documentation)
- [Data API](https://www.jsdelivr.com/docs/data.jsdelivr.com)
- [Purge Tool](https://www.jsdelivr.com/tools/purge)
