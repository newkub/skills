---
title: Dev - HMR (Hot Module Replacement)
description: การใช้งานและ customize Hot Module Replacement ใน Vite
---

# HMR (Hot Module Replacement)

## Basic HMR Usage

```typescript
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    // Handle module update
    console.log('Module updated:', newModule)
  })
}
```

---

## Component HMR (Vue/React)

```vue
<script setup lang="ts">
// Vue components support HMR by default with @vitejs/plugin-vue
// No additional code needed
</script>
```

```typescript
// React with Fast Refresh
// @vitejs/plugin-react handles HMR automatically
```

---

## Custom HMR Handler

```typescript
if (import.meta.hot) {
  // Accept hot update
  import.meta.hot.accept()
  
  // Dispose old module
  import.meta.hot.dispose(() => {
    // Cleanup before module is replaced
    cleanupEventListeners()
  })
  
  // Listen to custom events
  import.meta.hot.on('vite:beforeUpdate', (event) => {
    console.log('Before update:', event)
  })
  
  import.meta.hot.on('vite:afterUpdate', (event) => {
    console.log('After update:', event)
  })
}
```

---

## HMR Events

```typescript
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', (event) => {
    // Before modules are updated
  })
  
  import.meta.hot.on('vite:afterUpdate', (event) => {
    // After modules are updated
  })
  
  import.meta.hot.on('vite:beforeFullReload', (event) => {
    // Before full page reload
  })
  
  import.meta.hot.on('vite:error', (event) => {
    // On HMR error
  })
}
```

---

## Invalidate Module

```typescript
if (import.meta.hot) {
  // Force full reload instead of HMR
  import.meta.hot.invalidate()
}
```

---

## HMR Boundary

```typescript
// Accept dependencies
if (import.meta.hot) {
  import.meta.hot.accept([
    './utils.ts',
    './helpers.ts'
  ], ([utils, helpers]) => {
    // Handle updates from specific dependencies
  })
}
```
