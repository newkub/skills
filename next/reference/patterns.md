# Next.js Design Patterns

## 1. Layout Composition Pattern

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  )
}
```

## 2. Data Fetching Pattern

```tsx
// lib/data.ts
export async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 }
  })
  return res.json()
}

// app/page.tsx
import { getData } from '@/lib/data'

export default async function Page() {
  const data = await getData()
  return <Component data={data} />
}
```

## 3. Server Action Pattern

```tsx
// app/actions.ts
'use server'

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string

  try {
    const user = await db.user.create({ data: { name, email } })
    return { success: true, user }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// components/UserForm.tsx
import { createUser } from '@/app/actions'

export default function UserForm() {
  return (
    <form action={createUser}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Create User</button>
    </form>
  )
}
```

## 4. Authentication Pattern

```tsx
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// app/auth/login/page.tsx
import { authenticate } from '@/app/actions'

export default function LoginPage() {
  return (
    <form action={authenticate}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  )
}
```

## 5. Error Handling Pattern

```tsx
// app/error.tsx
'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

// components/ErrorBoundary.tsx
'use client'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }: {
  error: Error
  resetErrorBoundary: () => void
}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
}
```

## 6. State Management Pattern

```tsx
// contexts/AppContext.tsx
'use client'

import { createContext, useContext, useReducer } from 'react'

interface AppState {
  user: User | null
  theme: 'light' | 'dark'
}

interface AppAction {
  type: 'SET_USER' | 'SET_THEME'
  payload: any
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
```

## 7. Form Validation Pattern

```tsx
// lib/validation.ts
import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18)
})

// app/actions.ts
'use server'

import { userSchema } from '@/lib/validation'

export async function createUser(formData: FormData) {
  try {
    const data = userSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      age: parseInt(formData.get('age') as string)
    })

    // Create user logic
    return { success: true, data }
  } catch (error) {
    return { success: false, errors: error.errors }
  }
}
```

## 8. Internationalization Pattern

```tsx
// lib/i18n.ts
import { notFound } from 'next/navigation'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  th: () => import('./dictionaries/th.json').then(module => module.default),
}

export const getDictionary = async (locale: string) => {
  const dictionary = await dictionaries[locale as keyof typeof dictionaries]()

  if (!dictionary) notFound()

  return dictionary
}

// app/[locale]/page.tsx
import { getDictionary } from '@/lib/i18n'

export default async function HomePage({ params: { locale } }: {
  params: { locale: string }
}) {
  const dict = await getDictionary(locale)

  return (
    <div>
      <h1>{dict.welcome.title}</h1>
      <p>{dict.welcome.description}</p>
    </div>
  )
}
```
