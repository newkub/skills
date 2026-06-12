# Testing

## Testing Nitro Apps

### Unit Testing

```typescript
import { describe, it, expect } from 'vitest';
import { $fetch } from 'ofetch';

describe('API', () => {
  it('should return data', async () => {
    const response = await $fetch('/api/data');
    expect(response.status).toBe(200);
  });
});
```

### Integration Testing

- Test API endpoints
- Test middleware
- Test route handlers

### E2E Testing

- Test full request/response cycle
- Test deployment targets
- Test edge caching
