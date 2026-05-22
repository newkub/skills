# Component Usage Rules

## Why

การใช้ shadcn/ui components อย่างถูกต้องช่วยให้:
- รักษา consistency ทั่วทั้ง application
- ลด code duplication
- รักษา accessibility standards
- ทำให้ maintenance ง่ายขึ้น

## Anti-patterns

### ❌ แก้ไข component โดยตรง

```tsx
// components/ui/button.tsx
export function Button({ className, ...props }) {
  return (
    <button className={`bg-red-500 ${className}`} {...props}>
      {/* Hardcoded styles */}
    </button>
  )
}
```

### ❌ ใช้ inline styles มากเกินไป

```tsx
<Button style={{ backgroundColor: 'red', padding: '10px' }}>
  Custom Button
</Button>
```

### ❌ ไม่ใช้ variants ที่มีอยู่

```tsx
// ไม่ดี
<Button className="bg-blue-500 text-white">
  Primary Button
</Button>

// ดีกว่า
<Button variant="default">
  Primary Button
</Button>
```

### ❌ ใช้ components ผิด context

```tsx
// ไม่ดี - ใช้ Dialog ในที่ที่ควรใช้ Alert
<Dialog>
  <DialogContent>
    Error occurred!
  </DialogContent>
</Dialog>

// ดี - ใช้ Alert สำหรับ error messages
<Alert variant="destructive">
  Error occurred!
</Alert>
```

## Best Practices

### ✅ ใช้ built-in variants

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
```

### ✅ สร้าง custom components แทนการแก้ไข

```tsx
// components/ui/my-button.tsx
import { Button } from "@/components/ui/button"

export function MyButton({ ...props }) {
  return (
    <Button variant="default" className="custom-shadow" {...props} />
  )
}
```

### ✅ ใช้ composition patterns

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

### ✅ รักษา semantic HTML

```tsx
// ดี - ใช้ semantic components
<Sheet>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>

// ไม่ดี - ใช้ div แทน semantic
<div className="sheet">
  <div className="sheet-content">Settings</div>
</div>
```

## Rules

1. **ใช้ built-in variants ก่อน**: ใช้ variants ที่มีอยู่ก่อน custom styling
2. **สร้าง custom components**: สร้าง custom components แทนการแก้ไข originals
3. **รักษา semantic structure**: ใช้ semantic HTML elements และ components
4. **ใช้ composition**: ใช้ composition patterns สำหรับ complex UI
5. **Test accessibility**: ทดสอบ keyboard navigation และ screen readers
6. **Maintain consistency**: ใช้ consistent patterns ทั่วทั้ง application

## Impact

ถ้าไม่ทำตามกฎ:
- Code จะยากต่อการ maintain
- Inconsistent UI ทั่วทั้ง application
- Accessibility issues
- Difficult to update components จาก registry

## References

- [Component Documentation](https://ui.shadcn.com/docs/components)
- [Accessibility Guide](https://ui.shadcn.com/docs/accessibility)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
