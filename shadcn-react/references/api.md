# API Reference

Component API reference for shadcn/ui components

## Button

```tsx
import { Button } from '@/components/ui/button';

<Button variant="default" size="default" disabled loading asChild>
  Click me
</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Button style |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state |
| `asChild` | `boolean` | `false` | Replace element |

## Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

| Component | Description |
|-----------|-------------|
| `Card` | Container component |
| `CardHeader` | Header section |
| `CardTitle` | Title (h3) |
| `CardDescription` | Description text |
| `CardContent` | Main content |
| `CardFooter` | Footer section |

## Dialog

```tsx
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogFooter, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={handleSave}>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

| Prop | Type | Description |
|------|------|-------------|
| `open` | `boolean` | Dialog open state |
| `onOpenChange` | `(open: boolean) => void` | State change handler |
| `asChild` | `boolean` | Replace trigger element |

## Input

```tsx
import { Input } from '@/components/ui/input';

<Input type="email" placeholder="Email" disabled value={value} onChange={e => setValue(e.target.value)} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `HTMLInputTypeAttribute` | `"text"` | Input type |
| `disabled` | `boolean` | `false` | Disabled state |
| `value` | `string` | - | Controlled value |
| `onChange` | `ChangeEventHandler` | - | Change handler |

## Form

```tsx
import {
  Form, FormControl, FormDescription, FormField,
  FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="fieldName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Label</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>Helper text</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

| Component | Description |
|-----------|-------------|
| `Form` | Form wrapper with form context |
| `FormField` | Field with react-hook-form integration |
| `FormItem` | Field container |
| `FormLabel` | Label text |
| `FormControl` | Input wrapper |
| `FormDescription` | Helper text |
| `FormMessage` | Error message display |

## Select

```tsx
import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectItem, SelectGroup,
} from '@/components/ui/select';

<Select onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup label="Group">
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```