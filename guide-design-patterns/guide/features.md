# Features

## Purpose

สรุป features ของ Design Patterns ทั้ง 23 patterns ตาม GoF classification

## Scope

- Creational Patterns
- Structural Patterns
- Behavioral Patterns

## Creational Patterns (5)

### 1. Singleton

| Feature | Description |
|---------|-------------|
| Purpose | Ensure single instance globally |
| Implementation | Private constructor, static getInstance() |
| Thread Safety | Double-checked locking in Java |
| Lazy vs Eager | Both options available |
| Use Cases | Logger, Config, Connection Pool |

### 2. Factory Method

| Feature | Description |
|---------|-------------|
| Purpose | Define interface for creating objects |
| Implementation | Subclass decides which class to create |
| Decoupling | Creator from product classes |
| Use Cases | Frameworks, plugin systems |

### 3. Abstract Factory

| Feature | Description |
|---------|-------------|
| Purpose | Create families of related objects |
| Implementation | Interface for factory of factories |
| Consistency | Products from same factory work together |
| Use Cases | Cross-platform UI, theme systems |

### 4. Builder

| Feature | Description |
|---------|-------------|
| Purpose | Construct complex objects step by step |
| Implementation | Separate construction from representation |
| Fluency | Method chaining for readability |
| Use Cases | Complex configurations, SQL builders |

### 5. Prototype

| Feature | Description |
|---------|-------------|
| Purpose | Create objects by cloning existing |
| Implementation | Clone() method, deep vs shallow copy |
| Registry | Prototype registry for reuse |
| Use Cases | Object caching, document templates |

## Structural Patterns (7)

### 6. Adapter

| Feature | Description |
|---------|-------------|
| Purpose | Convert incompatible interface |
| Implementation | Wrapper class translates calls |
| Types | Class adapter (inheritance), Object adapter (composition) |
| Use Cases | Legacy code integration, API wrappers |

### 7. Bridge

| Feature | Description |
|---------|-------------|
| Purpose | Separate abstraction from implementation |
| Implementation | Two hierarchies connected via composition |
| Flexibility | Change abstraction and implementation independently |
| Use Cases | Cross-platform apps, device drivers |

### 8. Composite

| Feature | Description |
|---------|-------------|
| Purpose | Compose objects into tree structures |
| Implementation | Component interface, Container and Leaf classes |
| Transparency | Clients treat individual and compositions same |
| Use Cases | File systems, UI components, organization hierarchies |

### 9. Decorator

| Feature | Description |
|---------|-------------|
| Purpose | Attach responsibilities dynamically |
| Implementation | Wrap object in decorator object |
| Stack | Multiple decorators can stack |
| Use Cases | Stream wrappers, UI enhancements, logging |

### 10. Facade

| Feature | Description |
|---------|-------------|
| Purpose | Simplified interface to subsystem |
| Implementation | One class provides unified interface |
| Subsystem | Complex subsystem hidden |
| Use Cases | Library wrappers, service APIs |

### 11. Flyweight

| Feature | Description |
|---------|-------------|
| Purpose | Share common state across objects |
| Implementation | Factory creates and caches flyweights |
| Intrinsic | Shared (immutable) state |
| Extrinsic | Unique (context-dependent) state |
| Use Cases | Text editors, game objects, caching |

### 12. Proxy

| Feature | Description |
|---------|-------------|
| Purpose | Control access to another object |
| Types | Remote, Virtual, Protection, Logging |
| Implementation | Same interface as real object |
| Use Cases | Lazy loading, access control, monitoring |

## Behavioral Patterns (11)

### 13. Chain of Responsibility

| Feature | Description |
|---------|-------------|
| Purpose | Pass request along chain of handlers |
| Implementation | Each handler has successor |
| Decoupling | Sender doesn't know handler |
| Use Cases | Event handling, middleware chains |

### 14. Command

