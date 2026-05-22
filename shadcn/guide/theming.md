# Theming Guide

## Overview

shadcn/ui ใช้ CSS variables สำหรับ theming ทำให้สามารถ customize colors, fonts, และ styles ได้อย่างยืดหยุ่น

## CSS Variables System

### Semantic Tokens

แทนที่จะใช้ literal hex codes หรือ Tailwind colors (เช่น `text-blue-500`), shadcn/ui ใช้ semantic CSS variables:

- **`primary`**: Main brand color
- **`secondary`**: Secondary color
- **`accent`**: Hover states และ highlights
- **`muted`**: Secondary text หรือ backgrounds
- **`destructive`**: Error states และ destructive actions

### Default Theme Variables

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    
    --radius: 0.5rem;
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

## Customizing Colors

### Change Primary Color

```css
:root {
  --primary: 142 76% 36%; /* Green */
  --primary-foreground: 355.7 100% 97.3%;
}
```

### Use HSL Format

CSS variables ใช้ HSL format: `hue saturation lightness`

```css
--primary: 222 47% 11%; /* H: 222, S: 47%, L: 11% */
```

### Generate Color Palette

ใช้ online tools เช่น:
- [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
- [Coolors](https://coolors.co)
- [Adobe Color](https://color.adobe.com)

## Dark Mode

### Toggle Dark Mode

```tsx
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
```

### System Preference

```tsx
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme("system")}
    >
      System
    </Button>
  )
}
```

## Border Radius

### Global Radius

```css
:root {
  --radius: 0.75rem; /* 12px */
}
```

### Component-Specific Radius

```tsx
<Button className="rounded-full">
  Full Rounded
</Button>
```

## Typography

### Font Families

```css
@layer base {
  :root {
    --font-sans: "Inter", sans-serif;
    --font-mono: "Fira Code", monospace;
  }
}
```

### Apply Fonts

```tsx
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

## Tailwind v4 Theming

Tailwind v4 ใช้ CSS-first approach:

```css
@import "tailwindcss";

@theme {
  --color-background: oklch(0.98 0 0);
  --color-foreground: oklch(0.15 0.02 264);
  --color-primary: oklch(0.5 0.18 264);
  --color-primary-foreground: oklch(0.98 0 0);
  /* ... more variables */
}
```

## Best Practices

1. **Use Semantic Tokens**: ใช้ semantic tokens แทน literal colors
2. **Maintain Contrast**: ตรวจสอบ contrast ratio สำหรับ accessibility
3. **Test Both Modes**: ทดสอบทั้ง light และ dark mode
4. **Document Changes**: บันทึก custom theme changes
5. **Keep Consistent**: ใช้ consistent color system ทั่วทั้ง app

## Theme Presets

shadcn/ui มี theme presets ให้เลือก:
- **Zinc**: Neutral gray theme
- **Slate**: Cool gray theme (default)
- **Stone**: Warm gray theme
- **Neutral**: Pure neutral theme

ใช้ [shadcn/ui themes](https://ui.shadcn.com/themes) เพื่อ preview และ copy theme

## References

- [Theming Documentation](https://ui.shadcn.com/docs/theming)
- [Theme Generator](https://ui.shadcn.com/themes)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
