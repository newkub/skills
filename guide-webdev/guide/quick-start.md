# Quick Start

## Overview

เริ่มต้นสร้าง web application ใน 5 นาที

## Step 1: สร้าง Project

```bash
# ใช้ Vite สร้าง React + TypeScript project
npm create vite@latest my-app -- --template react-ts
cd my-app

# ติดตั้ง dependencies
npm install
```

## Step 2: ดู Project Structure

```
my-app/
├── src/
│   ├── App.tsx          # Main component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public files
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite config
```

## Step 3: รัน Development Server

```bash
# รัน dev server
npm run dev

# Output: Local:   http://localhost:5173/
```

## Step 4: เขียน Component แรก

```tsx
// src/App.tsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>My First Web App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App
```

## Step 5: Build และ Deploy

```bash
# Build production
npm run build

# Preview production build
npm run preview

# Output: dist/ folder
```

## Common Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | รัน development server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Basic Styling

```css
/* src/index.css */
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: system-ui, sans-serif;
}

button {
  padding: 0.5rem 1rem;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #005bb5;
}
```

## Next Steps

1. เรียนรู้ React Hooks
2. ศึกษา TypeScript
3. เพิ่ม CSS framework (Tailwind)
4. เพิ่ม state management (Zustand)
5. ตั้งค่า routing (React Router)

## Summary

| Step | Command |
|------|---------|
| **สร้าง project** | `npm create vite@latest my-app -- --template react-ts` |
| **ติดตั้ง deps** | `npm install` |
| **รัน dev** | `npm run dev` |
| **แก้ไข code** | แก้ไขใน `src/` |
| **Build** | `npm run build` |
