# Composition vs Inheritance

## เปรียบเทียบ

| หัวข้อ | Composition | Inheritance |
|--------|-------------|-------------|
| **Relationship** | Has-a | Is-a |
| **Flexibility** | High (runtime) | Low (compile-time) |
| **Coupling** | Loose | Tight |
| **Reuse** | Behavior delegation | Code reuse |
| **Testing** | Easy mocking | Complex hierarchies |
| **Fragility** | Resilient | Fragile base class |
| **Diamond Problem** | Avoided | Possible |
| **Examples** | React hooks, decorators | Class extends |
| **Best For** | Behavior sharing | True taxonomies |
| **Modern Trend** | Preferred | Use sparingly |

## เมื่อไหร่ใช้อะไร

- **Composition**: Behavior reuse, flexibility, avoiding hierarchy hell
- **Inheritance**: True specialization, stable taxonomies, polymorphism
