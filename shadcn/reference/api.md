# API Reference

## Overview

API references สำหรับ shadcn/ui components และ utilities

## Utilities

### cn()

Utility function สำหรับ combining class names:

```tsx
import { cn } from "@/lib/utils"

cn("base-class", condition && "conditional-class")
```

**Implementation**:
```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Dependencies**:
- `clsx` - Conditional class names
- `tailwind-merge` - Merge Tailwind classes

## Component APIs

### Button

**Props**:
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}
```

**Example**:
```tsx
<Button variant="default" size="default">
  Click me
</Button>
```

### Input

**Props**:
```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Inherits all HTML input attributes
}
```

**Example**:
```tsx
<Input type="text" placeholder="Enter text" />
```

### Card

**Components**:
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title
- `CardDescription` - Description
- `CardContent` - Content area
- `CardFooter` - Footer section

**Example**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Dialog

**Components**:
- `Dialog` - Main dialog
- `DialogTrigger` - Trigger button
- `DialogContent` - Dialog content
- `DialogHeader` - Header section
- `DialogTitle` - Title
- `DialogDescription` - Description
- `DialogFooter` - Footer section

**Example**:
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Form

**Components**:
- `Form` - Main form
- `FormField` - Form field
- `FormItem` - Field container
- `FormLabel` - Label
- `FormControl` - Control wrapper
- `FormDescription` - Description
- `FormMessage` - Error message

**Example**:
```tsx
<Form {...form}>
  <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter username" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

### Table

**Components**:
- `Table` - Main table
- `TableHeader` - Header section
- `TableBody` - Body section
- `TableFooter` - Footer section
- `TableRow` - Row
- `TableHead` - Header cell
- `TableCell` - Data cell
- `TableCaption` - Caption

**Example**:
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Hooks

### useToast()

Toast notification hook:

```tsx
import { useToast } from "@/hooks/use-toast"

const { toast } = useToast()

toast({
  title: "Success",
  description: "Your changes have been saved.",
})
```

**Options**:
```tsx
interface ToastOptions {
  title?: string
  description?: string
  variant?: "default" | "destructive"
  action?: React.ReactNode
}
```

## Radix UI Primitives

shadcn/ui built on Radix UI primitives:

### Common Primitives

- `@radix-ui/react-dialog` - Dialog component
- `@radix-ui/react-dropdown-menu` - Dropdown menu
- `@radix-ui/react-popover` - Popover
- `@radix-ui/react-select` - Select
- `@radix-ui/react-tabs` - Tabs
- `@radix-ui/react-tooltip` - Tooltip
- `@radix-ui/react-scroll-area` - Scroll area
- `@radix-ui/react-slider` - Slider
- `@radix-ui/react-switch` - Switch
- `@radix-ui/react-avatar` - Avatar

## TypeScript Types

### Component Props

ส่วนใหญ่ของ components extend HTML element props:

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
  size?: string
}
```

### Generic Components

ใช้ generics สำหรับ flexible components:

```tsx
interface ComponentProps<T extends React.ElementType> {
  as?: T
  children?: React.ReactNode
}
```

## References

- [Component Documentation](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
