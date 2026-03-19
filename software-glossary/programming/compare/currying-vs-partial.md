# Currying vs Partial Application

## เปรียบเทียบ

| หัวข้อ | Currying | Partial Application |
|--------|----------|---------------------|
| **Definition** | f(a,b,c) -> f(a)(b)(c) | f(a,b,c) with fixed a |
| **Arity** | Transforms to unary | Preserves original arity |
| **Steps** | Multiple single-arg functions | One multi-arg function |
| **Evaluation** | Lazy chain | Immediate with fixed args |
| **Use Case** | Functional composition | Pre-configuring functions |
| **Examples** | Haskell (native), Lodash | bind(), _.partial |
| **Point-Free** | Enables | Can enable |
| **Reusability** | High with partial chains | Specific configurations |
| **Best For** | Pipelines, transformers | Dependency injection |
| **Together** | Often combined | Often combined |

## เมื่อไหร่ใช้อะไร

- **Currying**: Functional pipelines, point-free style, Haskell
- **Partial Application**: Pre-configuring callbacks, dependency injection
