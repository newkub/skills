---
name: javascript-built-in-objects
description: Built-in objects และ methods ใน JavaScript
goal: ให้นักพัฒนาเข้าใจและใช้ built-in objects ได้อย่างถูกต้อง
outcome: สามารถใช้ Array, Object, String, Number, Date, และ Math objects อย่างมีประสิทธิภาพ
---

# Built-in Objects

## Concepts

JavaScript มี built-in objects ที่ให้ methods และ properties สำหรับการทำงานกับข้อมูลประเภทต่างๆ อย่างมีประสิทธิภาพ

## Best Practices

- ใช้ array methods (map, filter, reduce) แทน loops สำหรับ data transformation
- ใช้ Object methods สำหรับ object manipulation
- ใช้ string methods สำหรับ text processing
- ใช้ Number methods สำหรับ number validation
- ใช้ Date object สำหรับ date/time operations
- ใช้ Math object สำหรับ mathematical calculations

## Examples

### Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - select elements that match condition
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - accumulate values
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15

// forEach - execute function for each element
numbers.forEach(n => console.log(n));

// find - find first element that matches
const found = numbers.find(n => n > 3);
console.log(found); // 4

// some - check if any element matches
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// every - check if all elements match
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true
```

### Object Methods

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  occupation: "Developer"
};

// Object.keys - get array of keys
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city", "occupation"]

// Object.values - get array of values
const values = Object.values(person);
console.log(values); // ["John", 30, "New York", "Developer"]

// Object.entries - get array of [key, value] pairs
const entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 30], ...]

// Object.assign - merge objects
const additional = { country: "USA", age: 31 };
const merged = Object.assign({}, person, additional);
console.log(merged); // {name: "John", age: 31, city: "New York", ...}

// Object.freeze - make object immutable
const frozen = Object.freeze(person);
// frozen.age = 32; // Error in strict mode

// Object.seal - prevent adding/removing properties
const sealed = Object.seal(person);
// delete sealed.age; // Error in strict mode
```

### String Methods

```javascript
const text = "Hello, World!";

// includes - check if string contains substring
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false (case sensitive)

// startsWith - check if string starts with substring
console.log(text.startsWith("Hello")); // true

// endsWith - check if string ends with substring
console.log(text.endsWith("!")); // true

// trim - remove whitespace from both ends
const padded = "  Hello  ";
console.log(padded.trim()); // "Hello"

// toUpperCase/toLowerCase
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"

// split - convert string to array
const words = text.split(" ");
console.log(words); // ["Hello,", "World!"]

// replace - replace substring
const replaced = text.replace("World", "JavaScript");
console.log(replaced); // "Hello, JavaScript!"

// slice - extract substring
const sliced = text.slice(0, 5);
console.log(sliced); // "Hello"
```

### Number Methods

```javascript
// parseInt - convert string to integer
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseInt("hello")); // NaN

// parseFloat - convert string to float
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14px")); // 3.14

// isNaN - check if value is NaN
console.log(isNaN(42)); // false
console.log(isNaN("hello")); // true
console.log(isNaN(NaN)); // true

// Number.isInteger - check if value is integer
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(3.14)); // false

// Number.isFinite - check if value is finite
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false

// toFixed - format number with decimal places
const pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"
```

### Date Object

```javascript
// Create date objects
const now = new Date();
const birthday = new Date("1990-01-01");
const customDate = new Date(2023, 0, 1, 12, 30, 0); // Year, Month (0-11), Day, Hour, Minute, Second

// Get date components
console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 0-11
console.log(now.getDate()); // 1-31
console.log(now.getDay()); // 0-6 (0 = Sunday)
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getSeconds()); // 0-59

// Format date
const formatted = now.toISOString();
console.log(formatted); // "2023-01-01T12:00:00.000Z"

const localeString = now.toLocaleDateString();
console.log(localeString); // "1/1/2023" (depends on locale)

// Date arithmetic
const tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);

const daysDiff = (tomorrow - now) / (1000 * 60 * 60 * 24);
console.log(daysDiff); // 1
```

### Math Object

```javascript
// Basic operations
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Rounding
console.log(Math.round(3.7)); // 4
console.log(Math.floor(3.7)); // 3
console.log(Math.ceil(3.2)); // 4
console.log(Math.trunc(3.7)); // 3

// Random numbers
console.log(Math.random()); // 0-1
console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.floor(Math.random() * 100) + 1); // 1-100

// Math functions
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.abs(-5)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// Trigonometric functions
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(0)); // 0
```

## Verification

1. ตรวจสอบว่าใช้ array methods แทน loops ได้
2. ทดสอบ Object methods สำหรับ manipulation
3. ยืนยันว่า string methods ทำงานได้
4. ตรวจสอบ Number methods สำหรับ validation
5. ทดสอบ Date object operations
6. ยืนยันว่า Math functions ทำงานได้
