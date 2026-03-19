# Next.js Client Components

## 1. Client Component Basics

- **"use client" directive** ทำให้ component เป็น client component
- มี client-side interactivity
- สามารถใช้ browser APIs และ event handlers
- มี JavaScript bundle บน client

## 2. React Hooks Usage

- **useState** สำหรับ component state
- **useEffect** สำหรับ side effects
- **useContext** สำหรับ global state
- **Custom hooks** สำหรับ reusable logic

## 3. Event Handling

- **onClick** และ event handlers ทั้งหมด
- **Form submissions** ด้วย onSubmit
- **User interactions** เช่น onChange, onFocus
- **Keyboard events** เช่น onKeyDown, onKeyPress

## 4. Browser APIs

- **localStorage** และ sessionStorage
- **window** และ document objects
- **Geolocation API** สำหรับ location data
- **Web APIs** เช่น fetch, WebSocket

## 5. Client Component Patterns

- **Interactive components** เช่น buttons, forms
- **State management** สำหรับ dynamic UI
- **Real-time updates** ด้วย WebSocket หรือ polling
- **Animation components** ด้วย CSS หรือ JS animations

## 6. Integration with Server

- **Receive props** จาก server components
- **Fetch data** บน client เมื่อจำเป็น
- **Server actions** สำหรับ mutations
- **Progressive enhancement** สำหรับ resilience

## 7. Performance Considerations

- **Bundle size impact** ของ client components
- **Code splitting** ด้วย dynamic imports
- **Lazy loading** สำหรับ heavy components
- **Optimization strategies** สำหรับ client-side code

## 8. Best Practices

- **Minimize client-side JavaScript**
- **Use server components** สำหรับ static content
- **Implement proper error boundaries**
- **Consider accessibility** ใน interactive elements
