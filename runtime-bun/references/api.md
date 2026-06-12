# API Reference - Bun

## Overview

Bun provides a set of native APIs on the `Bun` global object and built-in modules. These APIs are heavily optimized for common functionality.

## Global APIs

### Bun.serve

Start an HTTP/HTTPS server.

```typescript
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Hello Bun!")
  }
})
```

**Options:**

| Option | Type | Description |
|--------|------|-------------|
| `port` | number | Port to listen on |
| `hostname` | string | Hostname to bind |
| `tls` | object | TLS configuration |
| `fetch` | function | Request handler |

### Bun.file

Read a file as a Blob-like object.

```typescript
const file = Bun.file("data.json")
const content = await file.text()
const json = await file.json()
```

### Bun.write

Write to a file.

```typescript
await Bun.write("output.txt", "Hello!")
await Bun.write("output.json", JSON.stringify(data))
```

### Bun.password

Password hashing and verification.

```typescript
const hash = await Bun.password.hash("secret")
const isValid = await Bun.password.verify("secret", hash)
```

## Built-in Modules

### bun:sqlite

SQLite database support.

```typescript
import { Database } from "bun:sqlite"

const db = new Database("app.db")
const result = db.query("SELECT * FROM users").all()
```

### bun:test

Testing framework.

```typescript
import { test, expect, describe } from "bun:test"

test("example", () => {
  expect(1 + 1).toBe(2)
})
```

### bun:ffi

Foreign Function Interface for calling native libraries.

```typescript
import { dlopen, CString } from "bun:ffi"
```

## HTTP Client

### fetch

Native fetch API (Web Standard).

```typescript
const response = await fetch("https://api.example.com")
const data = await response.json()
```

### Bun.curl

```typescript
const response = await Bun.curl("https://example.com")
```

## File I/O

| API | Description |
|-----|-------------|
| `Bun.file(path)` | Create a file reader |
| `Bun.write(path, data)` | Write to file |
| `Bun.stdin` | Standard input |
| `Bun.stdout` | Standard output |
| `Bun.stderr` | Standard error |

## Networking

| API | Description |
|-----|-------------|
| `Bun.serve()` | HTTP/HTTPS server |
| `Bun.listen()` | TCP server |
| `Bun.connect()` | TCP client |
| `Bun.udpSocket()` | UDP socket |
| `WebSocket` | WebSocket client/server |

## Shell

### $ (Backtick)

Execute shell commands.

```typescript
const result = await $`ls -la`
console.log(result.stdout)
```

## Hashing

| API | Description |
|-----|-------------|
| `Bun.hash()` | Fast hash function |
| `Bun.password.hash()` | Password hashing |
| `Bun.password.verify()` | Verify password |
| `Bun.CryptoHasher` | Custom hashing |

## Utilities

| API | Description |
|-----|-------------|
| `Bun.version` | Bun version string |
| `Bun.env` | Environment variables |
| `Bun.main` | Entry point path |
| `Bun.sleep()` | Async sleep |
| `Bun.randomUUIDv7()` | Generate UUID |
| `Bun.which()` | Find executable |
| `Bun.deepEquals()` | Deep equality check |
| `Bun.peek()` | Peek at value |
| `Bun.escapeHTML()` | Escape HTML |
| `Bun.semver` | Semver utilities |

## Compression

| API | Description |
|-----|-------------|
| `Bun.gzipSync()` | Gzip compress |
| `Bun.gunzipSync()` | Gzip decompress |
| `Bun.deflateSync()` | Deflate compress |
| `Bun.inflateSync()` | Deflate decompress |

## Globals

| Variable | Type | Description |
|----------|------|-------------|
| `globalThis` | object | Global scope |
| `process` | object | Node.js compatible |
| `console` | object | Console API |
| `fetch` | function | Web fetch API |
| `Request` | class | Web Request |
| `Response` | class | Web Response |
| `URL` | class | URL handling |
| `Blob` | class | Binary data |
| `TextEncoder` | class | Text encoding |
| `TextDecoder` | class | Text decoding |

## Type Definitions

Install bun-types for TypeScript:

```bash
bun add -d @types/bun
```

---

**See also:**
- [Official API Docs](https://bun.sh/docs/runtime/bun-apis)
- [HTTP Server](https://bun.sh/docs/api/http)
- [SQLite](https://bun.sh/docs/runtime/sqlite)