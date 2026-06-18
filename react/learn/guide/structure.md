# React Project Structure

## ภาพรวม

โครงสร้างโปรเจกต์ React ที่ดีควรมีการจัดระเบียบไฟล์และ folder อย่างชัดเจน

## Standard Structure

### Basic Structure

```
my-react-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── features/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   ├── utils/
│   ├── types/
│   ├── styles/
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Detailed Structure

```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.test.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── layout/              # Layout components
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.test.tsx
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   └── features/           # Feature-specific components
│       ├── auth/
│       │   ├── LoginForm/
│       │   │   ├── LoginForm.tsx
│       │   │   ├── LoginForm.test.tsx
│       │   │   └── index.ts
│       │   └── index.ts
│       └── index.ts
├── hooks/                   # Custom hooks
│   ├── useAuth.ts
│   ├── useFetch.ts
│   ├── useLocalStorage.ts
│   └── index.ts
├── context/                # React Context
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── index.ts
├── services/               # API services
│   ├── api.ts
│   ├── auth.service.ts
│   └── index.ts
├── utils/                  # Utility functions
│   ├── format.ts
│   ├── validation.ts
│   └── index.ts
├── types/                  # TypeScript types
│   ├── api.ts
│   ├── auth.ts
│   └── index.ts
├── styles/                 # Global styles
│   ├── global.css
│   ├── variables.css
│   └── mixins.css
├── constants/              # Constants
│   ├── api.ts
│   └── config.ts
├── App.tsx
└── index.tsx
```

## Feature-Based Structure

### Structure

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── index.ts
│   └── index.ts
├── shared/
│   ├── components/
│   │   ├── Button/
│   │   └── Input/
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── utils/
│   │   └── format.ts
│   └── types/
│       └── common.types.ts
├── App.tsx
└── index.tsx
```

### ข้อดี
- แยก features ออกจากกันชัดเจน
- ง่ายต่อการ maintain และ scale
- ลด coupling ระหว่าง features

## Domain-Driven Structure

### Structure

```
src/
├── domains/
│   ├── user/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   ├── product/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── index.ts
│   └── order/
│       ├── components/
│       ├── hooks/
│       └── services/
├── app/
│   ├── components/
│   ├── hooks/
│   └── layout/
├── shared/
│   ├── ui/
│   ├── utils/
│   └── types/
└── App.tsx
```

## Naming Conventions

### Files

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.tsx` |
| Hooks | camelCase with `use` prefix | `useAuth.ts` |
| Services | camelCase with `.service` suffix | `auth.service.ts` |
| Utils | camelCase | `format.ts` |
| Types | camelCase with `.types` suffix | `auth.types.ts` |
| Constants | UPPER_SNAKE_CASE | `API_URL.ts` |

### Folders

- ใช้ kebab-case สำหรับ folder names
- ใช้ singular form สำหรับ folder ที่มีไฟล์ประเภทเดียวกัน
- ใช้ plural form สำหรับ folder ที่มีหลายประเภท

## Index Files

ใช้ `index.ts` สำหรับ barrel exports

```typescript
// components/common/Button/index.ts
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

// components/common/index.ts
export * from './Button';
export * from './Input';
```

## Asset Organization

```
src/
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   └── icons/
│   │       ├── user.svg
│   │       └── settings.svg
│   ├── fonts/
│   │   ├── Inter-Regular.woff2
│   │   └── Inter-Bold.woff2
│   └── videos/
│       └── intro.mp4
```

## Configuration Files

### Root Level

```
my-react-app/
├── .env                      # Environment variables
├── .env.local                # Local overrides
├── .env.production           # Production variables
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
└── README.md
```

## Testing Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── Button.stories.tsx
│   └── ...
├── hooks/
│   ├── useAuth.ts
│   └── useAuth.test.ts
└── __tests__/
    ├── setup.ts
    └── utils.ts
```

## สรุป

เลือกโครงสร้างที่เหมาะสมกับขนาดและความซับซ้อนของ project:
- **Small projects**: Standard structure
- **Medium projects**: Feature-based structure
- **Large projects**: Domain-driven structure
