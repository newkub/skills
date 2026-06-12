# Website

## Official Documentation

### Cloudflare Agents SDK
- **URL**: https://developers.cloudflare.com/agents/
- **Description**: Official documentation for the Cloudflare Agents SDK
- **Sections**:
  - Getting started guides
  - API reference
  - Examples
  - Best practices

### Quick Start
- **URL**: https://developers.cloudflare.com/agents/getting-started/quick-start/
- **Description**: Create your first agent in minutes
- **Topics**:
  - Project setup
  - Basic agent creation
  - Testing locally
  - Deployment

### Add to Existing Project
- **URL**: https://developers.cloudflare.com/agents/getting-started/add-to-existing-project/
- **Description**: Integrate Agents SDK into existing Workers projects
- **Topics**:
  - Installation
  - Configuration
  - Migration

## API Reference

### Configuration
- **URL**: https://developers.cloudflare.com/agents/api-reference/configuration/
- **Description**: Wrangler configuration for agents
- **Topics**:
  - Durable Objects bindings
  - Migrations
  - Environment variables

### Agents API
- **URL**: https://developers.cloudflare.com/agents/api-reference/agents-api/
- **Description**: Agent class API reference
- **Topics**:
  - Agent lifecycle
  - State management
  - Callable methods
  - Lifecycle hooks

### Store and Sync State
- **URL**: https://developers.cloudflare.com/agents/api-reference/store-and-sync-state/
- **Description**: State management API
- **Topics**:
  - setState
  - validateStateChange
  - State synchronization

### Routing
- **URL**: https://developers.cloudflare.com/agents/api-reference/routing/
- **Description**: Request routing
- **Topics**:
  - URL patterns
  - routeAgentRequest
  - Custom routing

### Callable Methods
- **URL**: https://developers.cloudflare.com/agents/api-reference/callable-methods/
- **Description**: RPC-style methods
- **Topics**:
  - @callable decorator
  - Streaming responses
  - Timeouts

### Schedule Tasks
- **URL**: https://developers.cloudflare.com/agents/api-reference/schedule-tasks/
- **Description**: Task scheduling
- **Topics**:
  - schedule()
  - scheduleEvery()
  - Cron expressions

### Run Workflows
- **URL**: https://developers.cloudflare.com/agents/api-reference/run-workflows/
- **Description**: Workflow execution
- **Topics**:
  - AgentWorkflow
  - Multi-step tasks
  - Durable execution

### WebSockets
- **URL**: https://developers.cloudflare.com/agents/api-reference/websockets/
- **Description**: WebSocket integration
- **Topics**:
  - Lifecycle hooks
  - Hibernation
  - Connection management

## Chat Agents

### Chat Agents
- **URL**: https://developers.cloudflare.com/agents/api-reference/chat-agents/
- **Description**: AI chat agent implementation
- **Topics**:
  - AIChatAgent
  - Streaming
  - Tools
  - Persistence

### Client SDK
- **URL**: https://developers.cloudflare.com/agents/api-reference/client-sdk/
- **Description**: React client SDK
- **Topics**:
  - useAgent
  - useAgentChat
  - React hooks

### Client Tools
- **URL**: https://developers.cloudflare.com/agents/api-reference/client-tools/
- **Description**: Client-side tools
- **Topics**:
  - Tool execution
  - Auto-continue
  - Error handling

## Advanced Features

### Trigger Patterns
- **URL**: https://developers.cloudflare.com/agents/api-reference/trigger-patterns/
- **Description**: Server-driven messages
- **Topics**:
  - saveMessages
  - waitUntilStable
  - Proactive turns

### Resumable Streaming
- **URL**: https://developers.cloudflare.com/agents/api-reference/resumable-streaming/
- **Description**: Stream recovery
- **Topics**:
  - Disconnect handling
  - Stream resumption
  - State recovery

### Email
- **URL**: https://developers.cloudflare.com/agents/api-reference/email/
- **Description**: Email handling
- **Topics**:
  - Email routing
  - Reply resolver
  - Attachments

### MCP Client
- **URL**: https://developers.cloudflare.com/agents/api-reference/mcp-client-api/
- **Description**: MCP client integration
- **Topics**:
  - Connecting to servers
  - Tool discovery
  - Protocol

