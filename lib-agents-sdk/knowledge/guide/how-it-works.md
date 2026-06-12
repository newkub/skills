# How It Works

## Request Lifecycle

1. Request เข้ามาที่ `/agents/{agent-name}/{instance-name}`
2. routeAgentRequest() route ไปยัง Agent instance
3. Agent class ประมวลผล request
4. Response ถูกส่งกลับ

## State Synchronization

- State ถูกเก็บใน SQLite
- setState() sync state ไปยัง connected clients
- Clients ได้รับ updates ผ่าน WebSocket

## RPC Flow

1. Client เรียก method ผ่าน WebSocket
2. @callable() method ถูก execute
3. Result ถูกส่งกลับไปยัง client
4. Streaming responses ถูกส่งเป็น chunks

## Durable Execution

- runFiber() สร้าง fiber ที่ survive eviction
- stash() save intermediate state
- เมื่อ DO ถูก evict และ reload, fiber จะ resume
