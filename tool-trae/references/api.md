# API Reference

## Purpose

API interfaces and types for Trae IDE extensions

## Extension API Overview

Trae is built on VS Code's extension API, so VS Code extensions are compatible.

### Extension Entry Point

```typescript
// extension.ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Extension activation
}

export function deactivate() {
  // Extension cleanup
}
```

## Trae-Specific APIs

### AI Chat API

```typescript
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  attachments?: Attachment[];
}

interface Attachment {
  type: 'screenshot' | 'file' | 'terminal-output';
  path?: string;
  content?: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  model?: 'claude-3-5-sonnet' | 'claude-3-7';
  temperature?: number;
}

interface ChatResponse {
  message: ChatMessage;
  suggestions?: string[];
}
```

### Builder Mode API

```typescript
interface BuilderPlan {
  id: string;
  steps: BuilderStep[];
  status: 'draft' | 'confirmed' | 'executing' | 'completed';
}

interface BuilderStep {
  id: string;
  description: string;
  files: FileChange[];
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
}

interface FileChange {
  path: string;
  type: 'create' | 'modify' | 'delete';
  content?: string;
}
```

### MCP Tool API

```typescript
interface MCPTool {
  name: string;
  description: string;
  execute(params: Record<string, unknown>): Promise<MCPToolResult>;
}

interface MCPToolResult {
  success: boolean;
  data?: unknown;
  error?: string;
}
```

## Configuration Schema

### Settings Schema

```typescript
interface TraeSettings {
  'trae.ai.model': 'claude-3-5-sonnet' | 'claude-3-7';
  'trae.ai.temperature': number;
  'trae.ai.maxTokens': number;
  'trae.builder.previewChanges': boolean;
  'trae.chat.attachScreenshots': boolean;
  'trae.mcp.enabled': boolean;
}
```

## Event Types

```typescript
// Available events
type TraeEvent =
  | 'chat:message-sent'
  | 'chat:message-received'
  | 'builder:plan-created'
  | 'builder:plan-executed'
  | 'builder:step-completed'
  | 'mcp:tool-executed';

// Event listener example
vscode.workspace.onDidChangeConfiguration((event) => {
  if (event.affectsConfiguration('trae.ai')) {
    // Handle AI config change
  }
});
```

## Summary

| API | Description |
|-----|-------------|
| **Chat API** | Send/receive chat messages |
| **Builder API** | Manage builder plans and steps |
| **MCP API** | Execute MCP tools |
| **Config API** | Read/write settings |