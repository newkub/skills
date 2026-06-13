# Language Server

## Register Language Server

```json
"contributes": {
  "server": {
    "runtime": "node",
    "args": ["--node-lib-path", "${workspaceFolder}/lib"]
  }
}
```
