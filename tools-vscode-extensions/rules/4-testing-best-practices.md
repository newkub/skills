# Testing VSCode Extensions

Write comprehensive tests for VSCode extensions to ensure reliability and maintainability.

## Why Test

- **Catch bugs early** - Identify issues before users encounter them
- **Refactor with confidence** - Ensure changes don't break functionality
- **Document behavior** - Tests serve as living documentation
- **Improve code quality** - Well-tested code is typically better designed

## Anti-patterns

### No Tests

```typescript
// Bad: No tests at all
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.doSomething', () => {
    // Complex logic with no tests
    const result = calculateSomething();
    vscode.window.showInformationMessage(result);
  });
}
```

### Only Integration Tests

```typescript
// Bad: Only integration tests, no unit tests
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  test('Should do something', async () => {
    // Requires full VSCode instance
    // Slow and brittle
  });
});
```

### Testing Implementation Details

```typescript
// Bad: Testing internal implementation
test('Should call function', () => {
  const spy = jest.spyOn(someModule, 'someFunction');
  // Tests implementation, not behavior
  expect(spy).toHaveBeenCalled();
});
```

## Best Practices

### Unit Testing

```typescript
// Good: Test pure functions independently
import { calculateSomething } from './utils';

describe('calculateSomething', () => {
  it('should return correct result', () => {
    const result = calculateSomething(5, 10);
    expect(result).toBe(15);
  });
});
```

### Integration Testing

```typescript
// Good: Test extension behavior in VSCode
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Should register command', async () => {
    const commands = await vscode.commands.getCommands();
    expect(commands).toContain('extension.doSomething');
  });

  test('Should execute command correctly', async () => {
    await vscode.commands.executeCommand('extension.doSomething');
    // Verify expected behavior
  });
});
```

### Mocking VSCode API

```typescript
// Good: Mock VSCode API for unit tests
import * as vscode from 'vscode';

jest.mock('vscode', () => ({
  window: {
    showInformationMessage: jest.fn(),
  },
  commands: {
    registerCommand: jest.fn(),
  },
}));

describe('Extension Logic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show message when command executed', () => {
    const mockShowMessage = vscode.window.showInformationMessage as jest.Mock;
    mockShowMessage.mockReturnValue(Promise.resolve());

    // Execute command
    expect(mockShowMessage).toHaveBeenCalledWith('Expected message');
  });
});
```

## Rules

1. **Write unit tests** for pure functions and business logic
2. **Write integration tests** for extension behavior in VSCode
3. **Mock VSCode API** for unit tests to avoid dependencies
4. **Test public APIs**, not implementation details
5. **Use test utilities** provided by `@vscode/test-electron`
6. **Run tests in CI** to catch regressions early
7. **Test error cases** and edge cases
8. **Keep tests fast** - Unit tests should be milliseconds, integration tests seconds

## Test Structure

```
├── src/
│   ├── extension.ts
│   └── utils/
│       └── calculator.ts
└── test/
    ├── suite/
    │   ├── extension.test.ts
    │   └── utils/
    │       └── calculator.test.ts
    └── index.ts
```

## Test Configuration

### package.json

```json
{
  "scripts": {
    "test": "vscode-test",
    "watch": "vscode-test --watch",
    "compile": "tsc -p ./",
    "watch:compile": "tsc -p ./ --watch"
  }
}
```

### .vscode/launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/test/suite/index"
      ],
      "outFiles": ["${workspaceFolder}/out/**/*.js"]
    }
  ]
}
```

## Testing Strategies

### Test Pyramid

```
        Integration Tests
       /                 \
      /   E2E Tests       \
     /                     \
    /   Unit Tests          \
   /_________________________\
```

- **70% Unit Tests** - Fast, isolated, test business logic
- **20% Integration Tests** - Test extension behavior with VSCode
- **10% E2E Tests** - Test complete user workflows

### Common Test Patterns

**Command Testing**
```typescript
test('Command should handle errors gracefully', async () => {
  const mockError = new Error('Test error');
  await vscode.commands.executeCommand('extension.errorCommand');
  expect(vscode.window.showErrorMessage).toHaveBeenCalledWith(
    expect.stringContaining('Test error')
  );
});
```

**Event Testing**
```typescript
test('Should react to document changes', async () => {
  const doc = await vscode.workspace.openTextDocument(
    vscode.Uri.file('/tmp/test.txt')
  );
  const editor = await vscode.window.showTextDocument(doc);
  
  await editor.edit((edit) => {
    edit.insert(new vscode.Position(0, 0), 'test');
  });
  
  // Verify behavior
});
```

**Configuration Testing**
```typescript
test('Should respect configuration', async () => {
  const config = vscode.workspace.getConfiguration('myExtension');
  config.update('setting', 'value', vscode.ConfigurationTarget.Global);
  
  // Verify configuration is used
});
```

## Impact if Not Followed

- **Bugs in production** - Untested code is more likely to have bugs
- **Fear of refactoring** - Cannot safely refactor without tests
- **Slower development** - Manual testing is time-consuming
- **Poor code quality** - Tests encourage better design

## Verification

1. ตรวจสอบว่ามี tests อย่างน้อย 70% unit tests, 20% integration tests, 10% E2E tests
2. ทดสอบด้วย `npm run test` และ `npm run test:watch`
3. ตรวจสอบ code coverage ด้วย `npm run test:coverage`
4. ตรวจสอบว่า tests ผ่านทั้งหมด

## References

- [Testing Extensions - VSCode API](https://code.visualstudio.com/api/working-with-extensions/testing-extension)
- [Testing VSCode Extensions with TypeScript](https://devblogs.microsoft.com/ise/testing-vscode-extensions-with-typescript/)
- [@vscode/test-electron](https://www.npmjs.com/package/@vscode/test-electron)
