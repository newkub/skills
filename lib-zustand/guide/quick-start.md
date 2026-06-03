# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน Zustand อย่างรวดเร็ว

## Scope

- Basic store creation
- State access with hooks
- State updates
- Common patterns

## Step 1: Install Zustand

```bash
npm install zustand
```

## Step 2: Create Store

```typescript
import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

## Step 3: Use in Component

```typescript
function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Common Patterns

### Pattern 1: Simple State

```typescript
const useStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));

// Usage
function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <div>{bears} bears</div>;
}
```

### Pattern 2: Derived State (Selector)

```typescript
const useStore = create((set) => ({
  users: [
    { id: "1", name: "John", age: 30 },
    { id: "2", name: "Jane", age: 25 },
  ],
}));

// Selector for derived value
const selectAdults = (state) => state.users.filter((u) => u.age >= 18);

function AdultList() {
  const adults = useStore(selectAdults);
  return (
    <ul>
      {adults.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Pattern 3: Store with Actions

```typescript
interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: (id: string) => Promise<void>;
  logout: () => void;
}

const useUserStore = create<UserState>((set, get) => ({
  user: null,
  isLoading: false,
  error: null,
  fetchUser: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`/api/users/${id}`);
      const user = await response.json();
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  logout: () => set({ user: null }),
}));
```

### Pattern 4: Multiple Selectors

```typescript
import { shallow } from "zustand/shallow";

function UserProfile() {
  const { user, isLoading } = useStore(
    (state) => ({ user: state.user, isLoading: state.isLoading }),
    shallow
  );

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>No user</p>;

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
```

## Best Practice: Organize by Feature

```typescript
// src/stores/counter.ts
export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));

// src/stores/user.ts
export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// src/stores/cart.ts
export const useCartStore = create<CartState>()((set) => ({
  items: [],
  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
  removeItem: (id) => set((s) => ({
    items: s.items.filter((i) => i.id !== id)
  })),
}));
```

## Next Steps

- [Key Concept](./key-concept.md) - เข้าใจ concepts เพิ่มเติม
- [Features](./features.md) - ดู features ทั้งหมด
- [Best Practices](./best-practices.md) - best practices สำหรับ production
- [How It Works](./how-it-works.md) - เข้าใจการทำงานภายใน