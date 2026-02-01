# JavaScript Design Patterns

## รูปแบบการออกแบบที่นิยมใน JavaScript

### 1. Module Pattern
```javascript
// IIFE Module
const ShoppingCart = (() => {
  let cart = [];
  
  return {
    addItem: (item) => cart.push(item),
    getItems: () => [...cart],
    getTotal: () => cart.reduce((sum, item) => sum + item.price, 0)
  };
})();
```

### 2. Singleton Pattern
```javascript
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connection = this.connect();
    DatabaseConnection.instance = this;
  }
  
  connect() {
    // Database connection logic
    return { connected: true };
  }
}
```

### 3. Factory Pattern
```javascript
class AnimalFactory {
  static createAnimal(type, name) {
    switch(type) {
      case 'dog':
        return new Dog(name);
      case 'cat':
        return new Cat(name);
      default:
        throw new Error('Unknown animal type');
    }
  }
}

class Dog {
  constructor(name) {
    this.name = name;
    this.sound = 'Woof';
  }
}
```

### 4. Observer Pattern
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}
```

### 5. Strategy Pattern
```javascript
class PaymentStrategy {
  pay(amount) {
    throw new Error('Pay method must be implemented');
  }
}

class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid $${amount} with credit card`);
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid $${amount} with PayPal`);
  }
}
```

### 6. Decorator Pattern
```javascript
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 1;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 0.5;
  }
}
```

### 7. Command Pattern
```javascript
class Command {
  execute() {
    throw new Error('Execute method must be implemented');
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  
  execute() {
    this.light.turnOn();
  }
}

class RemoteControl {
  constructor() {
    this.command = null;
  }
  
  setCommand(command) {
    this.command = command;
  }
  
  pressButton() {
    this.command.execute();
  }
}
```

## When to Use Each Pattern

- **Module Pattern**: สำหรับ encapsulation และ namespace management
- **Singleton**: สำหรับ resources ที่ต้องการ instance เดียว (database connections, config)
- **Factory**: สำหรับการสร้าง objects ที่มี type ต่างกัน
- **Observer**: สำหรับ event-driven systems
- **Strategy**: สำหรับ algorithms ที่สามารถเปลี่ยนแปลงได้
- **Decorator**: สำหรับเพิ่ม functionality แบบ dynamic
- **Command**: สำหรับ undo/redo functionality หรือ queue operations
