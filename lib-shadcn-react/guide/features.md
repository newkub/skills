# Features

## Core Components

shadcn/ui มี components หลากหลายประเภทที่พร้อมใช้งาน

## Form Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary interactive element with variants |
| `Input` | Text input field |
| `Textarea` | Multi-line text input |
| `Select` | Dropdown selection |
| `Checkbox` | Checkbox input |
| `RadioGroup` | Radio button group |
| `Switch` | Toggle switch |
| `Label` | Form label |
| `Form` | Form with validation (react-hook-form) |

## Layout Components

| Component | Description |
|-----------|-------------|
| `Card` | Container with header, content, footer |
| `Sheet` | Slide-out panel (sidebar) |
| `Dialog` | Modal dialog |
| `Accordion` | Expandable sections |
| `Tabs` | Tab navigation |
| `Separator` | Horizontal/vertical divider |
| `ScrollArea` | Custom scrollbar |

## Navigation Components

| Component | Description |
|-----------|-------------|
| `NavigationMenu` | Full navigation component |
| `Breadcrumb` | Breadcrumb trail |
| `Pagination` | Page navigation |
| `Menubar` | Desktop menu |
| `DropdownMenu` | Dropdown menu |
| `ContextMenu` | Right-click menu |

## Feedback Components

| Component | Description |
|-----------|-------------|
| `Alert` | Alert message |
| `AlertDialog` | Alert with cancel/confirm |
| `Toast` | Toast notifications (Sonner) |
| `Progress` | Progress bar |
| `Skeleton` | Loading placeholder |
| `Spinner` | Loading indicator |

## Data Display

| Component | Description |
|-----------|-------------|
| `Table` | Data table |
| `Badge` | Status badge/tag |
| `Avatar` | User avatar with fallback |
| `Calendar` | Date picker calendar |
| `Carousel` | Image/content carousel |
| `Chart` | Chart components |
| `Code` | Code block display |

## Overlay Components

| Component | Description |
|-----------|-------------|
| `Popover` | Floating content panel |
| `Tooltip` | Hover tooltip |
| `Command` | Command palette (⌘K) |
| `HoverCard` | Hover reveal card |

## Utility Features

| Feature | Description |
|---------|-------------|
| **Variants** | หลาย styles ต่อ component |
| **Sizes** | sm, default, lg, icon |
| **Dark Mode** | รองรับ CSS variables |
| **RTL** | Right-to-left layout |
| **Server Components** | React Server Components ready |

## Variant Pattern Example

```tsx
// Button with multiple variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```