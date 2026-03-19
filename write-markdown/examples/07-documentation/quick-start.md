---
description: Quick start guide ใน Markdown
title: quick-start
tags: [markdown, quick-start, guide, tutorial]
goals:
  - แสดงตัวอย่างการเขียน quick start guide
  - สอนวิธีสร้าง getting started ที่รวดเร็ว
---

## 5-Minute Quick Start

````markdown
# Quick Start

Get up and running in 5 minutes.

## Installation

```bash
npm install my-package
```

## Basic Usage

```javascript
import { myPackage } from 'my-package';

const result = myPackage.doSomething();
console.log(result);
```

## That's It

You're ready to go. Check out the [full documentation](docs/) for more.
````

## Step by Step

````markdown
## Quick Start

### Step 1: Install

```bash
npm install package-name
```

### Step 2: Import

```javascript
import { init } from 'package-name';
```

### Step 3: Initialize

```javascript
const app = init({
  apiKey: 'your-api-key'
});
```

### Step 4: Use

```javascript
const result = await app.fetchData();
```
````

## One-Liner

````markdown
## Try It Now

```bash
npx create-my-app my-project
cd my-project
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
````
