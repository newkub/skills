---
description: Update theme configuration และ design tokens ให้ทันสมัย
---

## Goal

Update theme configuration และ design tokens ให้ทันสมัยและ consistent กับ design system

## Scope

### 1. ตรวจสอบ Current Theme

ตรวจสอบ theme configuration ปัจจุบัน

```bash
# ตรวจสอบ uno.config.ts
cat uno.config.ts

# ตรวจสอบ CSS variables
cat styles/global.css
```

### 2. ตรวจสอบ Design System

ตรวจสอบ design system ปัจจุบัน

```bash
# ตรวจสอบ design documentation
cat docs/design-system.md

# ตรวจสอบ Figma หรือ design tools
# (manual check)
```

### 3. อัปเดต Color Palette

อัปเดต color palette ตาม design system

```typescript
// uno.config.ts
export default defineConfig({
  theme: {
    colors: {
      // อัปเดต brand colors
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      
      // อัปเดต semantic colors
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
})
```

### 4. อัปเดต Spacing Scale

อัปเดต spacing scale ตาม design system

```typescript
export default defineConfig({
  theme: {
    spacing: {
      // อัปเดต spacing scale
      '0': '0',
      'px': '1px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
    },
  },
})
```

### 5. อัปเดต Typography Scale

อัปเดต typography scale ตาม design system

```typescript
export default defineConfig({
  theme: {
    fontSize: {
      // อัปเดต font sizes
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    },
  },
})
```

### 6. อัปเดต CSS Variables

อัปเดต CSS variables ตาม theme ใหม่

```css
/* styles/global.css */
:root {
  /* อัปเดต color variables */
  --color-primary: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #2563eb;
  
  /* อัปเดต spacing variables */
  --spacing-unit: 0.25rem;
  
  /* อัปเดต typography variables */
  --font-size-base: 1rem;
  --line-height-base: 1.5;
}
```

### 7. อัปเดต Component Shortcuts

อัปเดต component shortcuts ตาม theme ใหม่

```typescript
export default defineConfig({
  shortcuts: {
    // อัปเดต button shortcuts
    'btn': 'px-4 py-2 rounded font-medium transition-colors',
    'btn-primary': 'btn bg-primary text-white hover:bg-primary-dark',
    
    // อัปเดต card shortcuts
    'card': 'p-4 bg-background rounded-lg shadow',
  },
})
```

### 8. ทดสอบ Theme ใหม่

ทดสอบ theme ใหม่

```html
<!-- Test colors -->
<div class="text-primary bg-background p-4">
  Test
</div>

<!-- Test spacing -->
<div class="p-4 m-2">
  Test
</div>

<!-- Test typography -->
<div class="text-lg font-bold">
  Test
</div>
```

รัน dev server

```bash
bun run dev
```

### 9. อัปเดต Documentation

อัปเดต theme documentation

```markdown
# Theme Documentation

## Colors

- Primary: #3b82f6 (Light), #60a5fa (Dark)
- Secondary: #64748b
- Success: #22c55e
- Warning: #f59e0b
- Error: #ef4444

## Spacing

- Base unit: 0.25rem
- Scale: 0, 0.5, 1, 2, 3, 4, 6, 8, 12, 16, 24

## Typography

- Base: 1rem / 1.5
- Scale: xs, sm, base, lg, xl, 2xl, 3xl
```

### 10. Migrate Components

Migrate components ที่ใช้ theme เดิม

```typescript
// อัปเดต components ที่ใช้ theme เดิม
// เปลี่ยน class names ตาม theme ใหม่
```

## Rules

### 1. Backup Configuration

Backup configuration ก่อนอัปเดต

```bash
cp uno.config.ts uno.config.ts.backup
cp styles/global.css styles/global.css.backup
```

### 2. Update Gradually

อัปเดต theme ทีละส่วน (colors, spacing, typography)

### 3. Test Each Change

Test ทุก change อย่างละเอียด

### 4. Document Changes

Document ทุก change ที่ทำ

### 5. Communicate with Team

Communicate changes กับ team

## Migration Strategy

### Phase 1: Colors

อัปเดต colors ก่อน

```typescript
// อัปเดต colors
theme: {
  colors: {
    // new colors
  },
}
```

### Phase 2: Spacing

อัปเดต spacing

```typescript
// อัปเดต spacing
theme: {
  spacing: {
    // new spacing
  },
}
```

### Phase 3: Typography

อัปเดต typography

```typescript
// อัปเดต typography
theme: {
  fontSize: {
    // new typography
  },
}
```

### Phase 4: Components

อัปเดต components

```typescript
// อัปเดต shortcuts
shortcuts: {
  // new shortcuts
}
```

## Rollback Strategy

ถ้ามีปัญหา:

```bash
# Restore configuration
cp uno.config.ts.backup uno.config.ts
cp styles/global.css.backup styles/global.css

# Test อีกครั้ง
bun run dev
```

## Expected Outcome

- Theme configuration ถูกอัปเดตแล้ว
- Design tokens ถูกอัปเดตแล้ว
- CSS variables ถูกอัปเดตแล้ว
- Component shortcuts ถูกอัปเดตแล้ว
- Documentation ถูกอัปเดตแล้ว
- Application ทำงานได้ปกติ
