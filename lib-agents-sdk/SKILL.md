---
name: lib-agents-sdk
description: Build AI agents on Cloudflare Workers using the Agents SDK. Load when creating stateful agents, durable workflows, real-time WebSocket apps, scheduled tasks, MCP servers, chat applications, voice agents, or browser automation. Covers Agent class, state management, callable RPC, Workflows, durable execution, queues, retries, observability, and React hooks. Biases towards retrieval over Cloudflare docs over pre-trained knowledge.
---

## When to use

- เมื่อต้องการสร้าง AI agents บน Cloudflare Workers
- เมื่อต้องการ stateful agents ที่มี persistent state
- เมื่อต้องการ durable workflows และ long-running tasks
- เมื่อต้องการ real-time WebSocket applications
- เมื่อต้องการ scheduled tasks และ cron jobs
- เมื่อต้องการ MCP (Model Context Protocol) servers
- เมื่อต้องการ chat applications ที่มี streaming
- เมื่อต้องการ voice agents หรือ browser automation

## Skills Related

- `cloud-cloudflare` - Cloudflare platform and services
- `tool-wrangler` - Cloudflare Workers CLI tool
- `lang-typescript` - TypeScript programming language

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-agents-sdk/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ (optional)
├── principles/                   # หลักการ (optional)
├── references/                   # เอกสารอ้างอิง
├── workflows/                    # Workflows สำหรับ automation
├── templates/                    # Templates สำหรับเริ่มต้น (optional)
├── scripts/                      # Scripts สำหรับ automation (optional)
└── .devin/                       # Rules และ configurations
    ├── goal.md                  # เป้าหมายของ skill
    ├── scope.md                 # Scope และ execute steps
    ├── execute.md               # Execute steps ทั้งหมด
    ├── expected.md              # Expected outcome
    ├── rules/
    │   ├── always-on/           # Structure files ที่ต้องมีเสมอ
    │   │   └── structure-lib.md
    │   ├── glob/                # Files ที่ใช้ glob patterns
    │   └── model_decision/      # Template files สำหรับ model decision
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์

| Topic | Docs URL | Use for |
|-------|----------|---------|
| Getting started | [Quick start](https://developers.cloudflare.com/agents/getting-started/quick-start/) | First agent, project setup |
| Configuration | [Configuration](https://developers.cloudflare.com/agents/api-reference/configuration/) | `wrangler.jsonc`, bindings, assets, deployment |
| Agent class | [Agents API](https://developers.cloudflare.com/agents/api-reference/agents-api/) | Agent lifecycle, patterns, pitfalls |
| State | [Store and sync state](https://developers.cloudflare.com/agents/api-reference/store-and-sync-state/) | `setState`, `validateStateChange`, persistence |
| Callable methods | [Callable methods](https://developers.cloudflare.com/agents/api-reference/callable-methods/) | `@callable`, RPC, streaming, timeouts |
| Workflows | [Run workflows](https://developers.cloudflare.com/agents/api-reference/run-workflows/) | `AgentWorkflow`, durable multi-step tasks |
| Chat agents | [Chat agents](https://developers.cloudflare.com/agents/api-reference/chat-agents/) | `AIChatAgent`, streaming, tools, persistence |
| Client SDK | [Client SDK](https://developers.cloudflare.com/agents/api-reference/client-sdk/) | `useAgent`, `useAgentChat`, React hooks |
| MCP | [MCP client](https://developers.cloudflare.com/agents/api-reference/mcp-client-api/) | Connecting to MCP servers |
| Durable execution | [Durable execution](https://developers.cloudflare.com/agents/api-reference/durable-execution/) | `runFiber()`, `stash()`, surviving DO eviction |

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | installation.md | Installation and setup of Agents SDK |
| 2 | quick-start.md | Quick start guide for creating first agent |
| 3 | configuration.md | Wrangler configuration and agent setup |
| 4 | key-concept.md | Core concepts overview |
| 5 | how-it-works.md | How the SDK works internally |
| 6 | features.md | Available features and capabilities |
| 7 | architecture.md | System architecture and components |
| 8 | best-practices.md | Development best practices |
| 9 | integration.md | Integration with other services |
| 10 | migration.md | Migration guides for AI SDK versions |
| 11 | patterns.md | Common patterns and recipes |
| 12 | performance.md | Performance optimization |
| 13 | security.md | Security considerations |
| 14 | structure.md | Project structure and organization |
| 15 | testing.md | Testing strategies |
| 16 | troubleshooting.md | Common issues and solutions |
| 17 | ecosystem.md | Related tools and services |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | agent-class.md | The Agent class foundation |
| 2 | state-management.md | Managing agent state |
| 3 | callable-methods.md | RPC-style methods |
| 4 | durable-execution.md | Long-running tasks |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | state-immutability.md | Immutable state principle |
| 2 | single-responsibility.md | Single responsibility principle |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | api.md | Complete API documentation |
| 2 | cli.md | Wrangler CLI commands |
| 3 | sitemap.md | Documentation sitemap |
| 4 | website.md | Official documentation links |
| 5 | tui.md | Terminal interface information |
| 6 | configuration.md | Configuration reference |
| 7 | browse-the-web.md | Browser automation |
| 8 | callable.md | Callable methods reference |
| 9 | client-sdk.md | Client-side SDK documentation |
| 10 | codemode.md | Code mode features |
| 11 | durable-execution.md | Durable execution reference |
| 12 | email.md | Email handling |
| 13 | human-in-the-loop.md | Human approval flows |
| 14 | mcp.md | Model Context Protocol |
| 15 | observability.md | Monitoring and debugging |
| 16 | queue-retries.md | Queue and retry logic |
| 17 | routing.md | Request routing |
| 18 | server-driven-messages.md | Server-initiated messages |
| 19 | state-scheduling.md | State and scheduling |
| 20 | streaming-chat.md | Streaming chat |
| 21 | think.md | Think experimental feature |
| 22 | voice.md | Voice features |
| 23 | webhooks-push.md | Webhook handling |
| 24 | workflows.md | Workflow execution |
