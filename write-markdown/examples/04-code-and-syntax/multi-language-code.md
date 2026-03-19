---
description: ตัวอย่างโค้ดหลายภาษา (Multi-language Code) ใน Markdown
title: multi-language-code
tags: [markdown, code, languages]
goals:
  - แสดงตัวอย่างการใช้ code blocks หลายภาษา
  - สอนวิธีเปรียบเทียบ syntax
---

## Language Comparison

````markdown
## JavaScript

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

## Python

```python
def greet(name):
    return f"Hello, {name}!"
```

## TypeScript

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

## Rust

```rust
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```
````

## Shell Commands Comparison

````markdown
## npm

```bash
npm install package
npm run dev
```

## yarn

```bash
yarn add package
yarn dev
```

## pnpm

```bash
pnpm add package
pnpm dev
```

## bun

```bash
bun add package
bun dev
```
````

## Language Tabs

````markdown
<Tabs>
<TabItem value="js" label="JavaScript">

```javascript
const data = await fetch(url);
```

</TabItem>
<TabItem value="py" label="Python">

```python
data = await fetch(url)
```

</TabItem>
</Tabs>
````
