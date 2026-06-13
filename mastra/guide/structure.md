# Structure

โครงสร้าง project และ folder layout สำหรับ Mastra applications

## โครงสร้างมาตรฐาน

```
my-mastra-app/
├── src/
│   ├── agents/          # Agent definitions
│   │   ├── index.ts
│   │   └── my-agent.ts
│   ├── workflows/       # Workflow definitions
│   │   ├── index.ts
│   │   └── my-workflow.ts
│   ├── tools/           # Tool definitions
│   │   ├── index.ts
│   │   └── my-tool.ts
│   ├── memory/          # Memory configurations
│   │   ├── index.ts
│   │   └── my-memory.ts
│   ├── workspaces/      # Workspace configurations
│   │   ├── index.ts
│   │   └── my-workspace.ts
│   └── index.ts         # Main entry point
├── config/              # Configuration files
│   ├── agents.ts
│   ├── tools.ts
│   └── memory.ts
├── tests/               # Test files
│   ├── agents.test.ts
│   ├── workflows.test.ts
│   └── tools.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Folder Descriptions

### src/agents/

เก็บ agent definitions ทั้งหมด

**Structure:**
```
agents/
├── index.ts           # Export all agents
├── base-agent.ts      # Base agent class
├── customer-support.ts
├── data-analyst.ts
└── code-assistant.ts
```

**Example:**
```typescript
// agents/customer-support.ts
import { Agent } from '@mastra/core';

export const customerSupportAgent = new Agent({
  name: 'customer-support',
  description: 'Handles customer inquiries',
  tools: [zendeskTool, emailTool],
  memory: supportMemory
});
```

### src/workflows/

เก็บ workflow definitions ทั้งหมด

**Structure:**
```
workflows/
├── index.ts
├── support-workflow.ts
├── analysis-workflow.ts
└── development-workflow.ts
```

**Example:**
```typescript
// workflows/support-workflow.ts
import { Workflow } from '@mastra/core';

export const supportWorkflow = new Workflow({
  name: 'support-workflow',
  steps: [
    { agent: customerSupportAgent, task: 'analyze-inquiry' },
    { agent: dataAnalystAgent, task: 'search-knowledge-base' },
    { agent: customerSupportAgent, task: 'provide-response' }
  ]
});
```

### src/tools/

เก็บ tool definitions ทั้งหมด

**Structure:**
```
tools/
├── index.ts
├── api-tools.ts
├── database-tools.ts
└── messaging-tools.ts
```

**Example:**
```typescript
// tools/api-tools.ts
import { Tool } from '@mastra/core';

export const apiTool = new Tool({
  name: 'api-tool',
  execute: async (input) => {
    // Implementation
  }
});
```

### src/memory/

เก็บ memory configurations ทั้งหมด

**Structure:**
```
memory/
├── index.ts
├── short-term.ts
├── long-term.ts
└── vector-store.ts
```

**Example:**
```typescript
// memory/short-term.ts
import { Memory } from '@mastra/core';

export const shortTermMemory = new Memory({
  store: new InMemoryStore(),
  retention: '1h'
});
```

### src/workspaces/

เก็บ workspace configurations ทั้งหมด

**Structure:**
```
workspaces/
├── index.ts
├── production.ts
├── staging.ts
└── development.ts
```

**Example:**
```typescript
// workspaces/production.ts
import { Workspace } from '@mastra/core';

export const productionWorkspace = new Workspace({
  name: 'production',
  agents: [customerSupportAgent],
  workflows: [supportWorkflow],
  memory: longTermMemory
});
```

## Naming Conventions

### Files

- **Agents:** `kebab-case.ts` (e.g., `customer-support.ts`)
- **Workflows:** `kebab-case.ts` (e.g., `support-workflow.ts`)
- **Tools:** `kebab-case.ts` (e.g., `api-tool.ts`)
- **Memory:** `kebab-case.ts` (e.g., `short-term.ts`)

### Variables

- **Agents:** `camelCase` (e.g., `customerSupportAgent`)
- **Workflows:** `camelCase` (e.g., `supportWorkflow`)
- **Tools:** `camelCase` (e.g., `apiTool`)
- **Memory:** `camelCase` (e.g., `shortTermMemory`)

### Classes

- **Agents:** `PascalCase` (e.g., `CustomerSupportAgent`)
- **Workflows:** `PascalCase` (e.g., `SupportWorkflow`)
- **Tools:** `PascalCase` (e.g., `ApiTool`)

## Organization Patterns

### Pattern 1: Feature-Based

จัดระเบียบตาม features:

```
src/
├── features/
│   ├── support/
│   │   ├── agents/
│   │   ├── workflows/
│   │   └── tools/
│   └── analytics/
│       ├── agents/
│       ├── workflows/
│       └── tools/
```

### Pattern 2: Layer-Based

จัดระเบียบตาม layers:

```
src/
├── agents/
├── workflows/
├── tools/
└── memory/
```

### Pattern 3: Hybrid

ผสมผสานทั้งสอง patterns:

```
src/
├── agents/
│   ├── support/
│   └── analytics/
├── workflows/
│   ├── support/
│   └── analytics/
└── tools/
    ├── shared/
    ├── support/
    └── analytics/
```

## Best Practices

### 1. Index Files

ใช้ index files สำหรับ exports:

```typescript
// agents/index.ts
export { customerSupportAgent } from './customer-support';
export { dataAnalystAgent } from './data-analyst';
```

### 2. Barrel Exports

Export ทุกอย่างจาก root:

```typescript
// src/index.ts
export * from './agents';
export * from './workflows';
export * from './tools';
export * from './memory';
```

### 3. Configuration Separation

แยก configuration ออกจาก code:

```
config/
├── agents.ts
├── tools.ts
└── memory.ts
```

### 4. Test Organization

จัดระเบียบ tests ตาม source structure:

```
tests/
├── agents/
│   ├── customer-support.test.ts
│   └── data-analyst.test.ts
├── workflows/
│   └── support-workflow.test.ts
└── tools/
    └── api-tool.test.ts
```
