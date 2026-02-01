# Next.js App Router

## 1. File-based Routing
- **Route segments** คือ folders ใน app directory
- **Pages** คือ files ที่มีชื่อ `page.tsx`
- **Layouts** คือ files ที่มีชื่อ `layout.tsx`
- **Loading states** คือ files ที่มีชื่อ `loading.tsx`

## 2. Route Groups
- **Group routes** ด้วย folder names ที่ขึ้นต้นด้วย `( )`
- ใช้สำหรับ organizing routes โดยไม่กระทบ URL
- สามารถมี layouts แยกกันได้
- ใช้สำหรับ co-locating related routes

## 3. Dynamic Routes
- **Dynamic segments** ใช้ `[folder]` syntax
- **Catch-all routes** ใช้ `[...folder]` syntax
- **Optional catch-all** ใช้ `[[...folder]]` syntax
- สามารถเข้าถึง parameters ผ่าน `params` object

## 4. Route Handlers
- **API routes** ใช้ files ที่มีชื่อ `route.ts`
- รองรับ HTTP methods: GET, POST, PUT, DELETE, PATCH
- ใช้ `NextRequest` และ `NextResponse` types
- สามารถ export multiple HTTP methods

## 5. Middleware
- **Middleware files** ใช้ชื่อ `middleware.ts`
- ทำงานก่อนที่จะถึง routes
- ใช้สำหรับ authentication, redirects, logging
- สามารถ filter routes ด้วย `matcher` config

## 6. Server Components
- **Default behavior** คือ server components
- ไม่มี client-side JavaScript
- สามารถเข้าถึง server-side resources
- ใช้ async/await ได้โดยตรง

## 7. Client Components
- **Client components** ใช้ `"use client"` directive
- มี client-side interactivity
- สามารถใช้ browser APIs และ hooks
- สามารถ import ใน server components ได้

## 8. Data Fetching
- **Server components** ใช้ fetch โดยตรง
- **Automatic caching** สำหรับ GET requests
- **Revalidation options** ตาม time หรือ on-demand
- สามารถ disable caching ด้วย `cache: 'no-store'`
