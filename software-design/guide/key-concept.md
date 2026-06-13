# Key Concept

## Software Design Fundamentals

### SOLID Principles

### 1. Single Responsibility Principle (SRP)

หนึ่ง class ควรมีหน้าที่เดียว

**Example**:

```csharp
// ❌ Bad: Multiple responsibilities
class User {
    void Save() { /* save to database */ }
    void SendEmail() { /* send email */ }
    void Validate() { /* validate data */ }
}

// ✅ Good: Single responsibility
class User {
    void Save() { /* save to database */ }
}

class EmailService {
    void SendEmail() { /* send email */ }
}

class Validator {
    void Validate() { /* validate data */ }
}
```

### 2. Open/Closed Principle (OCP)

Class ควรเปิดสำหรับ extension แต่ปิดสำหรับ modification

**Example**:

```csharp
// ❌ Bad: Need to modify for new shapes
class AreaCalculator {
    double Calculate(object shape) {
        if (shape is Circle) return /* circle area */;
        if (shape is Rectangle) return /* rectangle area */;
        // Need to add more if statements
    }
}

// ✅ Good: Open for extension
interface IShape {
    double CalculateArea();
}

class Circle : IShape {
    public double CalculateArea() => Math.PI * Radius * Radius;
}

class Rectangle : IShape {
    public double CalculateArea() => Width * Height;
}
```

### 3. Liskov Substitution Principle (LSP)

Subclass ควรสามารถแทนที่ parent class ได้โดยไม่เสียความถูกต้อง

**Example**:

```csharp
// ❌ Bad: Violates LSP
class Bird {
    virtual void Fly() { /* fly */ }
}

class Penguin : Bird {
    override void Fly() { 
        throw new NotImplementedException(); // Penguins can't fly
    }
}

// ✅ Good: Proper inheritance
class Bird { }

class FlyingBird : Bird {
    virtual void Fly() { /* fly */ }
}

class Penguin : Bird {
    void Swim() { /* swim */ }
}
```

### 4. Interface Segregation Principle (ISP)

Clients ไม่ควรถูกบังคับให้ implement interfaces ที่ไม่ใช้

**Example**:

```csharp
// ❌ Bad: Fat interface
interface IWorker {
    void Work();
    void Eat();
    void Sleep();
}

// ✅ Good: Segregated interfaces
interface IWorkable {
    void Work();
}

interface IEatable {
    void Eat();
}

interface ISleepable {
    void Sleep();
}
```

### 5. Dependency Inversion Principle (DIP)

Depend on abstractions, not concretions

**Example**:

```csharp
// ❌ Bad: Depends on concrete class
class LightSwitch {
    LightBulb bulb = new LightBulb();
    void Toggle() { bulb.Toggle(); }
}

// ✅ Good: Depends on abstraction
interface ISwitchable {
    void Toggle();
}

class LightSwitch {
    ISwitchable device;
    LightSwitch(ISwitchable device) {
        this.device = device;
    }
    void Toggle() { device.Toggle(); }
}
```

### Design Patterns

### Creational Patterns

**Factory Method**: Create objects without specifying exact class

```csharp
interface IProduct { }
class ConcreteProductA : IProduct { }
class ConcreteProductB : IProduct { }

interface IFactory {
    IProduct CreateProduct();
}

class FactoryA : IFactory {
    public IProduct CreateProduct() => new ConcreteProductA();
}
```

**Builder**: Construct complex objects step by step

```csharp
class House {
    public string Walls { get; set; }
    public string Roof { get; set; }
}

class HouseBuilder {
    private House house = new House();
    
    public HouseBuilder BuildWalls(string walls) {
        house.Walls = walls;
        return this;
    }
    
    public HouseBuilder BuildRoof(string roof) {
        house.Roof = roof;
        return this;
    }
    
    public House Build() => house;
}
```

### Structural Patterns

**Adapter**: Convert interface of class into another interface

```csharp
interface ITarget {
    void Request();
}

class Adaptee {
    public void SpecificRequest() { /* ... */ }
}

class Adapter : ITarget {
    private Adaptee adaptee;
    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    public void Request() => adaptee.SpecificRequest();
}
```

**Decorator**: Add behavior dynamically

```csharp
interface ICoffee {
    double Cost();
    string Description();
}

class SimpleCoffee : ICoffee {
    public double Cost() => 1.0;
    public string Description() => "Simple coffee";
}

class MilkDecorator : ICoffee {
    private ICoffee coffee;
    public MilkDecorator(ICoffee coffee) => this.coffee = coffee;
    public double Cost() => coffee.Cost() + 0.5;
    public string Description() => coffee.Description() + ", milk";
}
```

### Behavioral Patterns

**Strategy**: Define family of algorithms, encapsulate each

```csharp
interface IStrategy {
    void Execute();
}

class StrategyA : IStrategy {
    public void Execute() => Console.WriteLine("Strategy A");
}

class Context {
    private IStrategy strategy;
    public Context(IStrategy strategy) => this.strategy = strategy;
    public void SetStrategy(IStrategy strategy) => this.strategy = strategy;
    public void ExecuteStrategy() => strategy.Execute();
}
```

**Observer**: Define one-to-many dependency

```csharp
interface IObserver {
    void Update(string message);
}

interface ISubject {
    void Attach(IObserver observer);
    void Detach(IObserver observer);
    void Notify(string message);
}

class Subject : ISubject {
    private List<IObserver> observers = new List<IObserver>();
    
    public void Attach(IObserver observer) => observers.Add(observer);
    public void Detach(IObserver observer) => observers.Remove(observer);
    public void Notify(string message) {
        foreach (var observer in observers) {
            observer.Update(message);
        }
    }
}
```

### Architectural Patterns

### Layered Architecture

```
┌─────────────────┐
│  Presentation   │
├─────────────────┤
│  Application    │
├─────────────────┤
│  Domain         │
├─────────────────┤
│  Infrastructure  │
└─────────────────┘
```

### Clean Architecture

```
┌─────────────────────────────────┐
│         Application              │
├─────────────────────────────────┤
│         Domain                  │
├─────────────────────────────────┤
│         Infrastructure           │
└─────────────────────────────────┘
```

### Microservices Architecture

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Service │  │ Service │  │ Service │
│    A    │  │    B    │  │    C    │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┴────────────┘
                  │
         ┌────────┴────────┐
         │   API Gateway   │
         └─────────────────┘
```

### Event-Driven Architecture

```
┌─────────┐    ┌─────────┐    ┌─────────┐
│ Producer│───→│  Event  │───→│Consumer │
└─────────┘    │  Bus    │    └─────────┘
               └─────────┘
```
