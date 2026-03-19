---
description: Installation guide ใน Markdown
title: installation
tags: [markdown, installation, guide, setup]
goals:
  - แสดงตัวอย่างการเขียน installation guide
  - สอนวิธีสร้าง setup instructions
---

## Prerequisites

````markdown
## Prerequisites

Before installing, ensure you have:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 8+ or **yarn** 1.22+
- **Git** 2.30+
````

## Installation Steps

````markdown
## Installation

### Using npm

```bash
npm install package-name
```

### Using yarn

```bash
yarn add package-name
```

### Using pnpm

```bash
pnpm add package-name
```

### Using bun

```bash
bun add package-name
```
````

## Global Installation

````markdown
### Global Install

```bash
npm install -g package-name
```

Then verify:

```bash
package-name --version
```
````

## From Source

````markdown
### Build from Source

```bash
git clone https://github.com/user/repo.git
cd repo
npm install
npm run build
```
````

## Docker Installation

````markdown
### Using Docker

```bash
docker pull username/package-name
docker run -p 3000:3000 username/package-name
```
````

## Verification

````markdown
## Verify Installation

```bash
# Check version
package-name --version

# Test command
package-name --help
```
````
