# Closure vs Object

## เปรียบเทียบ

| หัวข้อ | Closure | Object |
|--------|---------|--------|
| **Data + Behavior** | Functions capture state | Properties + methods |
| **Encapsulation** | Lexical scope | Access modifiers |
| **State Access** | Private by default | Public by default |
| **Memory** | Captured variables | Heap allocated |
| **Identity** | Function reference | Object reference |
| **Methods** | Inner functions | Prototype/class |
| **Factories** | Function returning function | Constructor/class |
| **Use Case** | Callbacks, private state | Complex entities, APIs |
| **Examples** | JS callbacks, Python decorators | Classes, structs |
| **Best For** | Simple state + behavior | Complex state, inheritance |

## เมื่อไหร่ใช้อะไร

- **Closure**: Private state, callbacks, simple factories, functional patterns
- **Object**: Complex state, multiple methods, inheritance, APIs
