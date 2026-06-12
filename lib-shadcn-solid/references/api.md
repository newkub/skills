# API Reference

## Component Props

### Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | - | Custom CSS classes |
| `variant` | `string` | `default` | Style variant |
| `size` | `string` | `default` | Component size |
| `asChild` | `boolean` | `false` | Render as child component |

## Button Component

### Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `variant` | `string` | `default` | `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` |
| `size` | `string` | `default` | `default`, `sm`, `lg`, `icon` |

### Example

```tsx
<Button variant="default" size="lg">
  Click me
</Button>
```

## Dialog Component

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Open change callback |

### Sub-components

- `DialogTrigger`
- `DialogContent`
- `DialogHeader`
- `DialogTitle`
- `DialogDescription`
- `DialogFooter`

## Input Component

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `text` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled value |
| `onValueChange` | `(value: string) => void` | - | Value change callback |

## Utility Functions

### cn()

Merge Tailwind classes with `clsx` and `tailwind-merge`:

```ts
import { cn } from "~/lib/utils"

cn("px-4 py-2", "bg-blue-500", isActive && "bg-blue-600")
```

### cva()

Create variant classes with `class-variance-authority`:

```ts
import { cva } from "class-variance-authority"

const variants = cva(base, {
  variants: {
    variant: {
      default: "bg-primary",
      destructive: "bg-destructive",
    },
  },
})
```

## Kobalte Primitives

shadcn-solid components are built on Kobalte primitives:

| Primitive | Usage |
|-----------|-------|
| `Button` | Button component |
| `Dialog` | Dialog/Modal |
| `Popover` | Popover menu |
| `Tooltip` | Tooltip |
| `DropdownMenu` | Dropdown menu |
| `Tabs` | Tab navigation |
| `Switch` | Toggle switch |
| `Checkbox` | Checkbox |
| `RadioGroup` | Radio buttons |

## SolidJS Reactivity

### Signals

```ts
const [count, setCount] = createSignal(0)
```

### Effects

```ts
createEffect(() => {
  console.log(count())
})
```

### Memos

```ts
const doubled = createMemo(() => count() * 2)
```
