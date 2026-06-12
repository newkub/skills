# Security

## Authentication

### WebSocket Token Validation
```typescript
export class AuthenticatedAgent extends Agent<Env, State> {
  async validateConnection(connection: Connection) {
    const token = connection.request.headers.get("Authorization");
    if (!token) {
      throw new Error("No authorization token provided");
    }

    const payload = await this.verifyToken(token);
    return payload.userId;
  }

  async verifyToken(token: string) {
    // Verify JWT or session token
    // Return user ID or throw error
  }
}
```

### Cross-Domain Authentication
```typescript
export class CrossDomainAgent extends Agent<Env, State> {
  async validateConnection(connection: Connection) {
    const origin = connection.request.headers.get("Origin");
    const allowedOrigins = ["https://example.com", "https://app.example.com"];

    if (!allowedOrigins.includes(origin)) {
      throw new Error("Origin not allowed");
    }

    return await this.authenticateUser(connection);
  }
}
```

### Token Rotation
```typescript
export class TokenRotationAgent extends Agent<Env, State> {
  initialState = { tokens: {} };

  @callable()
  async rotateToken(oldToken: string) {
    const userId = this.state.tokens[oldToken];
    if (!userId) throw new Error("Invalid token");

    const newToken = this.generateToken();
    this.setState({
      tokens: {
        ...this.state.tokens,
        [newToken]: userId
      }
    });

    // Remove old token after grace period
    setTimeout(() => {
      this.setState({
        tokens: Object.fromEntries(
          Object.entries(this.state.tokens).filter(([k]) => k !== oldToken)
        )
      });
    }, 60000);

    return newToken;
  }
}
```

## Authorization

### Connection-Level Permissions
```typescript
export class AuthorizedAgent extends Agent<Env, State> {
  async validateConnection(connection: Connection) {
    const userId = await this.authenticate(connection);
    const permissions = await this.getUserPermissions(userId);

    connection.permissions = permissions;
    return userId;
  }

  @callable()
  async adminOperation() {
    if (!this.connection.permissions.includes("admin")) {
      throw new Error("Insufficient permissions");
    }
    // Execute admin operation
  }
}
```

### Readonly Connections
```typescript
export class ReadonlyAgent extends Agent<Env, State> {
  shouldConnectionBeReadonly(connection: Connection) {
    const token = connection.request.headers.get("Authorization");
    return token?.startsWith("readonly-") ?? false;
  }

  @callable()
  updateData(data: any) {
    if (this.connection.readonly) {
      throw new Error("Cannot modify data in readonly mode");
    }
    this.setState(data);
  }

  @callable()
  readData() {
    // Always allowed
    return this.state;
  }
}
```

### Resource Isolation
```typescript
export class IsolatedAgent extends Agent<Env, State> {
  async validateConnection(connection: Connection) {
    const userId = await this.authenticate(connection);
    const resourceId = this.getResourceId(connection);

    if (!await this.canAccessResource(userId, resourceId)) {
      throw new Error("Access denied to resource");
    }

    return { userId, resourceId };
  }
}
```

## Data Protection

### Encryption at Rest
```typescript
export class EncryptedAgent extends Agent<Env, State> {
  @callable()
  async setSensitiveData(key: string, value: string) {
    const encrypted = await this.encrypt(value);
    this.setState({
      [key]: encrypted
    });
  }

  @callable()
  async getSensitiveData(key: string) {
    const encrypted = this.state[key];
    return await this.decrypt(encrypted);
  }

  async encrypt(data: string) {
    // Use encryption library
  }

  async decrypt(encrypted: string) {
    // Use decryption library
  }
}
```

### Secure Communication
```typescript
export class SecureAgent extends Agent<Env, State> {
  @callable()
  async secureApiCall(url: string, data: any) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.env.API_KEY}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("API call failed");
    }

    return response.json();
  }
}
```

### Input Sanitization
```typescript
export class SanitizedAgent extends Agent<Env, State> {
  @callable()
  async processInput(input: string) {
    const sanitized = this.sanitize(input);
    // Process sanitized input
  }

  sanitize(input: string) {
    // Remove dangerous characters
    // Validate input format
    // Escape special characters
  }
}
```

## MCP Security

### Securing MCP Servers
```typescript
export class SecureMcpAgent extends McpAgent<Env> {
  async validateConnection(connection: Connection) {
    const token = connection.request.headers.get("Authorization");
    if (!await this.verifyMcpToken(token)) {
      throw new Error("Invalid MCP token");
    }
    return true;
  }

  async verifyMcpToken(token: string) {
    // Verify OAuth token or API key
  }
}
```

