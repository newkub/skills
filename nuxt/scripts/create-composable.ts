#!/usr/bin/env bun
import { $ } from 'bun'

const composableName = process.argv[2]

if (!composableName) {
  console.error('Usage: bun scripts/create-composable.ts <useComposableName>')
  process.exit(1)
}

const composablePath = `composables/${composableName}.ts`

await $`mkdir -p composables`
await $`touch ${composablePath}`

const content = `export const ${composableName} = () => {
  // Add your logic here
  
  return {
    // Return reactive state and methods
  }
}
`

await Bun.write(composablePath, content)

console.log(`Created composable: ${composablePath}`)
