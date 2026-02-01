# Next.js Fundamentals Best Practices

## 1. Project Structure
- **App directory** สำหรับ App Router projects
- **Component organization** ด้วย feature-based folders
- **Shared components** ใน components directory
- **Utilities** และ helpers ใน lib หรือ utils

## 2. File Naming Conventions
- **PascalCase** สำหรับ component files
- **kebab-case** สำหรับ route folders
- **camelCase** สำหรับ utility functions
- **Descriptive names** ที่สื่อถึง purpose

## 3. Component Architecture
- **Server components** สำหรับ static content
- **Client components** สำหรับ interactivity
- **Layout components** สำหรับ shared UI
- **Page components** สำหรับ route-specific content

## 4. TypeScript Usage
- **Strict mode** ใน tsconfig.json
- **Type definitions** สำหรับ all components
- **Interface definitions** สำหรับ data structures
- **Generic types** สำหรับ reusable components

## 5. Environment Variables
- **.env.local** สำหรับ local development
- **.env.production** สำหรับ production
- **NEXT_PUBLIC_** prefix สำหรับ client-side variables
- **Server-only variables** สำหรับ sensitive data

## 6. Styling Approaches
- **CSS Modules** สำหรับ component-scoped styles
- **Tailwind CSS** สำหรับ utility-first styling
- **CSS-in-JS** สำหรับ dynamic styling
- **Global styles** สำหรับ base styling

## 7. Asset Management
- **Image optimization** ด้วย next/image
- **Font optimization** ด้วย next/font
- **Static assets** ใน public directory
- **Dynamic imports** สำหรับ heavy assets

## 8. Development Workflow
- **Hot reloading** สำหรับ fast development
- **Error boundaries** สำหรับ error handling
- **Development tools** สำหรับ debugging
- **Code organization** สำหรับ maintainability
