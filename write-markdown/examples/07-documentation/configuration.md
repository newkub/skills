---
description: Configuration guide ใน Markdown
title: configuration
tags: [markdown, configuration, config, setup]
goals:
  - แสดงตัวอย่างการเขียน configuration guide
  - สอนวิธีอธิบาย config options
---

## Configuration File

````markdown
# Configuration

Create a `config.yaml` file in your project root:

```yaml
# Application settings
app:
  name: my-app
  port: 3000
  debug: false

# Database settings
database:
  host: localhost
  port: 5432
  name: mydb
  pool:
    min: 2
    max: 10

# API settings
api:
  timeout: 30000
  retries: 3
  baseUrl: https://api.example.com
```
````

## Environment-Specific Config

````markdown
## Environment Configuration

### Development

```yaml
# config.dev.yaml
app:
  debug: true
  port: 3000

database:
  host: localhost
```

### Production

```yaml
# config.prod.yaml
app:
  debug: false
  port: 80

database:
  host: prod-db.example.com
```
````

## Config Options Table

````markdown
## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `app.name` | string | - | Application name |
| `app.port` | number | 3000 | Server port |
| `app.debug` | boolean | false | Enable debug mode |
| `database.host` | string | localhost | Database host |
| `database.port` | number | 5432 | Database port |
| `api.timeout` | number | 30000 | Request timeout (ms) |
| `api.retries` | number | 3 | Retry attempts |
````

## Loading Config

````markdown
## Loading Configuration

```javascript
import { loadConfig } from 'my-package';

const config = loadConfig({
  path: './config.yaml',
  env: process.env.NODE_ENV
});
```
````
