#!/usr/bin/env bun
import { $ } from 'bun'

const pageName = process.argv[2]

if (!pageName) {
  console.error('Usage: bun scripts/create-page.ts <page-name>')
  process.exit(1)
}

const pagePath = `pages/${pageName}.vue`

await $`mkdir -p pages`
await $`touch ${pagePath}`

const content = `<template>
  <div>
    <h1>${pageName}</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '${pageName}'
})
</script>
`

await Bun.write(pagePath, content)

console.log(`Created page: ${pagePath}`)
