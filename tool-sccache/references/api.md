# Server API

## Purpose

Server API reference สำหรับ sccache

## Scope

- HTTP API
- Endpoints

## HTTP API

### Status

```bash
curl http://localhost:5000/status
```

### Stats

```bash
curl http://localhost:5000/stats
```

## Summary

| Endpoint | Description |
|----------|-------------|
| `/status` | Server status |
| `/stats` | Cache statistics |