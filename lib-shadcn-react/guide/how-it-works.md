# How It Works

## shadcn/ui Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    shadcn/ui Architecture                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Source Code (Copy to project)            │   │
│  │                                                       │   │
│  │   ┌─────────┐  ┌─────────┐  ┌─────────┐              │   │
│  │   │ Button  │  │ Input   │  │ Dialog  │   ...        │   │
│  │   │ .tsx    │  │ .tsx    │  │ .tsx    │              │   │
│  │   └─────────┘  └─────────┘  └─────────┘              │   │
│  │                                                       │   │
│  │   - Full control over code                           │   │
│  │   - Customize without limits                        │   │
│  │   - Components live in your project                 │   │
│  │                                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                              │                              │
│                              ▼                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Dependencies (Shared)                    │   │
│  │                                                       │   │
│  │   ┌─────────┐  ┌─────────┐  ┌─────────┐              │   │
│  │   │ Radix  │  │  Tailwind│  │Class  │              │   │
│  │   │  Primitives│  │  CSS   │  │ Variance│            │   │
│  │   └─────────┘  └─────────┘  └─────────┘              │   │
│  │                                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Component Building Blocks

```
┌─────────────────────────────────────────────────────────────┐
│                    Component Layers                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              UI Component (Your Code)                 │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │  button.tsx                                     │  │   │
│  │  │  - Tailwind classes                             │  │   │
│  │  │  - cn() utility for class merging               │  │   │
│  │  │  - Variant definitions                          │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │                          │                            │   │
│  │                          ▼                            │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │  Radix Primitives (Unstyled)                  │  │   │
│  │  │  - Accessibility built-in                     │  │   │
│  │  │  - Keyboard navigation                        │  │   │
│  │  │  - Focus management                           │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │                                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## CLI Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    CLI Workflow                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  npx shadcn-ui@latest add button                            │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  1. Check if component exists                          │   │
│  │  2. Download component from registry                  │   │
│  │  3. Copy to: components/ui/button.tsx                   │   │
│  │  4. Check dependencies (radix, clsx, tailwind-merge)   │   │
│  │  5. Add import if not exists                           │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Output:                                                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  components/ui/button.tsx (in your project!)        │   │
│  │  lib/utils.ts (cn() utility)                         │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Class Variance

```
┌─────────────────────────────────────────────────────────────┐
│                    Class Variance Pattern                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  import { cva } from 'class-variance-authority';             │
│                                                              │
│  const buttonVariants = cva(                                 │
│    'base-classes',  // Always applied                        │
│    {                                                            │
│      variants: {                                              │
│        variant: {                                             │
│          default: 'variant-default',                          │
│          destructive: 'variant-destructive',                  │
│        },                                                     │
│        size: {                                                │
│          default: 'size-default',                            │
│          sm: 'size-sm',                                       │
│        },                                                     │
│      },                                                      │
│      defaultVariants: {                                      │
│        variant: 'default',                                   │
│        size: 'default',                                       │
│      },                                                      │
│    }                                                         │
│  );                                                          │
│                                                              │
│  // Usage                                                    │
│  <button class={buttonVariants({ variant: 'destructive' })} />│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Theme Customization

```
┌─────────────────────────────────────────────────────────────┐
│                    Theme System                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CSS Variables (components.json generates)                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  @layer base {                                        │   │
│  │    :root {                                            │   │
│  │      --background: 0 0% 100%;                        │   │
│  │      --foreground: 0 0% 0%;                          │   │
│  │      --primary: 221.2 83.2% 50.4%;                    │   │
│  │      /* ... more variables */                         │   │
│  │    }                                                  │   │
│  │  }                                                    │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  tailwind.config.js                                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  extend: {                                           │   │
│  │    colors: {                                         │   │
│  │      background: 'hsl(var(--background))',          │   │
│  │      foreground: 'hsl(var(--foreground))',          │   │
│  │      primary: {                                      │   │
│  │        DEFAULT: 'hsl(var(--primary))',               │   │
│  │        foreground: 'hsl(var(--primary-foreground))',│   │
│  │      },                                              │   │
│  │    },                                                │   │
│  │  }                                                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Registry Pattern

```typescript
// components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```