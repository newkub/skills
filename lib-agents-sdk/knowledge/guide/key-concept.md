# Key Concepts

## Agent Class

Agent class เป็นหลักของ Agents SDK ที่ extends จาก Durable Object และมีความสามารถในการจัดการ state, scheduling, และ RPC

## State Management

- **initialState** - กำหนด state เริ่มต้น
- **setState** - อัปเดต state และ sync ไปยัง clients
- **validateStateChange** - validate state ก่อนอัปเดต
- **onStateUpdate** - callback เมื่อ state ถูกอัปเดต

## Callable Methods

- **@callable()** - decorator สำหรับ methods ที่สามารถเรียกผ่าน WebSocket
- **Streaming** - รองรับ streaming responses
- **Timeouts** - กำหนด timeout สำหรับ RPC calls

## Scheduling

- **schedule()** - schedule task แบบ one-time
- **scheduleEvery()** - schedule task แบบ recurring
- **Cron** - รองรับ cron expressions

## Workflows

- **AgentWorkflow** - สำหรับ multi-step background processing
- **runWorkflow()** - เริ่ม workflow ใหม่

## Durable Execution

- **runFiber()** - สำหรับ work ที่ต้อง survive DO eviction
- **stash()** - save intermediate state

## Queue & Retries

- **queue()** - built-in FIFO queue
- **retry()** - retry พร้อม exponential backoff
