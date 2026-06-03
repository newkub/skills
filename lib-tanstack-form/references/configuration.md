# Configuration

## FormOptions Reference

Complete configuration options for `useForm`.

### Required Options

| Option | Type | Description |
|--------|------|-------------|
| `defaultValues` | `TData` | Initial form values |

### Validation Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `validators.onChange` | `Validator \| Schema` | - | Validate on value change |
| `validators.onBlur` | `Validator \| Schema` | - | Validate on field blur |
| `validators.onSubmit` | `Validator \| Schema` | - | Validate on submit |
| `validators.onMount` | `Validator \| Schema` | - | Validate on mount |
| `debounceMs` | `number` | `0` | Debounce validation |
| `validateOnMount` | `boolean` | `false` | Validate on field mount |
| `validateResolver` | `ValidateResolver` | - | Custom validation resolver |

### Callback Options

| Option | Type | Description |
|--------|------|-------------|
| `onSubmit` | `(props) => void \| Promise` | Form submission handler |
| `onError` | `(props) => void` | Error handler |

### Advanced Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `exposeDomRef` | `boolean` | `false` | Expose DOM reference |
| `reValidateMode` | `'onChange' \| 'onBlur' \| 'onSubmit'` | `'onSubmit'` | When to re-validate |

## FieldOptions Reference

Configuration options for `form.Field`.

### Required Options

| Option | Type | Description |
|--------|------|-------------|
| `name` | `string` | Field name/path |
| `children` | `Function` | Render function |

### Optional Options

| Option | Type | Description |
|--------|------|-------------|
| `defaultValue` | `any` | Initial field value |
| `validators.onChange` | `Validator` | Validate on change |
| `validators.onBlur` | `Validator` | Validate on blur |
| `validators.onMount` | `Validator` | Validate on mount |
| `validateOnMount` | `boolean` | Validate when mounted |
| `mode` | `'onChange' \| 'onBlur' \| 'onSubmit'` | Validation trigger |

## Validator Configuration

### Zod Schema

```typescript
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

// Usage
validators: {
  onChange: schema
}
```

### Yup Schema

```typescript
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
})

// Usage
validators: {
  onChange: (value) => {
    try {
      schema.validateSync(value, { abortEarly: false })
      return {}
    } catch (e) {
      return formatYupErrors(e)
    }
  }
}
```

### Valibot Schema

```typescript
import * as v from 'valibot'

const schema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8))
})

// Usage
validators: {
  onChange: (value) => {
    const result = v.safeParse(schema, value)
    if (!result.success) {
      return formatValibotErrors(result.issues)
    }
    return {}
  }
}
```

### Custom Validator

```typescript
validators: {
  onChange: ({ value, field }) => {
    if (value.length < 3) {
      return 'Minimum 3 characters'
    }
    return undefined // Valid
  },
  
  onBlur: ({ value }) => {
    // Validate on blur
    return undefined
  }
}
```

### Async Validator

```typescript
validators: {
  onChange: async ({ value }) => {
    const exists = await checkEmailExists(value)
    if (exists) {
      return 'Email already taken'
    }
    return undefined
  }
}
```

## Form Hook Configuration

### createFormHook

```typescript
const { useAppForm, AppField, AppForm } = createFormHook({
  // Field components to wrap
  fieldComponents: {
    TextField,
    SelectField,
    TextArea,
  },
  
  // Form components to wrap
  formComponents: {
    SubmitButton,
    FormSection,
  },
  
  // React contexts
  fieldContext,
  formContext
})

// Usage
const form = useAppForm({
  defaultValues: { ... }
})
```

### createFormHookContexts

```typescript
const { fieldContext, formContext } = createFormHookContexts()

// Provider setup
function FormProvider({ children }) {
  const [fieldApi] = useState(() => createFieldApi(...))
  return (
    <formContext.Provider value={fieldApi}>
      {children}
    </formContext.Provider>
  )
}
```

## TypeScript Configuration

### Type Inference

```typescript
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  email: z.string().email()
})

// Infer type from schema
type FormValues = z.infer<typeof schema>

// Use with form
const form = useForm<FormValues>({
  defaultValues: {
    name: '',
    email: ''
  }
})
```

### Field Path Types

```typescript
type DeepKeys<T> = // Auto-generate from shape

// Usage
form.Field<FormValues>('name')           // ✓
form.Field<FormValues>('address.city')   // ✓
form.Field<FormValues>('items[0].name')  // ✓
form.Field<FormValues>('invalid.path')   // ✗ Type error
```

## Advanced Configuration

### Debounce Settings

```typescript
// Debounce onChange validation
form.useForm({
  validators: {
    onChange: schema
  },
  debounceMs: 300  // Wait 300ms before validating
})

// Per-field debounce
<form.Field
  name="email"
  validators={{
    onChange: debouncedValidator
  }}
/>
```

### Error Format

```typescript
// Standard error format
interface ValidationError {
  type: 'validate' | 'submit' | 'server'
  message: string
  code?: string
  path?: string[]
}
```

### Multiple Validators

```typescript
validators: {
  onChange: [
    // First validator
    z.string().email(),
    // Second validator
    async ({ value }) => {
      const available = await checkAvailability(value)
      return available ? undefined : 'Not available'
    }
  ]
}
```

## Default Values

### Static Default Values

```typescript
form.useForm({
  defaultValues: {
    name: '',
    email: '',
    age: 0,
    subscribed: false
  }
})
```

### Async Default Values

```typescript
form.useForm({
  defaultValues: async () => {
    const data = await fetchInitialData()
    return data
  }
})
```

### Per-field Default Value

```typescript
<form.Field name="name" defaultValue="">
  {(field) => <input />}
</form.Field>
```

## Schema-based Configuration

### Complete Zod Example

```typescript
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short')
})

const form = useForm({
  defaultValues: {
    name: '',
    email: '',
    message: ''
  },
  validators: {
    onChange: contactSchema,
    onSubmit: contactSchema
  },
  onSubmit: async ({ value }) => {
    await submitContact(value)
  }
})
```

## Configuration Summary

| Category | Options | Common Values |
|----------|---------|---------------|
| Required | `defaultValues` | Object with initial values |
| Validation | `validators` | Zod/Yup/Valibot schema |
| Timing | `debounceMs` | `0`, `300`, `500` |
| Trigger | `reValidateMode` | `'onSubmit'`, `'onChange'` |
| Callbacks | `onSubmit`, `onError` | Handler functions |
| Advanced | `exposeDomRef` | `true` / `false` |