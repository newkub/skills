# Component Format

## รูปแบบ Component มาตรฐาน

### Vue Component (ถ้ารองรับ)

```markdown
<component name="Example" />
```

### React Component (ถ้ารองรับ)

```markdown
<Component name="Example" />
```

### Custom Component

```markdown
<MyComponent prop="value" />
```

### Component with Slots

```markdown
<MyComponent>
  <template #default>
    Content
  </template>
</MyComponent>
```

### When to Use

- embed interactive components
- แสดง custom UI
- แสดง dynamic content
- แสดง reusable elements

### Best Practices

- ใช้ component names ที่ชัดเจน
- ให้ props เหมาะสม
- ใช้ slots เมื่อจำเป็น
- ทำให้ components reusable
