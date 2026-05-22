---
description: สไตล์สถาปัตยกรรมต่างๆ และการเลือกใช้

---

แบ่งระบบออกเป็นชั้นๆ (layers) ที่มีความรับผิดชอบชัดเจน

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
┌─────────────────┐
│ Presentation    │ ← UI/Controllers
├─────────────────┤
│ Business Logic  │ ← Services/Domain Logic
├─────────────────┤
│ Data Access     │ ← Repositories/DAOs
├─────────────────┤
│ Database        │ ← Storage Layer
└─────────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Separation of Concerns** - แยกความรับผิดชอบชัดเจน

- **Maintainability** - ง่ายต่อการบำรุงรักษา

- **Reusability** - layers สามารถ reuse ได้

- **Testability** - สามารถ test แต่ละ layer แยกกัน

- **Performance** - การทำงานผ่านหลาย layers อาจช้า

- **Rigidity** - การเปลี่ยนแปลงอาจกระทบหลาย layers

- **Over-engineering** - อาจซับซ้อนเกินไปสำหรับโปรเจกต์เล็ก

- Enterprise applications

- Systems ที่ต้องการ clear separation

- Teams ที่มีความเชี่ยวชาญแตกต่างกัน

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Presentation Layer
class UserController {
  constructor(private userService: UserService) {}
  
  async getUser(id: string) {
    const user = await this.userService.findById(id);
    return new UserDTO(user);
  }
}

// Business Logic Layer
class UserService {
  constructor(private userRepository: UserRepository) {}
  
  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }
}

// Data Access Layer
class UserRepository {
  async findById(id: string) {
    return await Database.user.findUnique({ where: { id } });
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แยก business logic จาก external concerns ผ่าน ports และ adapters

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
    ┌─────────────────┐
    │   Application   │
    │                 │
    │ ┌─────────────┐ │
    │ │   Domain    │ │
    │ └─────────────┘ │
    │                 │
    │ ┌─────────────┐ │
    │ │   Ports     │ │
    │ └─────────────┘ │
    └─────────────────┘
           │
    ┌──────┴──────┐
    │   Adapters   │
    └─────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Technology Independence** - business logic ไม่ขึ้นกับ technology

- **Testability** - ง่ายต่อการ mock external dependencies

- **Flexibility** - สามารถ swap implementations ได้

- **Business Focus** - เน้น business logic กลางๆ

- **Complexity** - ซับซ้อนกว่า layered architecture

- **Learning Curve** - ต้องเข้าใจ concept ของ ports/adapters

- **Overhead** - อาจมี overhead จาก abstractions

- Systems ที่ต้องการ technology independence

- Long-lived applications

- Complex business domains

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Domain (Core)
interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User>;
}

interface EmailService {
  send(to: string, subject: string, body: string): Promise<void>;
}

class UserService {
  constructor(
    private userRepo: UserRepository,
    private emailService: EmailService
  ) {}
  
  async createUser(userData: CreateUserDTO) {
    const user = new User(userData);
    await this.userRepo.save(user);
    await this.emailService.send(user.email, "Welcome", "Thanks for registering");
    return user;
  }
}

// Adapters (Infrastructure)
class DatabaseUserRepository implements UserRepository {
  async save(user: User) {
    await Database.user.create({ data: user.toJSON() });
  }
  
