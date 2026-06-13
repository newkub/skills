---
description: Setup UnoCSS กับ theme system และ design tokens
---

## Goal

Setup UnoCSS กับ theme system และ design tokens สำหรับ consistent design

## Scope

### 1. ตรวจสอบ UnoCSS Setup

ตรวจสอบว่า UnoCSS ถูก setup แล้ว

```bash
# ตรวจสอบ uno.config.ts
cat uno.config.ts
```

### 2. กำหนด Theme Structure

กำหนด theme structure ตาม design system

```typescript
// uno.config.ts
export default defineConfig({
  theme: {
    colors: {
      // Brand colors
      primary: '#3b82f6',
      secondary: '#64748b',
      accent: '#8b5cf6',
      
      // Semantic colors
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      
      // Neutral colors
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    spacing: {
      '0': '0',
      'px': '1px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
    },
    boxShadow: {
      'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
  },
})
```

### 3. กำหนด CSS Variables

กำหนด CSS variables สำหรับ dynamic theming

```css
/* styles/global.css */
:root {
  --color-primary: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #2563eb;
  
  --color-secondary: #64748b;
  --color-secondary-light: #94a3b8;
  --color-secondary-dark: #475569;
  
  --color-background: #ffffff;
  --color-foreground: #000000;
  
  --spacing-unit: 0.25rem;
}

[data-theme='dark'] {
  --color-primary: #60a5fa;
  --color-primary-light: #93c5fd;
  --color-primary-dark: #3b82f6;
  
  --color-background: #000000;
  --color-foreground: #ffffff;
}
```

อัปเดต UnoCSS config สำหรับใช้ CSS variables

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'primary-dark': 'var(--color-primary-dark)',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
    },
  },
})
```

### 4. กำหนด Shortcuts สำหรับ Components

กำหนด shortcuts สำหรับ components ที่ใช้ theme

```typescript
export default defineConfig({
  shortcuts: {
    // Button shortcuts
    'btn': 'px-4 py-2 rounded font-medium transition-colors',
    'btn-sm': 'px-3 py-1.5 text-sm rounded',
    'btn-lg': 'px-6 py-3 text-lg rounded',
    'btn-primary': 'btn bg-primary text-white hover:bg-primary-dark',
    'btn-secondary': 'btn bg-secondary text-white hover:bg-secondary-dark',
    'btn-outline': 'btn border-2 border-primary text-primary hover:bg-primary hover:text-white',
    
    // Card shortcuts
    'card': 'p-4 bg-background rounded-lg shadow',
    'card-hover': 'card hover:shadow-lg transition-shadow',
    
    // Input shortcuts
    'input': 'px-3 py-2 border rounded focus:ring-2 focus:ring-primary',
    'input-error': 'input border-error focus:ring-error',
  },
})
```

### 5. กำหนด Dark Mode

กำหนด dark mode configuration

```typescript
export default defineConfig({
  darkMode: 'class', // หรือ 'media' สำหรับ system preference
  theme: {
    colors: {
      // Light mode
      primary: '#3b82f6',
      background: '#ffffff',
      foreground: '#000000',
      
      // Dark mode
      dark: {
        primary: '#60a5fa',
        background: '#000000',
        foreground: '#ffffff',
      },
    },
  },
})
```

### 6. ทดสอบ Theme

สร้าง test components สำหรับ theme

```html
<!-- Test colors -->
<div class="text-primary bg-background p-4">
  Primary Text
</div>

<!-- Test dark mode -->
<div class="dark:bg-dark dark:text-dark-foreground p-4">
  Dark Mode
</div>

<!-- Test shortcuts -->
<button class="btn btn-primary">
  Primary Button
</button>
```

รัน dev server และทดสอบ

```bash
bun run dev
```

### 7. Document Theme

Document theme structure ใน project

```markdown
# Theme Documentation

## Colors

- Primary: #3b82f6
- Secondary: #64748b
- Accent: #8b5cf6

## Spacing

- Base unit: 0.25rem
- Scale: 0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24

## Components

- Button: btn, btn-primary, btn-secondary
- Card: card, card-hover
- Input: input, input-error
```

## Rules

### 1. ใช้ CSS Variables สำหรับ Dynamic Theming

ใช้ CSS variables สำหรับ colors ที่ต้องการเปลี่ยนตาม theme

### 2. กำหนด Consistent Scales

กำหนด scales ที่ consistent ทั้งหมด (spacing, typography, etc.)

### 3. ใช้ Semantic Names

ใช้ semantic names เช่น primary, secondary, success, warning, error

### 4. Document Theme Structure

Document theme structure อย่างชัดเจนสำหรับ team

### 5. Test Dark Mode

ทดสอบ dark mode อย่างละเอียด

## Expected Outcome

- Theme system ถูก setup แล้ว
- CSS variables ถูกกำหนดแล้ว
- Dark mode ทำงานได้
- Component shortcuts ใช้ theme ได้
- Theme ถูก document แล้ว
