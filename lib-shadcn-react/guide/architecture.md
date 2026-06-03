# Architecture

## Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Business Components (Your Code)                     │   │
│  │  - UserCard.tsx                                       │   │
│  │  - ProductList.tsx                                    │   │
│  │  - Dashboard.tsx                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│                            │                                │
│                            ▼                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  UI Components (shadcn/ui - Copy to own)             │   │
│  │  - components/ui/button.tsx                          │   │
│  │  - components/ui/card.tsx                           │   │
│  │  - components/ui/dialog.tsx                         │   │
│  └──────────────────────────────────────────────────────┘   │
│                            │                                │
│                            ▼                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Primitives (Radix UI - npm package)                 │   │
│  │  @radix-ui/react-dialog                              │   │
│  │  @radix-ui/react-select                              │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Folder Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── theme-provider.tsx    # Theme configuration
│   └── business/             # Your custom components
│       ├── user-card.tsx
│       └── dashboard.tsx
├── lib/
│   ├── utils.ts              # cn() utility
│   └── api.ts                # API functions
└── hooks/
    └── use-auth.ts           # Custom hooks
```

## Component Pattern

```tsx
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

// 1. Define variants
const buttonVariants = cva('base-classes', {
  variants: {
    variant: { default: 'variant-default', destructive: 'variant-destructive' },
    size: { default: 'size-default', sm: 'size-sm' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

// 2. Define props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 3. Create component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// 4. Export
export { Button, buttonVariants };
```

## Form Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Form Components                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  useForm()                                                   │
│      │                                                       │
│      ▼                                                       │
│  FormSchema (Zod)                                            │
│      │                                                       │
│      ▼                                                       │
│  zodResolver                                                 │
│      │                                                       │
│      ▼                                                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  FormField                                            │   │
│  │    ├── FormLabel                                     │   │
│  │    ├── FormControl                                   │   │
│  │    │     └── Input/Select/Checkbox                   │   │
│  │    ├── FormMessage                                   │   │
│  │    └── FormDescription                               │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Theme Architecture

```tsx
// globals.css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    /* ... */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... */
  }
}
```

## State Management Integration

| Pattern | Library | Use Case |
|---------|---------|----------|
| **Local state** | `useState` | Simple component state |
| **Form state** | `react-hook-form` | Form handling |
| **Global state** | `zustand` / `jotai` | App-wide state |
| **Server state** | `@tanstack/react-query` | Data fetching |