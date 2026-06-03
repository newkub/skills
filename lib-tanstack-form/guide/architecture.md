# Architecture

## Overview

แนวคิดทางสถาปัตยกรรมของ TanStack Form

## Core Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        useForm()                           │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                    FormApi                             │ │
│  │  ┌─────────┐  ┌──────────┐  ┌────────────────────┐    │ │
│  │  │  Store  │  │ Validator│  │    Subscribers     │    │ │
│  │  │  State  │──│  Pipeline│──│  Reactivity System │    │ │
│  │  └─────────┘  └──────────┘  └────────────────────┘    │ │
│  │       │             │                 │                │ │
│  │       ▼             ▼                 ▼                │ │
│  │  ┌─────────────────────────────────────────────────┐   │ │
│  │  │               Field Registry                    │   │ │
│  │  │  { name: FieldApi, name: FieldApi, ... }       │   │ │
│  │  └─────────────────────────────────────────────────┘   │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## State Management

### Reactive Store

```typescript
class FormStore<TData> {
  state: FormState<TData>
  subscribers: Set<Subscriber>
  
  // Immutable updates
  setState(updater: (state: FormState<TData>) => FormState<TData>) {
    this.state = updater(this.state)
    this.notify()
  }
  
  // Subscribe to changes
  subscribe(subscriber: Subscriber) {
    this.subscribers.add(subscriber)
    return () => this.subscribers.delete(subscriber)
  }
  
  // Notify all subscribers
  notify() {
    this.subscribers.forEach(s => s(this.state))
  }
}
```

### State Shape

```typescript
interface FormState<TData> {
  values: TData                      // Current form values
  fieldMeta: Record<string, FieldMeta> // Per-field metadata
  errors: ValidationError[]          // Form-level errors
  touchedFields: Set<string>         // Touched field names
  dirtyFields: Set<string>           // Modified field names
  
  // Derived state
  isValid: boolean                  // All fields valid
  isDirty: boolean                  // Any field modified
  isTouched: boolean                // Any field touched
  isSubmitted: boolean              // Form submitted
  isSubmitting: boolean             // Submission in progress
}
```

## Validation Pipeline

```
Input Value
     │
     ▼
┌─────────────┐
│ Validator   │ ← Zod/Yup/Custom
│   (Schema)  │
└──────┬──────┘
       │
       ▼
  Valid Result
       │
       ├── Update state.value
       ├── Clear errors
       └── Set isValid: true

  Invalid Result
       │
       ├── Set errors
       └── Set isValid: false
```

### Validation Flow

```typescript
async function validateField(
  form: FormApi,
  name: string,
  value: unknown,
  trigger: ValidationTrigger
) {
  // 1. Get validator for trigger
  const validator = form.getValidator(trigger)
  
  if (!validator) return
  
  // 2. Run validation
  const result = await runValidator(validator, value)
  
  // 3. Update field meta
  form.setFieldMeta(name, {
    errors: result.errors,
    isValid: result.isValid
  })
  
  // 4. Update form state
  form.recalculate()
}
```

## FormApi Architecture

### Class Diagram

```
┌─────────────────────────────────────────────────┐
│                    FormApi<T>                  │
├─────────────────────────────────────────────────┤
│ - store: FormStore<T>                          │
│ - fields: Map<string, FieldApi>                │
│ - validators: Validators                       │
│ - eventHandlers: EventHandlers                 │
├─────────────────────────────────────────────────┤
│ + handleSubmit(): Promise<void>                │
│ + handleReset(): void                          │
│ + getFieldValue(name): DeepValue<T>           │
│ + setFieldValue(name, value): void             │
│ + validate(name?): Promise<void>               │
│ + registerField(name): FieldApi                │
│ + unregisterField(name): void                  │
│ + setError(name, error): void                  │
│ + getAllErrors(): ValidationError[]           │
│ + subscribe(fn): () => void                    │
└─────────────────────────────────────────────────┘
```

### Key Methods

