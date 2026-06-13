# Project Structure

```
my-extension/
├── src/
│   ├── extension.ts       # Entry point
│   ├── commands/          # Command implementations
│   │   ├── index.ts
│   │   └── hello.ts
│   ├── providers/        # Tree, Completion, etc.
│   │   └── tree-provider.ts
│   ├── utils/            # Utilities
│   │   └── helpers.ts
│   └── types/           # TypeScript types
│       └── index.ts
├── test/
│   └── extension.test.ts
├── media/                # Icons and images
├── package.json
├── tsconfig.json
└── .vscode/
    ├── launch.json
    └── tasks.json
```
