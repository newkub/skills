# Layout Examples

## Dashboard Layout

```tsx
import { Sidebar } from "@/components/ui/sidebar"
import { Header } from "@/components/ui/header"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
```

## Settings Layout

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsLayout() {
  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          {/* Profile settings */}
        </TabsContent>
        <TabsContent value="account">
          {/* Account settings */}
        </TabsContent>
        <TabsContent value="appearance">
          {/* Appearance settings */}
        </TabsContent>
        <TabsContent value="notifications">
          {/* Notification settings */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

## Auth Layout

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AuthLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}
```

## Page Layout

```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export function PageLayout({ title, children, breadcrumbs }: {
  title: string
  children: React.ReactNode
  breadcrumbs?: { label: string; href?: string }[]
}) {
  return (
    <div className="container py-6 space-y-6">
      {breadcrumbs && (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem key={index}>
                {crumb.href ? (
                  <>
                    <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </>
                ) : (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  )
}
```

## References

- [Layout Components](https://ui.shadcn.com/docs/components)
- [Next.js Layouts](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)
