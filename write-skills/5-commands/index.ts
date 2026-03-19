#!/usr/bin/env node

import { cac } from 'cac'

const cli = cac('skill')

// Import all commands
import './1-build'
import './2-dev'
import './3-test'
import './4-deploy'
import './5-lint'
import './6-clean'

cli
  .command('', 'Skill development CLI')
  .option('-v, --version', 'Show version')
  .action(() => {
    cli.outputHelp()
  })

cli.help()
cli.parse()
