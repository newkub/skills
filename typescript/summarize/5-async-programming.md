## Async Programming

สรุปเทคนิคการเขียน async code ใน TypeScript

| หมวดหมู่ | เทคนิค | ตัวอย่าง | ผลกระทบ |
|-----------|---------|-----------|----------|
| **Promises** | Type-safe promises | `Promise<User>` | Clear async return types |
| **Promises** | Promise utilities | `Promise.all<T[]>(promises)` | Concurrent operations |
| **Async/Await** | Typed async functions | `async function getUser(id: number): Promise<User> {}` | Readable async code |
| **Async/Await** | Error handling | `try { await operation(); } catch (error) {}` | Safe async operations |
| **Generics** | Async generics | `async function fetch<T>(url: string): Promise<T> {}` | Reusable async functions |
| **Generics** | Generic promises | `type AsyncResult<T> = Promise<Result<T>>` | Type-safe async results |
| **Streams** | Typed streams | `ReadableStream<string>` | Type-safe data streams |
| **Streams** | Async iterators | `for await (const chunk of stream) {}` | Modern stream handling |
| **Cancellation** | Abort controller | `fetch(url, { signal: abortController.signal })` | Cancelable operations |
| **Concurrency** | Promise concurrency | `Promise.allSettled(promises)` | Handle multiple results |

### Async Patterns

```typescript
// ✅ Type-safe async function
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }
  return response.json();
}

// ✅ Generic async function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}

// ✅ Async result type
type AsyncResult<T> = Promise<Result<T>>;

async function safeFetchUser(id: number): AsyncResult<User> {
  try {
    const user = await fetchUser(id);
    return Result.success(user);
  } catch (error) {
    return Result.failure(error as Error);
  }
}

// ✅ Concurrent operations with types
async function fetchUsers(ids: number[]): Promise<User[]> {
  const promises = ids.map(id => fetchUser(id));
  return Promise.all(promises);
}

// ✅ Async iterator with types
async function* streamUsers(): AsyncGenerator<User> {
  let page = 1;
  while (true) {
    const response = await fetch(`/api/users?page=${page}`);
    const users: User[] = await response.json();
    if (users.length === 0) break;
    for (const user of users) {
      yield user;
    }
    page++;
  }
}
```

### Best Practices

1. **Always type async function returns** ด้วย `Promise<T>`
2. **Use Result types** สำหรับ async operations ที่อาจ fail
3. **Handle errors properly** ใน async functions
4. **Use Promise.all** สำหรับ concurrent operations
5. **Implement cancellation** สำหรับ long-running operations
