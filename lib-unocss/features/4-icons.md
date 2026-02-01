# Icons

## Setup
```javascript
// uno.config.js
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ]
})
```

## Basic Usage
```html
<!-- ใช้ icons จาก collections -->
<div class="i-carbon-home"></div>
<div class="i-heroicons-user"></div>
<div class="i-material-symbols-settings"></div>
```

## Custom Icons
```html
<!-- กำหนดขนาดและสี -->
<div class="i-carbon-home text-2xl text-blue-500"></div>
<div class="i-heroicons-user w-6 h-6 text-gray-600"></div>
```

## Icon Collections
- **carbon**: IBM Carbon Design System
- **heroicons**: Tailwind Heroicons
- **material-symbols**: Google Material Symbols
- **lucide**: Lucide icons
- **mdi**: Material Design Icons

## Dynamic Icons
```html
<!-- ใช้กับ JavaScript -->
<template>
  <div :class="`i-${iconName}`"></div>
</template>

<script>
export default {
  data() {
    return {
      iconName: 'carbon-home'
    }
  }
}
</script>
```
