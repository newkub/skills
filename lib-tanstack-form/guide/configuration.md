# Configuration

## FormOptions

ตั้งค่าหลักสำหรับ form instance

```typescript
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const form = useForm({
  // Default values for form fields
  defaultValues: {
    username: '',
    email: '',
    age: 0
  },
  
  // Validation schema
  validators: {
    onChange: z.object({
      username: z.string().min(3),
      email: z.string().email(),
      age: z.number().min(18)
    }),
    onBlur: z.object({...}),
    onSubmit: z.object({...})
  },
  
  // Submit handler
  onSubmit: ({ value, formApi }) => {
    // Handle form submission
    console.log(value)
  },
  
  // Error handler
  onError: ({ error }) => {
    console.error(error)
  }
})
```

## FieldOptions

ตั้งค่าสำหรับ individual fields

```typescript
<form.Field
  name="email"
  validators={{
    onChange: ({ value }) => 
      !value.includes('@') ? 'Invalid email' : undefined,
    onBlur: ({ value }) => 
      value.length < 5 ? 'Too short' : undefined
  }}
  defaultValue=""
  children={(field) => (
    <>
      <input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      {field.state.meta.errors.map(e => <span>{e}</span>)}
    </>
  )}
/>
```

## Validator Types

### Zod Schema

```typescript
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

form.useForm({
  validators: {
    onChange: schema,
    onSubmit: schema
  }
})
```

### Yup Schema

```typescript
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
})

form.useForm({
  validators: {
    onChange: schema
  }
})
```

### Custom Validator

```typescript
form.useForm({
  validators: {
    onChange: ({ value }) => {
      if (value.email.length === 0) {
        return { email: 'Required' }
      }
      return {}
    }
  }
})
```

## Validation Triggers

| Trigger | Description | Use Case |
|---------|-------------|----------|
| `onChange` | Validate when value changes | Real-time feedback |
| `onBlur` | Validate when field loses focus | After user finishes typing |
| `onSubmit` | Validate all fields on submit | Final validation |
| `onMount` | Validate when field mounts | Initial check |

```typescript
// Multiple triggers
validators: {
  onChange: z.string().email(),      // Real-time
  onBlur: z.string().min(5),         // After touch
  onSubmit: z.object({...})          // Final check
}
```

## FormApi Options

```typescript
interface FormOptions<TData> {
  defaultValues: TData
  validators?: {
    onChange?: Validator | Schema
    onBlur?: Validator | Schema
    onSubmit?: Validator | Schema
    onMount?: Validator | Schema
  }
  onSubmit?: (props: SubmitProps<TData>) => void | Promise<void>
  onError?: (props: ErrorProps) => void
  validateResolver?: ValidateResolver
  debounceMs?: number
  exposeDomRef?: boolean
}
```

## FieldApi Options

```typescript
interface FieldOptions<TData, TName> {
  name: TName
  defaultValue?: DeepValue<TData, TName>
  validators?: {
    onChange?: Validator
    onBlur?: Validator
    onMount?: Validator
  }
  validateAsync?: boolean
  validateOnMount?: boolean
}
```

## Debounce Configuration

```typescript
form.useForm({
  validators: {
    onChange: schema
  },
  // Debounce validation by 300ms
  debounceMs: 300
})
```

## Default Value Strategy

| Strategy | Behavior |
|----------|----------|
| `defaultValues` | Initial values, triggers validation |
| `defaultValue` (field) | Per-field initial value |

```typescript
// Form-level default values
form.useForm({
  defaultValues: { email: '', password: '' }
})

// Field-level default value
<form.Field name="email" defaultValue="">
```

## Error Configuration

```typescript
// Form-level error handling
form.useForm({
  onError: ({ error }) => {
    // Handle submission errors
    console.error(error)
  }
})

// Field-level error access
field.state.meta.errors  // Array of error strings
field.state.meta.warning  // Array of warning strings
```