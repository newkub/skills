# Environment

## Access Environment Variables

```typescript
import * as process from 'process';

// In extension
console.log(process.env.MY_VAR);

// Or via VS Code env
const extPath = vscode.extensions.getExtension('publisher.ext')?.extensionPath;
```
