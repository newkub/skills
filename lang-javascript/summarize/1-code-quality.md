---
name: javascript-code-quality-summary
description: สรุป best practices สำหรับ code quality ใน JavaScript
goal: ให้นักพัฒนาเขียน JavaScript code ที่มีคุณภาพสูง
outcome: สามารถเขียน JavaScript code ที่ clean, maintainable และ readable
---

# Code Quality Best Practices

## Overview
Best practices สำหรับการเขียน JavaScript code ที่มีคุณภาพสูง อ่านง่าย และบำรุงรักษาง่าย

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use const/let instead of var | ป้องกัน hoisting และ scope issues | High | `const name = 'John';` |
| Use strict equality (===) | ป้องกัน type coercion bugs | High | `if (value === null)` |
| Use meaningful variable names | เพิ่ม readability และ maintainability | Medium | `const userAge = 25;` |
| Keep functions small | Single responsibility principle | Medium | `function calculateTotal(items)` |
| Use descriptive function names | ทำให้ code self-documenting | Medium | `function getUserById(id)` |
| Avoid global variables | ป้องกัน namespace pollution | High | Use modules instead |
| Use consistent code style | เพิ่ม readability และ teamwork | Medium | Follow ESLint rules |
| Add comments for complex logic | ช่วยในการทำความเข้าใจ | Low | `// Calculate discount based on user tier` |
| Use TypeScript when possible | Add type safety และ better IDE support | Medium | `interface User { id: number; }` |
| Follow naming conventions | Consistent และ predictable code | Medium | `const getUserData = () => {}` |

## Implementation Guidelines

### High Priority Practices
1. **Always use `const` and `let`** - Never use `var` in modern JavaScript
2. **Use strict equality (`===`)** - Prevent type coercion bugs
3. **Avoid global variables** - Use modules and proper scoping

### Medium Priority Practices
1. **Use meaningful names** - Make code self-documenting
2. **Keep functions small** - Single responsibility principle
3. **Use consistent code style** - Follow team conventions
4. **Consider TypeScript** - Add type safety when beneficial

### Code Quality Checklist

#### Before Writing Code
- [ ] Plan clear variable and function names
- [ ] Consider the scope and lifetime of variables
- [ ] Think about function responsibilities

#### While Writing Code
- [ ] Use `const`/`let` instead of `var`
- [ ] Use `===` instead of `==`
- [ ] Keep functions focused on single responsibility
- [ ] Use descriptive names
- [ ] Follow consistent naming conventions

#### After Writing Code
- [ ] Review for potential global variables
- [ ] Check for complex logic that needs comments
- [ ] Verify naming consistency
- [ ] Run linting tools
- [ ] Consider TypeScript migration

## Common Anti-Patterns

| Anti-Pattern | Why Bad | Better Alternative |
|--------------|---------|------------------|
| Using `var` | Hoisting issues, function scope | Use `const`/`let` |
| `==` comparison | Type coercion bugs | Use `===` |
| Global variables | Namespace pollution | Use modules |
| Long functions | Hard to read and test | Break into smaller functions |
| Poor naming | Hard to understand | Use descriptive names |
| Inconsistent style | Team confusion | Follow linting rules |

## Tools and Resources

### Linting and Formatting
- **ESLint** - Code quality and style checking
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks

### Code Quality Metrics
- **Code complexity** - Measure cyclomatic complexity
- **Code coverage** - Ensure tests cover critical code
- **Technical debt** - Track code quality over time

## Examples

### Good Practices
```javascript
// Use const/let with meaningful names
const MAX_RETRY_ATTEMPTS = 3;
let currentAttempt = 0;

// Use strict equality
if (user.age === 25) {
  console.log('User is 25 years old');
}

// Small, focused functions
function calculateDiscount(price, userTier) {
  const discountRates = {
    bronze: 0.05,
    silver: 0.10,
    gold: 0.15
  };
  
  return price * discountRates[userTier];
}

// Descriptive function names
function getUserById(userId) {
  return users.find(user => user.id === userId);
}

// Avoid global variables
const userService = {
  users: [],
  
  addUser(user) {
    this.users.push(user);
  },
  
  getUserById(id) {
    return this.users.find(user => user.id === id);
  }
};
```

### Bad Practices
```javascript
// Avoid var
var name = 'John'; // Bad
const name = 'John'; // Good

// Avoid == comparison
if (name == 'John') { } // Bad
if (name === 'John') { } // Good

// Global variables
var globalData = []; // Bad
const appData = []; // Better (module scope)

// Long functions
function processEverything(data) {
  // 100 lines of code doing multiple things
} // Bad

// Poor naming
const d = new Date(); // Bad
const currentDate = new Date(); // Good
```

## Verification
1. ตรวจสอบว่าใช้ const/let แทน var ทั่งหมด
2. ทดสอบว่าใช้ === แทน == ทั่งหมด
3. ยืนยันว่าไม่มี global variables
4. ตรวจสอบว่า functions มี single responsibility
5. ทดสอบว่าชื่อตัวแปรและฟังก์ชันมีความหมาย
6. ยืนยันว่ามี consistent code style
7. ตรวจสอบว่า linting tools ผ่าน
