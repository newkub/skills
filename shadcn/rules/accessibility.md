# Accessibility Rules

## Why

การ ensure accessibility ช่วยให้:
- ผู้ใช้ทุกคนสามารถใช้งาน application ได้
- ปฏิบัติตาม legal requirements
- ปรับปรุง user experience สำหรับทุกคน
- รักษา brand reputation

## Anti-patterns

### ❌ ไม่มี ARIA labels

```tsx
<Button>
  <Icon />
</Button>
```

### ❌ ไม่รองรับ keyboard navigation

```tsx
<div onClick={handleClick}>
  Clickable div
</div>
```

### ❌ ไม่มี focus states

```tsx
<Button className="focus:outline-none">
  Button
</Button>
```

### ❌ ใช้ color เพียงอย่างเดียว

```tsx
<span className="text-red-500">Error</span>
```

## Best Practices

### ✅ ใช้ semantic HTML

```tsx
<button onClick={handleClick}>
  Clickable button
</button>
```

### ✅ เพิ่ม ARIA labels

```tsx
<Button aria-label="Close dialog">
  <X className="h-4 w-4" />
</Button>
```

### ✅ รักษา focus states

```tsx
<Button className="focus-visible:ring-2">
  Button
</Button>
```

### ✅ ใช้ icons กับ text

```tsx
<Button>
  <Icon className="mr-2 h-4 w-4" />
  Save
</Button>
```

### ✅ Test keyboard navigation

```tsx
// ตรวจสอบว่าสามารถ navigate ด้วย Tab, Enter, Space, Escape
```

## Rules

1. **ใช้ semantic HTML**: ใช้ semantic elements และ components
2. **Add ARIA labels**: เพิ่ม ARIA labels เมื่อจำเป็น
3. **Maintain focus states**: รักษา visible focus states
4. **Support keyboard navigation**: รองรับ keyboard shortcuts
5. **Test with screen readers**: ทดสอบกับ screen readers
6. **Check contrast**: ตรวจสอบ color contrast ratio

## Impact

ถ้าไม่ทำตามกฎ:
- Users with disabilities ไม่สามารถใช้งานได้
- Legal compliance issues
- Poor user experience
- Negative brand impact

## References

- [Accessibility Guide](https://ui.shadcn.com/docs/accessibility)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Radix UI Accessibility](https://www.radix-ui.com/docs/primitives/overview/accessibility)
