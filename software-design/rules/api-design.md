# API Design

## Rationale

API design ที่ดีช่วยให้ integration ง่าย, reduce errors, และ improve developer experience

## Bad Practice

```typescript
// ❌ Wrong HTTP methods
app.get('/users/create', createUser);
app.post('/users/delete', deleteUser);

// ❌ Inconsistent naming
app.get('/getUsers', getUsers);
app.post('/addUser', createUser);

// ❌ Nested resources ลึกเกินไป
app.get('/users/1/orders/2/items/3/product', getProduct);

// ❌ No proper status codes
app.get('/users/404', (req, res) => {
  res.json({ error: 'Not found' });
});
```

## Good Practice

```typescript
// ✅ Correct HTTP methods
app.post('/users', createUser);      // CREATE
app.get('/users/:id', getUser);     // READ
app.put('/users/:id', updateUser);   // UPDATE
app.delete('/users/:id', deleteUser); // DELETE

// ✅ Consistent naming
app.get('/users', getUsers);
app.get('/users/:id', getUser);
app.get('/users/:id/orders', getUserOrders);

// ✅ Proper status codes
app.get('/users/:id', async (req, res) => {
  const user = await findUser(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

// ✅ Query parameters สำหรับ filtering
app.get('/users?name=john&age=25&limit=10&offset=0', getUsers);
```

## API Types

### 1. REST
**Pros:**
- Simple, widely adopted
- Stateless, cacheable
- Standard HTTP methods

**Cons:**
- Over-fetching/under-fetching
- Multiple round trips
- Not type-safe

### 2. GraphQL
**Pros:**
- Fetch exactly what you need
- Single endpoint
- Strongly typed

**Cons:**
- Complexity
- Caching challenges
- N+1 queries

### 3. RPC (gRPC)
**Pros:**
- High performance
- Type-safe
- Streaming support

**Cons:**
- Not human-readable
- Requires code generation
- Limited browser support

## Best Practices

### 1. Resource Naming
- Use **plural nouns** (users, orders)
- Use **kebab-case** for multi-word
- No **verbs** in URLs

### 2. HTTP Methods
- **GET**: Retrieve resources
- **POST**: Create resources
- **PUT**: Update/replace resources
- **DELETE**: Remove resources

### 3. Status Codes
- **200 OK**: Successful GET, PUT
- **201 Created**: Successful POST
- **400 Bad Request**: Invalid input
- **401 Unauthorized**: Authentication required
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

## References

- [REST API Tutorial](https://restfulapi.net/)
- [GraphQL Documentation](https://graphql.org/)
- [gRPC Documentation](https://grpc.io/)