### MCP Server
- **URL**: https://developers.cloudflare.com/agents/api-reference/mcp-agent-api/
- **Description**: Building MCP servers
- **Topics**:
  - McpAgent
  - Tool registration
  - Security

### MCP Transports
- **URL**: https://developers.cloudflare.com/agents/api-reference/mcp-transports/
- **Description**: MCP transport options
- **Topics**:
  - Streamable HTTP
  - SSE
  - RPC

### Securing MCP
- **URL**: https://developers.cloudflare.com/agents/api-reference/securing-mcp-servers/
- **Description**: MCP security
- **Topics**:
  - OAuth
  - Proxy MCP
  - Hardening

## Concepts

### Human in the Loop
- **URL**: https://developers.cloudflare.com/agents/concepts/human-in-the-loop/
- **Description**: Approval flows
- **Topics**:
  - needsApproval
  - Workflows
  - User interaction

### Durable Execution
- **URL**: https://developers.cloudflare.com/agents/api-reference/durable-execution/
- **Description**: Long-running tasks
- **Topics**:
  - runFiber()
  - stash()
  - DO eviction

### Queue
- **URL**: https://developers.cloudflare.com/agents/api-reference/queue-tasks/
- **Description**: Built-in queue
- **Topics**:
  - queue()
  - FIFO
  - Retries

### Retries
- **URL**: https://developers.cloudflare.com/agents/api-reference/retries/
- **Description**: Retry logic
- **Topics**:
  - this.retry()
  - Backoff
  - Jitter

### Observability
- **URL**: https://developers.cloudflare.com/agents/api-reference/observability/
- **Description**: Monitoring
- **Topics**:
  - Diagnostics channel
  - Events
  - Debugging

### Push Notifications
- **URL**: https://developers.cloudflare.com/agents/api-reference/push-notifications/
- **Description**: Web Push
- **Topics**:
  - VAPID
  - Subscriptions
  - Delivery

### Webhooks
- **URL**: https://developers.cloudflare.com/agents/api-reference/webhooks/
- **Description**: Webhook handling
- **Topics**:
  - Receiving webhooks
  - Verification
  - Processing

### Cross-Domain Auth
- **URL**: https://developers.cloudflare.com/agents/api-reference/cross-domain-authentication/
- **Description**: Authentication
- **Topics**:
  - WebSocket auth
  - Tokens
  - CORS

### Readonly
- **URL**: https://developers.cloudflare.com/agents/api-reference/readonly-connections/
- **Description**: Readonly connections
- **Topics**:
  - shouldConnectionBeReadonly
  - Permissions

## Experimental

### Voice
- **URL**: https://developers.cloudflare.com/agents/api-reference/voice/
- **Description**: Voice features
- **Topics**:
  - STT/TTS
  - withVoice
  - Experimental

### Browser Tools
- **URL**: https://developers.cloudflare.com/agents/api-reference/browse-the-web/
- **Description**: Browser automation
- **Topics**:
  - CDP
  - Browsing
  - Experimental

### Think
- **URL**: https://developers.cloudflare.com/agents/api-reference/think/
- **Description**: Higher-level chat agent
- **Topics**:
  - Advanced reasoning
  - Tool orchestration
  - Experimental

## Migration Guides

### AI SDK v5
- **URL**: https://developers.cloudflare.com/agents/guides/migration-to-ai-sdk-v5/
- **Description**: Migrate to AI SDK v5
- **Topics**:
  - Breaking changes
  - Update steps
  - Examples

### AI SDK v6
- **URL**: https://developers.cloudflare.com/agents/guides/migration-to-ai-sdk-v6/
- **Description**: Migrate to AI SDK v6
- **Topics**:
  - Breaking changes
  - Update steps
  - Examples

## Community

### GitHub
- **URL**: https://github.com/cloudflare/workers-sdk
- **Description**: Source code and issues

### Discord
- **URL**: https://discord.gg/cloudflaredev
- **Description**: Community Discord server

### Twitter
- **URL**: https://twitter.com/cloudflare
- **Description**: Cloudflare Twitter
