#!/usr/bin/env bun
import { $ } from 'bun'

const componentName = process.argv[2]

if (!componentName) {
  console.error('Usage: bun scripts/create-component.ts <ComponentName>')
  process.exit(1)
}

const componentPath = `components/${componentName}.vue`

await $`mkdir -p components`
await $`touch ${componentPath}`

const content = `<template>
  <div class="${componentName.toLowerCase()}">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  // Define props here
}

const props = defineProps<Props>()
</script>

<style scoped>
.${componentName.toLowerCase()} {
  /* Add styles here */
}
</style>
`

await Bun.write(componentPath, content)

console.log(`Created component: ${componentPath}`)
