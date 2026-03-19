---
title: SSR Client Entry
description: Client entry point สำหรับ hydration SSR application
---

# SSR Client Entry

```javascript
// src/entry-client.js
import { createSSRApp } from 'vue'
import App from './App.vue'

// Hydrate SSR-rendered app
const app = createSSRApp(App)

// Restore state from server
const initialState = window.__INITIAL_STATE__

// Mount to existing markup (hydration)
app.mount('#app', true)
```
