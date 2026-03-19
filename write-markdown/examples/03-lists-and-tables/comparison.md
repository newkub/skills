---
description: เปรียบเทียบโค้ดก่อนและหลัง
title: comparison
tags: [markdown, comparison, refactoring]
goals:
  - แสดงตัวอย่างการเปรียบเทียบโค้ด
  - สอนวิธีการนำเสนอการ refactoring
---

## Refactoring Code

**Before**

```typescript
function old_function(data) {
    if (data) {
        return process(data);
    } else {
        return null;
    }
}
```

**After**

```typescript
function new_function(data) {
    return data ? process(data) : null;
}
```

## Performance Comparison

**Before**

```typescript
// O(n²) - Nested loops
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            count++;
        }
    }
}
```

**After**

```typescript
// O(n) - Single loop with Set
const seen = new Set();
for (const item of array) {
    if (seen.has(item)) {
        count++;
    } else {
        seen.add(item);
    }
}
```
