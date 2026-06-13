# API Reference

## Run-time API

### Component API

#### createEventDispatcher

```javascript
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

dispatch('eventName', detail);
```

#### getContext / setContext

```javascript
import { getContext, setContext } from 'svelte';

// Set context
setContext('key', value);

// Get context
const value = getContext('key');
```

#### onMount / onDestroy

```javascript
import { onMount, onDestroy } from 'svelte';

onMount(() => {
  // On mount
  return () => {
    // On destroy
  };
});

onDestroy(() => {
  // Cleanup
});
```

#### tick

```javascript
import { tick } from 'svelte';

await tick(); // Wait for DOM updates
```

### Store API

#### writable

```javascript
import { writable } from 'svelte/store';

const store = writable(initialValue, (set) => {
  // Callback for setup
  return () => {
    // Cleanup
  };
});

// Methods
store.set(newValue);
store.update(fn);
store.subscribe(callback);
```

#### readable

```javascript
import { readable } from 'svelte/store';

const store = readable(initialValue, (set) => {
  // Setup
  return () => {
    // Cleanup
  };
});
```

#### derived

```javascript
import { derived } from 'svelte/store';

const derivedStore = derived(
  sourceStore,
  ($source) => $source * 2
);

// Multiple sources
const derivedStore = derived(
  [store1, store2],
  ([$1, $2]) => $1 + $2
);
```

### Transition API

#### fade

```javascript
import { fade } from 'svelte/transition';

<div transition:fade />
```

#### fly

```javascript
import { fly } from 'svelte/transition';

<div transition:fly={{ x: 100, y: 100 }} />
```

#### slide

```javascript
import { slide } from 'svelte/transition';

<div transition:slide />
```

### Animation API

#### tweened

```javascript
import { tweened } from 'svelte/motion';

const value = tweened(0);

value.set(100, { duration: 1000 });
```

#### spring

```javascript
import { spring } from 'svelte/motion';

const value = spring(0, { stiffness: 0.1, damping: 0.5 });
```

## Compile-time API

### Compiler Options

```javascript
import { compile } from 'svelte/compiler';

const result = compile(source, {
  generate: 'dom', // or 'ssr'
  dev: false,
  css: false,
  hydratable: false,
  customElement: false
});
```

### Preprocessor

```javascript
import { preprocess } from 'svelte/compiler';

const processed = await preprocess(source, {
  markup: ({ content, filename }) => {
    // Process markup
  },
  script: ({ content, attributes, filename }) => {
    // Process script
  },
  style: ({ content, attributes, filename }) => {
    // Process style
  }
});
```

## Special Elements

### svelte:self

```svelte
<svelte:self this={component} />
```

### svelte:component

```svelte
<svelte:component this={component} />
```

### svelte:window

```svelte
<svelte:window on:resize={handleResize} />
```

### svelte:body

```svelte
<svelte:body>
  <Modal />
</svelte:body>
```

### svelte:head

```svelte
<svelte:head>
  <title>Page Title</title>
</svelte:head>
```

### svelte:options

```svelte
<svelte:options immutable={true} />
```

## Summary

Key APIs:
- **Component**: createEventDispatcher, getContext, onMount
- **Store**: writable, readable, derived
- **Transition**: fade, fly, slide
- **Animation**: tweened, spring
- **Compiler**: compile, preprocess
- **Special Elements**: svelte:self, svelte:component, etc.
