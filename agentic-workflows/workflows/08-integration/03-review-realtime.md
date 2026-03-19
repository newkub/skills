---
title: Review Real-Time Communication
description: ตรวจสอบ WebSocket, Server-Sent Events (SSE), real-time data synchronization, connection management และ scaling
auto_execution_mode: 3
file-patterns:
  - "**/workflows/08-integration/*-review-realtime.md"
---

## Prerequisites

- เข้าใจ WebSocket protocol และ lifecycle
- รู้จัก Server-Sent Events (SSE)
- เข้าใจ real-time architecture patterns
- รู้จัก pub/sub systems และ message brokers

## 3.1 Precondition

- มี application ที่มี real-time features
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- มี access ไปยัง WebSocket server (ถ้าต้องทดสอบ)

## 3.2 Prepare

- รวบรวม real-time feature requirements
- ระบุ technology (WebSocket, SSE, Socket.io, etc.)
- เตรียม checklist ตาม real-time best practices
- ทำความเข้าใจ connection limits และ scaling

## 3.3 Execute

1. ตรวจสอบ connection management
   - Connection lifecycle (open, message, close, error)
   - Heartbeat/ping-pong mechanisms
   - Connection state tracking
   - Graceful reconnection logic

2. ตรวจสอบ protocol selection
   - WebSocket สำหรับ bidirectional
   - SSE สำหรับ server-to-client only
   - Long polling fallback
   - Protocol upgrade handling

3. ตรวจสอบ message handling
   - Message serialization (JSON, binary)
   - Message framing และ delimiters
   - Message ordering guarantees
   - Message acknowledgment

4. ตรวจสอบ authentication
   - Connection authentication
   - Token validation ใน handshake
   - Session association
   - Authorization สำหรับ channels/rooms

5. ตรวจสอบ scaling
   - Horizontal scaling support
   - Sticky sessions หรือ shared state
   - Redis/消息 broker สำหรับ multi-server
   - Load balancing strategies

6. ตรวจสอบ resource management
   - Connection limits per client/server
   - Memory cleanup หลัง disconnect
   - Rate limiting สำหรับ messages
   - Backpressure handling

7. ตรวจสอบ error handling
   - Connection failure recovery
   - Message delivery failures
   - Buffer overflow handling
   - Degraded mode operation

## 3.4 Validate

- [ ] Connection management robust
- [ ] Protocol selection appropriate
- [ ] Message handling reliable
- [ ] Authentication secure
- [ ] Scaling strategy รองรับ growth
- [ ] Resource limits configured
- [ ] Error handling comprehensive

## 3.5 Verify

- [ ] ยืนยันว่า connections establish ได้
- [ ] ทดสอบ reconnection กับ network interruptions
- [ ] ตรวจสอบ message delivery under load
- [ ] ทดสอบ scaling กับ multiple servers
