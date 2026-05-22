# Integration Examples

## VS Code Extension

```javascript
import { parse } from '@ast-grep/napi';
import * as vscode from 'vscode';

class AstGrepProvider implements vscode.CodeActionProvider {
  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range
  ): vscode.CodeAction[] {
    const code = document.getText();
    const ast = parse(code, 'typescript');
    
    const matches = ast.root().findAll('console.log($ARG)');
    const actions: vscode.CodeAction[] = [];
    
    matches.forEach(match => {
      const matchRange = new vscode.Range(
        match.range().start().row,
        match.range().start().column,
        match.range().end().row,
        match.range().end().column
      );
      
      if (matchRange.intersection(range)) {
        const action = new vscode.CodeAction(
          'Replace with logger.info',
          vscode.CodeActionKind.QuickFix
        );
        action.edit = new vscode.WorkspaceEdit();
        action.edit.replace(
          document.uri,
          matchRange,
          'logger.info($ARG)'
        );
        actions.push(action);
      }
    });
    
    return actions;
  }
}
```

## Build Tool Plugin

### Webpack Plugin

```javascript
class AstGrepPlugin {
  constructor(options) {
    this.rules = options.rules || [];
  }
  
  apply(compiler) {
    compiler.hooks.emit.tapAsync('AstGrepPlugin', async (compilation) => {
      const { SgRoot, Rule } = require('@ast-grep/napi');
      
      for (const file of Object.keys(compilation.assets)) {
        if (!file.endsWith('.ts')) continue;
        
        const source = compilation.assets[file].source();
        const root = SgRoot.parse(source, 'typescript');
        
        for (const ruleConfig of this.rules) {
          const rule = Rule.fromYaml(ruleConfig);
          const matches = root.root().find_all(rule);
          
          if (matches.length > 0) {
            console.warn(`AST-grep found ${matches.length} issues in ${file}`);
          }
        }
      }
    });
  }
}
```

### Vite Plugin

```javascript
import { parse } from '@ast-grep/napi';

export default function astGrepPlugin(options = {}) {
  return {
    name: 'ast-grep',
    
    transform(code, id) {
      if (!id.endsWith('.ts') && !id.endsWith('.tsx')) return null;
      
      const ast = parse(code, 'typescript');
      const matches = ast.root().findAll(options.pattern || 'console.log($ARG)');
      
      if (matches.length > 0) {
        this.warn(`Found ${matches.length} matches in ${id}`);
      }
      
      return null;
    }
  };
}
```

## CLI Tool

```javascript
#!/usr/bin/env node

const { SgRoot, Rule, ScanConfig } = require('@ast-grep/napi');
const fs = require('fs');
const path = require('path');

async function main() {
  const args = process.argv.slice(2);
  const pattern = args[0];
  const directory = args[1] || '.';
  
  const rule = Rule.fromYaml(`
id: custom-rule
language: typescript
rule:
  pattern: ${pattern}
`);
  
  const config = new ScanConfig({
    paths: [`${directory}/**/*.ts`],
    rule: rule
  });
  
  const results = await config.scan();
  
  results.forEach(result => {
    console.log(`File: ${result.file}`);
    result.matches.forEach(match => {
      console.log(`  ${match.range}: ${match.text()}`);
    });
  });
}

main().catch(console.error);
```
