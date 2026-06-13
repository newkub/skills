# Best Practices

## 1. Use Shortcuts for Reuse

ใช้ shortcuts สำหรับ patterns ที่ใช้บ่อย

```typescript
export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  },
})
```

## 2. Use Theme for Consistency

ใช้ theme สำหรับ consistent values

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
})
```

## 3. Use Variants for States

ใช้ variants สำหรับ states

```html
<button class="bg-blue-500 hover:bg-blue-600">
  Button
</button>
```

## 4. Document Patterns

Document patterns ที่ใช้บ่อย

```markdown
# Component Patterns

## Button
- btn: Base button
- btn-primary: Primary button
- btn-secondary: Secondary button
```

## 5. Test Patterns

Test patterns อย่างละเอียด

```typescript
// Test button pattern
describe('Button Pattern', () => {
  it('should render correctly', async () => {
    // ...
  })
})
```
