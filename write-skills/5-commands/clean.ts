#!/usr/bin/env node

import { cac } from 'cac'

const cli = cac('skill-clean')

cli
  .command('clean', 'Clean build artifacts and cache')
  .option('--all', 'Clean everything including node_modules')
  .option('--cache', 'Clean cache only')
  .option('--dist', 'Clean dist folder only')
  .action(async (options) => {
    console.log('Cleaning...')
    console.log('Options:', options)
    
    // Clean logic here
    if (options.all) {
      console.log('Cleaning everything...')
      // Remove node_modules, dist, cache, etc.
    } else if (options.cache) {
      console.log('Cleaning cache only...')
      // Remove cache folders
    } else if (options.dist) {
      console.log('Cleaning dist folder only...')
      // Remove dist folder
    } else {
      console.log('Default clean...')
      // Remove dist and cache
    }
    
    console.log('Cleaning completed!')
  })

cli.help()
cli.parse()
