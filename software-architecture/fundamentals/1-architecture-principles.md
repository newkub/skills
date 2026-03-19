---
description: หลักการพื้นฐานทางสถาปัตยกรรมซอฟต์แวร์

---

แต่ละ class/module ควรมีความรับผิดชอบเพียงอย่างเดียว

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Bad: ทำหลายอย่างใน class เดียว
class User {
  saveToDatabase() { /* ... */ }
  sendEmail() { /* ... */ }
  validateInput() { /* ... */ }
}

// Good: แยกความรับผิดชอบ
class UserRepository {
  save(user: User) { /* ... */ }
}

class EmailService {
  send(to: string, content: string) { /* ... */ }
}

class UserValidator {
  validate(user: User) { /* ... */ }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

Software entities ควรเปิดสำหรับการขยาย แต่ปิดสำหรับการแก้ไข

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Bad: ต้องแก้เมื่อมี payment method ใหม่
class PaymentProcessor {
  process(type: string, amount: number) {
    if (type === 'credit') { /* ... */ }
    else if (type === 'paypal') { /* ... */ }
    // ต้องแก้ตรงนี้เมื่อมี method ใหม่
  }
}

// Good: ใช้ polymorphism
interface PaymentMethod {
  process(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  process(amount: number) { /* ... */ }
}

class PayPalPayment implements PaymentMethod {
  process(amount: number) { /* ... */ }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

Objects ของ superclass ควรสามารถแทนที่ด้วย objects ของ subclass ได้โดยไม่เปลี่ยนพฤติกรรม

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Bad: Square ไม่สามารถแทนที่ Rectangle ได้
class Rectangle {
  width: number;
  height: number;
  
  setWidth(width: number) { this.width = width; }
  setHeight(height: number) { this.height = height; }
  getArea() { return this.width * this.height; }
}

class Square extends Rectangle {
  setWidth(width: number) {
    this.width = width;
    this.height = width; // เปลี่ยนความสูงด้วย!
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

Clients ไม่ควรถูกบังคับให้ implement interfaces ที่ไม่ใช้

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Bad: บังคับให้ implement methods ที่ไม่จำเป็น
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class Robot implements Worker {
  work() { /* ... */ }
  eat() { throw new Error("Robots don't eat"); }
  sleep() { throw new Error("Robots don't sleep"); }
}

// Good: แยก interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

High-level modules ไม่ควร depend บน low-level modules ทั้งสองอย่างควร depend บน abstractions

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Bad: High-level ขึ้นตรงกับ Low-level
class LightBulb {
  turnOn() { console.log("Light bulb on"); }
  turnOff() { console.log("Light bulb off"); }
}

class Switch {
  private bulb = new LightBulb();
  
  toggle() {
    if (this.bulb.isOn()) {
      this.bulb.turnOff();
    } else {
      this.bulb.turnOn();
    }
  }
}

// Good: ขึ้นตรงกับ abstraction
interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class LightBulb implements Switchable {
  turnOn() { console.log("Light bulb on"); }
  turnOff() { console.log("Light bulb off"); }
}

class Switch {
  constructor(private device: Switchable) {}
  
  toggle() {
    // Implementation...
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

ทุกชิ้นของ knowledge ควรมีเพียงครั้งเดียวในระบบ

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Bad: ซ้ำกันหลายที่
function calculateDiscount(price: number) {
  return price * 0.9;
}

function calculateTax(price: number) {
  const discountedPrice = price * 0.9; // ซ้ำ!
  return discountedPrice * 0.07;
}

// Good: แยก logic ที่ใช้ซ้ำ
function applyDiscount(price: number, discount: number = 0.1) {
  return price * (1 - discount);
}

function calculateDiscount(price: number) {
  return applyDiscount(price);
}

function calculateTax(price: number) {
  return applyDiscount(price) * 0.07;
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

เลือก solution ที่เรียบง่ายที่สุดที่ทำงานได้

อย่า implement features ที่ไม่จำเป็นในปัจจุบัน

แยกส่วนที่มีความรับผิดชอบต่างกันออกจากกัน

Components ที่เกี่ยวข้องกันควรอยู่ด้วยกัน

Components ควรมีการพึ่งพากันน้อยที่สุด

ซ่อน implementation details จาก external code

เน้นที่ interface ไม่ใช่ implementation

แบ่งระบบออกเป็น modules ที่สามารถทำงานได้อย่างอิสระ

1. **Code Reviews** - ตรวจสอบว่าปฏิบัติตามหลักการ
2. **Static Analysis** - ใช้ tools ตรวจสอบ code quality
3. **Architecture Reviews** - review โครงสร้างเป็นระยะ
4. **Refactoring** - ปรับปรุง code ที่ไม่ตรงตามหลักการ

- **Performance vs Maintainability** - ความเร็ว vs การบำรุงรักษา

- **Flexibility vs Complexity** - ความยืดหยุ่น vs ความซับซ้อน

- **Development Speed vs Quality** - ความเร็วในการพัฒนา vs คุณภาพ



