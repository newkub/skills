# Testing

## Testing SolidJS Apps

### Unit Testing

```typescript
import { describe, it, expect } from 'vitest';
import { render } from 'solid-js/web';

describe('Component', () => {
  it('should render', () => {
    const { container } = render(() => <div>Hello</div>);
    expect(container.textContent).toBe('Hello');
  });
});
```

### Integration Testing

- Test component interactions
- Test signals
- Test effects

### Testing Library

- **Solid Testing Library** - @solidjs/testing-library
- **Vitest** - Testing framework
