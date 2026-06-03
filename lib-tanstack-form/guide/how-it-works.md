# How It Works

## Overview

TanStack Form ใช้ reactive state management สำหรับ form state โดยมี FormApi เป็นตัวหลักในการจัดการ และ FieldApi สำหรับ field-level operations

## Core Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      useForm()                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                     FormApi                          │   │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────────┐   │   │
│  │  │  Store    │  │ Validator │  │  Subscriber   │   │   │
│  │  │ (state)   │──│  Pipeline │──│  (reactive)   │   │   │
│  │  └───────────┘  └───────────┘  └───────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   form.Field          form.Field         form.Field
        │                  │                  │
        ▼                  ▼                  ▼
   ┌───────────┐      ┌───────────┐      ┌───────────┐
   │ FieldApi  │      │ FieldApi  │      │ FieldApi  │
   └─────┬─────┘      └─────┬─────┘      └─────┬─────┘
         │                  │                  │
         ▼                  ▼                  ▼
   ┌──────────────────────────────────────────────┐
   │              DOM / Native Inputs              │
   └──────────────────────────────────────────────┘
```

## State Flow

### 1. Form Creation

```
useForm({ defaultValues, validators, onSubmit })
         │
         ▼
   Create FormApi instance
         │
         ▼
   Initialize form store with default values
         │
         ▼
   Return form object with Field component
```

### 2. Field Registration

```
form.Field(name="email")
         │
         ▼
   Create FieldApi for "email"
         │
         ▼
   Subscribe field to form store
         │
         ▼
   Register in form's field map
```

### 3. Value Updates

```
User types in input
         │
         ▼
   field.handleChange(value)
         │
         ▼
   Update field value in store
         │
         ▼
   FormApi validates (if validator exists)
         │
         ▼
   Notify subscribers (re-render)
         │
         ▼
   UI updates with new value
```

### 4. Validation Pipeline

```
┌──────────────┐    onChange    ┌──────────────┐
│   Trigger    │ ─────────────> │  Validator   │
│ (handleChange)│               │  (zod/yup)   │
└──────────────┘                └──────┬───────┘
                                      │
                            ┌─────────┴─────────┐
                            │                   │
                            ▼                   ▼
                    ┌────────────┐      ┌────────────┐
                    │   Valid    │      │   Invalid  │
                    │   return   │      │   return   │
                    │  undefined │      │   errors   │
                    └────────────┘      └──────┬─────┘
                                              │
                                              ▼
                                      ┌────────────┐
                                      │  Update    │
                                      │  fieldMeta │
                                      │  .errors   │
                                      └────────────┘
```

## Reactive System

### Subscriber Pattern

```
FormApi (Subject)
    │
    ├── subscribe(field) → Add to subscriber list
    │
    ├── unsubscribe(field) → Remove from subscriber list
    │
    └── notify() → Call all subscribers with new state
```

### State Updates

```
┌────────────────────────────────────────┐
│           Form State Update            │
│                                        │
│  1. Get current state                 │
│  2. Apply change (value/error/meta)    │
│  3. Create new state object            │
│  4. Notify all subscribers             │
│  5. Subscribers re-render              │
└────────────────────────────────────────┘
```

## Validation Triggers

| Trigger | Description | Timing |
|---------|-------------|--------|
| `onChange` | Validate when value changes | Real-time |
| `onBlur` | Validate when field loses focus | After touch |
| `onSubmit` | Validate all fields on submit | On submission |
| `onMount` | Validate when field mounts | Initial |

## FormApi Internals

```typescript
class FormApi<TData> {
  store: FormStore<TData>     // Reactive state store
  validators: Validators       // Validator functions
  fields: Map<string, FieldApi> // Field registry
  
  // Core methods
  handleSubmit(): Promise<void>
  validate(field?: string): Promise<void>
  setFieldValue(name: string, value: any): void
  getFieldValue(name: string): any
  reset(values?: Partial<TData>): void
}
```

## FieldApi Internals

```typescript
class FieldApi<TData, TName extends DeepKeys<TData>> {
  form: FormApi<TData>         // Parent form
  name: TName                  // Field path (e.g., "user.email")
  store: Signal<FieldState>     // Local state
  
  // Handlers
  handleChange(value: any): void
  handleBlur(): void
  handleFocus(): void
  
  // State accessors
  get state(): FieldState<TData[TName]>
  get value(): TData[TName]
  get meta(): FieldMeta
}
```

## Performance Optimizations

### 1. Fine-grained Updates

```
Only re-render when:
  • Field value changes (not entire form)
  • Field errors change
  • Field meta changes (touch/valid)
```

### 2. Uncontrolled Inputs

```
Use native uncontrolled inputs:
  • Value updates bypass React state
  • Direct DOM manipulation
  • Reduced re-renders
```

### 3. Selector Functions

```typescript
// Only subscribe to specific parts
field.state.meta.isValid    // Re-render only on validity change
field.state.value          // Re-render only on value change
```