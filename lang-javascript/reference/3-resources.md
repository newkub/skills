# Modern JavaScript Features

## คุณสมบัติล่าสุดของ JavaScript (ES2020+)

### ES2020 Features

#### Optional Chaining (?.)
```javascript
const user = {
  name: 'John',
  address: {
    street: '123 Main St'
  }
};

// Before optional chaining
const street = user && user.address && user.address.street;

// With optional chaining
const street = user?.address?.street;
const city = user?.address?.city?.toUpperCase(); // undefined if any is null/undefined
```

#### Nullish Coalescing (??)
```javascript
const settings = {
  theme: null,
  fontSize: 0,
  animations: false
};

// Before
const theme = settings.theme || 'default'; // 'default' (even if theme is empty string)
const fontSize = settings.fontSize || 16; // 16 (even if fontSize is 0)

// With nullish coalescing
const theme = settings.theme ?? 'default'; // 'default' only if theme is null/undefined
const fontSize = settings.fontSize ?? 16; // 0 (preserves falsy values except null/undefined)
```

#### BigInt
```javascript
// Creating BigInt values
const bigIntValue = 9007199254740991n;
const anotherBigInt = BigInt('9007199254740991');

// Operations
const sum = bigIntValue + 10n;
const product = bigIntValue * 2n;

// Can't mix with regular numbers
// const invalid = bigIntValue + 10; // Error
```

#### Promise.allSettled()
```javascript
const promises = [
  fetch('/api/user/1'),
  fetch('/api/user/2'),
  fetch('/api/user/3')
];

const results = await Promise.allSettled(promises);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Promise ${index} fulfilled:`, result.value);
  } else {
    console.log(`Promise ${index} rejected:`, result.reason);
  }
});
```

#### String.prototype.matchAll()
```javascript
const text = 'JavaScript is great. JavaScript is popular.';
const regex = /JavaScript/g;

const matches = [...text.matchAll(regex)];

matches.forEach(match => {
  console.log(match[0]); // 'JavaScript'
  console.log(match.index); // Position of match
});
```

### ES2021 Features

#### Logical Assignment Operators
```javascript
let user = { name: 'John' };

// OR assignment
user.name ||= 'Anonymous'; // Only assigns if user.name is falsy
user.age ||= 25; // user.age becomes 25

// AND assignment
let settings = { theme: 'dark' };
settings.theme &&= 'light'; // Only assigns if truthy
settings.notifications &&= true; // No change (undefined)

// Nullish assignment
settings.fontSize ??= 16; // Only assigns if null/undefined
```

#### Numeric Separators
```javascript
const billion = 1_000_000_000;
const bytes = 0xFF_FF_FF_FF;
const pi = 3.141_592_653;

// Makes large numbers more readable
const price = 1_299_99; // 129999
const binary = 0b1010_1100_1111_0000;
```

#### String.prototype.replaceAll()
```javascript
const text = 'apple, banana, apple, orange';

// Before
const newText1 = text.replace(/apple/g, 'grape');

// With replaceAll
const newText2 = text.replaceAll('apple', 'grape');

// Both result in: 'grape, banana, grape, orange'
```

#### Promise.any()
```javascript
const promises = [
  fetch('/api/primary').catch(() => null),
  fetch('/api/secondary').catch(() => null),
  fetch('/api/backup').catch(() => null)
];

try {
  const result = await Promise.any(promises);
  console.log('First successful response:', result);
} catch (error) {
  console.log('All promises rejected:', error);
}
```

### ES2022 Features

#### Array.prototype.at()
```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];

// Positive indices (same as bracket notation)
console.log(arr.at(0)); // 'a'
console.log(arr.at(2)); // 'c'

// Negative indices (from end)
console.log(arr.at(-1)); // 'e'
console.log(arr.at(-2)); // 'd'

// More readable than arr[arr.length - 1]
const lastItem = arr.at(-1);
```

#### Object.hasOwn()
```javascript
const obj = { name: 'John', age: 30 };

// Before
console.log(Object.prototype.hasOwnProperty.call(obj, 'name')); // true
console.log('toString' in obj); // true (inherited property)

