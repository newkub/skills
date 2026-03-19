# jsDelivr Usage Guide

คู่มือการใช้งาน jsDelivr ในสถานการณ์ต่างๆ พร้อมตัวอย่างที่ครอบคลุม

## การใช้งานพื้นฐาน

### 1. โหลด npm Package

#### Global Variable (UMD/IIFE)

```html
<script src="https://cdn.jsdelivr.net/npm/lodash@4/lodash.min.js"></script>
<script>
  // lodash available as global _
  const result = _.map([1, 2, 3], n => n * 2);
  console.log(result); // [2, 4, 6]
</script>
```

#### ES Modules

```html
<script type="module">
  import { debounce } from 'https://cdn.jsdelivr.net/npm/lodash-es@4/debounce.js';

  const debouncedFn = debounce(() => {
    console.log('Debounced!');
  }, 300);
</script>
```

#### esm.run (Simplified ESM)

```html
<script type="module">
  import { debounce } from 'https://esm.run/lodash-es';

  const debouncedFn = debounce(() => {
    console.log('Debounced!');
  }, 300);
</script>
```

### 2. โหลด CSS Frameworks

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Bootstrap 5 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css">

  <!-- Bulma -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0/css/bulma.min.css">

  <!-- Tailwind (via Play CDN) -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Water.css (classless CSS) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>
<body>
  <h1>Your Content Here</h1>
</body>
</html>
```

### 3. โหลดไฟล์จาก GitHub

```html
<!-- โหลดไฟล์จาก GitHub repo -->
<script src="https://cdn.jsdelivr.net/gh/jquery/jquery@3.6.4/dist/jquery.min.js"></script>

<!-- โหลด CSS จาก GitHub -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/twbs/bootstrap@5.3.2/dist/css/bootstrap.min.css">
```

## การใช้งานขั้นสูง

### 1. File Combining

รวมหลายไฟล์เป็น request เดียวเพื่อลด HTTP requests:

```html
<!-- รวม Vue + Lodash + Axios -->
<script src="https://cdn.jsdelivr.net/combine/npm/vue@3/dist/vue.global.js,npm/lodash@4/lodash.min.js,npm/axios@1/dist/axios.min.js"></script>
```

#### Syntax สำหรับ Combining

```text
https://cdn.jsdelivr.net/combine/
  npm/{package1}@{version}/{path1},
  npm/{package2}@{version}/{path2},
  ...
```

ตัวอย่าง CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/npm/bootstrap@5/dist/css/bootstrap.min.css,npm/@fortawesome/fontawesome-free@6/css/all.min.css">
```

### 2. Version Resolution ขั้นสูง

#### Semver Ranges

```html
<!-- รับทุก patch version ของ 4.17.x -->
<script src="https://cdn.jsdelivr.net/npm/lodash@~4.17.0/lodash.min.js"></script>

<!-- รับทุก minor version ของ 4.x -->
<script src="https://cdn.jsdelivr.net/npm/lodash@^4.0.0/lodash.min.js"></script>

<!-- ใช้ tag -->
<script src="https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.js"></script>
```

### 3. ES Modules กับ esm.run

#### Basic Import

```html
<script type="module">
  import { createApp, ref } from 'https://esm.run/vue@3';

  createApp({
    setup() {
      const count = ref(0);
      return { count };
    }
  }).mount('#app');
</script>
```

#### Deep Imports

```html
<script type="module">
  // Import specific functions only
  import debounce from 'https://esm.run/lodash-es/debounce';
  import throttle from 'https://esm.run/lodash-es/throttle';

  // Instead of importing entire library
  // import _ from 'https://esm.run/lodash-es';
</script>
```

#### Import Maps

```html
<script type="importmap">
{
  "imports": {
    "vue": "https://esm.run/vue@3",
    "lodash": "https://esm.run/lodash-es",
    "axios": "https://esm.run/axios"
  }
}
</script>

<script type="module">
  import { createApp } from 'vue';
  import _ from 'lodash';
  import axios from 'axios';

  // Use libraries...
</script>
```

### 4. การใช้งานกับ Web Components

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Lit -->
  <script type="module">
    import { LitElement, html, css } from 'https://esm.run/lit';

    class MyElement extends LitElement {
      static styles = css`
        :host {
          display: block;
          padding: 16px;
        }
      `;

      render() {
        return html`<h1>Hello from Lit!</h1>`;
      }
    }

    customElements.define('my-element', MyElement);
  </script>
</head>
<body>
  <my-element></my-element>
