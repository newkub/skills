# Ecosystem

## Core SDK

### Agents SDK
- Main package: `agents`
- Provides Agent class and core functionality
- Required for all agent implementations
- Cloudflare Workers integration

### AI Chat
- Package: `@cloudflare/ai-chat`
- Chat agent implementation
- Streaming chat support
- Tool integration
- Message persistence

## AI Integration

### AI SDK
- Package: `ai`
- Core AI abstraction layer
- Model-agnostic interface
- Streaming support
- Tool calling

### React Integration
- Package: `@ai-sdk/react`
- React hooks for AI chat
- `useAgentChat` hook
- Client-side state management
- Real-time updates

## Cloudflare Services

### Workers AI
- Built-in AI binding
- Text generation
- Image generation
- Embeddings
- Model selection

### Durable Objects
- Persistent storage backend
- State management
- Distributed execution
- Automatic scaling

### KV Storage
- Key-value storage
- Global distribution
- Low latency
- Edge caching

### R2 Storage
- Object storage
- File uploads
- Large data storage
- CDN integration

## MCP (Model Context Protocol)

### MCP Client
- Connect to MCP servers
- Tool discovery
- Protocol implementation
- Transport options

### MCP Server
- Build MCP servers with `McpAgent`
- Expose tools to AI agents
- Secure connections
- OAuth support

### MCP Transports
- Streamable HTTP
- Server-Sent Events (SSE)
- RPC transport
- Custom transports

## Communication

### WebSockets
- Real-time communication
- Bidirectional messaging
- Connection lifecycle
- Hibernation support

### Email
- Email routing
- Secure reply resolver
- Attachment handling
- SMTP integration

### Webhooks
- Receive external webhooks
- Signature verification
- Event processing
- Retry logic

### Push Notifications
- Web Push API
- VAPID keys
- Subscription management
- Background delivery

## Experimental Features

### Voice
- Package: `@cloudflare/voice`
- Speech-to-text (STT)
- Text-to-speech (TTS)
- Real-time audio
- Experimental API

### Browser Tools
- CDP browser automation
- Web browsing
- Page interaction
- Screenshot capture
- Experimental API

### Think
- Package: `@cloudflare/think`
- Higher-level chat agent
- Advanced reasoning
- Tool orchestration
- Experimental API

## Development Tools

### Wrangler
- Cloudflare Workers CLI
- Deployment
- Local development
- Configuration management
- Migration support

### TypeScript
- Type safety
- IntelliSense support
- Compile-time checks
- Decorator support

## Client SDKs

### React SDK
- `useAgent` hook
- `useAgentChat` hook
- Connection management
- State synchronization

### Client Tools
- Client-side tool execution
- Auto-continue after tool results
- Tool validation
- Error handling

## Observability

### Diagnostics Channel
- State change events
- RPC call events
- Schedule events
- Lifecycle events

### Logging
- Structured logging
- Error tracking
- Performance monitoring
- Debugging support