| Feature | Description |
|---------|-------------|
| Purpose | Encapsulate request as object |
| Implementation | Command interface, concrete commands |
| Features | Undo/redo, queue, macro commands |
| Use Cases | Transaction systems, job schedulers |

### 15. Iterator

| Feature | Description |
|---------|-------------|
| Purpose | Access elements sequentially |
| Implementation | Iterator interface, collection provides |
| Types | External vs internal, mutable vs immutable |
| Use Cases | Collections, traversal, pagination |

### 16. Mediator

| Feature | Description |
|---------|-------------|
| Purpose | Reduce coupling between objects |
| Implementation | Mediator object coordinates |
| Centralization | Communication goes through mediator |
| Use Cases | UI dialogs, chat systems, event buses |

### 17. Memento

| Feature | Description |
|---------|-------------|
| Purpose | Capture object state for later restoration |
| Implementation | Memento stores state, Originator creates/restores |
| Encapsulation | Memento protects state access |
| Use Cases | Undo functionality, checkpoints |

### 18. Observer

| Feature | Description |
|---------|-------------|
| Purpose | Define one-to-many dependency |
| Implementation | Subject maintains observers list |
| Notification | Subject notifies all observers on change |
| Use Cases | Event systems, data binding, listeners |

### 19. State

| Feature | Description |
|---------|-------------|
| Purpose | Alter behavior when state changes |
| Implementation | State objects handle transitions |
| Context | Delegates state-specific behavior |
| Use Cases | Game states, workflow, parsers |

### 20. Strategy

| Feature | Description |
|---------|-------------|
| Purpose | Define family of algorithms |
| Implementation | Interchangeable strategy objects |
| Selection | Context can select strategy |
| Use Cases | Sorting, validation, compression |

### 21. Template Method

| Feature | Description |
|---------|-------------|
| Purpose | Define algorithm skeleton |
| Implementation | Abstract class with hook methods |
| Extension | Subclasses override specific steps |
| Use Cases | Frameworks, data processing |

### 22. Visitor

| Feature | Description |
|---------|-------------|
| Purpose | Separate operations from object structure |
| Implementation | Visitor interface with visit() methods |
| Double Dispatch | Operation selected by both visitor and element |
| Use Cases | AST processing, serialization, reporting |

### 23. Interpreter

| Feature | Description |
|---------|-------------|
| Purpose | Interpret language grammar |
| Implementation | Expression hierarchy, context |
| Efficiency | Consider caching, optimization |
| Use Cases | Parsers, configuration languages |

## Pattern Quick Reference

| # | Pattern | Category | Key Feature |
|---|---------|----------|-------------|
| 1 | Singleton | Creational | One instance |
| 2 | Factory Method | Creational | Subclass creates |
| 3 | Abstract Factory | Creational | Family of objects |
| 4 | Builder | Creational | Step-by-step build |
| 5 | Prototype | Creational | Clone objects |
| 6 | Adapter | Structural | Interface match |
| 7 | Bridge | Structural | Separate hierarchies |
| 8 | Composite | Structural | Tree structure |
| 9 | Decorator | Structural | Add behavior |
| 10 | Facade | Structural | Simplify interface |
| 11 | Flyweight | Structural | Share state |
| 12 | Proxy | Structural | Control access |
| 13 | Chain of Resp. | Behavioral | Pass along chain |
| 14 | Command | Behavioral | Encapsulate request |
| 15 | Iterator | Behavioral | Sequential access |
| 16 | Mediator | Behavioral | Centralize comm. |
| 17 | Memento | Behavioral | Save state |
| 18 | Observer | Behavioral | Event notification |
| 19 | State | Behavioral | Change behavior |
| 20 | Strategy | Behavioral | Interchangeable algo |
| 21 | Template Method | Behavioral | Algorithm skeleton |
| 22 | Visitor | Behavioral | Separate operations |
| 23 | Interpreter | Behavioral | Interpret grammar |