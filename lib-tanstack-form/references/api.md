# API

## FormApi

### Core Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `handleSubmit` | `(e?: Event) => Promise<void>` | Submit form |
| `handleReset` | `() => void` | Reset to default values |
| `getFieldValue` | `<TName>(name: TName) => DeepValue<TData, TName>` | Get field value |
| `setFieldValue` | `<TName>(name: TName, value: any) => void` | Set field value |
| `validate` | `(name?: string) => Promise<void>` | Validate form or field |
| `validateField` | `(name: string) => Promise<void>` | Validate specific field |
| `reset` | `(values?: Partial<TData>) => void` | Reset with new values |
| `setFieldMeta` | `(name: string, meta: Partial<FieldMeta>) => void` | Update field meta |
| `getAllErrors` | `() => ValidationError[]` | Get all validation errors |
| `subscribe` | `(fn: Listener) => Unsubscribe` | Subscribe to state changes |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `state` | `FormState<TData>` | Current form state |
| `Field` | `FieldComponent` | Field component |
| `options` | `FormOptions<TData>` | Configuration options |

## FieldApi

### Core Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `handleChange` | `(value: any) => void` | Update field value |
| `handleBlur` | `() => void` | Mark field as touched |
| `handleFocus` | `() => void` | Focus the field element |
| `focus` | `() => void` | Focus the input |
| `validate` | `() => Promise<void>` | Validate this field |
| `getValue` | `() => TValue` | Get current value |
| `setValue` | `(value: TValue) => void` | Set value without validation |
| `setError` | `(error: string) => void` | Set field error |
| `clearError` | `() => void` | Clear field error |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | `TName` | Field name/path |
| `state` | `FieldState<TValue>` | Current field state |
| `meta` | `FieldMeta` | Field metadata |
| `value` | `TValue` | Current value |
| `errors` | `string[]` | Validation errors |

## FormOptions

### Configuration

```typescript
interface FormOptions<TData> {
  // Required
  defaultValues: TData
  
  // Validation
  validators?: {
    onChange?: Validator | Schema
    onBlur?: Validator | Schema
    onSubmit?: Validator | Schema
    onMount?: Validator | Schema
  }
  
  // Callbacks
  onSubmit?: (props: SubmitProps<TData>) => void | Promise<void>
  onError?: (props: ErrorProps) => void
  
  // Performance
  debounceMs?: number
  validateResolver?: ValidateResolver
  
  // Advanced
  exposeDomRef?: boolean
}
```

### Type Definitions

```typescript
interface SubmitProps<TData> {
  value: TData
  formApi: FormApi<TData>
  done: () => void
}

interface ErrorProps {
  error: unknown
  formApi: FormApi<any>
}
```

## FieldOptions

### Configuration

```typescript
interface FieldOptions<TData, TName extends DeepKeys<TData>> {
  name: TName
  defaultValue?: DeepValue<TData, TName>
  validators?: {
    onChange?: Validator
    onBlur?: Validator
    onMount?: Validator
  }
  validateOnMount?: boolean
}
```

## FieldState

### Properties

```typescript
interface FieldState<TValue> {
  value: TValue                      // Current value
  meta: FieldMeta {
    isValid: boolean                // Passes validation
    isTouched: boolean              // User interacted
    isPristine: boolean             // No changes from default
    isValidating: boolean           // Validation in progress
    errors: string[]                // Validation errors
    warnings: string[]              // Warning messages
  }
}
```

## FormState

### Properties

```typescript
interface FormState<TData> {
  values: TData                      // Current form values
  fieldMeta: Record<string, FieldMeta> // Per-field metadata
  errors: ValidationError[]          // Form-level errors
  
  // Derived states
  isValid: boolean                   // All fields valid
  isDirty: boolean                   // Any field modified
  isTouched: boolean                 // Any field touched
  isSubmitted: boolean               // Form submitted
  isSubmitting: boolean              // Submission in progress
  isLoading: boolean                 // Initial loading
}
```

## ValidationError

### Structure

```typescript
interface ValidationError {
  type: 'validate' | 'submit' | 'server'
  message: string
  code?: string
}
```

## Form Composition API

### createFormHook

```typescript
const { 
  useAppForm,  // Typed useForm hook
  AppField,     // Typed Field component
  AppForm       // Form wrapper component
} = createFormHook({
  fieldComponents: { TextField, SelectField, ... },
  formComponents: { SubmitButton, FormSection, ... },
  fieldContext,
  formContext
})
```

### createFormHookContexts

```typescript
const { fieldContext, formContext } = createFormHookContexts()

// Use in provider
<fieldContext.Provider value={fieldApi}>
  {children}
</fieldContext.Provider>
```

## Event Handlers

### Field Events

| Event | Handler | Description |
|-------|---------|-------------|
| Change | `handleChange(value)` | Update field value |
| Blur | `handleBlur()` | Mark as touched |
| Focus | `handleFocus()` | Focus input |

### Form Events

| Event | Handler | Description |
|-------|---------|-------------|
| Submit | `handleSubmit(e?)` | Trigger submission |
| Reset | `handleReset()` | Reset form |

## Utility Types

### DeepKeys

```typescript
type DeepKeys<T> = 
  T extends object 
    ? { [K in keyof T]: K extends string 
        ? K | `${K}.${DeepKeys<T[K]>}` | `${K}[${number}].${DeepKeys<T[K]>}`
        : never
      }[keyof T]
    : never
```

### DeepValue

```typescript
type DeepValue<T, P> = 
  P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? DeepValue<T[K], R>
      : never
    : P extends `${infer K}[${infer I}]`
      ? K extends keyof T
        ? T[K] extends (infer U)[]
          ? DeepValue<U, I>
          : never
        : never
      : P extends keyof T
        ? T[P]
        : never
```