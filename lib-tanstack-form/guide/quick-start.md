# Quick Start

## 5-Minute Guide

สร้าง form แรกด้วย TanStack Form ใน 5 นาที

## Step 1: Install

```bash
npm install @tanstack/react-form zod
```

## Step 2: Basic Form

```tsx
import { useForm } from '@tanstack/react-form'

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: ''
    },
    onSubmit: ({ value }) => {
      console.log('Form submitted:', value)
    }
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <h1>Contact Us</h1>
      
      <form.Field
        name="name"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Name</label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            {field.state.meta.errors && (
              <em>{field.state.meta.errors[0]}</em>
            )}
          </div>
        )}
      />

      <form.Field
        name="email"
        children={(field) => (
          <div>
            <label htmlFor={field.name}>Email</label>
            <input
              id={field.name}
              name={field.name}
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            {field.state.meta.errors && (
              <em>{field.state.meta.errors[0]}</em>
            )}
          </div>
        )}
      />

      <button type="submit">Submit</button>
    </form>
  )
}
```

## Step 3: Add Validation

```tsx
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address')
})

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: ''
    },
    validators: {
      onChange: schema
    },
    onSubmit: ({ value }) => {
      console.log('Form submitted:', value)
    }
  })

  return (
    // ... same as above
  )
}
```

## Step 4: Form Composition

สร้าง reusable form components

```tsx
// components/TextField.tsx
import { type FieldComponent } from '@tanstack/react-form'

interface TextFieldProps {
  label: string
  name: string
  type?: string
}

export const TextField: FieldComponent<HTMLInputElement, TextFieldProps> = (
  props,
  field
) => {
  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <input
        id={field.name}
        name={field.name}
        type={props.type || 'text'}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      {field.state.meta.errors?.map((error) => (
        <em key={error}>{error}</em>
      ))}
    </div>
  )
}
```

## Step 5: Use Composed Form

```tsx
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { TextField } from './components/TextField'

const { fieldContext, formContext } = createFormHookContexts()

const { useAppForm, AppField, AppForm } = createFormHook({
  fieldComponents: { TextField },
  formComponents: { SubmitButton },
  fieldContext,
  formContext
})

export default function MyForm() {
  const form = useAppForm({
    defaultValues: { name: '', email: '' },
    validators: { onChange: schema },
    onSubmit: ({ value }) => console.log(value)
  })

  return (
    <form.AppForm>
      <form.AppField
        name="name"
        children={(field) => <field.TextField label="Name" />}
      />
      <form.AppField
        name="email"
        children={(field) => <field.TextField label="Email" type="email" />}
      />
      <form.SubmitButton>Submit</form.SubmitButton>
    </form.AppForm>
  )
}
```

## Common Patterns

### Required Fields

```tsx
<form.Field
  name="email"
  validators={{
    onChange: ({ value }) => 
      value ? undefined : 'This field is required'
  }}
>
```

### Email Validation

```tsx
validators: {
  onChange: z.string().email('Please enter a valid email')
}
```

### Password Validation

```tsx
validators: {
  onChange: z.object({
    password: z.string()
      .min(8, 'At least 8 characters')
      .regex(/[A-Z]/, 'Must contain uppercase')
      .regex(/[0-9]/, 'Must contain number')
  })
}
```

### Confirm Password

```tsx
validators: {
  onChange: z.object({
    password: z.string().min(8),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  })
}
```

## Next Steps

- [Key Concept](key-concept.md) - เรียนรู้ core concepts
- [Features](features.md) - ดู features ทั้งหมด
- [Best Practices](best-practices.md) - patterns ที่แนะนำ
- [Integration](integration.md) - เชื่อมต่อกับ UI libraries