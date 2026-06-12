# Mermaid Variants Format

## รูปแบบ Mermaid Diagrams หลากหลาย

### Flowchart

```markdown
```mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
```
```

### Sequence Diagram

```markdown
```mermaid
sequenceDiagram
    participant A as User
    participant B as System
    A->>B: Request
    B-->>A: Response
```
```

### Gantt Chart

```markdown
```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Phase 1
    Task 1           :a1, 2024-01-01, 30d
    Task 2           :after a1, 20d
```
```

### Class Diagram

```markdown
```mermaid
classDiagram
    class Animal{
        +String name
        +eat()
    }
    class Dog{
        +bark()
    }
    Animal <|-- Dog
```
```

### State Diagram

```markdown
```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing
    Processing --> Done
    Done --> [*]
```
```

### ER Diagram

```markdown
```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```
```

### Pie Chart

```markdown
```mermaid
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
```
```

### When to Use

- Flowchart: แสดง process flow
- Sequence: แสดง interactions
- Gantt: แสดง timeline
- Class: แสดง class structure
- State: แสดง state transitions
- ER: แสดง database schema
- Pie: แสดง proportions

### Best Practices

- เลือก diagram type ที่เหมาะสม
- ให้ diagram อ่านง่าย
- ใช้ descriptive labels
- หลีกเลี่ยง diagrams ที่ซับซ้อนเกินไป
