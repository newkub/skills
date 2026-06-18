# Debug Adapter

## Custom Debug Adapter

```typescript
import * as vscode from 'vscode';
import * as debug from 'vscode-debugadapter';

class MyDebugSession extends debug.DebugSession {
  protected initializeRequest(
    response: debug.InitializeResponseArguments,
    args: debug.Capabilities
  ): void {
    this.sendResponse(response);
  }
}
```
