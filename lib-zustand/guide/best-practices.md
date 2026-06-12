# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีที่สุดสำหรับการใช้งาน Zustand ใน production

## Scope

- Store organization
- Performance optimization
- TypeScript patterns
- Testing

## Store Organization

### Feature-based Stores

```typescript
// src/stores/
// ├── index.ts
// ├── authStore.ts
// ├── cartStore.ts
// └── uiStore.ts

// authStore.ts
import { create } from "zustand";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    // Implementation
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
```

### Slices Pattern for Large Stores

```typescript
import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

interface StoreState extends CounterState, UserState {
  // Combined type
}

const createCounterSlice = (set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
});

const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
});

// Combine slices
const useStore = create<StoreState>()((set) => ({
  ...createCounterSlice(set),
  ...createUserSlice(set),
}));
```

## Performance Optimization

### Use Specific Selectors

```typescript
// ❌ Bad - Re-renders on any state change
const user = useStore((state) => state);

// ✅ Good - Only re-renders when user changes
const user = useStore((state) => state.user);

// ✅ Best - Destructure in selector
const { user, count } = useStore(
  (state) => ({ user: state.user, count: state.count }),
  shallow
);
```

### Avoid Inline Selectors in Render

```typescript
// ❌ Bad - New function every render
function Component() {
  const count = useStore((state) => state.count); // OK for primitives
  const user = useStore((state) => {
    // Don't do complex logic here
    return computeUser(state);
  });
}

// ✅ Good - Extract selector
const selectUser = (state) => computeUser(state);

function Component() {
  const user = useStore(selectUser);
}
```

### Use shallow for Object Selectors

```typescript
import { shallow } from "zustand/shallow";

function UserProfile() {
  // ✅ Use shallow to prevent unnecessary re-renders
  const { user, posts } = useStore(
    (state) => ({ user: state.user, posts: state.posts }),
    shallow
  );
}
```

## TypeScript Patterns

### Typed Store

```typescript
import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
}

// Recommended: Type the create function
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### Typed Middleware

```typescript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreState {
  count: number;
  increment: () => void;
}

const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }),
      { name: "store" }
    ),
    { name: "Counter" }
  )
);
```

### Type-safe Actions

```typescript
interface Actions<T> {
  set: (partial: Partial<T>) => void;
  get: () => T;
}

function createTypedStore<T>(initialState: T) {
  return create<Actions<T>>()((set, get) => ({
    set: (partial) => set(partial),
    get: () => get(),
  }));
}
```

## Testing

### Unit Test Store

```typescript
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Test
describe("Counter Store", () => {
  it("should increment count", () => {
    const initial = useCounterStore.getState();
    expect(initial.count).toBe(0);

    useCounterStore.getState().increment();

    const updated = useCounterStore.getState();
    expect(updated.count).toBe(1);
  });

  it("should reset count", () => {
    useCounterStore.setState({ count: 100 });
    useCounterStore.getState().reset();

    expect(useCounterStore.getState().count).toBe(0);
  });
});
```

### Test with Middleware

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
    }),
    { name: "test-storage" }
  )
);

// Reset before each test
beforeEach(() => {
  localStorage.clear();
  useStore.setState({ count: 0 });
});
```

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Re-renders | Use specific selectors, shallow comparison |
| Inline functions in selector | Extract to outside component |
| Large store | Split into feature-based stores |
| Type errors | Always type the store explicitly |
| Persist issues | Use `partialize` to control what persists |

## File Structure

```
src/
├── stores/
│   ├── index.ts          # Export all stores
│   ├── authStore.ts      # Authentication
│   ├── cartStore.ts      # Shopping cart
│   └── uiStore.ts        # UI state (modals, theme)
├── hooks/
│   └── useStore.ts       # Custom hooks
└── components/
    └── App.tsx
```

## Middleware Best Practices

```typescript
// Order matters! devtools should be outermost
const useStore = create(
  devtools(       // 1. DevTools (outermost)
    persist(       // 2. Persist
      immer(       // 3. Immer (innermost)
        (set) => ({
          count: 0,
          increment: () => set((draft) => {
            draft.count += 1;
          }),
        })
      )
    ),
    { name: "Counter" }
  )
);
```