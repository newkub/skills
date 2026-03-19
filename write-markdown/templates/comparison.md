---
description: Template สำหรับ Comparison
title: '{{COMPARISON_TITLE}}'
tags: [comparison, '{{CATEGORY}}', analysis]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{COMPARISON_TITLE}}

> ⚖️ **Comparison Analysis**

**{{ORG_NAME}}** / **comparisons** / `{{FILENAME}}`

**Last Updated:** {{DATE}}

## โครงสร้าง Comparison

| Section | รายละเอียด |
|---------|-----------|
| Overview | สรุปคร่าวๆ |
| Feature Comparison | ตารางเปรียบเทียบ |
| Pros & Cons | ข้อดี/ข้อเสีย |
| Recommendation | แนะนำอะไร |

## Rules

### Comparison Types

| Type | Use For |
|------|---------|
| Feature Matrix | Side-by-side features |
| Pros/Cons | Strengths and weaknesses |
| Use Case | When to use which |
| Performance | Speed/resource comparison |

### Comparison Structure

- **Overview** - สรุปคร่าวๆ
- **Feature Comparison** - ตารางเปรียบเทียบ
- **Pros & Cons** - ข้อดี/ข้อเสีย
- **Use Cases** - เหมาะกับอะไร
- **Recommendation** - แนะนำอะไร

### Writing Guidelines

- เปรียบเทียบแอปเปิ้ลกับแอปเปิ้ล (fair comparison)
- ให้ข้อมูลที่อัพเดต
- ไม่ bias
- มี criteria ชัดเจน

## Template

### Overview

```markdown
## Overview

### {{SUBJECT_A}}

{{SUBJECT_A_DESC}}

**Best for:** {{SUBJECT_A_BEST_FOR}}

### {{SUBJECT_B}}

{{SUBJECT_B_DESC}}

**Best for:** {{SUBJECT_B_BEST_FOR}}

### At a Glance

| Criteria | {{SUBJECT_A}} | {{SUBJECT_B}} |
|----------|---------------|---------------|
| {{CRITERIA_1}} | {{A_RATING_1}} | {{B_RATING_1}} |
| {{CRITERIA_2}} | {{A_RATING_2}} | {{B_RATING_2}} |
| {{CRITERIA_3}} | {{A_RATING_3}} | {{B_RATING_3}} |
```

### Feature Comparison

```markdown
## Feature Comparison

| Feature                 | {{SUBJECT_A}} | {{SUBJECT_B}}    |
| ----------------------- | ------------- | ---------------- |
| {{FEATURE_1}}           | ✅            | ❌               |
| {{FEATURE_2}}           | ✅            | ✅               |
| {{FEATURE_3}}           | ❌            | ✅               |
| {{FEATURE_4}}           | ⚠️            | ✅               |
| Legend: ✅ Full Support | ⚠️ Partial    | ❌ Not Available |
```

### Pros & Cons

```markdown
## Pros & Cons

### {{SUBJECT_A}}

**Pros:**

- ✅ {{A_PRO_1}}
- ✅ {{A_PRO_2}}
- ✅ {{A_PRO_3}}

**Cons:**

- ❌ {{A_CON_1}}
- ❌ {{A_CON_2}}

### {{SUBJECT_B}}

**Pros:**

- ✅ {{B_PRO_1}}
- ✅ {{B_PRO_2}}
- ✅ {{B_PRO_3}}

**Cons:**

- ❌ {{B_CON_1}}
- ❌ {{B_CON_2}}
```

### Use Cases

```markdown
## Use Cases

### Choose {{SUBJECT_A}} if

- {{A_USE_CASE_1}}
- {{A_USE_CASE_2}}
- {{A_USE_CASE_3}}

### Choose {{SUBJECT_B}} if

- {{B_USE_CASE_1}}
- {{B_USE_CASE_2}}
- {{B_USE_CASE_3}}
```

### Performance

```markdown
## Performance Comparison

| Metric | {{SUBJECT_A}} | {{SUBJECT_B}} |
|--------|---------------|---------------|
| {{METRIC_1}} | {{A_VALUE_1}} | {{B_VALUE_1}} |
| {{METRIC_2}} | {{A_VALUE_2}} | {{B_VALUE_2}} |
| {{METRIC_3}} | {{A_VALUE_3}} | {{B_VALUE_3}} |

*Tested on {{TEST_ENV}}*
```

### Recommendation

```markdown
## Recommendation

{{RECOMMENDATION_SUMMARY}}

### For {{SCENARIO_1}}

**Winner:** {{WINNER_1}}

{{REASON_1}}

### For {{SCENARIO_2}}

**Winner:** {{WINNER_2}}

{{REASON_2}}
```

## Example

### Example: Database Comparison

```markdown
# PostgreSQL vs MongoDB

> ⚖️ **Relational vs Document Database**

**acme-corp** / **comparisons** / `postgres-vs-mongodb.md`

**Last Updated:** 2024-01-15

## Overview

### PostgreSQL

Open source relational database with ACID compliance and advanced features.

**Best for:** Complex queries, transactional data, relational data

### MongoDB

Document-oriented NoSQL database with flexible schema.

**Best for:** Rapid development, unstructured data, horizontal scaling

### At a Glance

| Criteria | PostgreSQL | MongoDB |
|----------|------------|---------|
| Data Model | Relational | Document |
| Schema | Strict | Flexible |
| Scaling | Vertical | Horizontal |
| Transactions | Full ACID | Limited (4.0+) |

## Feature Comparison

| Feature | PostgreSQL | MongoDB |
|---------|------------|---------|
| Joins | ✅ | ❌ |
| JSON Support | ✅ (JSONB) | ✅ (Native) |
| Aggregation | ✅ | ✅ |
| Full-text Search | ✅ | ✅ |
| Geospatial | ✅ | ✅ |
| Replication | ✅ | ✅ |
| Sharding | ⚠️ | ✅ |

## Pros & Cons

### PostgreSQL

**Pros:**

- ✅ Full ACID compliance
- ✅ Complex SQL queries
- ✅ Data integrity constraints
- ✅ Rich ecosystem

**Cons:**

- ❌ Vertical scaling limits
- ❌ Schema migrations needed

### MongoDB

**Pros:**

- ✅ Flexible schema
- ✅ Easy horizontal scaling
- ✅ Developer-friendly
- ✅ Great for rapid prototyping

**Cons:**

- ❌ Limited transaction support
- ❌ No joins
- ❌ Data duplication common

## Use Cases

### Choose PostgreSQL if

- You need complex relational queries
- Data integrity is critical
- You need full ACID transactions
- You have structured, relational data

### Choose MongoDB if

- You need rapid development
- Your data is unstructured/document-like
- You need horizontal scaling
- Your schema changes frequently

## Performance Comparison

| Metric | PostgreSQL | MongoDB |
|--------|------------|---------|
| Simple Query | 10ms | 8ms |
| Complex Join | 50ms | N/A |
| Aggregation | 100ms | 80ms |
| Write (single) | 5ms | 3ms |

*Tested on AWS t3.medium instances*

## Recommendation

### For Enterprise Applications

**Winner:** PostgreSQL

Relational databases provide the data integrity and complex query capabilities needed for enterprise apps.

### For Rapid Prototyping / MVPs

**Winner:** MongoDB

The flexible schema allows faster iteration during early development.
```
