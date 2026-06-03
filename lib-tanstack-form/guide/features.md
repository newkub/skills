# Features

## Core Features

TanStack Form มาพร้อม features ที่ครบครันสำหรับจัดการ forms ที่ซับซ้อน

### Form Management

| Feature | Description |
|---------|-------------|
| **State Management** | Centralized form state với reactive updates |
| **Field Registration** | Automatic field tracking and registration |
| **Value Access** | Direct access to form values และ individual fields |
| **Reset** | Reset form to default values หรือ specific values |
| **Preset** | Set predefined values without triggering validation |

### Validation

| Feature | Description |
|---------|-------------|
| **Schema Validation** | Built-in support for Zod, Yup, Valibot, custom |
| **Field-level** | Validate individual fields with specific rules |
| **Form-level** | Validate entire form with cross-field logic |
| **Async Validation** | Support async validators (API calls, debouncing) |
| **Validation Triggers** | onChange, onBlur, onSubmit, onMount |
| **Error Handling** | Detailed error messages với field mapping |

### Array Fields

| Feature | Description |
|---------|-------------|
| **Dynamic Arrays** | Add/remove array items dynamically |
| **Array Validation** | Validate array items individually หรือ as whole |
| **Nested Fields** | Support deeply nested object structures |
| **Field Paths** | Dot notation (e.g., `items[0].name`) |

### Form Composition

| Feature | Description |
|---------|-------------|
| **Field Components** | Create reusable field components |
| **Form Components** | Create wrapper components ที่ encapsulate form |
| **Context-based** | Use React context for form instance distribution |
| **Component Hooks** | useForm, useField, useTransform |

### UI Integration

| Feature | Description |
|---------|-------------|
| **Headless** | No UI components - full control over styling |
| **Framework Support** | React, Solid, Vue (ล่าสุด) |
| **Native Inputs** | Works with any HTML input elements |
| **Third-party Components** | Compatible with any UI library |
| **Custom Components** | Support for custom input components |

### Submission

| Feature | Description |
|---------|-------------|
| **handleSubmit** | Built-in submit handler |
| **Prevent Default** | Auto prevent form default behavior |
| **Loading States** | Track submission progress |
| **Error Handling** | Handle submission errors |
| **Success Handling** | onSubmit callback พร้อม values |

### Advanced Features

| Feature | Description |
|---------|-------------|
| **Debouncing** | Built-in debounce for validation |
| **Dirty Tracking** | Track if form values have changed |
| **Touch Tracking** | Track if fields have been touched |
| **Focus Management** | Programmatic focus control |
| **Field Meta** | Access validity, touched, dirty states |
| **Subscription Model** | Fine-grained reactivity |

## Feature Highlights

### Type-safe Field Names

```typescript
// Full type safety for field names
form.Field<typeof form>('user.email') // ✓ Valid
form.Field<typeof form>('userr.email') // ✗ TypeScript error
```

### Validator Integration

```typescript
// Zod
validators: {
  onChange: z.object({
    email: z.string().email()
  })
}

// Yup
validators: {
  onChange: yup.object({
    email: yup.string().email()
  })
}

// Custom
validators: {
  onChange: ({ value }) => 
    value.length > 0 ? undefined : 'Required'
}
```

### Dynamic Fields

```typescript
// Array fields
const field = form.Field('items')

// Add item
field.handleChange([...field.state.value, { name: '' }])

// Remove item
field.handleChange(field.state.value.filter((_, i) => i !== index))
```

### Field Groups

```typescript
// Group related fields
<form.Field name="address">
  {field => (
    <>
      <field.Field name="street" />
      <field.Field name="city" />
      <field.Field name="zip" />
    </>
  )}
</form.Field>
```

## Feature Compatibility

| Feature | React | Solid | Vue |
|---------|-------|-------|-----|
| useForm | ✅ | ✅ | ✅ |
| form.Field | ✅ | ✅ | ✅ |
| Validation | ✅ | ✅ | ✅ |
| Arrays | ✅ | ✅ | ✅ |
| Form Composition | ✅ | ✅ | ✅ |
| DevTools | ✅ | ✅ | ❌ |
| SSR | ✅ | ❌ | ❌ |

## Planned Features

- Native Vue support (in progress)
- SolidJS devtools
- Svelte adapter