---
description: Step-by-step guides และ numbered procedures ใน Markdown
title: steps
tags: [markdown, steps, procedure, guide, tutorial]
goals:
  - แสดงตัวอย่างการสร้าง step-by-step guides
  - สอนวิธีเขียน procedures
---

## Basic Steps

````markdown
### Step 1: Install Dependencies

Run the following command:

```bash
npm install
```

### Step 2: Configure Environment

Create a `.env` file:

```bash
cp .env.example .env
```

### Step 3: Start Development

```bash
npm run dev
```
````

## Numbered Steps with Icons

````markdown
1️⃣ **Clone the repository**

```bash
git clone https://github.com/user/repo.git
```

2️⃣ **Install dependencies**

```bash
cd repo && npm install
```

3️⃣ **Run setup script**

```bash
npm run setup
```

4️⃣ **Start the app**

```bash
npm run dev
```
````

## Checklist Steps

````markdown
### Installation Checklist

- ☐ Download the installer
- ☐ Run the installer as administrator
- ☐ Accept the license agreement
- ☐ Choose installation directory
- ☐ Complete installation
- ☑️ Launch the application
````

## Visual Steps

````markdown
| Step | Action | Result |
|------|--------|--------|
| 1 | Click **Menu** | Menu opens |
| 2 | Select **Settings** | Settings page loads |
| 3 | Toggle **Dark Mode** | Theme changes |
| 4 | Click **Save** | Changes saved |
````

## Code Walkthrough

````markdown
**Step 1:** Define the function

```typescript
function greet(name: string) {
  return `Hello, ${name}!`;
}
```

**Step 2:** Call the function

```typescript
const message = greet("World");
console.log(message); // Hello, World!
```

**Step 3:** Use in component

```vue
<template>
  <p>{{ greeting }}</p>
</template>
```
````
