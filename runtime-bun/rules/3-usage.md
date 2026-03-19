# Usage Patterns

## Description

ใช้ patterns ที่เหมาะสมสำหรับการพัฒนา SDK บน Bun runtime

## Examples

### Client Class Pattern

```typescript
export class MySDKClient {
  private apiKey: string;
  private baseURL: string;

  constructor(options: SDKOptions) {
    this.apiKey = options.apiKey;
    this.baseURL = options.baseURL ?? 'https://api.example.com';
  }

  async request<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new SDKError(response.statusText, response.status);
    }

    return response.json();
  }
}
```

### Tree-shakeable Exports

```typescript
// src/index.ts
export { MySDKClient } from './client/MySDKClient';
export { UsersAPI } from './client/users';
export type { User, CreateUserRequest } from './types';
export { SDKError, AuthenticationError } from './errors';
```

## Anti-patterns

❌ ใช้ default export สำหรับทุกอย่าง  
❌ ไม่แยก types ออกจาก implementation  
❌ ใช้ any แทน generic types
