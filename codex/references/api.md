# Programmatic API

## Installation

```bash
npm install @openai/codex
```

## Basic Usage

```typescript
import { Codex } from '@openai/codex';

const codex = new Codex({
  apiKey: process.env.OPENAI_API_KEY
});

// Single prompt
const result = await codex.prompt('Create a React button component');
console.log(result);
```

## Initialization Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `apiKey` | string | Yes | OpenAI API key |
| `model` | string | No | Model to use (default: gpt-4o) |
| `baseUrl` | string | No | Custom API endpoint |
| `timeout` | number | No | Request timeout in ms |
| `maxTokens` | number | No | Max tokens for response |
| `temperature` | number | No | Response creativity |

## Core Methods

### prompt()

Execute a single prompt.

```typescript
const result = await codex.prompt(
  'Fix the bug in auth.ts',
  {
    context: ['src/auth.ts'],
    model: 'gpt-4-turbo'
  }
);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `prompt` | string | User prompt |
| `options` | object | Optional configuration |

### chat()

Start a conversation.

```typescript
const conversation = codex.chat();

await conversation.send('Create a user service');
await conversation.send('Add authentication');
const history = conversation.getHistory();
```

### analyze()

Analyze a codebase.

```typescript
const analysis = await codex.analyze({
  path: './src',
  depth: 2,
  include: ['*.ts', '*.tsx']
});
console.log(analysis.structure);
```

### review()

Review code for issues.

```typescript
const issues = await codex.review({
  files: ['src/auth.ts', 'src/validation.ts'],
  severity: ['error', 'warning']
});
```

## File Operations

### read()

```typescript
const content = await codex.read('src/app.ts');
```

### write()

```typescript
await codex.write('src/new-file.ts', `
// New file content
`);
```

### edit()

```typescript
await codex.edit({
  file: 'src/app.ts',
  changes: [
    { start: 10, end: 20, text: 'new content' },
    { start: 50, end: 60, text: 'replacement' }
  ]
});
```

### delete()

```typescript
await codex.delete('src/old-file.ts', {
  force: false
});
```

## Command Execution

### exec()

```typescript
const result = await codex.exec('npm test', {
  cwd: './project',
  timeout: 60000
});
console.log(result.stdout);
```

### git()

```typescript
// Git operations
await codex.git('status');
await codex.git('commit', { message: 'Add feature' });
await codex.git('push');
```

## Event Handling

```typescript
codex.on('start', () => {
  console.log('Processing started');
});

codex.on('progress', (data) => {
  console.log(`Progress: ${data.percentage}%`);
});

codex.on('complete', (result) => {
  console.log('Completed:', result);
});

codex.on('error', (err) => {
  console.error('Error:', err);
});
```

## Streaming

```typescript
const stream = await codex.promptStreaming('Write tests for auth');

// Async iteration
for await (const chunk of stream) {
  process.stdout.write(chunk);
}
```

## Error Handling

```typescript
try {
  await codex.prompt('Generate code');
} catch (error) {
  if (error instanceof CodexError) {
    console.error(`Codex error: ${error.code}`);
    console.error(error.message);
  }
}
```

## Full Example

```typescript
import { Codex } from '@openai/codex';

async function main() {
  const codex = new Codex({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4-turbo'
  });

  // Event listeners
  codex.on('progress', (data) => {
    console.log(`Progress: ${data.message}`);
  });

  try {
    // Initialize project
    await codex.analyze({ path: './src' });

    // Make changes
    await codex.edit({
      file: 'src/auth.ts',
      changes: [{ start: 50, end: 100, text: 'new auth logic' }]
    });

    // Run tests
    const result = await codex.exec('npm test');
    console.log(result.stdout);

  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Types

```typescript
interface CodexOptions {
  apiKey: string;
  model?: string;
  baseUrl?: string;
  timeout?: number;
  maxTokens?: number;
  temperature?: number;
}

interface PromptOptions {
  context?: string[];
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

interface FileChange {
  start: number;
  end: number;
  text: string;
}
```

## Integration Examples

### VS Code Extension

```typescript
import { Codex } from '@openai/codex';

export function activate(context: vscode.ExtensionContext) {
  const codex = new Codex({ apiKey: process.env.OPENAI_API_KEY });

  vscode.commands.registerCommand('codex.analyze', async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const analysis = await codex.analyze({
        path: editor.document.uri.fsPath
      });
      vscode.window.showInformationMessage(
        `Found ${analysis.files.length} files`
      );
    }
  });
}
```

### CLI Wrapper

```typescript
#!/usr/bin/env node
import { Codex } from '@openai/codex';

const codex = new Codex({
  apiKey: process.env.OPENAI_API_KEY
});

const args = process.argv.slice(2);
const command = args[0];
const input = args.slice(1).join(' ');

switch (command) {
  case 'prompt':
    console.log(await codex.prompt(input));
    break;
  case 'analyze':
    console.log(await codex.analyze({ path: input }));
    break;
  default:
    console.log('Unknown command');
}
```