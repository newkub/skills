---
description: Testing guide ใน Markdown
title: testing
tags: [markdown, testing, guide, quality]
goals:
  - แสดงตัวอย่างการเขียน testing documentation
  - สอนวิธี document testing procedures
---

## Testing Guide

````markdown
# Testing Guide

This guide explains how to run tests for this project.

## Running Tests

### Unit Tests

```bash
npm run test
# or
npm run test:unit
```

### Integration Tests

```bash
npm run test:integration
```

### E2E Tests

```bash
npm run test:e2e
```

### All Tests

```bash
npm run test:all
```
````

## Test Structure

````markdown
## Test Organization

```text
tests/
├── unit/           # Unit tests
│   ├── utils/
│   ├── components/
│   └── api/
├── integration/    # Integration tests
│   ├── database/
│   └── services/
└── e2e/           # End-to-end tests
    ├── auth/
    └── flows/
```

## Writing Tests

### Unit Test Example

```javascript
import { describe, it, expect } from 'vitest';
import { sum } from './utils';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('handles negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
```
````

## Test Coverage

````markdown
## Coverage Reports

Generate coverage report:

```bash
npm run test:coverage
```

View report at `coverage/index.html`.

### Coverage Goals

| Metric | Target |
|--------|--------|
| Lines | 80% |
| Functions | 80% |
| Branches | 70% |
| Statements | 80% |
````
