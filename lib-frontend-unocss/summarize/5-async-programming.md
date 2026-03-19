# Async Programming

| Pattern | Use Case | Example |
|---------|----------|---------|
| **Dynamic Classes** | คลาสที่ขึ้นกับ state | `class="{ 'bg-red-500': error }"` |
| **Async Loading** | โหลด icons แบบ async | `await loadIconCollection()` |
| **Conditional Styles** | styles ขึ้นกับข้อมูล | `class="{ 'text-green-500': success }"` |
| **Theme Switching** | เปลี่ยน theme แบบ runtime | `updateTheme('dark')` |
| **Lazy Loading** | โหลด CSS เมื่อต้องการ | `import('./styles.css')` |
| **State Management** | จัดการ CSS state | `useState('darkMode')` |
