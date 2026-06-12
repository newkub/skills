# How It Works

## SolidJS Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SolidJS Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Compilation Phase                        │   │
│  │                                                       │   │
│  │   JSX ─────────────► JavaScript + Tracking Calls     │   │
│  │                                                       │   │
│  │   <div>{count()}</div>                               │   │
│  │          │                                            │   │
│  │          ▼                                            │   │
│  │   createEffect(() => div.textContent = count())      │   │
│  │                                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                              │                              │
│                              ▼                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Runtime Phase                            │   │
│  │                                                       │   │
│  │   Signal Update ───► Dependency Graph ───► DOM Update │   │
│  │        │                    │                  │        │   │
│  │        ▼                    ▼                  ▼        │   │
│  │   setCount(n+1)      Track subscribers    Fine-grained  │   │
│  │                                           DOM patch     │   │
│  │                                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Fine-Grained Reactivity

```
┌─────────────────────────────────────────────────────────────┐
│              Fine-Grained vs Virtual DOM                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Virtual DOM:                    Fine-Grained (SolidJS):    │
│  ┌─────────────────┐              ┌─────────────────┐       │
│  │  Component      │              │  Reactive Graph │       │
│  │  Re-execution   │              │                 │       │
│  │       │        │              │  ┌─────┐        │       │
│  │       ▼        │              │  │Signal│        │       │
│  │  VDOM Diff     │              │  └──┬──┘        │       │
│  │       │        │              │     │           │       │
│  │       ▼        │              │     ▼           │       │
│  │  New DOM Tree  │              │  Subscribers    │       │
│  │                │              │  Direct Update  │       │
│  └─────────────────┘              └─────────────────┘       │
│                                                              │
│  Performance: O(diff)              Performance: O(updates)  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Signal Update Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Signal Update Flow                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. setCount(5)                                             │
│         │                                                   │
│         ▼                                                   │
│  2. Signal marks value = 5                                  │
│         │                                                   │
│         ▼                                                   │
│  3. Notify all subscribers (effects, memos)                 │
│         │                                                   │
│         ▼                                                   │
│  4. Each subscriber re-runs                                │
│         │                                                   │
│         ▼                                                   │
│  5. Direct DOM updates (no diffing!)                        │
│                                                              │
│  Example:                                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  <div>{count()}</div>  ──►  element.textContent = 5 │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Reactive Primitives

```
┌─────────────────────────────────────────────────────────────┐
│                    Reactive Primitives                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  createSignal ───► Stores single value                       │
│       │                                                     │
│       ├── get() ──── Read current value                     │
│       └── set() ──── Update value                           │
│                                                              │
│  createStore ───► Stores nested reactive objects            │
│       │                                                     │
│       ├── get() ──── Deep read with tracking                │
│       └── set() ──── Fine-grained updates                   │
│                                                              │
│  createMemo ────► Derived reactive value (cached)            │
│       │                                                     │
│       └── Recomputes only when deps change                   │
│                                                              │
│  createEffect ───► Side effects (auto-tracking)             │
│       │                                                     │
│       └── Runs when accessed signals change                  │
│                                                              │
│  createResource ───► Async data with loading/error states    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Component Lifecycle

```tsx
import { onMount, onCleanup, createEffect } from 'solid-js';

function MyComponent(props: Props) {
  // Mount phase
  onMount(() => {
    console.log('Component mounted');
  });

  // Cleanup phase (when component unmounts)
  onCleanup(() => {
    console.log('Component will unmount');
  });

  // Effect with dependency tracking
  createEffect(() => {
    console.log('props.id changed:', props.id);
  });

  return <div>{props.children}</div>;
}
```

## Store Deep Mutation

```tsx
import { createStore } from 'solid-js/store';

const [state, setState] = createStore({
  user: { name: 'John', address: { city: 'NYC' } },
});

// Deep nested update - only affected parts update
setState('user', 'address', 'city', 'LA');

// Array operations
setState('todos', (todos) => [...todos, { id: 1, text: 'New' }]);
setState('todos', 0, 'done', true);
```

## JSX Compilation

```tsx
// Input JSX
<div className="container">
  <h1>{title()}</h1>
  <button onClick={() => setCount(c => c + 1)}>
    Count: {count()}
  </button>
</div>

// Compiled JavaScript
import { template as _$template } from "solid-js/web";

const _tmpl = _$template(`<div class="container"><h1></h1><button></button></div>`);

function MyComponent() {
  const [count, setCount] = createSignal(0);
  
  return (() => {
    const _el = _tmpl.cloneNode(true);
    const _h1 = _el.firstChild;
    const _button = _h1.nextSibling;
    
    _h1.textContent = title();
    _button.addEventListener("click", () => setCount(c => c + 1));
    
    // Fine-grained text updates
    createEffect(() => _h1.textContent = title());
    createEffect(() => _button.textContent = `Count: ${count()}`);
    
    return _el;
  })();
}
```