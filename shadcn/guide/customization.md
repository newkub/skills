# Customization Guide

## Overview

คู่มือการปรับแต่ง shadcn/ui components ตามความต้องการของโปรเจกต์

## Component Customization

### Copy and Modify

เนื่องจาก components ถูก copy ไปยัง codebase คุณสามารถแก้ไขได้โดยตรง:

```tsx
// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Add custom variant
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // Add custom size
        xl: "h-14 rounded-lg px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### Create Variants

ใช้ `class-variance-authority` (cva) สำหรับ component variants:

```tsx
const buttonVariants = cva(
  "base classes",
  {
    variants: {
      variant: {
        default: "default classes",
        custom: "custom classes",
      },
      size: {
        sm: "small classes",
        md: "medium classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)
```

## Styling Customization

### Add Custom Classes

```tsx
<Button className="custom-shadow custom-animation">
  Custom Button
</Button>
```

### Override Styles

```css
/* globals.css */
@layer components {
  .custom-button {
    @apply bg-gradient-to-r from-purple-500 to-pink-500;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
}
```

## Component Composition

### Create Compound Components

```tsx
// components/ui/my-card.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function MyCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="border-2 border-primary">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
```

### Extend Existing Components

```tsx
// components/ui/large-button.tsx
import { Button } from "@/components/ui/button"

export function LargeButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button size="lg" className="text-lg font-bold" {...props} />
  )
}
```

## Icon Customization

### Change Icon Library

ตั้งค่าใน `components.json`:

```json
{
  "iconLibrary": "lucide"
}
```

### Use Custom Icons

```tsx
import { Button } from "@/components/ui/button"
import { CustomIcon } from "@/components/custom-icon"

<Button>
  <CustomIcon className="mr-2 h-4 w-4" />
  Custom Icon
</Button>
```

## Animation Customization

### Add Animations

```css
/* globals.css */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
```

```tsx
<Button className="animate-fade-in">
  Animated Button
</Button>
```

## Responsive Customization

### Responsive Variants

```tsx
const buttonVariants = cva(
  "base classes",
  {
    variants: {
      responsive: {
        mobile: "text-sm px-3 py-1",
        desktop: "text-base px-4 py-2",
      },
    },
  }
)
```

### Tailwind Responsive Classes

```tsx
<Button className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3">
  Responsive Button
</Button>
```

## Accessibility Customization

### Custom ARIA Labels

```tsx
<Button
  aria-label="Close dialog"
  onClick={onClose}
>
  <X className="h-4 w-4" />
</Button>
```

### Focus Styles

```css
/* globals.css */
@layer base {
  *:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
}
```

## Best Practices

1. **Don't Modify Originals**: สร้าง custom components แทนการแก้ไข originals
2. **Use Composition**: ใช้ composition patterns สำหรับ complex UI
3. **Maintain Consistency**: ใช้ consistent naming และ structure
4. **Document Changes**: บันทึก customizations ใน comments
5. **Test Thoroughly**: ทดสอบ accessibility และ responsiveness

## Common Patterns

### Form Input with Label

```tsx
export function FormInput({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <Label htmlFor={props.id}>{label}</Label>
      <Input {...props} />
    </div>
  )
}
```

### Card with Actions

```tsx
export function ActionCard({ title, description, action }: {
  title: string
  description: string
  action: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {action}
      </CardContent>
    </Card>
  )
}
```

## References

- [Component Customization](https://ui.shadcn.com/docs/components)
- [CVA Documentation](https://cva.style/docs)
- [Tailwind CSS](https://tailwindcss.com)
