# API Reference

API reference และ documentation สำหรับ Mastra

## Agent API

### Constructor

```typescript
new Agent(config: AgentConfig)
```

**Parameters:**
- `config.name` (string) - Agent name
- `config.description` (string) - Agent description
- `config.tools` (object) - Tools available to agent
- `config.memory` (Memory) - Memory instance
- `config.workflow` (Workflow) - Workflow instance
- `config.llm` (LLMProvider) - LLM provider

### Methods

#### execute

```typescript
agent.execute(input: string, context?: ExecutionContext): Promise<AgentResponse>
```

**Parameters:**
- `input` (string) - User input
- `context` (ExecutionContext) - Execution context

**Returns:** Promise<AgentResponse>

#### addTool

```typescript
agent.addTool(tool: Tool): void
```

**Parameters:**
- `tool` (Tool) - Tool to add

#### removeTool

```typescript
agent.removeTool(toolName: string): void
```

**Parameters:**
- `toolName` (string) - Name of tool to remove

## Workflow API

### Constructor

```typescript
new Workflow(config: WorkflowConfig)
```

**Parameters:**
- `config.name` (string) - Workflow name
- `config.steps` (WorkflowStep[]) - Workflow steps
- `config.retry` (RetryConfig) - Retry configuration

### Methods

#### execute

```typescript
workflow.execute(input: WorkflowInput): Promise<WorkflowResult>
```

**Parameters:**
- `input` (WorkflowInput) - Workflow input

**Returns:** Promise<WorkflowResult>

#### addStep

```typescript
workflow.addStep(step: WorkflowStep): void
```

**Parameters:**
- `step` (WorkflowStep) - Step to add

#### removeStep

```typescript
workflow.removeStep(stepId: string): void
```

**Parameters:**
- `stepId` (string) - ID of step to remove

## Tool API

### Constructor

```typescript
new Tool(config: ToolConfig)
```

**Parameters:**
- `config.name` (string) - Tool name
- `config.description` (string) - Tool description
- `config.schema` (object) - Input/output schema
- `config.execute` (function) - Execution function

### Methods

#### execute

```typescript
tool.execute(input: ToolInput, context?: ToolContext): Promise<ToolOutput>
```

**Parameters:**
- `input` (ToolInput) - Tool input
- `context` (ToolContext) - Tool context

**Returns:** Promise<ToolOutput>

## Memory API

### Constructor

```typescript
new Memory(config: MemoryConfig)
```

**Parameters:**
- `config.store` (Store) - Storage backend
- `config.retention` (RetentionConfig) - Retention configuration
- `config.retrieval` (RetrievalConfig) - Retrieval configuration

### Methods

#### store

```typescript
memory.store(key: string, value: any): Promise<void>
```

**Parameters:**
- `key` (string) - Storage key
- `value` (any) - Value to store

**Returns:** Promise<void>

#### retrieve

```typescript
memory.retrieve(key: string): Promise<any>
```

**Parameters:**
- `key` (string) - Storage key

**Returns:** Promise<any>

#### search

```typescript
memory.search(query: string, options?: SearchOptions): Promise<SearchResult[]>
```

**Parameters:**
- `query` (string) - Search query
- `options` (SearchOptions) - Search options

**Returns:** Promise<SearchResult[]>

## Configuration API

### AgentConfig

```typescript
interface AgentConfig {
  name: string;
  description?: string;
  tools?: Record<string, Tool>;
  memory?: Memory;
  workflow?: Workflow;
  llm?: LLMProvider;
  debug?: boolean;
}
```

### WorkflowConfig

```typescript
interface WorkflowConfig {
  name: string;
  steps: WorkflowStep[];
  retry?: RetryConfig;
  debug?: boolean;
}
```

### ToolConfig

```typescript
interface ToolConfig {
  name: string;
  description?: string;
  schema?: object;
  execute: (input: any, context?: any) => Promise<any>;
  cache?: Cache;
  retry?: RetryConfig;
}
```

### MemoryConfig

```typescript
interface MemoryConfig {
  store: Store;
  retention?: RetentionConfig;
  retrieval?: RetrievalConfig;
}
```

## Types

### AgentResponse

```typescript
interface AgentResponse {
  message: string;
  toolsUsed?: string[];
  context?: any;
  metadata?: any;
}
```

### WorkflowResult

```typescript
interface WorkflowResult {
  status: 'completed' | 'failed' | 'pending';
  steps: StepResult[];
  output?: any;
  error?: Error;
}
```

### ToolOutput

```typescript
interface ToolOutput {
  success: boolean;
  data?: any;
  error?: Error;
}
```

## Events

### Agent Events

- `agent.execute` - Agent execution started
- `agent.complete` - Agent execution completed
- `agent.error` - Agent execution error

### Workflow Events

- `workflow.start` - Workflow started
- `workflow.step.start` - Workflow step started
- `workflow.step.complete` - Workflow step completed
- `workflow.complete` - Workflow completed
- `workflow.error` - Workflow error

### Tool Events

- `tool.execute` - Tool execution started
- `tool.complete` - Tool execution completed
- `tool.error` - Tool execution error
