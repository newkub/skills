---
description: File tree และ directory structure ใน Markdown
title: file-tree
tags: [markdown, file-tree, structure, directory, tree]
goals:
  - แสดงตัวอย่างการสร้าง file tree
  - สอนวิธีแสดง directory structure
---

## Basic File Tree

````markdown
```text
project/
├── src/
│   ├── components/
│   │   └── Button.vue
│   └── pages/
│       └── index.vue
├── public/
│   └── favicon.ico
└── package.json
```
````

## Project Structure

````markdown
```text
my-app/
├── 📁 app/
│   ├── 📁 api/
│   │   └── route.ts
│   ├── 📁 components/
│   │   ├── ui/
│   │   └── forms/
│   ├── 📁 lib/
│   │   └── utils.ts
│   └── page.tsx
├── 📁 public/
├── 📁 tests/
├── ⚙️ next.config.js
├── 📦 package.json
└── 🔧 tsconfig.json
```
````

## Monorepo Structure

````markdown
```text
monorepo/
├── 📦 apps/
│   ├── web/           # Next.js app
│   ├── api/           # Express API
│   └── mobile/        # React Native
├── 📦 packages/
│   ├── ui/            # Shared UI components
│   ├── utils/         # Shared utilities
│   └── types/         # Shared types
└── 🔧 turbo.json
```
````

## Git Repository

````markdown
```text
repository/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── 📖 README.md
├── 📜 LICENSE
├── 📦 package.json
└── 🧪 tests/
    └── unit.test.ts
```
````

## Feature-Based Structure

````markdown
```text
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── api/
│   └── dashboard/
│       ├── components/
│       └── widgets/
├── shared/
│   ├── components/
│   └── utils/
└── app/
    └── layout.tsx
```
````