```typescript
class FormApi<TData> {
  // Value access
  getFieldValue<TName extends DeepKeys<TData>>(
    name: TName
  ): DeepValue<TData, TName>
  
  setFieldValue<TName extends DeepKeys<TData>>(
    name: TName,
    value: DeepValue<TData, TName>
  ): void
  
  // Validation
  validate(): Promise<void>
  validateField(name: string): Promise<void>
  
  // Submission
  handleSubmit(e?: Event): Promise<void>
  
  // State
  reset(values?: Partial<TData>): void
  getValue(): TData
}
```

## FieldApi Architecture

### Class Diagram

```
┌─────────────────────────────────────────────────┐
│                 FieldApi<T, N>                 │
├─────────────────────────────────────────────────┤
│ + form: FormApi<T>                             │
│ + name: N                                       │
│ + state: FieldState                            │
│ + meta: FieldMeta                              │
├─────────────────────────────────────────────────┤
│ + handleChange(value): void                   │
│ + handleBlur(): void                          │
│ + handleFocus(): void                         │
│ + focus(): void                               │
│ + validate(): Promise<void>                    │
│ + getValue(): TData[N]                        │
│ + setValue(value): void                        │
│ + setError(error): void                        │
│ + clearError(): void                          │
└─────────────────────────────────────────────────┘
```

### Field State

```typescript
interface FieldState<TValue> {
  value: TValue
  meta: FieldMeta {
    isValid: boolean
    isTouched: boolean
    isPristine: boolean
    isValidating: boolean
    errors: string[]
    warnings: string[]
  }
}
```

## Reactivity System

### Subscriber Pattern

```typescript
class ReactiveStore<T> {
  private state: T
  private subscribers = new Set<(state: T) => void>()
  
  get() {
    return this.state
  }
  
  set(updater: (state: T) => T) {
    this.state = updater(this.state)
    this.notify()
  }
  
  subscribe(fn: (state: T) => void) {
    this.subscribers.add(fn)
    return () => this.subscribers.delete(fn)
  }
  
  private notify() {
    this.subscribers.forEach(fn => fn(this.state))
  }
}
```

### Fine-grained Reactivity

```typescript
// Instead of subscribing to entire form state
form.state  // Re-renders on ANY change

// Subscribe to specific slices
field.state.value      // Only re-render on value change
field.state.meta.isValid  // Only re-render on validity change
```

## Component Architecture

### useForm Hook

```typescript
function useForm<TData>(
  options: FormOptions<TData>
): FormApi<TData> & { Field: FieldComponent<TData> } {
  // 1. Create or reuse store
  const store = useStoreOrCreate(options)
  
  // 2. Create FormApi instance
  const formApi = createFormApi(store, options)
  
  // 3. Return with Field component
  return {
    ...formApi,
    Field: createFieldComponent(formApi)
  }
}
```

### Field Component

```typescript
function Field<TData, TName extends DeepKeys<TData>>({
  name,
  children,
  ...options
}: FieldProps<TData, TName>) {
  // 1. Get or create FieldApi
  const fieldApi = formApi.registerField(name, options)
  
  // 2. Render with field API
  return children(fieldApi)
}
```

## Performance Considerations

### 1. Store Partitioning

```typescript
// Separate stores for different concerns
const valueStore = new Store({ ... })
const metaStore = new Store({ ... })
const errorStore = new Store({ ... })
```

### 2. Selector Functions

```typescript
// Memoized selectors
const selectIsValid = createSelector(
  (state) => state.fieldMeta,
  (meta) => Object.values(meta).every(m => m.isValid)
)

// Usage in component
const isValid = useSelector(form.store, selectIsValid)
```

### 3. Field Isolation

```typescript
// Each field only subscribes to its own state
<form.Field name="email">
  {(field) => (
    // Only this field's value changes trigger re-render
    <input value={field.state.value} />
  )}
</form.Field>
```

## Summary

| Layer | Component | Responsibility |
|-------|-----------|----------------|
| State | FormStore | Immutable state management |
| Validation | ValidatorPipeline | Run validators, format errors |
| Registration | FieldRegistry | Track field instances |
| Reactivity | SubscriberSystem | Notify on state changes |
| UI | FieldComponent | Render fields with API |