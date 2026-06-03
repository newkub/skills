# Installation

## Prerequisites

| Requirement | Version |
|-------------|---------|
| **Node.js** | 18.0 ขึ้นไป |
| **React** | 18.0 ขึ้นไป |
| **Tailwind CSS** | 3.4 ขึ้นไป |
| **TypeScript** | 5.0 ขึ้นไป |

## Installation Steps

### 1. Create React Project (if needed)

```bash
# Next.js (Recommended)
npx create-next-app@latest my-app --typescript --tailwind --eslint

# Vite
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Initialize shadcn/ui

```bash
npx shadcn@latest init
```

### 3. Configuration

หลังจาก init ระบบจะถาม:

```bash
# Style - เลือก "default" หรือ "new-york"
? Style: default

# Base color - เลือกสีพื้นฐาน
? Base color: slate

# CSS variables - ใช้ CSS variables สำหรับ theming
? CSS variables: yes

# CSS file path
? CSS file path: src/app/globals.css

# Using Tailwind config
? Using Tailwind config: tailwind.config.js

# Using App Router (Next.js)
? Use App Router: yes
```

### 4. Add Components

```bash
# Add single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card dialog form

# Add all components
npx shadcn@latest add -a
```

### 5. Install Required Dependencies

```bash
npm install class-variance-authority clsx tailwind-merge lucide-react
```

## Project Structure After Setup

```
my-app/
├── components.json          # shadcn/ui config
├── tailwind.config.js       # Tailwind config with shadcn colors
├── src/
│   ├── app/
│   │   └── globals.css      # CSS variables
│   ├── lib/
│   │   └── utils.ts         # cn() utility
│   └── components/
│       └── ui/              # shadcn components
│           ├── button.tsx
│           ├── card.tsx
│           └── ...
└── ...
```

## Verify Installation

```bash
# Run shadcn doctor
npx shadcn@latest doctor
```

Expected output:

```
✅ Good to go!
- components.json is valid
- tailwind.config.js is valid
- globals.css is valid
- lib/utils.ts exists
```

## Next Steps

| Step | Command |
|------|---------|
| Add Button | `npx shadcn@latest add button` |
| Add Form | `npx shadcn@latest add form` |
| Add Dialog | `npx shadcn@latest add dialog` |