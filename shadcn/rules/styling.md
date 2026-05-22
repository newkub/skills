# Styling Rules

## Why

การจัดการ styles อย่างถูกต้องช่วยให้:
- รักษา consistency ทั่วทั้ง application
- ทำให้ maintenance ง่ายขึ้น
- รักษา theme consistency
- ลด CSS conflicts

## Anti-patterns

### ❌ ใช้ literal colors

```tsx
<Button className="bg-blue-500 text-white">
  Button
</Button>
```

### ❌ Hardcode values

```tsx
<Button className="w-32 h-10 rounded-lg">
  Button
</Button>
```

### ❌ Override CSS variables โดยตรง

```tsx
<Button style={{ '--primary': 'red' } as React.CSSProperties}>
  Button
</Button>
```

### ❌ ใช้ !important

```tsx
<Button className="!bg-red-500">
  Button
</Button>
```

## Best Practices

### ✅ ใช้ semantic tokens

```tsx
<Button variant="default">
  Button
</Button>
```

### ✅ ใช้ CSS variables

```css
:root {
  --primary: 222 47% 11%;
  --primary-foreground: 210 40% 98%;
}
```

### ✅ ใช้ Tailwind utilities

```tsx
<Button className="w-full md:w-auto">
  Responsive Button
</Button>
```

### ✅ ใช้ cn() utility

```tsx
import { cn } from "@/lib/utils"

<Button className={cn("base-class", condition && "conditional-class")}>
  Button
</Button>
```

## Rules

1. **ใช้ semantic tokens**: ใช้ CSS variables แทน literal colors
2. **Avoid !important**: หลีกเลี่ยงการใช้ !important
3. **Use Tailwind utilities**: ใช้ Tailwind classes สำหรับ styling
4. **Customize via variants**: สร้าง custom variants ใน component
5. **Maintain theme consistency**: ใช้ consistent theme colors
6. **Test responsive**: ทดสอบ responsive breakpoints

## Impact

ถ้าไม่ทำตามกฎ:
- Inconsistent colors ทั่วทั้ง application
- Difficult to maintain themes
- CSS conflicts และ specificity issues
- Hard to update design system

## References

- [Theming Guide](https://ui.shadcn.com/docs/theming)
- [Tailwind CSS](https://tailwindcss.com)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
