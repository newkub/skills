# VueUse Integration in VSCode Extensions

Use VueUse utilities with reactive-vscode for enhanced functionality.

## Installation

```bash
npm install vueuse
```

## Common VueUse Utilities

### useStorage

Persist configuration across sessions:

```typescript
import { useStorage } from '@vueuse/core'
import { defineExtension } from 'reactive-vscode'

export = defineExtension(() => {
  const decorationsEnabled = useStorage('demo.decorations', false)
  
  // Use decorationsEnabled.value reactively
})
```

### useDebounceFn

Debounce expensive operations:

```typescript
import { useDebounceFn } from '@vueuse/core'
import { defineExtension, useActiveTextEditor } from 'reactive-vscode'

export = defineExtension(() => {
  const editor = useActiveTextEditor()
  
  const updateDecorations = useDebounceFn(() => {
    // Expensive decoration calculation
  }, 300)
  
  // Use updateDecorations()
})
```

### useThrottleFn

Throttle rapid events:

```typescript
import { useThrottleFn } from '@vueuse/core'
import { defineExtension, useActiveTextEditor } from 'reactive-vscode'

export = defineExtension(() => {
  const editor = useActiveTextEditor()
  
  const handleTextChange = useThrottleFn(() => {
    // Handle text changes
  }, 100)
  
  // Use handleTextChange()
})
```

### watchEffect

React to multiple dependencies:

```typescript
import { watchEffect } from 'vue'
import { defineExtension, useActiveTextEditor, useEditorDecorations } from 'reactive-vscode'

export = defineExtension(() => {
  const editor = useActiveTextEditor()
  
  watchEffect(() => {
    // Automatically re-run when dependencies change
    if (editor.value) {
      // Update decorations
    }
  })
})
```

## Best Practices

1. **Use useStorage** for persistent configuration
2. **Debounce expensive operations** with useDebounceFn
3. **Throttle rapid events** with useThrottleFn
4. **Use watchEffect** for reactive side effects
5. **Import only needed utilities** for tree-shaking

## Verification

1. ตรวจสอบว่าติดตั้ง vueuse ด้วย `npm install vueuse`
2. ทดสอบ composables ทำงานได้
3. ตรวจสอบว่าใช้ debounce/throttle อย่างถูกต้อง
4. ทดสอบด้วย `npm run test`
5. ตรวจสอบ bundle size ด้วย `npm run build`
