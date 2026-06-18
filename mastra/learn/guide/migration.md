# Migration

วิธี migration จาก version เก่าของ Mastra

## ภาพรวม

Migration guide สำหรับ:
- Breaking changes
- API changes
- Configuration changes
- Tool updates

## Version History

### v2.0 → v3.0

### Breaking Changes

#### 1. Agent API Changes

**Old:**
```typescript
const agent = new Agent({
  name: 'my-agent',
  tools: [tool1, tool2]
});
```

**New:**
```typescript
const agent = new Agent({
  name: 'my-agent',
  tools: {
    tool1,
    tool2
  }
});
```

#### 2. Workflow Configuration

**Old:**
```typescript
const workflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { agent: agent1, task: 'task1' }
  ]
});
```

**New:**
```typescript
const workflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1',
      retry: { max: 3 }
    }
  ]
});
```

#### 3. Memory Store Interface

**Old:**
```typescript
const memory = new Memory({
  store: new CustomStore()
});
```

**New:**
```typescript
const memory = new Memory({
  store: new CustomStore(),
  retrieval: {
    topK: 5,
    threshold: 0.7
  }
});
```

### Migration Steps

#### Step 1: Update Dependencies

```bash
bun add @mastra/core@latest
bun add @mastra/tools@latest
bun add @mastra/memory@latest
```

#### Step 2: Update Agent Definitions

```typescript
// Before
const agent = new Agent({
  name: 'my-agent',
  tools: [tool1, tool2]
});

// After
const agent = new Agent({
  name: 'my-agent',
  tools: {
    tool1,
    tool2
  }
});
```

#### Step 3: Update Workflow Configurations

```typescript
// Before
const workflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { agent: agent1, task: 'task1' }
  ]
});

// After
const workflow = new Workflow({
  name: 'my-workflow',
  steps: [
    { 
      agent: agent1, 
      task: 'task1',
      retry: { max: 3 }
    }
  ]
});
```

#### Step 4: Update Memory Configurations

```typescript
// Before
const memory = new Memory({
  store: new CustomStore()
});

// After
const memory = new Memory({
  store: new CustomStore(),
  retrieval: {
    topK: 5,
    threshold: 0.7
  }
});
```

#### Step 5: Run Tests

```bash
bun test
```

#### Step 6: Deploy

```bash
bun run deploy
```

## v1.0 → v2.0

### Breaking Changes

#### 1. Tool Schema Validation

**Old:**
```typescript
const tool = new Tool({
  name: 'my-tool',
  schema: {
    input: 'string'
  }
});
```

**New:**
```typescript
const tool = new Tool({
  name: 'my-tool',
  schema: {
    type: 'object',
    properties: {
      input: { type: 'string' }
    }
  }
});
```

#### 2. Workspace Configuration

**Old:**
```typescript
const workspace = new Workspace({
  name: 'my-workspace',
  agents: [agent1, agent2]
});
```

**New:**
```typescript
const workspace = new Workspace({
  name: 'my-workspace',
  agents: {
    agent1,
    agent2
  }
});
```

### Migration Steps

#### Step 1: Update Tool Schemas

```typescript
// Before
const tool = new Tool({
  name: 'my-tool',
  schema: {
    input: 'string'
  }
});

// After
const tool = new Tool({
  name: 'my-tool',
  schema: {
    type: 'object',
    properties: {
      input: { type: 'string' }
    }
  }
});
```

#### Step 2: Update Workspace Configurations

```typescript
// Before
const workspace = new Workspace({
  name: 'my-workspace',
  agents: [agent1, agent2]
});

// After
const workspace = new Workspace({
  name: 'my-workspace',
  agents: {
    agent1,
    agent2
  }
});
```

## Migration Tools

### Automated Migration Script

```typescript
import { migrate } from '@mastra/migrate';

migrate({
  from: '2.0',
  to: '3.0',
  path: './src'
});
```

### Dry Run

```bash
mastra migrate --dry-run
```

### Backup

```bash
mastra migrate --backup
```

## Common Issues

### Issue 1: Type Errors

**Solution:**
```typescript
// Update types
import { Agent, Tool, Workflow } from '@mastra/core';
```

### Issue 2: Configuration Errors

**Solution:**
```typescript
// Validate configuration
import { validateConfig } from '@mastra/config';

validateConfig(config);
```

### Issue 3: Runtime Errors

**Solution:**
```typescript
// Enable debug mode
const agent = new Agent({
  name: 'my-agent',
  debug: true
});
```

## Rollback

If migration fails:

```bash
# Restore from backup
mastra migrate --restore

# Or revert changes
git checkout <commit-hash>
```

## Best Practices

### 1. Test Before Migration

```bash
# Run tests on current version
bun test

# Create backup
mastra migrate --backup
```

### 2. Migrate Gradually

```bash
# Migrate one module at a time
mastra migrate --module agents
mastra migrate --module workflows
```

### 3. Monitor After Migration

```bash
# Check logs
mastra logs

# Monitor metrics
mastra metrics
```

### 4. Keep Documentation Updated

Document all changes:
- Breaking changes
- API changes
- Configuration changes
- Migration steps
