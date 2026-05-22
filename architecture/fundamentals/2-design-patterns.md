---
description: Design Patterns พื้นฐานที่ใช้ใน Software Architecture

---

จำกัดการสร้าง instance ให้มีเพียงตัวเดียว

`	ypescript  ypescript`	ypescript  ypescript`typescript
class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connection: any;

  private constructor() {
    this.connection = this.connect();
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  private connect() {
    // Database connection logic
  }
}

// Usage
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

กำหนด interface สำหรับสร้าง object แต่ปล่อยให้ subclasses ตัดสินใจว่าจะสร้าง class ไหน

`	ypescript  ypescript`	ypescript  ypescript`typescript
interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() { console.log("Driving a car"); }
}

class Motorcycle implements Vehicle {
  drive() { console.log("Riding a motorcycle"); }
}

abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;

  deliverVehicle() {
    const vehicle = this.createVehicle();
    vehicle.drive();
  }
}

class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

class MotorcycleFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Motorcycle();
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

สร้าง families ของ related objects โดยไม่ต้องระบุ concrete classes

`	ypescript  ypescript`	ypescript  ypescript`typescript
interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

class WindowsButton implements Button {
  render() { console.log("Windows button"); }
}

class WindowsCheckbox implements Checkbox {
  render() { console.log("Windows checkbox"); }
}

class MacButton implements Button {
  render() { console.log("Mac button"); }
}

class MacCheckbox implements Checkbox {
  render() { console.log("Mac checkbox"); }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsFactory implements GUIFactory {
  createButton(): Button { return new WindowsButton(); }
  createCheckbox(): Checkbox { return new WindowsCheckbox(); }
}

class MacFactory implements GUIFactory {
  createButton(): Button { return new MacButton(); }
  createCheckbox(): Checkbox { return new MacCheckbox(); }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ทำให้ interfaces ที่ไม่เข้ากันสามารถทำงานร่วมกันได้

`	ypescript  ypescript`	ypescript  ypescript`typescript
interface MediaPlayer {
  play(audioType: string, fileName: string): void;
}

interface AdvancedMediaPlayer {
  playVlc(fileName: string): void;
  playMp4(fileName: string): void;
}

class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(fileName: string) { console.log(`Playing vlc file: ${fileName}`	ypescript  ypescript); }
  playMp4(fileName: string) { /* Do nothing */ }
}

class Mp4Player implements AdvancedMediaPlayer {
  playVlc(fileName: string) { /* Do nothing */ }
  playMp4(fileName: string) { console.log(`Playing mp4 file: ${fileName}`	ypescript  ypescript); }
}

class MediaAdapter implements MediaPlayer {
  private advancedMusicPlayer: AdvancedMediaPlayer;

  constructor(audioType: string) {
    if (audioType === "vlc") {
      this.advancedMusicPlayer = new VlcPlayer();
    } else if (audioType === "mp4") {
      this.advancedMusicPlayer = new Mp4Player();
    }
  }

  play(audioType: string, fileName: string) {
    if (audioType === "vlc") {
      this.advancedMusicPlayer.playVlc(fileName);
    } else if (audioType === "mp4") {
      this.advancedMusicPlayer.playMp4(fileName);
    }
  }
}

class AudioPlayer implements MediaPlayer {
  private mediaAdapter: MediaAdapter;

