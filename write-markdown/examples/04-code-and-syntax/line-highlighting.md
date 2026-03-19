---
description: การไฮไลต์บรรทัดในโค้ด (Line Highlighting) ใน Markdown
title: line-highlighting
tags: [markdown, code, highlighting, lines]
goals:
  - แสดงตัวอย่างการ highlight บรรทัดใน code blocks
  - สอนวิธีเน้นส่วนสำคัญของโค้ด
---

## Highlight Specific Lines

````markdown
```javascript {2,4-6}
function example() {
  const x = 1; // highlighted
  const y = 2;
  const z = 3; // highlighted
  return x + y + z; // highlighted
} // highlighted
```
````

## Highlight with Comments

````markdown
```javascript
function example() {
  const x = 1; // [!code highlight]
  const y = 2;
  const z = 3; // [!code ++]
  return x + y + z;
}
```
````

## Line Numbers with Highlight

````markdown
```javascript {linenos=table,hl_lines=[2,"4-5"]}
function example() {
  const x = 1;
  const y = 2;
  const z = 3;
  return x + y;
}
```
````

## Diff Style Highlighting

````markdown
```javascript
function example() {
+  const newLine = "added";
-  const oldLine = "removed";
  const unchanged = "same";
}
```
````

## Focus Lines

````markdown
```javascript
function example() {
  // [!code focus]
  const important = "focus here";
  // [!code focus]
  return important;
}
```
````

## Error/Warning Lines

````markdown
```javascript
function example() {
  const x = 1; // [!code error]
  const y = 2; // [!code warning]
  return x + y;
}
```
````
