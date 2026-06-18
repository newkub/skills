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
| `toValue()` | Unwrap MaybeRefOrGetter (Vue 3.5+) | `const value = toValue(maybeRef)` |

## Computed Values

| Method | Description | Example |
|--------|-------------|---------|
| `computed()` | Create computed value | `const doubled = computed(() => count.value * 2)` |
| `deferredComputed()` | Deferred computation (Vue 3.5+) | `const expensive = deferredComputed(() => heavyCalc())` |

## Watchers

| Method | Description | Example |
|--------|-------------|---------|
| `watch()` | Watch specific source | `watch(count, (new, old) => {})` |
| `watchEffect()` | Immediate watcher | `watchEffect(() => console.log(count.value))` |
| `watchPostEffect()` | Post-render watcher | `watchEffect(() => {}, { flush: 'post' })` |
| `watchSyncEffect()` | Synchronous watcher (Vue 3.5+) | `watchSyncEffect(() => console.log('sync'))` |

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

## Effect Control (Vue 3.5+)

| Method | Description | Example |
|--------|-------------|---------|
| `onEffectCleanup()` | Cleanup logic in effects | `onEffectCleanup(() => cleanup())` |
| `pause()` | Pause effect | `pause(effect)` |
| `resume()` | Resume effect | `resume(effect)` |

## Dependency Injection

| Method | Description | Example |
|--------|-------------|---------|
| `provide()` | Provide values to descendants | `provide('key', value)` |
| `inject()` | Inject from ancestor | `const value = inject('key')` |

## Template Refs

| Method | Description | Example |
|--------|-------------|---------|
| `ref()` | Template ref binding | `<div ref="el">` with `const el = ref()` |
| `useTemplateRef()` | Template ref helper (Vue 3.5+) | `const el = useTemplateRef('el')` |
| `functionRef()` | Function-based ref | `functionRef((el) => {})` |

## Component Utilities

| Method | Description | Example |
|--------|-------------|---------|
| `defineProps()` | Define component props | `defineProps<{ title: string }>()` |
| `defineEmits()` | Define component emits | `defineEmits<{ update: [value: number] }>()` |
| `defineExpose()` | Expose component API | `defineExpose({ method })` |
| `defineSlots()` | Define slots (Vue 3.3+) | `defineSlots<{ default: {} }>()` |
| `defineModel()` | Define v-model (Vue 3.4+) | `const model = defineModel<string>()` |
| `defineOptions()` | Define options (Vue 3.3+) | `defineOptions({ name: 'MyComp' })` |

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

// Reactive Props Destructure (Vue 3.5+)
const { title, count } = defineProps<{ title: string; count: number }>()
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

## Effect Cleanup (Vue 3.5+)

```typescript
import { onEffectCleanup } from 'vue';

watchEffect((onCleanup) => {
  const timer = setInterval(() => {
    console.log('tick');
  }, 1000);

  onCleanup(() => {
    clearInterval(timer);
  });
});

// Or use onEffectCleanup directly
import { onEffectCleanup } from 'vue';

function useEventListener(target: EventTarget, event: string, handler: Function) {
  target.addEventListener(event, handler);

  onEffectCleanup(() => {
    target.removeEventListener(event, handler);
  });
}
```

## defineModel (Vue 3.4+)

```vue
<script setup lang="ts">
// Basic usage
const modelValue = defineModel<string>()

// With modifiers
const count = defineModel<number>('count', { default: 0 })

// With custom getter/setter
const upperModel = defineModel<string>({
  get: (value) => value?.toUpperCase(),
  set: (value) => value?.toLowerCase()
})
</script>

<template>
  <input v-model="modelValue" />
  <input v-model.number="count" type="number" />
</template>
```

## Vapor Mode (Vue 3.6+)

```vue
<script setup lang="ts" vapor>
const count = ref(0)
</script>
```

## Watch Deep Option (Vue 3.5+)

```typescript
watch(
  state,
  (newValue) => {
    // ...
  },
  { deep: 2 } // Watch 2 levels deep
)
```