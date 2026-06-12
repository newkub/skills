# Installation

## Install Agents SDK

```bash
bun add agents
```

## For Chat Agents

```bash
bun add agents @cloudflare/ai-chat ai @ai-sdk/react
```

## Wrangler Configuration

Add to `wrangler.jsonc`:

```jsonc
{
  "compatibility_flags": ["nodejs_compat"],
  "durable_objects": {
    "bindings": [{ "name": "MyAgent", "class_name": "MyAgent" }]
  },
  "migrations": [{ "tag": "v1", "new_sqlite_classes": ["MyAgent"] }]
}
```

## Important Notes

- Do NOT enable `experimentalDecorators` in tsconfig
- Never edit old migrations - always add new tags
- Each agent class needs its own DO binding + migration entry
