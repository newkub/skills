#!/usr/bin/env node

import { cac } from 'cac'

const cli = cac('skill-dev')

cli
  .command('dev', 'Start development server')
  .option('-p, --port <number>', 'Port number', { default: '3000' })
  .option('-h, --host <string>', 'Host address', { default: 'localhost' })
  .option('--open', 'Open browser automatically')
  .action(async (options) => {
    console.log('Starting development server...')
    console.log('Options:', options)
    
    // Dev server logic here
    const url = `http://${options.host}:${options.port}`
    console.log(`Server running at: ${url}`)
    
    if (options.open) {
      console.log('Opening browser...')
    }
  })

cli.help()
cli.parse()
