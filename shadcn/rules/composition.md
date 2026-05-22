# Composition Rules

## Why

การ compose components อย่างถูกต้องช่วยให้:
- สร้าง reusable UI patterns
- ลด code duplication
- รักษา consistency
- ทำให้ maintenance ง่ายขึ้น

## Anti-patterns

### ❌ ใช้ div stacks มากเกินไป

```tsx
<div>
  <div>
    <div>
      <Button>Action</Button>
    </div>
  </div>
</div>
```

### ❌ ไม่ใช้ semantic components

```tsx
<div className="card">
  <div className="card-header">
    <div className="card-title">Title</div>
  </div>
</div>
```

### ❌ ซ้อน components ซับซ้อน

```tsx
<Dialog>
  <DialogContent>
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
    </Card>
  </CardContent>
</Dialog>
```

## Best Practices

### ✅ ใช้ semantic composition

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### ✅ สร้าง reusable patterns

```tsx
// components/ui/action-card.tsx
export function ActionCard({ title, description, action, children }: {
  title: string
  description?: string
  action: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
      <CardFooter>{action}</CardFooter>
    </Card>
  )
}
```

### ✅ ใช้ asChild pattern

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    {/* Content */}
  </DialogContent>
</Dialog>
```

### ✅ สร้าง layout components

```tsx
// components/ui/form-layout.tsx
export function FormLayout({ title, description, children }: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
```

## Rules

1. **ใช้ semantic components**: ใช้ components ที่มี semantic meaning
2. **Create reusable patterns**: สร้าง reusable patterns สำหรับ common UI
3. **Avoid deep nesting**: หลีกเลี่ยงการซ้อน components ลึกเกินไป
4. **Use asChild pattern**: ใช้ asChild pattern เมื่อเหมาะสม
5. **Maintain consistency**: ใช้ consistent composition patterns
6. **Document patterns**: บันทึก composition patterns ที่สร้างขึ้น

## Impact

ถ้าไม่ทำตามกฎ:
- Difficult to maintain complex UI
- Inconsistent patterns ทั่วทั้ง application
- Hard to understand component structure
- Code duplication

## References

- [Component Documentation](https://ui.shadcn.com/docs/components)
- [Composition Patterns](https://ui.shadcn.com/docs/blocks)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
