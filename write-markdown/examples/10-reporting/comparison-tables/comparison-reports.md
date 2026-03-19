---
description: การเปรียบเทียบและ contrast ผลลัพธ์ต่างๆ
title: comparison-reports
tags: [markdown, reporting, comparison]
goals:
  - แสดงรูปแบบการเปรียบเทียบผลลัพธ์
  - สอนการสร้างตารางเปรียบเทียบ
---

## Before/After Comparison

````markdown
## เปรียบเทียบ Before vs After

### Code Quality

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Lines of Code | 1,250 | 890 | -28.8% ✅ |
| Cyclomatic Complexity | 15 | 8 | -46.7% ✅ |
| Test Coverage | 65% | 92% | +41.5% ✅ |
| Duplications | 12% | 3% | -75% ✅ |

### Performance

| Operation | Before | After | Improvement |
|-----------|--------|-------|-------------|
| Page Load | 2.5s | 1.2s | 52% faster |
| API Response | 450ms | 180ms | 60% faster |
| Bundle Size | 245KB | 156KB | 36% smaller |
| Memory Usage | 45MB | 32MB | 29% less |

```diff
- Performance Score: 62/100
+ Performance Score: 94/100
```
````

## Multi-Option Comparison

````markdown
## เปรียบเทียบทางเลือกต่างๆ

### Solution Comparison Matrix

| Criteria | Option A | Option B | Option C | Weight |
|----------|----------|----------|----------|--------|
| **Development Time** | 2 weeks ⭐⭐⭐ | 4 weeks ⭐⭐ | 1 week ⭐⭐⭐⭐⭐ | 20% |
| **Cost** | $5,000 ⭐⭐⭐⭐ | $8,000 ⭐⭐⭐ | $3,000 ⭐⭐⭐⭐⭐ | 25% |
| **Scalability** | Good ⭐⭐⭐⭐ | Excellent ⭐⭐⭐⭐⭐ | Fair ⭐⭐⭐ | 20% |
| **Maintenance** | Easy ⭐⭐⭐⭐⭐ | Medium ⭐⭐⭐⭐ | Hard ⭐⭐ | 20% |
| **Risk** | Low ⭐⭐⭐⭐⭐ | Medium ⭐⭐⭐⭐ | High ⭐⭐⭐ | 15% |
| **Weighted Score** | **4.1** | **3.7** | **3.4** | - |

### 🏆 Recommendation: Option A

- คะแนนรวมสูงสุด (4.1/5)
- สมดุลระหว่างเวลา ค่าใช้จ่าย และความเสี่ยง
- Maintenance ง่ายที่สุด
````

## Side-by-Side Code Comparison

````markdown
## เปรียบเทียบโค้ด

<table>
<tr>
<th>Original</th>
<th>Refactored</th>
</tr>
<tr>
<td>

```javascript
// ❌ Before: Nested callbacks
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      console.log(c);
    });
  });
});
```

</td>
<td>

```javascript
// ✅ After: Async/await
const a = await getData();
const b = await getMoreData(a);
const c = await getEvenMoreData(b);
console.log(c);
```

</td>
</tr>
</table>

**ข้อดีของการ refactor:**

- อ่านง่ายขึ้น 50%
- Debug ง่าย
- Handle errors ได้ดีกว่า
````
