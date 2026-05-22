# Recursion vs Iteration

## เปรียบเทียบ

| หัวข้อ | Recursion | Iteration |
|--------|-----------|-----------|
| **Stack** | Uses call stack | Manual state management |
| **Readability** | Elegant for trees | Straightforward for loops |
| **Performance** | Overhead, stack limit | Faster, memory efficient |
| **Base Case** | Required (termination) | Loop condition |
| **Tail Call** | Can be optimized | N/A |
| **Debugging** | Stack trace depth | Simple stepping |
| **Use Case** | Trees, graphs, divide-conquer | Arrays, sequences, simple loops |
| **Risk** | Stack overflow | Infinite loops |
| **Functional Style** | Natural | Requires reduce/fold |
| **Best For** | Complex structures, elegance | Performance, large datasets |

## เมื่อไหร่ใช้อะไร

- **Recursion**: Tree traversal, elegant algorithms, functional programming
- **Iteration**: Performance critical, large data, simple loops
