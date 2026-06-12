# Vue 3 Composition API Reference

## Reactive References

| Method | Description | Example |
|--------|-------------|---------|
| `ref()` | Create reactive reference | `const count = ref(0)` |
| `reactive()` | Create reactive object | `const state = reactive({ count: 0 })` |
| `shallowRef()` | Shallow reactive reference | `const arr = shallowRef([])` |
| `shallowReactive()` | Shallow reactive object | `const state = shallowReactive({})` |
| `toRef()` | Create ref from reactive | `const count = toRef(state, 'count')` |
| `toRefs()` | Convert to refs | `const { count, name } = toRefs(state)` |

## Computed Values

| Method | Description | Example |
|--------|-------------|---------|
| `computed()` | Create computed value | `const doubled = computed(() => count.value * 2)` |

## Watchers

| Method | Description | Example |
|--------|-------------|---------|
| `watch()` | Watch specific source | `watch(count, (new, old) => {})` |
| `watchEffect()` | Immediate watcher | `watchEffect(() => console.log(count.value))` |
| `watchPostEffect()` | Post-render watcher | `watchEffect(() => {}, { flush: 'post' })` |

## Lifecycle Hooks

| Method | Description | Example |
|--------|-------------|---------|
| `onMounted()` | After component mounts | `onMounted(() => {})` |
| `onUpdated()` | After component updates | `onUpdated(() => {})` |
| `onUnmounted()` | Before component unmounts | `onUnmounted(() => {})` |
| `onBeforeMount()` | Before mount | `onBeforeMount(() => {})` |
| `onBeforeUpdate()` | Before update | `onBeforeUpdate(() => {})` |
| `onBeforeUnmount()` | Before unmount | `onBeforeUnmount(() => {})` |
| `onErrorCaptured()` | On error | `onErrorCaptured(() => {})` |
| `onRenderTracked()` | Dependency tracked | `onRenderTracked(() => {})` |
| `onRenderTriggered()` | Dependency triggers | `onRenderTriggered(() => {})` |

## Dependency Injection

| Method | Description | Example |
|--------|-------------|---------|
| `provide()` | Provide values to descendants | `provide('key', value)` |
| `inject()` | Inject from ancestor | `const value = inject('key')` |

## Template Refs

| Method | Description | Example |
|--------|-------------|---------|
| `ref()` | Template ref binding | `<div ref="el">` with `const el = ref()` |
| `functionRef()` | Function-based ref | `functionRef((el) => {})` |

## Component Utilities

| Method | Description | Example |
|--------|-------------|---------|
| `defineProps()` | Define component props | `defineProps<{ title: string }>()` |
| `defineEmits()` | Define component emits | `defineEmits<{ update: [value: number] }>()` |
| `defineExpose()` | Expose component API | `defineExpose({ method })` |
| `defineSlots()` | Define slots | `defineSlots<{ default: {} }>()` |

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