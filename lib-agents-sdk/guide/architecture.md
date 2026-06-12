# Architecture

## Core Components

### Agent Class
- Base class for all agents
- Manages state, lifecycle, and connections
- Provides callable methods for RPC
- Built on Cloudflare Durable Objects

### State Management
- SQLite-backed persistent storage
- Automatic synchronization to clients
- State validation via `validateStateChange`
- State update hooks via `onStateUpdate`

### Routing System
- URL-based routing: `/agents/{agent-name}/{instance-name}`
- `routeAgentRequest` for automatic routing
- Custom routing patterns supported
- Connection management

### Durable Execution
- `runFiber()` for long-running tasks
- `stash()` for checkpointing
- Survives DO eviction
- Resumable execution

## Data Flow

### Client → Agent
1. WebSocket connection established
2. Client calls `@callable` method
3. Agent processes request
4. State updated via `setState`
5. Changes synced to client

### Agent → Server
1. Agent schedules task via `schedule()`
2. Task executes at specified time
3. Agent processes result
4. State updated if needed

### Agent → External
1. Agent makes HTTP request
2. Response processed
3. State updated
4. Client notified

## Storage Architecture

### SQLite
- Embedded in Durable Objects
- Auto-migrated via wrangler
- Schema versioning
- Transaction support

### State Persistence
- Automatic on state change
- Conflict resolution
- Multi-client sync
- Offline support

## Execution Model

### Request-Response
- Synchronous callable methods
- Streaming responses
- Timeout handling
- Error propagation

### Background Tasks
- Scheduled execution
- Queue-based processing
- Retry logic
- Durable execution

### Event-Driven
- Webhook handling
- Email routing
- Push notifications
- Lifecycle hooks

## Security Architecture

### Authentication
- WebSocket token validation
- Cross-domain auth
- Readonly connections
- MCP server security

### Authorization
- Connection-level permissions
- Method-level access control
- State validation
- Resource isolation

## Scalability

### Horizontal Scaling
- Durable Objects distribution
- Automatic load balancing
- Connection pooling
- State sharding

### Performance
- Efficient state sync
- Minimal payload size
- Connection reuse
- Caching strategies
