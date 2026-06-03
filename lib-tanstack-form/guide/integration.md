# Integration

## Overview

การเชื่อมต่อ TanStack Form กับ libraries และ UI frameworks อื่นๆ

## Validation Libraries

### Zod Integration (Recommended)

```tsx
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase letter')
})

export default function MyForm() {
  const form = useForm({
    defaultValues: { email: '', password: '' },
    validators: {
      onChange: schema,
      onSubmit: schema
    },
    onSubmit: ({ value }) => console.log(value)
  })

  return (
    <form.Field name="email" children={...} />
    <form.Field name="password" children={...} />
  )
}
```

### Yup Integration

```tsx
import * as yup from 'yup'
import { useForm } from '@tanstack/react-form'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
})

const form = useForm({
  validators: {
    onChange: (value) => {
      try {
        schema.validateSync(value, { abortEarly: false })
        return {}
      } catch (err) {
        // Convert Yup errors to form format
      }
    }
  }
})
```

### Valibot Integration

```tsx
import * as v from 'valibot'
import { useForm } from '@tanstack/react-form'

const schema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8))
})

const form = useForm({
  validators: {
    onChange: (value) => {
      const result = v.safeParse(schema, value)
      if (!result.success) {
        // Convert Valibot errors
      }
      return {}
    }
  }
})
```

## UI Library Integration

### shadcn/ui Integration

```tsx
import { useForm } from '@tanstack/react-form'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const form = useForm({
    defaultValues: { email: '', message: '' },
    onSubmit: ({ value }) => console.log(value)
  })

  return (
    <form.AppForm>
      <form.AppField
        name="email"
        children={(field) => (
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            <Form.Description>We'll never share your email.</Form.Description>
            <Form.Message>{field.state.meta.errors?.[0]}</Form.Message>
          </Form.Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </form.AppForm>
  )
}
```

### Chakra UI Integration

```tsx
import { useForm } from '@tanstack/react-form'
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

export default function MyForm() {
  const form = useForm({
    defaultValues: { name: '' }
  })

  return (
    <form.Field name="name" children={(field) => (
      <FormControl isInvalid={!!field.state.meta.errors?.length}>
        <FormLabel>Name</FormLabel>
        <Input
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
        />
        <FormErrorMessage>
          {field.state.meta.errors?.[0]}
        </FormErrorMessage>
      </FormControl>
    )} />
  )
}
```

### Mantine Integration

```tsx
import { useForm } from '@tanstack/react-form'
import { TextInput } from '@mantine/core'

export default function MyForm() {
  const form = useForm({
    defaultValues: { email: '' }
  })

  return (
    <form.Field name="email" children={(field) => (
      <TextInput
        label="Email"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        error={field.state.meta.errors?.[0]}
      />
    )} />
  )
}
```

## React Framework Integration

### Next.js App Router

```tsx
'use client'

import { useForm } from '@tanstack/react-form'

export default function ContactForm() {
  const form = useForm({
    defaultValues: { message: '' },
    onSubmit: async ({ value }) => {
      // Server action
      await submitMessage(value)
    }
  })

  return (
    <form action={form.handleSubmit}>
      {/* ... */}
    </form>
  )
}

// app/actions.ts
export async function submitMessage(data: FormData) {
  'use server'
  // Handle server-side validation & submission
}
```

### React Server Components

```tsx
// Client component
'use client'

import { useForm } from '@tanstack/react-form'

export default function ClientForm() {
  // Form logic here
}
```

### TanStack Router Integration

```tsx
import { useForm } from '@tanstack/react-form'
import { useNavigate } from '@tanstack/react-router'

export default function SearchForm() {
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: { query: '' },
    onSubmit: ({ value }) => {
      navigate({ to: '/search', search: { q: value.query } })
    }
  })

  return (
    <form onSubmit={(e) => form.handleSubmit(e)}>
      <form.Field name="query" children={...} />
    </form>
  )
}
```

## Data Fetching Integration

### TanStack Query Integration

```tsx
import { useForm } from '@tanstack/react-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  email: z.string().email()
})

export default function UserForm({ userId }) {
  const queryClient = useQueryClient()
  
  const form = useForm({
    defaultValues: async () => {
      // Fetch initial values
      const user = await fetchUser(userId)
      return user
    },
    validators: { onChange: schema },
    onSubmit: async ({ value }) => {
      await updateUser({ id: userId, ...value })
    }
  })

  const mutation = useMutation({
    mutationFn: form.handleSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries(['user', userId])
    }
  })

  return (
    <form onSubmit={mutation.mutate}>
      {/* ... */}
    </form>
  )
}
```

## State Management Integration

### Zustand Integration

```tsx
import { create } from 'zustand'
import { useForm } from '@tanstack/react-form'

const useFormStore = create((set) => ({
  formData: {},
  setFormData: (data) => set({ formData: data })
}))

export default function MyForm() {
  const { formData, setFormData } = useFormStore()
  
  const form = useForm({
    defaultValues: formData,
    onSubmit: ({ value }) => {
      setFormData(value)
    }
  })

  return (
    <form.Field name="name" children={...} />
  )
}
```

## Summary

| Library | Integration | Notes |
|---------|-------------|-------|
| Zod | ✅ Native | First-class support |
| Yup | ✅ Via adapter | Custom validation logic |
| Valibot | ✅ Via adapter | Smaller bundle size |
| shadcn/ui | ✅ Common | Works with Form component |
| Chakra | ✅ Common | FormControl wrapper |
| Mantine | ✅ Common | error prop |
| Next.js | ✅ Full | Server actions + RSC |
| TanStack Query | ✅ Common | Optimistic updates |
| Zustand | ✅ Possible | Global form state |