</body>
</html>
```

### 5. Dynamic Imports

```html
<script type="module">
  // โหลด library เมื่อจำเป็น
  async function loadChartLibrary() {
    const { Chart } = await import('https://esm.run/chart.js');

    // Use Chart.js...
    new Chart(ctx, {
      type: 'line',
      data: { /* ... */ }
    });
  }

  // โหลดเมื่อ user คลิกปุ่ม
  document.getElementById('show-chart').addEventListener('click', loadChartLibrary);
</script>
```

## Use Cases ที่นิยม

### 1. Alpine.js Application

```html
<!DOCTYPE html>
<html>
<head>
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>
<body>
  <div x-data="{ count: 0 }">
    <button @click="count++" x-text="`Count: ${count}`"></button>
  </div>
</body>
</html>
```

### 2. HTMX with Backend

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/htmx.org@1/dist/htmx.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0/css/bulma.min.css">
</head>
<body>
  <section class="section">
    <div class="container">
      <button class="button is-primary"
              hx-get="/api/content"
              hx-target="#result">
        Load Content
      </button>
      <div id="result"></div>
    </div>
  </section>
</body>
</html>
```

### 3. Vue 3 SPA (No Build)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Vue App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0/css/bulma.min.css">
</head>
<body>
  <div id="app" class="section">
    <div class="container">
      <h1 class="title">{{ title }}</h1>

      <div class="field">
        <div class="control">
          <input class="input" v-model="newTodo" @keyup.enter="addTodo" placeholder="New todo">
        </div>
      </div>

      <ul class="list">
        <li v-for="todo in todos" :key="todo.id" class="list-item">
          <label class="checkbox">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ 'has-text-grey-light': todo.done }">{{ todo.text }}</span>
          </label>
          <button class="button is-small is-danger" @click="removeTodo(todo.id)">×</button>
        </li>
      </ul>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
  <script>
    const { createApp, ref, computed } = Vue;

    createApp({
      setup() {
        const title = ref('Todo App');
        const newTodo = ref('');
        const todos = ref([
          { id: 1, text: 'Learn Vue', done: true },
          { id: 2, text: 'Build something awesome', done: false }
        ]);
        let nextId = 3;

        const addTodo = () => {
          if (!newTodo.value.trim()) return;
          todos.value.push({
            id: nextId++,
            text: newTodo.value,
            done: false
          });
          newTodo.value = '';
        };

        const removeTodo = (id) => {
          todos.value = todos.value.filter(t => t.id !== id);
        };

        return { title, newTodo, todos, addTodo, removeTodo };
      }
    }).mount('#app');
  </script>
</body>
</html>
```

### 4. Data Visualization

```html
<!DOCTYPE html>
<html>
<head>
  <title>Chart Demo</title>
</head>
<body>
  <canvas id="myChart"></canvas>

  <script type="module">
    import { Chart } from 'https://esm.run/chart.js/auto';

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  </script>
</body>
</html>
```

### 5. Animation Library

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background: #3498db;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div class="box" id="box"></div>
  <button id="animate">Animate</button>

  <script type="module">
    import { animate } from 'https://esm.run/animejs';

    document.getElementById('animate').addEventListener('click', () => {
      animate('#box', {
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#e74c3c',
        duration: 800
      });
    });
  </script>
</body>
</html>
```

## การจัดการ Dependencies

### 1. Dependency Order

```html
<!-- Vue ต้องโหลดก่อน Vue Router -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@4/dist/vue-router.global.js"></script>

<!-- React ต้องโหลดก่อน ReactDOM -->
<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
```

### 2. Peer Dependencies

```html
<!-- Chart.js adapter ต้องมี Chart.js โหลดก่อน -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
```

## การ Debug

### 1. ตรวจสอบ URL

```javascript
// ตรวจสอบว่า URL ถูกต้อง
fetch('https://cdn.jsdelivr.net/npm/vue@3/package.json')
  .then(r => r.json())
  .then(pkg => console.log('Available files:', Object.keys(pkg)));
```

### 2. ดู Available Versions

```javascript
// ดูทุก versions ที่มี
fetch('https://data.jsdelivr.com/v1/package/npm/vue')
  .then(r => r.json())
  .then(data => console.log('Versions:', data.versions));
```

### 3. ตรวจสอบ File Structure

```javascript
// ดูไฟล์ทั้งหมดใน package
fetch('https://data.jsdelivr.com/v1/package/npm/vue@3.4.21')
  .then(r => r.json())
  .then(data => console.log('Files:', data.files.map(f => f.name)));
```

## สรุป

jsDelivr ช่วยให้:

- เริ่มต้นโปรเจกต์ได้รวดเร็วโดยไม่ต้อง build tools
- ทดสอบ libraries ได้ทันที
- สร้าง prototypes และ demos ได้ง่าย
- ใช้ ES Modules บน browser โดยตรง
- ลด HTTP requests ด้วย file combining
