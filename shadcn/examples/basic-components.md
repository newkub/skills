# Basic Components Examples

## Button Examples

### Variants

```tsx
import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
```

### Sizes

```tsx
export function ButtonSizes() {
  return (
    <div className="flex gap-2 items-center">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Icon name="search" />
      </Button>
    </div>
  )
}
```

## Input Examples

### Basic Input

```tsx
import { Input } from "@/components/ui/input"

export function BasicInput() {
  return (
    <Input type="text" placeholder="Enter text" />
  )
}
```

### Input with Label

```tsx
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function InputWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  )
}
```

## Card Examples

### Basic Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function BasicCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
    </Card>
  )
}
```

### Card with Footer

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Button } from "@/components/ui/card"

export function CardWithFooter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}
```

## Dialog Examples

### Basic Dialog

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, Button } from "@/components/ui/dialog"

export function BasicDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <p>Dialog content goes here</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Alert Examples

### Alert Variants

```tsx
import { Alert, AlertDescription } from "@/components/ui/alert"

export function AlertVariants() {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertDescription>This is a default alert</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertDescription>This is a destructive alert</AlertDescription>
      </Alert>
    </div>
  )
}
```

## Badge Examples

### Badge Variants

```tsx
import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}
```

## Avatar Examples

### Avatar with Image

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AvatarWithImage() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}
```

## References

- [Component Documentation](https://ui.shadcn.com/docs/components)
