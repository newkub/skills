# React Ecosystem

## ภาพรวม

React มี ecosystem ที่กว้างขวางและ active community ที่สนับสนุน

## Core Libraries

### React DOM

Renderer สำหรับ web applications

```bash
bun add react-dom
```

### React Native

Renderer สำหรับ mobile applications

```bash
bun add react-native
```

### React Three Fiber

Renderer สำหรับ 3D graphics

```bash
bun add @react-three/fiber @react-three/drei
```

## State Management

### Redux

```bash
bun add redux react-redux @reduxjs/toolkit
```

**ใช้เมื่อ:**
- Complex state management
- Large-scale applications
- Need time-travel debugging

### Zustand

```bash
bun add zustand
```

**ใช้เมื่อ:**
- Simple global state
- Medium-scale applications
- Want minimal boilerplate

### Jotai

```bash
bun add jotai
```

**ใช้เมื่อ:**
- Atomic state management
- Need fine-grained reactivity
- Want composable state

### Recoil

```bash
bun add recoil
```

**ใช้เมื่อ:**
- Facebook-style state management
- Need derived state
- Want async state support

## Routing

### React Router

```bash
bun add react-router-dom
```

**Features:**
- Dynamic routing
- Code splitting
- Nested routes
- Data loading

### TanStack Router

```bash
bun add @tanstack/react-router
```

**Features:**
- Type-safe routing
- Built-in data fetching
- File-based routing
- Search params management

## Data Fetching

### TanStack Query (React Query)

```bash
bun add @tanstack/react-query
```

**Features:**
- Caching
- Background updates
- Optimistic updates
- Pagination

### SWR

```bash
bun add swr
```

**Features:**
- Simple API
- Auto revalidation
- Focus tracking
- Interval polling

### Apollo Client

```bash
bun add @apollo/client graphql
```

**Features:**
- GraphQL client
- Caching
- Real-time updates
- Type generation

## Form Handling

### React Hook Form

```bash
bun add react-hook-form
```

**Features:**
- Minimal re-renders
- Built-in validation
- TypeScript support
- Easy integration

### Formik

```bash
bun add formik yup
```

**Features:**
- Mature library
- Large community
- Schema validation
- Field arrays

## UI Component Libraries

### Material UI (MUI)

```bash
bun add @mui/material @emotion/react @emotion/styled
```

**Features:**
- Google Material Design
- Extensive component library
- Theming system
- Accessibility

### Chakra UI

```bash
bun add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

**Features:**
- Accessible components
- Simple API
- Dark mode support
- Responsive design

### Ant Design

```bash
bun add antd
```

**Features:**
- Enterprise-class UI
- Rich components
- Internationalization
- Design system

### shadcn/ui

```bash
bun add -D @radix-ui/react-* class-variance-authority clsx tailwind-merge
```

**Features:**
- Copy-paste components
- Radix UI primitives
- Tailwind CSS styling
- Highly customizable

## Styling

### Tailwind CSS

```bash
bun add -D tailwindcss postcss autoprefixer
```

**Features:**
- Utility-first CSS
- Responsive design
- Dark mode
- Custom configuration

### Styled Components

```bash
bun add styled-components
```

**Features:**
- CSS-in-JS
- Component-scoped styles
- Theming
- Dynamic styling

### Emotion

```bash
bun add @emotion/react @emotion/styled
```

**Features:**
- CSS-in-JS
- Performance optimized
- Source maps
- Type-safe styles

## Testing

### React Testing Library

```bash
bun add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

**Features:**
- User-centric testing
- Accessibility testing
- Simple API
- Best practices

### Vitest

```bash
bun add -D vitest @vitest/ui jsdom
```

**Features:**
- Fast test runner
- ESM support
- Watch mode
- UI dashboard

### Playwright

```bash
bun add -D @playwright/test
```

**Features:**
- E2E testing
- Cross-browser testing
- Network interception
- Visual regression

## Development Tools

### React DevTools

Browser extension สำหรับ debug React applications

**Features:**
- Component tree
- Props and state inspection
- Performance profiling
- Time travel debugging

### ESLint

```bash
bun add -D eslint eslint-plugin-react eslint-plugin-react-hooks
```

**Features:**
- Code linting
- React-specific rules
- Hooks rules
- Auto-fix

### Prettier

```bash
bun add -D prettier eslint-config-prettier eslint-plugin-prettier
```

**Features:**
- Code formatting
- Consistent style
- Integration with ESLint
- Configurable

## Build Tools

### Vite

```bash
bun add -D vite @vitejs/plugin-react
```

**Features:**
- Fast HMR
- Optimized builds
- Plugin ecosystem
- TypeScript support

### Next.js

```bash
bun create next-app my-app
```

**Features:**
- SSR/SSG
- API routes
- File-based routing
- Image optimization

### Remix

```bash
bun create remix@latest my-app
```

**Features:**
- Nested routing
- Data loading
- Progressive enhancement
- Web standards

## Animation

### Framer Motion

```bash
bun add framer-motion
```

**Features:**
- Declarative animations
- Gestures
- Drag and drop
- Layout animations

### React Spring

```bash
bun add react-spring
```

**Features:**
- Physics-based animations
- Hooks API
- Interpolation
- Performance optimized

## สรุป

React ecosystem มี tools และ libraries มากมาย:
- เลือกตามความเหมาะสมกับ project
- พิจารณา community support และ maintenance
- Test integration ก่อนใช้ใน production
- Keep dependencies up to date
