# Best Practices

## Overview

แนวทางปฏิบัติที่ดีที่สุดสำหรับ TanStack Form

## Form Structure

### 1. Use Consistent Field Naming

```typescript
// Good: Consistent naming
const form = useForm({
  defaultValues: {
    user: {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
})

// Bad: Inconsistent naming
const form = useForm({
  defaultValues: {
    firstName: '',
    last: '',
    emailAddress: ''
  }
})
```

### 2. Group Related Fields

```tsx
<form.Field name="address">
  {() => (
    <fieldset>
      <legend>Address</legend>
      <form.Field name="street" children={...} />
      <form.Field name="city" children={...} />
      <form.Field name="zip" children={...} />
    </fieldset>
  )}
</form.Field>
```

### 3. Separate Form Logic

```tsx
// Good: Form logic in separate file
import { useLoginForm } from './hooks/useLoginForm'

function LoginPage() {
  const form = useLoginForm()
  return <LoginFormUI form={form} />
}

// Bad: All logic in component
function LoginPage() {
  const form = useForm({...})
  // ... hundreds of lines
}
```

## Validation Strategy

### 1. Validate on Change for Real-time Feedback

```typescript
const form = useForm({
  validators: {
    onChange: schema,      // Real-time validation
    onBlur: schema,        // After touch
    onSubmit: schema       // Final check
  }
})
```

### 2. Use Schema Validation

```typescript
// Good: Schema-based
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

// Bad: Manual validation
const validateEmail = (value) => {
  if (!value.includes('@')) return 'Invalid email'
  if (!value.includes('.')) return 'Invalid email'
  return undefined
}
```

### 3. Debounce Expensive Validations

```typescript
const form = useForm({
  validators: {
    onChange: asyncCheckEmail // Expensive API call
  },
  debounceMs: 300  // Prevent excessive calls
})
```

## Performance

### 1. Use Selector Functions

```tsx
// Good: Subscribe only to what changes
{field.state.meta.isValid && <SuccessIcon />}

// Bad: Subscribe to entire state
{field.state.isValid && <SuccessIcon />} // Triggers re-render on any change
```

### 2. Memoize Field Components

```tsx
import { memo } from 'react'

const EmailField = memo(function EmailField() {
  // ...
})

// Use with field
<EmailField />
```

### 3. Avoid Unnecessary Re-renders

```tsx
// Good: Inline handler defined once
<form.Field name="email" children={(field) => (
  <input
    onChange={(e) => field.handleChange(e.target.value)}
  />
)} />

// Bad: Handler recreated on each render
<form.Field name="email" children={(field) => (
  <input
    onChange={(e) => {
      // This creates new function each render
      field.handleChange(e.target.value)
    }}
  />
)} />
```

## Error Handling

### 1. Display Errors Clearly

```tsx
<form.Field name="email" children={(field) => (
  <div>
    <input
      className={field.state.meta.errors?.length ? 'error' : ''}
    />
    {field.state.meta.errors?.map((error) => (
      <span key={error} className="error-message">
        {error}
      </span>
    ))}
  </div>
)} />
```

### 2. Handle Submission Errors

```typescript
const form = useForm({
  onSubmit: async ({ value }) => {
    try {
      await api.submitForm(value)
    } catch (error) {
      // Set form-level error
      form.setError('root', {
        type: 'server',
        message: 'Submission failed. Please try again.'
      })
    }
  }
})
```

### 3. Preserve User Input

```typescript
// Good: Reset with confirmation
const handleReset = () => {
  if (confirm('Clear all fields?')) {
    form.reset()
  }
}

// Bad: Silent reset
form.reset()
```

## TypeScript Patterns

### 1. Type Default Values

```typescript
interface FormValues {
  name: string
  age: number
  emails: string[]
}

const form = useForm<FormValues>({
  defaultValues: {
    name: '',
    age: 0,
    emails: []
  }
})
```

### 2. Type-safe Field Paths

```typescript
// Use DeepKeys for type safety
type Path = DeepKeys<FormValues>
form.Field<FormValues>('emails[0]') // ✓ Type-safe
```

### 3. Inferred Types

```typescript
const schema = z.object({
  name: z.string(),
  age: z.number()
})

type FormValues = z.infer<typeof schema>

const form = useForm<FormValues>({
  defaultValues: { name: '', age: 0 }
})
```

## Accessibility

### 1. Associate Labels

```tsx
<form.Field name="email" children={(field) => (
  <label htmlFor={field.name}>
    Email Address
    <input id={field.name} />
  </label>
)} />
```

### 2. Announce Errors

```tsx
<div role="alert" aria-live="polite">
  {field.state.meta.errors?.map(e => (
    <span>{e}</span>
  ))}
</div>
```

### 3. Focus Management

```typescript
// Focus first error field on submit
form.handleSubmit({
  onError: () => {
    const firstError = form.getFirstInvalidField()
    firstError?.focus()
  }
})
```

## Testing

### 1. Test Validation

```typescript
test('validates email format', async () => {
  const form = useForm({
    validators: { onChange: schema }
  })
  
  form.Field('email').handleChange('invalid')
  
  await waitFor(() => {
    expect(form.Field('email').state.meta.errors).toContain('Invalid email')
  })
})
```

### 2. Test Submission

```typescript
test('submits form values', async () => {
  const onSubmit = jest.fn()
  const form = useForm({ onSubmit })
  
  // Fill form
  form.Field('name').handleChange('John')
  
  // Submit
  await form.handleSubmit()
  
  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'John' })
  )
})
```

## Summary Checklist

- [ ] Use consistent field naming conventions
- [ ] Group related fields with field groups
- [ ] Separate form logic into custom hooks
- [ ] Validate on change for real-time feedback
- [ ] Debounce expensive validations
- [ ] Use selector functions for performance
- [ ] Display errors clearly with proper styling
- [ ] Handle submission errors gracefully
- [ ] Type form values with TypeScript
- [ ] Ensure accessibility (labels, ARIA)
- [ ] Write tests for form logic