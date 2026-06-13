# SOLID Principles

## หลักการ SOLID

SOLID เป็นหลักการออกแบบ object-oriented ที่ช่วยให้ software มีความ maintainable, scalable, และ testable มากขึ้น

### Single Responsibility Principle (SRP)

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

### Open/Closed Principle (OCP)

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

### Liskov Substitution Principle (LSP)

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

### Interface Segregation Principle (ISP)

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

### Dependency Inversion Principle (DIP)

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
