# API Reference

## TanStack Query

### useQuery

```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['key'],
  queryFn: () => fetch('/api').then(r => r.json()),
});
```

### useMutation

```typescript
const mutation = useMutation({
  mutationFn: (data) => fetch('/api', { method: 'POST', body: JSON.stringify(data) }),
});
```

## TanStack Table

### useReactTable

```typescript
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
});
```

## TanStack Router

### createRouter

```typescript
const router = createRouter({
  routeTree,
});
```

### useNavigate

```typescript
const navigate = useNavigate();
navigate({ to: '/path' });
```
