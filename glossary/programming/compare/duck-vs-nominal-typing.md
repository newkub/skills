# Duck Typing vs Nominal Typing

## เปรียบเทียบ

| หัวข้อ | Duck Typing | Nominal Typing |
|--------|-------------|----------------|
| **Check** | Structure/behavior | Declared type name |
| **Flexibility** | High | Rigid |
| **Contracts** | Implicit | Explicit |
| **Refactoring** | Risky (silent breaks) | Safe (compile errors) |
| **Examples** | Python, Ruby, JavaScript | Java, C#, TypeScript |
| **Interface** | If it quacks like duck | Must implement interface |
| **Generics** | Natural | Explicit bounds |
| **Best For** | Scripts, flexibility | APIs, large systems |
| **Error Location** | Runtime | Compile time |
| **Philosophy** | If it works, it works | Explicit contracts |

## เมื่อไหร่ใช้อะไร

- **Duck Typing**: Rapid development, internal tools, polymorphic behavior
- **Nominal Typing**: Public APIs, team coordination, refactor safety
