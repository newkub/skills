# Synchronous vs Asynchronous Programming

## เปรียบเทียบ

| หัวข้อ | Synchronous | Asynchronous |
|--------|-------------|--------------|
| **Execution** | Blocking, sequential | Non-blocking, concurrent |
| **Complexity** | Simple to reason | Harder to debug |
| **Performance** | Wait time wasted | Better resource use |
| **Code Style** | Linear, readable | Callbacks, promises, async/await |
| **Error Handling** | Try-catch | Error propagation, timeouts |
| **Use Case** | CPU-bound, simple | I/O-bound, network, UI |
| **Scalability** | Limited by threads | High concurrency |
| **Examples** | File read sync | fetch, setTimeout, DB queries |
| **Debugging** | Stack trace clear | Complex call stacks |
| **Best For** | Scripts, calculations | Servers, real-time apps |

## เมื่อไหร่ใช้อะไร

- **Synchronous**: Simple scripts, CPU tasks, predictable flow
- **Asynchronous**: I/O operations, network requests, user interfaces
