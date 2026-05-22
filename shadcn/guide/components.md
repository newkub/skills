# Using Components

## Overview

คู่มือการใช้งาน shadcn/ui components ครอบคลุมการใช้งาน, customization, และ best practices

## Available Components

shadcn/ui มี components มากกว่า 50 ชนิด แบ่งเป็น categories:

### Layout
- Sheet
- Dialog
- Drawer
- Popover
- Card
- Tabs
- Separator
- Scroll Area

### Data Display
- Table
- Avatar
- Badge
- Calendar
- Chart
- Skeleton
- Timeline

### Forms
- Button
- Input
- Label
- Select
- Checkbox
- Radio Group
- Switch
- Slider
- Textarea
- Form

### Feedback
- Alert
- Toast
- Progress
- Spinner
- Alert Dialog

### Navigation
- Breadcrumb
- Command
- Context Menu
- Dropdown Menu
- Menubar
- Navigation Menu
- Pagination
- Sidebar
- Tabs

### Other
- Accordion
- Collapsible
- Hover Card
- Tooltip

## Basic Usage

### Import Component

```tsx
import { Button } from "@/components/ui/button"
```

### Use Component

```tsx
export function MyComponent() {
  return (
    <Button variant="default" size="default">
      Click me
    </Button>
  )
}
```

## Component Variants

ส่วนใหญ่ของ components มี variants และ sizes:

```tsx
<Button variant="default" size="default">
  Default Button
</Button>

<Button variant="destructive" size="sm">
  Small Destructive
</Button>

<Button variant="outline" size="lg">
  Large Outline
</Button>

<Button variant="ghost" size="icon">
  <Icon name="chevron-left" />
</Button>
```

## Component Composition

หลาย components สามารถ compose กันได้:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

## Form Components

ใช้ Form components กับ validation libraries:

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
})

export function UserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## Data Display Components

### Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Avatar

```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Navigation Components

### Breadcrumb

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Feedback Components

### Toast

```tsx
import { useToast } from "@/hooks/use-toast"

function MyComponent() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your changes have been saved.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

## Accessibility

Components ทั้งหมด built on Radix UI primitives ซึ่ง:
- รองรับ keyboard navigation
- มี ARIA labels และ roles
- รองรับ screen readers
- รองรับ focus management

## Customization

### Styling

ใช้ Tailwind classes หรือ CSS variables:

```tsx
<Button className="custom-class">
  Custom Button
</Button>
```

### Extend Components

Copy component และ modify:

```tsx
// components/ui/my-button.tsx
import * as React from "react"
import { Button } from "@/components/ui/button"

export function MyButton({ ...props }) {
  return (
    <Button
      variant="default"
      className="rounded-full shadow-lg"
      {...props}
    />
  )
}
```

## Best Practices

1. **Use Variants**: ใช้ built-in variants ก่อน custom styling
2. **Compose Wisely**: ใช้ composition patterns สำหรับ complex UI
3. **Maintain Consistency**: ใช้ consistent naming และ structure
4. **Test Accessibility**: ทดสอบ keyboard navigation และ screen readers
5. **Keep Updated**: ใช้ `shadcn diff` เพื่อ check updates

## References

- [Component Documentation](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS](https://tailwindcss.com)
