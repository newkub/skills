---
name: javascript-es6-features
description: ES6+ features สำหรับการพัฒนา JavaScript สมัยใหม่
goal: ให้นักพัฒนาเข้าใจและใช้ ES6+ features ได้อย่างถูกต้อง
outcome: สามารถใช้ ES6+ features เขียนโค้ด JavaScript ที่ทันสมัยและมีประสิทธิภาพ
---

# ES6+ Features

## Concepts

ES6+ (ECMAScript 2015 และเวอร์ชันใหม่) เป็นมาตรฐาน JavaScript สมัยใหม่ที่เพิ่มฟีเจอร์ใหม่ๆ เพื่อให้การเขียนโค้ดง่ายขึ้นและมีประสิทธิภาพดีขึ้น

## Best Practices

- ใช้ arrow functions สำหรับ callback และ short functions
- ใช้ template literals แทน string concatenation
- ใช้ destructuring สำหรับ extracting values จาก objects/arrays
- ใช้ const และ let แทน var
- ใช้ classes สำหรับ object-oriented programming
- ใช้ modules สำหรับ code organization

## Examples

### Arrow Functions

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with single parameter
const square = x => x * x;

// Arrow function with multiple statements
const calculate = (a, b) => {
  const result = a + b;
  return result * 2;
};
```

### Template Literals

```javascript
// String concatenation (old way)
const name = "John";
const greeting = "Hello, " + name + "!";

// Template literals (new way)
const greeting = `Hello, ${name}!`;

// Multi-line strings
const html = `
  <div>
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
`;
```

### Destructuring

```javascript
// Object destructuring
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const { name, age } = person;
console.log(name); // "John"
console.log(age);  // 30

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
```

### Spread/Rest Operators

```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### Default Parameters

```javascript
// Default parameters
function greet(name = "World", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet());                    // "Hello, World!"
console.log(greet("John"));              // "Hello, John!"
console.log(greet("John", "Hi"));        // "Hi, John!"
```

### Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }

  getAge() {
    return this.age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.greet()); // "Hello, my name is Alice"
console.log(student.study()); // "Alice is studying"
```

### Modules

```javascript
// math.js (exporting)
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}

// main.js (importing)
import { PI, add, Calculator } from './math.js';
import * as math from './math.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5

const calc = new Calculator();
console.log(calc.multiply(4, 5)); // 20
```

## Verification

1. ตรวจสอบว่าใช้ arrow functions แทน traditional functions ได้
2. ทดสอบ template literals กับ string interpolation
3. ยืนยันว่า destructuring ทำงานได้กับ objects และ arrays
4. ตรวจสอบ spread/rest operators ในสถานการณ์ต่างๆ
5. ทดสอบ default parameters ใน functions
6. ยืนยันว่า classes และ inheritance ทำงานได้
7. ตรวจสอบ import/export สำหรับ modules
