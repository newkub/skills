---
description: Workflow documentation ใน Markdown
title: workflows
tags: [markdown, workflow, documentation]
goals:
  - แสดงตัวอย่างการเขียนเอกสาร workflow
  - สอนวิธีสร้าง step-by-step guides
---

## Step-by-Step Guide

````markdown
## การติดตั้ง

### 1. ดาวน์โหลด dependencies

```bash
bun install
```

### 2. ตั้งค่า environment

```bash
cp .env.example .env
```

### 3. รัน application

```bash
bun run dev
```

**Expected output:**

```text
Server running on http://localhost:3000
```
````

## Development Workflow

````markdown
## Development Workflow

### 1. Setup

```bash
git clone https://github.com/user/repo.git
cd repo
bun install
cp .env.example .env
```

### 2. Make Changes

```bash
git checkout -b feature/new-feature
# Make your changes
bun test
bun run format
```

### 3. Submit

```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```
````

## CI/CD Pipeline

````markdown
## CI/CD Pipeline

```yaml
name: Build and Test
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: bun install
      - name: Run tests
        run: bun test
      - name: Build
        run: bun run build
```
````