  async findById(id: string) {
    const data = await Database.user.findUnique({ where: { id } });
    return data ? new User(data) : null;
  }
}

class SMTPEmailService implements EmailService {
  async send(to: string, subject: string, body: string) {
    await SMTP.send({ to, subject, body });
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

Organize code ใน concentric circles ตาม Dependency Rule

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
┌─────────────────┐
│   Frameworks    │ ← UI, Web, DB, External
├─────────────────┤
│ Interface Adapters│ ← Controllers, Presenters
├─────────────────┤
│   Use Cases     │ ← Application Business Rules
├─────────────────┤
│   Entities      │ ← Enterprise Business Rules
└─────────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

Dependencies สามารถชี้เข้าใจเท่านั้น ไม่สามารถชี้ออก

- **Independence** - layers ชั้นในสุดอิสระจากทุกอย่าง

- **Testability** - ทุกอย่าง test ได้

- **Flexibility** - สามารถเปลี่ยน frameworks ได้

- **Maintainability** - business logic อยู่กลางๆ

- **Complexity** - ซับซ้อนที่สุดในบรรดา styles

- **Learning Curve** - ต้องเข้าใจ principles อย่างลึกซึ้ง

- **Development Speed** - อาจช้ากว่าในช่วงแรก

- Complex enterprise applications

- Long-term projects

- Systems ที่ต้องการ maximum flexibility

Components สื่อสารผ่าน events แบบ asynchronous

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
┌─────────┐   Event   ┌─────────┐
│Producer │ ────────► │Consumer │
└─────────┘           └─────────┘
       │
       ▼
┌─────────────┐
│ Event Bus   │
└─────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Scalability** - สามารถ scale แต่ละ component แยกกัน

- **Loose Coupling** - components ไม่ต้องรู้จักกันโดยตรง

- **Resilience** - ความล้มเหลวของ component ไม่กระทบระบบทั้งหมด

- **Flexibility** - ง่ายต่อการเพิ่ม/ลบ components

- **Complexity** - การจัดการ async operations ซับซ้อน

- **Debugging** - ยากต่อการ trace flow ของข้อมูล

- **Event Schema** - ต้องจัดการ versioning ของ events

- **Eventual Consistency** - ข้อมูลอาจไม่ consistent ทันที

- Microservices

- Real-time systems

- IoT applications

- High-throughput systems

`	ypescript  ypescript`	ypescript  ypescript`typescript
// Events
interface UserRegistered {
  type: 'USER_REGISTERED';
  payload: { userId: string; email: string };
}

interface OrderPlaced {
  type: 'ORDER_PLACED';
  payload: { orderId: string; userId: string; amount: number };
}

// Event Bus
class EventBus {
  private handlers: Map<string, Function[]> = new Map();
  
  subscribe(eventType: string, handler: Function) {
    const handlers = this.handlers.get(eventType) || [];
    handlers.push(handler);
    this.handlers.set(eventType, handlers);
  }
  
  publish(event: any) {
    const handlers = this.handlers.get(event.type) || [];
    handlers.forEach(handler => handler(event));
  }
}

// Producer
class UserService {
  constructor(private eventBus: EventBus) {}
  
  async registerUser(userData: RegisterUserDTO) {
    const user = await this.createUser(userData);
    
    this.eventBus.publish({
      type: 'USER_REGISTERED',
      payload: { userId: user.id, email: user.email }
    });
    
    return user;
  }
}

// Consumer
class EmailService {
  constructor(private eventBus: EventBus) {
    this.eventBus.subscribe('USER_REGISTERED', this.handleUserRegistered);
  }
  
  private handleUserRegistered = (event: UserRegistered) => {
    this.sendWelcomeEmail(event.payload.email);
  }
  
  private sendWelcomeEmail(email: string) {
    // Send email logic
  }
}
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

แบ่ง application ออกเป็น services ขนาดเล็กที่ทำงานอิสระ

`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript
┌─────────┐  ┌─────────┐  ┌─────────┐
│User API │  │Order API│  │Product │
│Service  │  │Service  │  │API      │
└─────────┘  └─────────┘  └─────────┘
     │            │            │
     └────────────┼────────────┘
                  │
        ┌─────────────┐
        │ API Gateway │
        └─────────────┘
`	ypescript  ypescript`	ypescript  ypescript`	ypescript  ypescript

- **Independent Deployment** - แต่ละ service สามารถ deploy แยกกัน

- **Technology Diversity** - ใช้ technologies ต่างกันได้

- **Scalability** - scale แต่ละ service ตามความต้องการ

- **Fault Isolation** - ความล้มเหลวของ service ไม่กระทบทั้งระบบ

- **Complexity** - การจัดการ distributed systems

- **Network Latency** - communication ผ่าน network

- **Data Consistency** - การจัดการ data ข้าม services

- **Operational Overhead** - ต้องจัดการหลาย services

- Large-scale applications

- Teams ที่ต้องการ autonomy

- Systems ที่ต้องการ high scalability

| Factor | Layered | Hexagonal | Clean | Event-Driven | Microservices |
|--------|---------|-----------|-------|--------------|----------------|
| Complexity | Low | Medium | High | High | Very High |
| Learning Curve | Low | Medium | High | Medium | High |
| Flexibility | Low | High | Very High | High | Very High |
| Testability | Medium | High | Very High | Medium | High |
| Performance | Medium | Medium | Medium | High | High |
| Scalability | Low | Medium | Medium | High | Very High |

- โปรเจกต์ขนาดเล็กถึงกลาง

- Team มีประสบการณ์น้อย

- ต้องการความเรียบง่ายและความเร็วในการพัฒนา

- ต้องการ technology independence

- มี multiple interfaces

- ต้องการ testability สูง

- Complex business domains

- Long-term projects

- ต้องการ maximum flexibility

- High throughput requirements

- Real-time processing

- Loose coupling สำคัญ

- Large-scale applications

- Multiple teams

- Independent deployment สำคัญ

ส่วนใหญ่ใน practice จะใช้ combination ของหลาย styles:

- Microservices ที่มี internal hexagonal architecture

- Event-driven communication ระหว่าง services

- Layered approach ภายในแต่ละ service



