#!/usr/bin/env node

import { cac } from 'cac'

const cli = cac('skill-build')

cli
  .command('build', 'Build the skill project')
  .option('-o, --output <dir>', 'Output directory', { default: 'dist' })
  .option('-w, --watch', 'Watch mode')
  .option('-m, --minify', 'Minify output')
  .action(async (options) => {
    console.log('Building skill...')
    console.log('Options:', options)
    
    // Build logic here
    if (options.watch) {
      console.log('Watching for changes...')
    }
    
    console.log(`Output directory: ${options.output}`)
    console.log('Build completed!')
  })

cli.help()
cli.parse()
