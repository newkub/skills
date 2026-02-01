# Security Best Practices for VSCode Extensions

Follow security best practices to protect users and maintain trust in your extension.

## Why Security Matters

- **User trust** - Security breaches destroy user confidence
- **Data protection** - Extensions may access sensitive code and data
- **VSCode ecosystem** - Vulnerabilities affect the entire ecosystem
- **Legal requirements** - GDPR, HIPAA, and other regulations

## Anti-patterns

### Executing Arbitrary Code

```typescript
// Bad: Executing arbitrary code from user input
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.runCode', (code: string) => {
    eval(code); // DANGEROUS!
  });
}
```

### Storing Secrets in Code

```typescript
// Bad: Hardcoded secrets
const API_KEY = 'sk-1234567890abcdef';
const PASSWORD = 'my-secret-password';
```

### Unvalidated User Input

```typescript
// Bad: No input validation
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.openFile', (path: string) => {
    vscode.workspace.openTextDocument(path); // Path traversal vulnerability
  });
}
```

### Insecure Network Requests

```typescript
// Bad: No SSL verification
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.fetchData', async () => {
    const response = await axios.get('http://example.com/data'); // No HTTPS
  });
}
```

## Best Practices

### Validate and Sanitize Input

```typescript
// Good: Input validation
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.openFile', (filePath: string) => {
    // Validate path
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith('/safe/directory/')) {
      vscode.window.showErrorMessage('Invalid file path');
      return;
    }
    
    vscode.workspace.openTextDocument(normalizedPath);
  });
}
```

### Use Secure Storage

```typescript
// Good: Use VSCode's secure storage
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.saveSecret', async () => {
    const secret = await vscode.window.showInputBox({
      prompt: 'Enter secret'
    });
    
    if (secret) {
      await context.secrets.store('mySecret', secret);
    }
  });
  
  vscode.commands.registerCommand('extension.getSecret', async () => {
    const secret = await context.secrets.get('mySecret');
    vscode.window.showInformationMessage(`Secret retrieved`);
  });
}
```

### Use Environment Variables

```typescript
// Good: Environment variables
const API_KEY = process.env.MY_EXTENSION_API_KEY;

if (!API_KEY) {
  console.error('API_KEY not set');
}
```

### Secure Network Requests

```typescript
// Good: HTTPS with validation
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.fetchData', async () => {
    try {
      const response = await axios.get('https://api.example.com/data', {
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // Process response
    } catch (error) {
      vscode.window.showErrorMessage('Failed to fetch data');
    }
  });
}
```

## Rules

1. **Never execute arbitrary code** from user input
2. **Validate all user input** before processing
3. **Use secure storage** for secrets (context.secrets)
4. **Use environment variables** for configuration
5. **Always use HTTPS** for network requests
6. **Implement rate limiting** for API calls
7. **Sanitize output** before displaying to users
8. **Keep dependencies updated** for security patches
9. **Follow principle of least privilege**
10. **Report security issues** responsibly

## Common Vulnerabilities

### Command Injection

```typescript
// Bad: Command injection vulnerability
import { exec } from 'child_process';

vscode.commands.registerCommand('extension.runCommand', (cmd: string) => {
  exec(cmd); // DANGEROUS
});
```

### Path Traversal

```typescript
// Bad: Path traversal vulnerability
vscode.commands.registerCommand('extension.readFile', (path: string) => {
  fs.readFile(path, 'utf8'); // Can read any file
});
```

### XSS in Webviews

```typescript
// Bad: XSS vulnerability
vscode.commands.registerCommand('extension.showWebview', () => {
  const panel = vscode.window.createWebviewPanel(
    'preview',
    'Preview',
    vscode.ViewColumn.One
  );
  
  panel.webview.html = `<div>${userContent}</div>`; // XSS
});
```

## Security Patterns

### Input Validation

```typescript
function validateInput(input: string, pattern: RegExp): boolean {
  return pattern.test(input);
}

// Usage
const isValid = validateInput(filePath, /^[a-zA-Z0-9_\-\.\/]+$/);
```

### Content Security Policy (CSP)

```typescript
// Good: CSP in webviews
panel.webview.html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta http-equiv="Content-Security-Policy" 
          content="default-src 'none'; 
                  script-src 'nonce-${nonce}'; 
                  style-src vscode-resource:;">
  </head>
  <body>
    <div id="app"></div>
    <script nonce="${nonce}" src="${scriptUri}"></script>
  </body>
  </html>
`;
```

### Rate Limiting

```typescript
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  canMakeRequest(key: string, limit: number, window: number): boolean {
    const now = Date.now();
    const timestamps = this.requests.get(key) || [];
    
    // Remove old timestamps
    const valid = timestamps.filter(t => now - t < window);
    
    if (valid.length >= limit) {
      return false;
    }
    
    valid.push(now);
    this.requests.set(key, valid);
    return true;
  }
}
```

### Secure Webview Communication

```typescript
// Good: Secure webview communication
panel.webview.onDidReceiveMessage(
  async (message) => {
    // Validate message structure
    if (!message || typeof message !== 'object') {
      return;
    }
    
    // Validate message type
    if (message.type === 'request') {
      // Process request
      const response = await handleRequest(message.data);
      panel.webview.postMessage({ type: 'response', data: response });
    }
  },
  undefined,
  context.subscriptions
);
```

## Dependency Security

### Audit Dependencies

```bash
npm audit
npm audit fix
```

### Use Snyk for Security Scanning

```bash
npm install -g snyk
snyk test
snyk monitor
```

### Keep Dependencies Updated

```bash
npm outdated
npm update
```

## Data Protection

### Sensitive Data Handling

```typescript
// Good: Don't log sensitive data
function logAction(action: string, data?: any) {
  const sanitizedData = data ? sanitize(data) : undefined;
  console.log(`Action: ${action}`, sanitizedData);
}

function sanitize(data: any): any {
  if (typeof data === 'string') {
    return data.replace(/password.*/i, '[REDACTED]');
  }
  if (typeof data === 'object') {
    const sanitized: any = {};
    for (const key in data) {
      if (key.toLowerCase().includes('password') || 
          key.toLowerCase().includes('secret') ||
          key.toLowerCase().includes('token')) {
        sanitized[key] = '[REDACTED]';
      } else {
        sanitized[key] = data[key];
      }
    }
    return sanitized;
  }
  return data;
}
```

### Encryption

```typescript
// Good: Encrypt sensitive data at rest
import * as crypto from 'crypto';

function encrypt(text: string, key: string): string {
  const algorithm = 'aes-256-cbc';
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return iv.toString('hex') + ':' + encrypted;
}
```

## Impact if Not Followed

- **Security breaches** - Can expose user data and systems
- **Malware distribution** - Extensions can be used to distribute malware
- **Legal liability** - Can result in legal action
- **Reputation damage** - Security issues destroy trust
- **Extension removal** - Can be removed from marketplace

## Verification

1. ตรวจสอบว่าไม่มี hardcoded secrets ใน code
2. ทดสอบด้วย `npm audit` เพื่อตรวจสอบ vulnerabilities
3. ตรวจสอบว่าใช้ `context.secrets` สำหรับ sensitive data
4. ตรวจสอบว่า validate ทุก user input
5. ทดสอบด้วย `snyk test` เพื่อ security scanning

## References

- [VSCode Security Guidelines](https://code.visualstudio.com/api/advanced-topics/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Webview Security](https://code.visualstudio.com/api/extension-guides/webview)
