---
description: Tabs และ tabbed content ใน Markdown
title: tabs
tags: [markdown, tabs, tabbed-content, sections]
goals:
  - แสดงตัวอย่างการสร้าง tabbed content
  - สอนวิธีจัดเนื้อหาเป็น tabs
---

## Platform-Specific Instructions

````markdown
<!-- tabs:start -->

#### **macOS**

```bash
brew install node
```

#### **Linux**

```bash
sudo apt-get install nodejs
```

#### **Windows**

```powershell
winget install OpenJS.NodeJS
```

<!-- tabs:end -->
````

## Code Examples by Language

````markdown
**JavaScript:**

```javascript
const greeting = "Hello World";
console.log(greeting);
```

**TypeScript:**

```typescript
const greeting: string = "Hello World";
console.log(greeting);
```

**Python:**

```python
greeting = "Hello World"
print(greeting)
```
````

## Package Manager Tabs

````markdown
| npm | yarn | pnpm | bun |
|-----|------|------|-----|
| `npm install` | `yarn add` | `pnpm add` | `bun add` |
| `npm run dev` | `yarn dev` | `pnpm dev` | `bun dev` |
| `npm run build` | `yarn build` | `pnpm build` | `bun build` |
````

## Configuration Tabs

````markdown
### 🟡 Development

```bash
NODE_ENV=development
API_URL=http://localhost:3000
DEBUG=true
```

### 🟢 Production

```bash
NODE_ENV=production
API_URL=https://api.example.com
DEBUG=false
```

### 🔵 Staging

```bash
NODE_ENV=staging
API_URL=https://staging.example.com
DEBUG=true
```
````

## Method Comparison

````markdown
| Feature | Method A | Method B |
|---------|----------|----------|
| Speed | 🟢 Fast | 🟡 Medium |
| Complexity | 🟢 Simple | 🟡 Moderate |
| Flexibility | 🟡 Limited | 🟢 High |
````
