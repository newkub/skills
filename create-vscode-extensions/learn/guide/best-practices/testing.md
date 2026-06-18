# Testing

## Use Mocks

```typescript
import * as vscode from 'vscode';
import * as assert from 'assert';

// Mock VS Code API
const mockWindow = {
  showInformationMessage: () => {},
  activeTextEditor: undefined
};
```

## Test Commands

```typescript
suite('Commands', () => {
  test('hello command shows message', async () => {
    let shown = false;

    // Mock window.showInformationMessage
    const original = vscode.window.showInformationMessage;
    vscode.window.showInformationMessage = () => { shown = true; };

    await vscode.commands.executeCommand('ext.hello');

    assert.ok(shown);

    // Restore
    vscode.window.showInformationMessage = original;
  });
});
```