### OAuth Integration
```typescript
export class OAuthMcpAgent extends McpAgent<Env> {
  async validateConnection(connection: Connection) {
    const authHeader = connection.request.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "");

    const userInfo = await this.verifyOAuthToken(token);
    return userInfo.userId;
  }

  async verifyOAuthToken(token: string) {
    // Verify with OAuth provider
  }
}
```

### Proxy MCP
```typescript
export class ProxyMcpAgent extends Agent<Env, State> {
  @callable()
  async proxyMcpCall(toolName: string, args: any) {
    // Validate tool access
    if (!this.isToolAllowed(toolName)) {
      throw new Error("Tool not allowed");
    }

    // Sanitize arguments
    const sanitizedArgs = this.sanitizeArgs(args);

    // Forward to MCP server
    return await this.callMcpServer(toolName, sanitizedArgs);
  }
}
```

## Rate Limiting

### Per-User Rate Limiting
```typescript
export class RateLimitedAgent extends Agent<Env, State> {
  initialState = { userRequests: {} };

  @callable()
  async rateLimitedOperation(userId: string) {
    const now = Date.now();
    const requests = this.state.userRequests[userId] || [];

    const recentRequests = requests.filter(t => t > now - 60000);

    if (recentRequests.length >= 10) {
      throw new Error("Rate limit exceeded");
    }

    this.setState({
      userRequests: {
        ...this.state.userRequests,
        [userId]: [...recentRequests, now]
      }
    });

    // Execute operation
  }
}
```

### Global Rate Limiting
```typescript
export class GlobalRateLimitedAgent extends Agent<Env, State> {
  initialState = { requests: [] };

  @callable()
  async globallyRateLimitedOperation() {
    const now = Date.now();
    const recentRequests = this.state.requests.filter(t => t > now - 60000);

    if (recentRequests.length >= 1000) {
      throw new Error("Global rate limit exceeded");
    }

    this.setState({
      requests: [...recentRequests, now]
    });

    // Execute operation
  }
}
```

## Webhook Security

### Signature Verification
```typescript
export class WebhookAgent extends Agent<Env, State> {
  @callable()
  async handleWebhook(payload: string, signature: string) {
    const expectedSignature = this.computeSignature(payload);

    if (signature !== expectedSignature) {
      throw new Error("Invalid webhook signature");
    }

    // Process webhook
  }

  computeSignature(payload: string) {
    // Compute HMAC signature
  }
}
```

### IP Whitelisting
```typescript
export class IpWhitelistAgent extends Agent<Env, State> {
  initialState = { allowedIps: ["192.168.1.1", "10.0.0.1"] };

  @callable()
  async handleWebhookFromIp(ip: string, payload: any) {
    if (!this.state.allowedIps.includes(ip)) {
      throw new Error("IP not whitelisted");
    }

    // Process webhook
  }
}
```

## State Validation

### Input Validation
```typescript
export class ValidatedAgent extends Agent<Env, State> {
  validateStateChange(nextState: State, source: Connection | "server") {
    if (nextState.count < 0) {
      throw new Error("Count cannot be negative");
    }

    if (nextState.name.length > 100) {
      throw new Error("Name too long");
    }

    if (!isValidEmail(nextState.email)) {
      throw new Error("Invalid email format");
    }
  }
}
```

### Type Safety
```typescript
type State = {
  count: number;
  name: string;
  email: string;
};

export class TypedAgent extends Agent<Env, State> {
  @callable()
  updateState(updates: Partial<State>) {
    // TypeScript ensures type safety
    this.setState({
      ...this.state,
      ...updates
    });
  }
}
```

## Best Practices

### General Security
- Always validate and sanitize inputs
- Use HTTPS for all communications
- Implement proper authentication and authorization
- Encrypt sensitive data at rest
- Keep dependencies updated
- Follow principle of least privilege
- Implement rate limiting
- Log security events
- Regular security audits
- Have incident response plan

### Deployment Security
- Use environment variables for secrets
- Never commit secrets to version control
- Rotate secrets regularly
- Use secure key management
- Implement proper CORS policies
- Enable security headers
- Monitor for vulnerabilities
- Have backup and recovery plan

### Development Security
- Security code reviews
- Penetration testing
- Dependency scanning
- Static analysis
- Dynamic analysis
- Threat modeling
- Security training
- Incident response drills
