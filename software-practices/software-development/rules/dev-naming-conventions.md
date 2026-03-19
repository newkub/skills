# Naming Conventions

## Rationale

Naming conventions ที่ consistent ช่วยให้ code readable และ reduce cognitive load

## Bad Practice

```typescript
// ❌ Abbreviations
const usr = { name: 'John', em: 'john@example.com' };
const cp = calculatePrice();

// ❌ Inconsistent naming
function getUser(id: string): User {}
function fetchUser(uid: string): User {}
function retrieveUser(userId: string): User {}

// ❌ Non-descriptive names
const d = new Date();
const arr = [1, 2, 3];
function fn(x: number): number { return x * 2; }

// ❌ Magic numbers
const result = value * 1.07 + 25;

// ❌ Wrong casing
const User_Name = 'John';
const user_name = 'John';
```

## Good Practice

```typescript
// ✅ Descriptive names
const user = { name: 'John', email: 'john@example.com' };
const totalPrice = calculatePrice();

// ✅ Consistent naming
function getUser(id: string): User {}
function getOrder(id: string): Order {}
function getProduct(id: string): Product {}

// ✅ Clear, descriptive names
const currentDate = new Date();
const numbers = [1, 2, 3];
function double(value: number): number { return value * 2; }

// ✅ Constants for magic numbers
const TAX_RATE = 1.07;
const SHIPPING_COST = 25;
const result = value * TAX_RATE + SHIPPING_COST;

// ✅ Correct casing
const userName = 'John';
const USER_ID = '123';
```

## Naming Conventions

### 1. Variables & Functions

- **camelCase**: `userName`, `calculatePrice`, `getUser`
- ใช้ **verbs** สำหรับ functions: `get`, `set`, `calculate`, `validate`

### 2. Classes & Interfaces

- **PascalCase**: `UserService`, `OrderController`, `UserRepository`

### 3. Constants

- **SCREAMING_SNAKE_CASE**: `API_KEY`, `MAX_RETRIES`, `TAX_RATE`

### 4. Files

- **kebab-case**: `user-service.ts`, `order-controller.ts`

### 5. Boolean Variables

- ใช้ **is/has/can** prefixes:
  - `isValid`, `hasPermission`, `canDelete`

### 6. Private Members

- ใช้ **underscore prefix**:
  - `_privateMethod()`, `_privateField`

## Examples

```typescript
// ✅ Good naming
class UserService {
  private _cache: Map<string, User> = new Map();

  async getUserById(id: string): Promise<User> {
    const cached = this._cache.get(id);
    if (cached) return cached;

    const user = await this._db.findUser(id);
    this._cache.set(id, user);
    return user;
  }

  async createUser(input: CreateUserInput): Promise<User> {
    if (!isValidEmail(input.email)) {
      throw new ValidationError('Invalid email');
    }

    const user = await this._db.insertUser(input);
    this._cache.set(user.id, user);
    return user;
  }
}

// ✅ Constants
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
const DEFAULT_TIMEOUT = 5000;
```

## References

- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
