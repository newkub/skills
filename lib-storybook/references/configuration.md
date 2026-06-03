# configuration

## index.md

# Configuration Reference

## .storybook/main.ts

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
```

## Parameters

| Option | Description |
|--------|-------------|
| layout | Component layout |
| backgrounds | Background colors |
| viewport | Viewport sizes |

## Decorators

```typescript
export default {
  decorators: [(Story) => <Story />],
};
```

---

