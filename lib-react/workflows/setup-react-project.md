# Setup React Project

## Goal

สร้าง React project ใหม่ด้วย Vite และ TypeScript

## Steps

### 1. Create Project

```bash
bun create vite my-app --template react-ts
cd my-app
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Run Development Server

```bash
bun run dev
```

### 4. Add Additional Dependencies

```bash
# UI Library (optional)
bun add @radix-ui/react-* class-variance-authority clsx tailwind-merge

# State Management (optional)
bun add zustand

# Data Fetching (optional)
bun add @tanstack/react-query

# Form Handling (optional)
bun add react-hook-form
```

### 5. Configure ESLint and Prettier

```bash
bun add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
```

### 6. Configure Tailwind CSS (optional)

```bash
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

## Verification

เปิด http://localhost:5173 และตรวจสอบว่า React app ทำงานได้
