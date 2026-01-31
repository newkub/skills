# Reactive VSCode Extension Development

Use reactive-vscode library to develop VSCode extensions with Composition API.

## Benefits

- **Simpler code**: Less boilerplate compared to traditional VSCode API
- **Automatic cleanup**: No need to manually manage subscriptions
- **Reactive state**: Automatic updates when state changes
- **Type-safe**: Full TypeScript support

## Core Concepts

### Composition API

Use composables to manage state and side effects:

```typescript
import { defineConfig, defineExtension, useActiveTextEditor, useEditorDecorations } from 'reactive-vscode'

const config = defineConfig<{ decorations: boolean }>('demo')

export = defineExtension(() => {
  const editor = useActiveTextEditor()
  useEditorDecorations(
    editor,
    { backgroundColor: 'red' },
    () => config.decorations ? [/* ... Calculated ranges ... */] : [],
  )
})
```

### Configuration Management

Use `defineConfig` to create reactive configuration:

```typescript
const config = defineConfig<{ decorations: boolean }>('demo')

// Access config values reactively
if (config.decorations) {
  // ...
}
```

### Common Composables

- `useActiveTextEditor`: Track active text editor
- `useEditorDecorations`: Manage editor decorations
- `useTextDocument`: Track text document changes
- `useWorkspaceFolders`: Track workspace folders

## Migration from Traditional API

### Before (Traditional API)

```typescript
import type { ExtensionContext } from 'vscode'
import { window, workspace } from 'vscode'

const decorationType = window.createTextEditorDecorationType({ backgroundColor: 'red' })

function updateDecorations(enabled: boolean) {
  window.activeTextEditor?.setDecorations(
    decorationType,
    enabled ? [/* ... Calculated ranges ... */] : [],
  )
}

export function activate(context: ExtensionContext) {
  const configurations = workspace.getConfiguration('demo')
  let decorationsEnabled = configurations.get<boolean>('decorations')!

  context.subscriptions.push(workspace.onDidChangeConfiguration((e) => {
    if (e.affectsConfiguration('demo.decorations')) {
      decorationsEnabled = configurations.get<boolean>('decorations')!
      updateDecorations(decorationsEnabled)
    }
  }))

  context.subscriptions.push(window.onDidChangeActiveTextEditor(() => {
    updateDecorations(decorationsEnabled)
  }))

  updateDecorations(decorationsEnabled)
}
```

### After (Reactive API)

```typescript
import { defineConfig, defineExtension, useActiveTextEditor, useEditorDecorations } from 'reactive-vscode'

const config = defineConfig<{ decorations: boolean }>('demo')

export = defineExtension(() => {
  const editor = useActiveTextEditor()
  useEditorDecorations(
    editor,
    { backgroundColor: 'red' },
    () => config.decorations ? [/* ... Calculated ranges ... */] : [],
  )
})
```

## Best Practices

1. **Use composables** instead of manual event subscriptions
2. **Leverage VueUse** for additional utilities
3. **Import only what you need** for tree-shaking
4. **Use reactive patterns** for state management
5. **Keep configuration reactive** with `defineConfig`
