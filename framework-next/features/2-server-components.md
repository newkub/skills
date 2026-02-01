# Next.js Server Components

## 1. Server Component Basics
- **Default components** คือ server components
- ไม่มี client-side JavaScript bundle
- สามารถ async โดยตรง
- มี access ถึง server-side resources

## 2. Data Fetching Patterns
- **Direct fetch calls** ใน server components
- **Automatic caching** สำหรับ GET requests
- **Streaming responses** สำหรับ large datasets
- **Parallel data fetching** ด้วย `Promise.all`

## 3. Server Component APIs
- **Database connections** โดยตรง
- **File system access** สำหรับ local files
- **Environment variables** สำหรับ secrets
- **Third-party APIs** ที่ต้องการ API keys

## 4. Component Composition
- **Mix server and client** components
- **Props passing** ระหว่าง component types
- **Children patterns** สำหรับ flexible layouts
- **Component boundaries** ที่ชัดเจน

## 5. Performance Benefits
- **Smaller bundle sizes** บน client
- **Faster initial page loads**
- **Better SEO** ด้วย server-rendered content
- **Reduced client-side processing**

## 6. Server Component Patterns
- **Data fetching components** สำหรับ data-heavy sections
- **Layout components** สำหรับ shared UI
- **Form components** สำหรับ server actions
- **Content components** สำหรับ static content

## 7. Limitations
- **No interactivity** ใน server components
- **No browser APIs** หรือ event handlers
- **No hooks** เช่น useState หรือ useEffect
- **Cannot use client-only libraries**

## 8. Best Practices
- **Keep components small** และ focused
- **Use error boundaries** สำหรับ error handling
- **Implement loading states** สำหรับ better UX
- **Cache data appropriately** ตาม usage patterns
