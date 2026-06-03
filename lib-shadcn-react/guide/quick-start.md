# Quick Start

## Create New Project

```bash
# 1. Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest my-app --typescript --tailwind --eslint --app

cd my-app
```

## Initialize shadcn/ui

```bash
# 2. Initialize shadcn/ui
npx shadcn@latest init

# ตอบคำถาม:
# Style: default
# Base color: slate
# CSS variables: yes
```

## Add Components

```bash
# 3. Add basic components
npx shadcn@latest add button card input
```

## Basic Usage

```tsx
// app/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  return (
    <main className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Enter your email" />
          <Button className="w-full">Submit</Button>
        </CardContent>
      </Card>
    </main>
  );
}
```

## Add Form with Validation

```bash
# Add form components
npx shadcn@latest add form
npm install react-hook-form @hookform/resolvers zod
```

```tsx
// components/login-form.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password too short'),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
```

## Add Dialog

```bash
npx shadcn@latest add dialog
```

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Description here</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

## Next Steps

| Resource | Description |
|----------|-------------|
| [Key Concept](key-concept.md) | เข้าใจ shadcn/ui fundamentals |
| [Features](features.md) | Components ทั้งหมด |
| [Integration](integration.md) | รวมกับ tools อื่นๆ |