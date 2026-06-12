# Patterns

## Design Patterns ที่ใช้บ่อย

### Creational Patterns

### Factory Method

**Intent**: Define interface for creating object, let subclasses decide

**When to use**:
- Cannot anticipate class of objects to create
- Want subclasses to specify objects to create

**Example**:

```csharp
// Creator
interface ILoggerFactory {
    ILogger CreateLogger();
}

class ConsoleLoggerFactory : ILoggerFactory {
    public ILogger CreateLogger() => new ConsoleLogger();
}

class FileLoggerFactory : ILoggerFactory {
    public ILogger CreateLogger() => new FileLogger();
}

// Usage
ILoggerFactory factory = new ConsoleLoggerFactory();
ILogger logger = factory.CreateLogger();
```

### Builder

**Intent**: Separate construction from representation

**When to use**:
- Complex objects with many parameters
- Different representations of construction process

**Example**:

```csharp
class HouseBuilder {
    private House _house = new House();
    
    public HouseBuilder BuildWalls(string walls) {
        _house.Walls = walls;
        return this;
    }
    
    public HouseBuilder BuildRoof(string roof) {
        _house.Roof = roof;
        return this;
    }
    
    public HouseBuilder BuildWindows(string windows) {
        _house.Windows = windows;
        return this;
    }
    
    public House Build() => _house;
}

// Usage
var house = new HouseBuilder()
    .BuildWalls("Brick")
    .BuildRoof("Tile")
    .BuildWindows("Glass")
    .Build();
```

### Singleton

**Intent**: Ensure class has only one instance

**When to use**:
- Exactly one instance needed
- Global access point required

**Example**:

```csharp
class Logger {
    private static Logger _instance;
    private static readonly object _lock = new object();
    
    private Logger() { }
    
    public static Logger Instance {
        get {
            if (_instance == null) {
                lock (_lock) {
                    if (_instance == null) {
                        _instance = new Logger();
                    }
                }
            }
            return _instance;
        }
    }
}
```

### Structural Patterns

### Adapter

**Intent**: Convert interface of class into another interface

**When to use**:
- Need to use existing class with incompatible interface
- Want to create reusable class that cooperates with unrelated classes

**Example**:

```csharp
interface ITarget {
    void Request();
}

class Adaptee {
    public void SpecificRequest() { /* ... */ }
}

class Adapter : ITarget {
    private Adaptee _adaptee;
    
    public Adapter(Adaptee adaptee) {
        _adaptee = adaptee;
    }
    
    public void Request() => _adaptee.SpecificRequest();
}
```

### Decorator

**Intent**: Add responsibilities dynamically

**When to use**:
- Add responsibilities to individual objects dynamically
- Withdraw responsibilities dynamically

**Example**:

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
    private ICoffee _coffee;
    
    public MilkDecorator(ICoffee coffee) => _coffee = coffee;
    
    public double Cost() => _coffee.Cost() + 0.5;
    public string Description() => _coffee.Description() + ", milk";
}

class SugarDecorator : ICoffee {
    private ICoffee _coffee;
    
    public SugarDecorator(ICoffee coffee) => _coffee = coffee;
    
    public double Cost() => _coffee.Cost() + 0.2;
    public string Description() => _coffee.Description() + ", sugar";
}

// Usage
var coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
```

### Facade

**Intent**: Provide unified interface to set of interfaces

**When to use**:
- Complex subsystem needs simple interface
- Want to layer subsystems

**Example**:

```csharp
class ComputerFacade {
    private CPU _cpu;
    private Memory _memory;
    private HardDrive _hardDrive;
    
    public ComputerFacade() {
        _cpu = new CPU();
        _memory = new Memory();
        _hardDrive = new HardDrive();
    }
    
    public void Start() {
        _cpu.Freeze();
        _memory.Load(0x0000, _hardDrive.Read(0, 1024));
        _cpu.Jump(0x0000);
        _cpu.Execute();
    }
}

// Usage
var computer = new ComputerFacade();
computer.Start();
```

### Behavioral Patterns

### Strategy

**Intent**: Define family of algorithms, encapsulate each

**When to use**:
- Many related classes differ only in behavior
- Need variants of algorithm

**Example**:

```csharp
interface ISortStrategy {
    void Sort(int[] array);
}

class BubbleSort : ISortStrategy {
    public void Sort(int[] array) { /* bubble sort */ }
}

