# Lazy Evaluation vs Eager Evaluation

## เปรียบเทียบ

| หัวข้อ | Lazy Evaluation | Eager Evaluation |
|--------|-----------------|------------------|
| **Execution** | On demand | Immediate |
| **Performance** | Memory efficient | CPU predictable |
| **Infinite Lists** | Possible | Impossible |
| **Debugging** | Harder (deferred) | Easier (immediate) |
| **Examples** | Haskell generators | Most languages default |
| **Short Circuit** | Natural | Requires logic |
| **Caching** | Memoization needed | Already computed |
| **Use Case** | Streams, pipelines | Interactive apps |
| **Complexity** | Higher reasoning | Straightforward |
| **Best For** | Data processing, large datasets | UI, real-time systems |

## เมื่อไหร่ใช้อะไร

- **Lazy Evaluation**: Large data, streams, functional pipelines
- **Eager Evaluation**: Most apps, predictable performance, debugging
