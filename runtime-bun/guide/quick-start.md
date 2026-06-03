# Quick Start - Bun

## Hello World

```typescript
// hello.ts
console.log("Hello from Bun!")

bun run hello.ts
```

## HTTP Server

```typescript
// server.ts
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Hello Bun!")
  }
})

console.log(`Server running on http://localhost:${server.port}`)
```

```bash
bun run server.ts
```

## Working with Files

```typescript
// read-json.ts
import { readFileSync } from "fs"

const data = JSON.parse(readFileSync("package.json", "utf-8"))
console.log(data.name)

// Or with Bun's native API
const file = Bun.file("package.json")
const content = await file.text()
const data = JSON.parse(content)
```

## TypeScript

```typescript
// typescript example
interface User {
  name: string
  age: number
}

function greet(user: User): string {
  return `Hello, ${user.name}!`
}

const user: User = { name: "Alice", age: 30 }
console.log(greet(user))
```

```bash
# Bun runs TypeScript directly
bun run typescript.ts
```

## Testing

```typescript
// greet.test.ts
import { test, expect } from "bun:test"

test("greet returns greeting", () => {
  expect(greet({ name: "World", age: 0 })).toBe("Hello, World!")
})
```

```bash
bun test
```

## SQLite

```typescript
import { Database } from "bun:sqlite"

const db = new Database("app.db")

db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  )
`)

const result = db.query("SELECT * FROM users").all()
console.log(result)
```

## Create Project

```bash
bun create react my-app
cd my-app
bun install
bun run dev
```

## Full Workflow

```bash
# 1. Create project
bun create next my-app
cd my-app

# 2. Install deps
bun install

# 3. Run dev
bun run dev

# 4. Build
bun run build

# 5. Test
bun test

# 6. Start production
bun run start
```