  play(audioType: string, fileName: string) {
    if (audioType === "mp3") {
      console.log(`Playing mp3 file: ${fileName}`	ypescript  ypescript);
    } else if (audioType === "vlc" || audioType === "mp4") {
      this.mediaAdapter = new MediaAdapter(audioType);
      this.mediaAdapter.play(audioType, fileName);
    }
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

เพิ่ม functionality ให้กับ objects แบบ dynamic

`	ypescript  ypescript`	ypescript  ypescript`typescript
interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost() { return 10; }
  description() { return "Simple coffee"; }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost() { return this.coffee.cost() + 2; }
  description() { return this.coffee.description() + ", milk"; }
}

class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost() { return this.coffee.cost() + 1; }
  description() { return this.coffee.description() + ", sugar"; }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee.description()); // "Simple coffee, milk, sugar"
console.log(coffee.cost()); // 13
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ทำให้ complex subsystem ง่ายต่อการใช้งาน

`	ypescript  ypescript`	ypescript  ypescript`typescript
class CPU {
  freeze() { console.log("CPU freezing"); }
  jump(position: number) { console.log(`Jumping to ${position}`	ypescript  ypescript); }
  execute() { console.log("CPU executing"); }
}

class Memory {
  load(position: number, data: string) {
    console.log(`Loading data "${data}" at position ${position}`	ypescript  ypescript);
  }
}

class HardDrive {
  read(lba: number, size: number) {
    console.log(`Reading ${size} bytes from LBA ${lba}`	ypescript  ypescript);
    return "data";
  }
}

class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.freeze();
    const data = this.hardDrive.read(0, 1024);
    this.memory.load(0, data);
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

// Usage
const computer = new ComputerFacade();
computer.start();
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

กำหนด one-to-many dependency ระหว่าง objects

`	ypescript  ypescript`	ypescript  ypescript`typescript
interface Observer {
  update(temperature: number): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  attach(observer: Observer) { this.observers.push(observer); }
  detach(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) this.observers.splice(index, 1);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temperature: number) {
    this.temperature = temperature;
    this.notify();
  }
}

class TemperatureDisplay implements Observer {
  update(temperature: number) {
    console.log(`Temperature display: ${temperature}°C`	ypescript  ypescript);
  }
}

class FanController implements Observer {
  update(temperature: number) {
    if (temperature > 25) {
      console.log("Turning fan on");
    } else {
      console.log("Turning fan off");
    }
  }
}

// Usage
const weatherStation = new WeatherStation();
const display = new TemperatureDisplay();
const fan = new FanController();

weatherStation.attach(display);
weatherStation.attach(fan);
weatherStation.setTemperature(30);
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

กำหนด family ของ algorithms และทำให้สามารถสลับกันได้

`	ypescript  ypescript`	ypescript  ypescript`typescript
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  constructor(private name: string, private cardNumber: string) {}

  pay(amount: number) {
    console.log(`Paid ${amount} using credit card ending in ${this.cardNumber.slice(-4)}`	ypescript  ypescript);
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number) {
    console.log(`Paid ${amount} using PayPal account ${this.email}`	ypescript  ypescript);
  }
}

class ShoppingCart {
  constructor(private paymentStrategy: PaymentStrategy) {}

  checkout(amount: number) {
    this.paymentStrategy.pay(amount);
  }

  setPaymentStrategy(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }
}

// Usage
const cart = new ShoppingCart(new CreditCardPayment("John Doe", "1234567890123456"));
cart.checkout(100);

cart.setPaymentStrategy(new PayPalPayment("john@example.com"));
cart.checkout(50);
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แปลง request เป็น standalone object

`	ypescript  ypescript`	ypescript  ypescript`typescript
interface Command {
  execute(): void;
  undo(): void;
}

class Light {
  turnOn() { console.log("Light is on"); }
  turnOff() { console.log("Light is off"); }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() { this.light.turnOn(); }
  undo() { this.light.turnOff(); }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() { this.light.turnOff(); }
  undo() { this.light.turnOn(); }
}

class RemoteControl {
  private command: Command | null = null;
  private history: Command[] = [];

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    if (this.command) {
      this.command.execute();
      this.history.push(this.command);
    }
  }

  pressUndo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // Light is on

remote.setCommand(lightOff);
remote.pressButton(); // Light is off

remote.pressUndo(); // Light is on
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Singleton** - สำหรับ resources ที่ต้องมีเพียงตัวเดียว (database connections, logging)

- **Factory** - เมื่อต้องการสร้าง objects แบบ dynamic

- **Adapter** - เมื่อต้อง integrate systems ที่มี interfaces ต่างกัน

- **Decorator** - เมื่อต้องเพิ่ม functionality แบบ runtime

- **Observer** - สำหรับ event-driven systems

- **Strategy** - เมื่อต้องสลับ algorithms แบบ runtime

- **Pattern Overuse** - ใช้ patterns มากเกินไปโดยไม่จำเป็น

- **Pattern Misuse** - ใช้ pattern ที่ไม่เหมาะสมกับปัญหา

- **Complexity for Complexity** - ใช้ patterns เพื่อความซับซ้อนโดยไม่มีประโยชน์




