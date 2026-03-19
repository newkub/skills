---
description: โค้ดสั้นๆ ที่ใช้ซ้ำ (Snippets) ใน Markdown
title: snippets
tags: [markdown, snippets, reuse]
goals:
  - แสดงตัวอย่างการสร้าง reusable snippets
  - สอนวิธีใช้ code snippets
---

## Code Snippets

````markdown
### JavaScript Snippet

```javascript
// Quick array filter
const filtered = array.filter(x => x > 0);
```

### Python Snippet

```python
# Quick list comprehension
filtered = [x for x in lst if x > 0]
```
````

## Template Snippets

````markdown
### Issue Template

```markdown
## Description
<!-- Describe the issue -->

## Steps to Reproduce

1. Step one
2. Step two

## Expected Behavior
<!-- What should happen -->

## Actual Behavior
<!-- What actually happens -->
```
````

## Snippet Markers

````markdown
<!-- SNIPPET: header -->
[Reusable header content]
<!-- END SNIPPET -->
````

## Expandable Snippets

````markdown
<details>
<summary>View Snippet</summary>

```javascript
console.log("Hello World");
```

</details>
````

## Snippet with Copy Button

````markdown
```bash#copy
npm install package-name
```
````
