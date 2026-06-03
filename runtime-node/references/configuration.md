# configuration

## index.md

# Configuration Reference - Node.js

## package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My Node.js project",
  "main": "src/index.js",
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js",
    "test": "node --test"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

## .npmrc

```ini
registry=https://registry.npmjs.org/
save-exact=true
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| NODE_ENV | Environment (development/production) |
| NODE_OPTIONS | Additional Node.js options |
| npm_config_* | npm configuration prefix |

## .env

Use dotenv package:

```bash
npm install dotenv
```

```bash
# .env file
DATABASE_URL=postgres://localhost/db
PORT=3000
SECRET=my-secret
```

## ES Modules

### package.json

```json
{
  "type": "module"
}
```

### Or use .mjs extension

```javascript
// app.mjs
export default function() {
  return 'Hello'
}
```

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "strict": true
  }
}
```

## ESM with CommonJS

### Dynamic Import

```javascript
// In CommonJS file
const path = require('path')
```

```javascript
// In ESM file
import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
```


---