// With hasOwn
console.log(Object.hasOwn(obj, 'name')); // true
console.log(Object.hasOwn(obj, 'toString')); // false
```

#### Class Fields
```javascript
class Person {
  // Public fields
  name = 'Unknown';
  age = 0;
  
  // Private fields
  #id = Math.random();
  #secrets = [];
  
  // Static fields
  static species = 'Homo sapiens';
  static #count = 0;
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.#count++;
  }
  
  // Private methods
  #generateId() {
    return `person_${Date.now()}_${this.#id}`;
  }
  
  // Public methods
  getInfo() {
    return {
      name: this.name,
      age: this.age,
      id: this.#generateId()
    };
  }
  
  // Static methods
  static getCount() {
    return Person.#count;
  }
}
```

#### Error Cause
```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`, {
        cause: response
      });
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch user data', {
      cause: error
    });
  }
}

try {
  const user = await fetchUserData(123);
} catch (error) {
  console.log(error.message); // 'Failed to fetch user data'
  console.log(error.cause); // Original error with HTTP details
}
```

### ES2023 Features

#### Array.prototype.findLast() and findLastIndex()
```javascript
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// Find last even number
const lastEven = numbers.findLast(num => num % 2 === 0); // 2

// Find index of last even number
const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0); // 7
```

#### Array.prototype.toReversed(), toSorted(), toSpliced()
```javascript
const original = [3, 1, 4, 1, 5];

// Non-mutating versions of array methods
const reversed = original.toReversed(); // [5, 1, 4, 1, 3]
const sorted = original.toSorted(); // [1, 1, 3, 4, 5]
const spliced = original.toSpliced(1, 2, 9, 8); // [3, 9, 8, 1, 5]

console.log(original); // [3, 1, 4, 1, 5] - unchanged
```

#### Hashbang Syntax
```javascript
#!/usr/bin/env node

// This allows JavaScript files to be used as executable scripts
// on Unix-like systems

console.log('Hello from executable script!');
```

### ES2024 Features (Proposed)

#### Pipeline Operator (|)
```javascript
// Proposed syntax
const result = value
  |> double
  |> add(5)
  |> toString;

// Equivalent to:
const result = toString(add(5, double(value)));
```

#### Temporal API (Date replacement)
```javascript
import { Temporal } from 'proposal-temporal';

// Creating dates
const now = Temporal.Now.plainDateTimeISO();
const birthday = Temporal.PlainDate.from('1990-05-15');

// Date arithmetic
const nextWeek = now.add({ days: 7 });
const duration = birthday.until(now);

// Timezone aware
const zonedNow = Temporal.Now.zonedDateTimeISO('America/New_York');
```

#### Array.prototype.groupBy()
```javascript
const people = [
  { name: 'Alice', age: 25, city: 'NYC' },
  { name: 'Bob', age: 30, city: 'NYC' },
  { name: 'Charlie', age: 25, city: 'LA' }
];

const groupedByAge = people.groupBy(person => person.age);
/*
{
  25: [
    { name: 'Alice', age: 25, city: 'NYC' },
    { name: 'Charlie', age: 25, city: 'LA' }
  ],
  30: [
    { name: 'Bob', age: 30, city: 'NYC' }
  ]
}
*/
```

### Using Modern Features in Projects

#### Babel Configuration
```json
// .babelrc
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["> 1%", "last 2 versions"]
      },
      "useBuiltIns": "usage",
      "corejs": 3
    }]
  ]
}
```

#### TypeScript Support
```typescript
// Optional chaining in TypeScript
interface User {
  name: string;
  address?: {
    street?: string;
    city?: string;
  };
}

const user: User = { name: 'John' };
const street = user?.address?.street; // Type-safe

// Nullish coalescing
const theme = user?.address?.city ?? 'Unknown';
```

#### Browser Compatibility Check
```javascript
// Feature detection
const supportsOptionalChaining = () => {
  try {
    return ({}?.test) === undefined;
  } catch {
    return false;
  }
};

if (!supportsOptionalChaining()) {
  // Load polyfill or use alternative syntax
}
```

These modern features make JavaScript more expressive, safer, and easier to work with. Always check browser compatibility for your target audience when using newer features.
