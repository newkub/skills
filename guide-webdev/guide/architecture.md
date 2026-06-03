# Architecture

## Overview

สถาปัตยกรรมและโครงสร้างของ modern web applications

## Application Architecture

### 1. Layered Architecture

```text
┌─────────────────────────────────────────────────────┐
│                   Presentation                      │
│         (Components, Pages, Layouts)               │
├─────────────────────────────────────────────────────┤
│                   Business Logic                   │
│           (Hooks, Services, Validators)             │
├─────────────────────────────────────────────────────┤
│                   Data Layer                       │
│        (API Clients, State Management)              │
├─────────────────────────────────────────────────────┤
│                   Infrastructure                   │
│      (HTTP, Storage, Analytics, Error Tracking)     │
└─────────────────────────────────────────────────────┘
```

### 2. Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/              # Generic UI (Button, Input)
│   └── features/        # Feature-specific components
├── pages/               # Route pages
├── hooks/               # Custom React hooks
├── services/            # API services
├── stores/              # State management
├── utils/               # Utility functions
├── types/               # TypeScript types
└── lib/                 # Third-party integrations
```

## State Management Patterns

### 1. State Types

| Type | Storage | Examples |
|------|---------|----------|
| **Server State** | Remote | API responses, user data |
| **URL State** | Browser URL | Routes, filters, search |
| **Form State** | Local | Input values, validation |
| **UI State** | Local | Modals, dropdowns |

### 2. Data Flow

```
Component ──▶ Action ──▶ Store ──▶ API ──▶ Server
   │                                       │
   │◀─────── State Update ◀───────────────┘
```

## Design Patterns

### 1. Component Patterns

| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Container/Presentational** | Separate logic from UI | Complex components |
| **Compound Components** | Related components together | Select, Combobox |
| **Render Props** | Component as prop | Flexible APIs |
| **Custom Hooks** | Extract reusable logic | Data fetching, forms |

### 2. Server State Management

| Tool | Features | Best For |
|------|----------|----------|
| **TanStack Query** | Caching, background refetch | Server data |
| **SWR** | Stale-while-revalidate | Simple caching |
| **Apollo Client** | GraphQL integration | GraphQL APIs |

### 3. Client State Management

| Tool | Features | Best For |
|------|----------|----------|
| **Zustand** | Minimal, TypeScript-friendly | Simple global state |
| **Pinia** | Vue ecosystem | Vue apps |
| **Jotai** | Atomic state | Fine-grained updates |
| **Redux Toolkit** | Standardized, devtools | Large apps |

## API Design Patterns

### 1. API Layer Architecture

```typescript
// API client (infrastructure)
const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

// API service (data layer)
export const userService = {
  getUsers: () => apiClient.get('/users'),
  getUser: (id: string) => apiClient.get(`/users/${id}`),
  createUser: (data: CreateUserDTO) => apiClient.post('/users', data),
}

// Hook (business logic)
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => userService.getUsers(),
  })
}
```

### 2. Error Handling Pattern

```typescript
// Types
type ApiError = {
  code: string
  message: string
  details?: Record<string, string[]>
}

// Handler
function handleApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    return {
      code: error.response?.status?.toString() ?? 'UNKNOWN',
      message: error.response?.data?.message ?? 'An error occurred',
    }
  }
  return { code: 'UNKNOWN', message: 'An unexpected error occurred' }
}
```

## Performance Architecture

| Pattern | Description | Impact |
|---------|-------------|--------|
| **Code Splitting** | Route-based chunks | Faster initial load |
| **Lazy Loading** | On-demand imports | Smaller bundles |
| **Caching** | Memory/disk cache | Fewer requests |
| **Prefetching** | Load ahead | Smoother UX |

## Summary

| Aspect | Pattern |
|--------|---------|
| **Architecture** | Layered (UI → Business → Data → Infrastructure) |
| **State** | Separate server/client state |
| **Components** | Container/Presentational, Custom Hooks |
| **API Layer** | Client → Service → Hook → Component |
| **Performance** | Code splitting, caching, prefetching |
