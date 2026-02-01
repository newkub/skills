# reactive-vscode Core Concepts

## What is reactive-vscode?

reactive-vscode is a library that provides a Composition API for developing VSCode extensions using Vue's reactivity system.

## Key Features

- **Composition API**: Familiar Vue 3 Composition API patterns
- **Reactive State**: Automatic state management and updates
- **Simplified Event Handling**: No manual subscription management
- **Type-Safe**: Full TypeScript support
- **Tree-Shakeable**: Import only what you need
- **VueUse Compatible**: Works with VueUse utilities

## Architecture

### Composables

Composables are functions that encapsulate reactive state and side effects:

```typescript
function useActiveTextEditor() {
  const editor = ref(window.activeTextEditor)
  
  window.onDidChangeActiveTextEditor(() => {
    editor.value = window.activeTextEditor
  })
  
  return editor
}
```

### Reactive Configuration

Configuration is reactive and automatically updates:

```typescript
const config = defineConfig<{ key: string }>('extension')

// config.key is reactive
watch(config.key, (newKey) => {
  // Handle changes
})
```

### Extension Definition

Extensions are defined with `defineExtension`:

```typescript
export = defineExtension(() => {
  // Extension logic here
})
```

## Comparison with Traditional API

| Aspect | Traditional API | reactive-vscode |
|--------|---------------|-----------------|
| Event Handling | Manual subscriptions | Automatic cleanup |
| State Management | Manual updates | Reactive |
| Code Length | Verbose | Concise |
| Type Safety | Good | Excellent |
| Bundle Size | Fixed | Tree-shakeable |

## Use Cases

1. **Editor Decorations**: Highlight text reactively
2. **Language Features**: Auto-complete, diagnostics
3. **UI Elements**: Status bar, tree views
4. **Configuration**: Reactive config management
5. **Workspace**: Track files and folders

## Ecosystem

- **VueUse**: Additional composition utilities
- **Volar**: TypeScript support
- **VSCode API**: Full API coverage

## Verification

1. ตรวจสอบว่าติดตั้ง reactive-vscode ด้วย `npm install reactive-vscode`
2. ทดสอบ composables ด้วย `npm run test`
3. ตรวจสอบว่าใช้ Composition API อย่างถูกต้อง
4. ตรวจสอบว่า reactive state ทำงานได้
5. ทดสอบด้วย `npm run build` เพื่อยืนยัน tree-shaking
