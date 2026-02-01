# Next.js Server Actions

## 1. Server Action Basics
- **"use server" directive** ทำให้ function เป็น server action
- ทำงานบน server-side เท่านั้น
- สามารถเรียกจาก client components
- รองรับ async/await โดยตรง

## 2. Form Integration
- **Server actions in forms** ด้วย action prop
- **Automatic form submission** ผ่าน server actions
- **Form validation** บน server-side
- **Progressive enhancement** สำหรับ forms

## 3. Data Mutations
- **Create, Update, Delete** operations
- **Database transactions** ใน server actions
- **API calls** ไปยัง external services
- **File uploads** และ processing

## 4. Error Handling
- **Error boundaries** สำหรับ server action errors
- **Form validation errors** ที่ส่งกลับไป client
- **User feedback** สำหรับ action results
- **Retry mechanisms** สำหรับ failed actions

## 5. Security Considerations
- **Input validation** บน server-side
- **Authentication checks** ใน server actions
- **Authorization logic** สำหรับ user permissions
- **CSRF protection** ใน form submissions

## 6. Performance Optimization
- **Revalidation strategies** หลัง mutations
- **Cache invalidation** สำหรับ updated data
- **Optimistic updates** สำหรับ better UX
- **Background processing** สำหรับ long-running tasks

## 7. Advanced Patterns
- **Server action chaining** สำหรับ complex workflows
- **Conditional server actions** ตาม user input
- **Batch operations** สำหรับ multiple updates
- **Streaming responses** สำหรับ real-time feedback

## 8. Best Practices
- **Keep actions small** และ focused
- **Validate all inputs** บน server-side
- **Handle errors gracefully**
- **Provide user feedback** สำหรับ all actions
