# Best Practices

## Component Usage

| Practice | Description |
|----------|-------------|
| **Use variants over custom styles** | ใช้ built-in variants แทน custom CSS |
| **Keep components in ui/ folder** | วาง shadcn components ใน components/ui/ |
| **Use cn() utility** | ใช้ cn() สำหรับ merge class names |
| **Use TypeScript** | Components ถูกออกแบบมาสำหรับ TypeScript |

## Class Variance Authority (cva)

```tsx
// ✅ Good: Use cva for variants
const buttonVariants = cva('base-classes', {
  variants: {
    variant: { default: 'variant-default', destructive: 'variant-destructive' },
    size: { default: 'size-default', sm: 'size-sm' },
  },
});

// ❌ Bad: Inline styles
<button className="bg-blue-500 hover:bg-blue-700">Button</button>
```

## cn() Utility

```tsx
import { cn } from '@/lib/utils';

// ✅ Good: Use cn() to merge classes
<button className={cn(
  'base-classes',
  isActive && 'active-classes',
  className
)} />

// ❌ Bad: String concatenation
<button className={`base-classes ${isActive ? 'active-classes' : ''}`} />
```

## Form Validation

```tsx
// ✅ Good: Use Zod with react-hook-form
const formSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Too short'),
});

const form = useForm({
  resolver: zodResolver(formSchema),
});

// ❌ Bad: Manual validation
const [errors, setErrors] = useState({});
const validate = () => { /* manual logic */ };
```

## Dark Mode

| Approach | Use Case |
|----------|----------|
| **Class-based** | Default, uses `dark:` class |
| **Media query** | `prefers-color-scheme` |
| **next-themes** | Next.js + App Router |

```tsx
// components/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
```

## Performance

| Practice | Description |
|----------|-------------|
| **Use `use client`** | Mark client components appropriately |
| **Lazy load dialogs** | Use dynamic imports for modals |
| **Optimize images** | Use next/image or proper sizing |

```tsx
// Lazy load Dialog
const DialogDemo = dynamic(() => import('./dialog-demo'), {
  ssr: false,
  loading: () => <Skeleton className="h-96" />
});
```

## Accessibility

| Practice | Description |
|----------|-------------|
| **Use Radix primitives** | Already accessible by default |
| **Add aria labels** | When icons are used alone |
| **Keyboard navigation** | Test with Tab and Enter |

```tsx
// ✅ Good: Icon button with aria-label
<Button variant="ghost" size="icon" aria-label="Close">
  <X className="h-4 w-4" />
</Button>

// ❌ Bad: Icon without label
<Button variant="ghost" size="icon">
  <X className="h-4 w-4" />
</Button>
```

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Styles not applying | ตรวจสอบ globals.css import |
| Dark mode broken | ตรวจสอบ dark mode config |
| TypeScript errors | Run `npx shadcn@latest upgrade` |
| Missing cn() | ตรวจสอบ lib/utils.ts มีอยู่จริง |