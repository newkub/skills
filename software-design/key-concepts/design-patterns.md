# Design Patterns

## รูปแบบการออกแบบ

Design patterns เป็น solutions ที่ใช้ซ้ำได้สำหรับปัญหาที่พบบ่อยใน software design

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
