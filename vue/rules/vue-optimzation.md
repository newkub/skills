# เทคนิคการปรับปรุงประสิทธิภาพของ Vue

## 1. Enable Tree-Shaking and Reduce Bundle Size (เปิดใช้ Tree-Shaking และลดขนาด Bundle)

### 1.1. เหตุผล

หนึ่งในวิธีที่มีประสิทธิภาพที่สุดในการปรับปรุง page load performance คือการส่ง JavaScript bundles ที่เล็กลง Modern build tools เช่น Vite หรือ Webpack รองรับ tree-shaking ซึ่งเป็น process ที่ลบ unused code ออกจาก final bundle ของคุณโดยอัตโนมัติ APIs และ libraries หลายตัวของ Vue ใน ecosystem เป็น tree-shakable

### 1.2. วิธีที่ไม่ควรทำ

Import entire libraries เมื่อคุณต้องการเพียงส่วนเล็กๆ ของมัน นี่ทำให้ bundle ใหญ่ขึ้นด้วย unnecessary code นอกจากนี้ choosing dependencies ที่ไม่เป็น tree-shaking friendly

````javascript
// Importing the entire lodash library, which is very large and not tree-shakable
import _ from 'lodash';

// Using a heavy, non-tree-shakable component library for a simple button
import FullComponentLibrary from 'heavy-library';
````

### 1.3. วิธีที่ควรทำ

Prefer dependencies ที่เสนอ ES module formats และเป็น tree-shaking friendly เสมอ เช่น import specific functions จาก `lodash-es` แทนทั้ง `lodash` package นี่อนุญาตให้ build tool ของคุณลบ unused code ออก

````javascript
// Importing only the specific function you need from the tree-shakable version of lodash
import { debounce } from 'lodash-es';

// Vue's APIs are tree-shakable. If you don't use <Transition>,
// it won't be included in your final bundle.
import { ref, computed } from 'vue';
````

Analyze bundle size ของคุณอย่างสม่ำเสมอโดยใช้ tools เช่น `rollup-plugin-visualizer` (สำหรับ Vite) หรือ `webpack-bundle-analyzer` เพื่อ identify large dependencies

---

## 2. Implement Code Splitting with Async Components (สร้าง Code Splitting ด้วย Async Components)

### 2.1. เหตุผล

Code splitting แยก application bundle ของคุณเป็น smaller chunks ที่สามารถ load ได้ on demand นี่ปรับปรุง initial page load time อย่างมากเพราะ browser ต้องดาวน์โหลดเพียง essential code สำหรับ view แรก Additional features ถูก lazy-loaded เมื่อ user navigate ไปยังพวกมัน

### 2.2. วิธีที่ไม่ควรทำ

Loading application ทั้งหมดใน single, monolithic JavaScript file นี่บังคับให้ users ดาวน์โหลด code สำหรับ pages ที่พวกเขาอาจไม่เคย visit นำไปสู่ slow initial load times

````javascript
// router.js - without code splitting
import UserProfile from './views/UserProfile.vue'
import Dashboard from './views/Dashboard.vue'

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/profile', component: UserProfile },
]
````

### 2.3. วิธีที่ควรทำ

ใช้ dynamic `import()` syntax สำหรับ route components ของคุณ Vue Router มี built-in support สำหรับนี้ ทำให้ง่ายต่อการ lazy-load route components คุณยังสามารถใช้ `defineAsyncComponent` สำหรับ component ใดๆ ที่ไม่จำเป็นต้องใช้ทันที (เช่น modal, complex widget)

````javascript
// router.js - with code splitting
const Dashboard = () => import('./views/Dashboard.vue')
const UserProfile = () => import('./views/UserProfile.vue')

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/profile', component: UserProfile },
]

// In a component - using defineAsyncComponent
import { defineAsyncComponent } from 'vue'

const HeavyComponent = defineAsyncComponent(() =>
  import('./components/HeavyComponent.vue')
)
````

นี่บอก bundler ให้สร้าง separate chunk สำหรับแต่ละ lazy-loaded component ซึ่งถูก fetch จาก server เฉพาะเมื่อกำลังจะ render

## อ้างอิง

- [Vue.js Official Performance Guide - Page Load Optimizations](https://vuejs.org/guide/best-practices/performance.html#page-load-optimizations)
- [Vue Router - Lazy Loading Routes](https://router.vuejs.org/guide/advanced/lazy-loading.html)
- [Vue.js Docs - Async Components](https://vuejs.org/guide/components/async.html)