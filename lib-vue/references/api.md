# Vue 3 Composition API Reference

## Reactive References

| Function | Description | Example |
|----------|-------------|---------|
| `ref()` | Create reactive reference | `const count = ref(0)` |
| `reactive()` | Create reactive object | `const state = reactive({ count: 0 })` |
| `shallowRef()` | Shallow reactive reference | `const arr = shallowRef([])` |
| `shallowReactive()` | Shallow reactive object | `const state = shallowReactive({})` |
| `toRef()` | Create ref from reactive | `const count = toRef(state, 'count')` |
| `toRefs()` | Convert to refs | `const { count, name } = toRefs(state)` |

## Computed Values

| Function | Description | Example |
|----------|-------------|---------|
| `computed()` | Create computed value | `const doubled = computed(() => count.value * 2)` |

## Watchers

| Function | Description | Example |
|----------|-------------|---------|
| `watch()` | Watch specific source | `watch(count, (new, old) => {})` |
| `watchEffect()` | Immediate watcher | `watchEffect(() => console.log(count.value))` |
| `watchPostEffect()` | Post-render watcher | `watchEffect(() => {}, { flush: 'post' })` |

## Lifecycle Hooks

| Hook | Description |
|------|-------------|
| `onMounted()` | After component mounts |
| `onUpdated()` | After component updates |
| `onUnmounted()` | Before component unmounts |
| `onBeforeMount()` | Before mount |
| `onBeforeUpdate()` | Before update |
| `onBeforeUnmount()` | Before unmount |
| `onErrorCaptured()` | On error |
| `onRenderTracked()` | Dependency tracked |
| `onRenderTriggered()` | Dependency triggers |

## Dependency Injection

| Function | Description |
|----------|-------------|
| `provide()` | Provide values to descendants |
| `inject()` | Inject from ancestor |

## Template Refs

| Function | Description |
|----------|-------------|
| `ref()` | Template ref binding |
| `functionRef()` | Function-based ref |

## Component Utilities

| Function | Description |
|----------|-------------|
| `defineProps()` | Define component props |
| `defineEmits()` | Define component emits |
| `defineExpose()` | Expose component API |
| `defineSlots()` | Define slots |

## TypeScript Types

```typescript
// Props
defineProps<{
  title: string;
  count?: number;
}>();

// With defaults
withDefaults(defineProps<{
  title: string;
  count?: number;
}>(), {
  count: 0,
});

// Emits
const emit = defineEmits<{
  (e: 'update', value: number): void;
  (e: 'delete', id: string): void;
}>();
```

## NextTick

```typescript
import { nextTick } from 'vue';

await nextTick();
```

## Custom Refs

```typescript
import { customRef } from 'vue';

function useDebouncedRef<T>(initial: T, delay: number) {
  return customRef((track, trigger) => ({
    get() {
      track();
      return initial;
    },
    set(value: T) {
      setTimeout(() => {
        trigger();
        initial = value;
      }, delay);
    },
  }));
}
```