class QuickSort : ISortStrategy {
    public void Sort(int[] array) { /* quick sort */ }
}

class Sorter {
    private ISortStrategy _strategy;
    
    public Sorter(ISortStrategy strategy) {
        _strategy = strategy;
    }
    
    public void SetStrategy(ISortStrategy strategy) {
        _strategy = strategy;
    }
    
    public void Sort(int[] array) {
        _strategy.Sort(array);
    }
}

// Usage
var sorter = new Sorter(new BubbleSort());
sorter.Sort(array);
sorter.SetStrategy(new QuickSort());
sorter.Sort(array);
```

### Observer

**Intent**: Define one-to-many dependency

**When to use**:
- Change to object requires changing others
- Don't know how many objects need to be changed

**Example**:

```csharp
interface IObserver {
    void Update(string message);
}

interface ISubject {
    void Attach(IObserver observer);
    void Detach(IObserver observer);
    void Notify(string message);
}

class NewsAgency : ISubject {
    private List<IObserver> _observers = new List<IObserver>();
    
    public void Attach(IObserver observer) => _observers.Add(observer);
    public void Detach(IObserver observer) => _observers.Remove(observer);
    
    public void Notify(string message) {
        foreach (var observer in _observers) {
            observer.Update(message);
        }
    }
}

class NewsChannel : IObserver {
    public void Update(string message) {
        Console.WriteLine($"News received: {message}");
    }
}

// Usage
var agency = new NewsAgency();
var channel1 = new NewsChannel();
var channel2 = new NewsChannel();

agency.Attach(channel1);
agency.Attach(channel2);
agency.Notify("Breaking news!");
```

### Command

**Intent**: Encapsulate request as object

**When to use**:
- Parameterize objects with operations
- Queue operations, execute at different times

**Example**:

```csharp
interface ICommand {
    void Execute();
    void Undo();
}

class Light {
    public void On() => Console.WriteLine("Light is on");
    public void Off() => Console.WriteLine("Light is off");
}

class LightOnCommand : ICommand {
    private Light _light;
    
    public LightOnCommand(Light light) => _light = light;
    
    public void Execute() => _light.On();
    public void Undo() => _light.Off();
}

class RemoteControl {
    private ICommand _command;
    
    public void SetCommand(ICommand command) => _command = command;
    
    public void PressButton() => _command.Execute();
    public void PressUndo() => _command.Undo();
}

// Usage
var light = new Light();
var command = new LightOnCommand(light);
var remote = new RemoteControl();
remote.SetCommand(command);
remote.PressButton();
```

### Repository Pattern

**Intent**: Mediate between domain and data mapping

**When to use**:
- Need to separate domain logic from data access
- Want to test domain logic without database

**Example**:

```csharp
interface IUserRepository {
    User GetById(Guid id);
    IEnumerable<User> GetAll();
    void Add(User user);
    void Update(User user);
    void Delete(Guid id);
}

class SqlUserRepository : IUserRepository {
    private readonly DbContext _context;
    
    public SqlUserRepository(DbContext context) => _context = context;
    
    public User GetById(Guid id) => _context.Users.Find(id);
    public IEnumerable<User> GetAll() => _context.Users.ToList();
    public void Add(User user) => _context.Users.Add(user);
    public void Update(User user) => _context.Users.Update(user);
    public void Delete(Guid id) => _context.Users.Remove(_context.Users.Find(id));
}
```

### Unit of Work Pattern

**Intent**: Maintain list of objects affected by transaction

**When to use**:
- Need to commit multiple operations as single transaction
- Want to track changes

**Example**:

```csharp
interface IUnitOfWork : IDisposable {
    IUserRepository Users { get; }
    IOrderRepository Orders { get; }
    int SaveChanges();
}

class UnitOfWork : IUnitOfWork {
    private readonly DbContext _context;
    
    public UnitOfWork(DbContext context) => _context = context;
    
    public IUserRepository Users => new SqlUserRepository(_context);
    public IOrderRepository Orders => new SqlOrderRepository(_context);
    
    public int SaveChanges() => _context.SaveChanges();
    
    public void Dispose() => _context.Dispose();
}

// Usage
using (var uow = new UnitOfWork(context)) {
    var user = uow.Users.GetById(userId);
    var order = new Order(user);
    uow.Orders.Add(order);
    uow.SaveChanges();
}
```
