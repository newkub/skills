# Key Concept

## What is shadcn/ui?

shadcn/ui คือ collection ของ reusable React components ที่สร้างจาก Radix UI primitives และ Tailwind CSS โดย components จะถูก copy เข้ามาใน project ของเราเอง ทำให้สามารถ customize ได้อย่างเต็มที่

## Core Philosophy

| Concept | Description |
|---------|-------------|
| **Copy, not install** | Components ถูก copy เข้ามาใน project ไม่ใช่ npm package |
| **Own your code** | ปรับแต่งได้ทุกอย่าง ไม่ติด dependency |
| **Accessible by default** | ใช้ Radix UI ที่มี accessibility built-in |
| **Dark mode ready** | รองรับ dark mode ผ่าน CSS variables |

## Key Dependencies

| Dependency | Purpose |
|------------|---------|
| **Radix UI** | Unstyled, accessible primitives |
| **Tailwind CSS** | Utility-first styling |
| **class-variance-authority** | Component variants management |
| **clsx + tailwind-merge** | Class name merging utilities |

## How Components Work

```
┌─────────────────────────────────────────────────────────────┐
│                 shadcn/ui Component Structure                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Your Component (components/ui/button.tsx)                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  1. import { cva } from 'class-variance-authority'   │   │
│  │  2. Define variants with Tailwind classes             │   │
│  │  3. Wrap Radix primitive                              │   │
│  │  4. Export with cn() utility                          │   │
│  └──────────────────────────────────────────────────────┘   │
│                            │                                │
│                            ▼                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Radix Primitives (Accessible, Unstyled)              │   │
│  │  - Keyboard navigation                                │   │
│  │  - Focus management                                   │   │
│  │  - ARIA attributes                                    │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Component Categories

| Category | Components |
|----------|------------|
| **Forms** | Input, Select, Checkbox, Radio, Switch, Textarea |
| **Layout** | Card, Sheet, Dialog, Accordion, Tabs |
| **Navigation** | NavigationMenu, Breadcrumb, Pagination |
| **Feedback** | Alert, AlertDialog, Toast, Progress |
| **Data Display** | Table, Badge, Avatar, Calendar, Carousel |
| **Overlay** | Popover, Tooltip, Context Menu, Command |

## When to Use shadcn/ui

| Use Case | Recommendation |
|----------|----------------|
| React 18+ with Tailwind | ✅ เหมาะมาก |
| Need full customization | ✅ Copy to own เปลี่ยนได้เลย |
| Rapid prototyping | ✅ Components พร้อมใช้ |
| Server Components (RSC) | ✅ รองรับ React Server Components |
| Non-React projects | ❌ ใช้ไม่ได้ |
| Bootstrap/jQuery projects | ❌ ออกแบบสำหรับ React |