# jsDelivr API Reference

เอกสารอ้างอิงสำหรับ jsDelivr CDN URLs และ Data API

## CDN URLs

### bun Packages

#### Basic Format

```text
https://cdn.jsdelivr.net/bun/{package}@{version}/{path}
```

#### Parameters

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| `package` | ✅ | bun package name | `lodash`, `vue`, `react` |
| `version` | ❌ | Version or tag | `4.17.21`, `3.4.21`, `latest`, `next` |
| `path` | ❌ | File path within package | `dist/vue.global.js` |

#### Version Formats

| Format | Example | Description |
|--------|---------|-------------|
| Exact | `vue@3.4.21` | Specific version |
| Latest | `vue` หรือ `vue@latest` | Latest published version |
| Major | `vue@3` | Latest minor/patch of major |
| Minor | `vue@3.4` | Latest patch of minor |
| Range | `vue@^3.0.0` | Semver range |
| Tag | `vue@next` | bun/dist tag |

#### Examples

```text
# Exact version
https://cdn.jsdelivr.net/bun/lodash@4.17.21/lodash.min.js

# Latest of major version
https://cdn.jsdelivr.net/bun/lodash@4/lodash.min.js

# Default entry point (from package.json main/unpkg/jsdelivr)
https://cdn.jsdelivr.net/bun/lodash

# Specific file
https://cdn.jsdelivr.net/bun/vue@3.4.21/dist/vue.esm-browser.js

# CSS file
https://cdn.jsdelivr.net/bun/bootstrap@5.3.2/dist/css/bootstrap.min.css
```

### GitHub Repositories

#### Format

```text
https://cdn.jsdelivr.net/gh/{user}/{repo}@{version}/{path}
```

#### Parameters

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| `user` | ✅ | GitHub username/organization | `twbs`, `facebook` |
| `repo` | ✅ | Repository name | `bootstrap`, `react` |
| `version` | ❌ | Commit, branch, or tag | `v5.3.2`, `main`, `a1b2c3d` |
| `path` | ❌ | File path in repo | `dist/bootstrap.min.css` |

#### Examples

```text
# Specific release
https://cdn.jsdelivr.net/gh/twbs/bootstrap@v5.3.2/dist/css/bootstrap.min.css

# Branch
https://cdn.jsdelivr.net/gh/twbs/bootstrap@main/dist/css/bootstrap.min.css

# Commit hash
https://cdn.jsdelivr.net/gh/jquery/jquery@3.6.4/dist/jquery.min.js
```

### WordPress

#### Format

```text
https://cdn.jsdelivr.net/wp/{plugin}/tags/{version}/{path}
https://cdn.jsdelivr.net/wp/{plugin}/trunk/{path}
```

#### Examples

```text
# Specific version
https://cdn.jsdelivr.net/wp/akismet/tags/5.0/akismet.php

# Trunk (latest development)
https://cdn.jsdelivr.net/wp/akismet/trunk/akismet.php
```

## esm.run

### Format

```text
https://esm.run/{package}@{version}
```

### Parameters

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| `package` | ✅ | bun package name | `vue`, `preact` |
| `version` | ❌ | Version or tag | `@3`, `@3.4.21` |

### Features

- Auto-detects entry point from `module` or `exports` in package.json
- Bundles and optimizes for browser
- Supports deep imports: `https://esm.run/lodash-es/debounce`

### Examples

```text
# Basic import
https://esm.run/vue@3

# Deep import
https://esm.run/lodash-es/debounce
https://esm.run/@vueuse/core/useFetch
```

## Combine (Multi-file)

### Format

```text
https://cdn.jsdelivr.net/combine/{url1},{url2},{url3},...
```

### Rules

- Maximum 10 files per request
- Each URL must be from jsDelivr
- CSS and JS can be combined together
- Query parameters are not supported

### Examples

```text
# Combine JS files
https://cdn.jsdelivr.net/combine/bun/vue@3/dist/vue.global.js,bun/lodash@4/lodash.min.js

# Combine CSS files
https://cdn.jsdelivr.net/combine/bun/bootstrap@5/dist/css/bootstrap.min.css,bun/@fortawesome/fontawesome-free@6/css/all.min.css

# Mixed
https://cdn.jsdelivr.net/combine/bun/normalize.css,bun/skeleton-css/css/skeleton.css
```

## Data API

### Package Metadata

#### Get Package Info

```text
GET https://data.jsdelivr.com/v1/package/bun/{package}
```

Response:

```json
{
  "type": "bun",
  "name": "vue",
  "versions": ["3.4.21", "3.4.20", "3.4.19", "3.3.13", "2.7.16"],
  "tags": {
    "latest": "3.4.21",
    "next": "3.5.0-alpha.1"
  }
}
```

#### Get Version Info

```text
GET https://data.jsdelivr.com/v1/package/bun/{package}@{version}
```

Response:

```json
{
  "type": "bun",
  "name": "vue",
  "version": "3.4.21",
  "default": "/dist/vue.global.js",
  "files": [
    {
      "type": "directory",
      "name": "/dist"
    },
    {
      "type": "file",
      "name": "/dist/vue.global.js",
      "hash": "sha256:...",
      "size": 156432,
      "time": "2024-03-15T10:30:00.000Z"
    }
  ]
}
```

#### Get File List

```text
GET https://data.jsdelivr.com/v1/package/bun/{package}@{version}/tree
```

Query Parameters:

- `path` - Filter by path prefix

Response:

```json
{
  "type": "directory",
  "files": [
    {
      "type": "file",
      "name": "/dist/vue.global.js",
      "hash": "sha256:...",
      "size": 156432
    },
    {
      "type": "file",
      "name": "/dist/vue.esm-browser.js",
      "hash": "sha256:...",
      "size": 145678
    }
  ]
}
```

#### Resolve Entry Point

```text
GET https://data.jsdelivr.com/v1/package/resolve/bun/{package}@{version}
```

Response:

```json
{
  "entry": "/dist/vue.global.js",
  "url": "https://cdn.jsdelivr.net/bun/vue@3.4.21/dist/vue.global.js"
}
```

### GitHub API

#### Get Repo Info

```text
GET https://data.jsdelivr.com/v1/package/gh/{user}/{repo}
```

#### Get Branch/Tag Info

```text
GET https://data.jsdelivr.com/v1/package/gh/{user}/{repo}@{ref}
```

### Stats API

#### Package Stats

```text
GET https://data.jsdelivr.com/v1/stats/packages/bun/{package}
```

Response:

```json
{
  "total": 1234567890,
  "versions": {
    "3.4.21": 123456,
    "3.4.20": 98765,
    "3.4.19": 87654
  },
  "dates": {
    "2024-03-15": 54321,
    "2024-03-14": 43210
  }
}
```

#### Network Stats

```text
GET https://data.jsdelivr.com/v1/stats/network
```

Response:

```json
{
  "hits": {
    "total": 150000000000,
    "countries": {
      "US": 45000000000,
      "CN": 38000000000,
      "IN": 15000000000
    }
  }
}
```

## Query Parameters

### CDN URLs

| Parameter | Description | Example |
|-----------|-------------|---------|
| `module` | Force ESM output | `?module` |

### Data API

| Parameter | Description | Example |
|-----------|-------------|---------|
| `page` | Pagination (0-indexed) | `?page=0` |
| `per_page` | Items per page (max 100) | `?per_page=50` |
| `structure` | Include directory structure | `?structure` |

## HTTP Headers

### Response Headers

| Header | Description |
|--------|-------------|
| `Cache-Control` | Caching directives |
| `ETag` | Resource identifier |
| `Last-Modified` | Last modification time |
| `Access-Control-Allow-Origin` | CORS support (`*`) |
| `Timing-Allow-Origin` | Resource timing access (`*`) |
| `X-Cache` | Cache status (HIT, MISS) |
| `X-Served-By` | CDN provider used |

### Request Headers

| Header | Purpose |
|--------|---------|
| `Accept` | Content type negotiation |
| `Accept-Encoding` | Compression (gzip, br) |
| `Origin` | CORS request origin |
| `If-None-Match` | Conditional request (ETag) |
| `If-Modified-Since` | Conditional request |

## Status Codes

| Code | Meaning |
|------|---------|
| `200 OK` | Success |
| `304 Not Modified` | Cache valid |
| `404 Not Found` | Package/file not found |
| `429 Too Many Requests` | Rate limit exceeded |
| `500 Internal Server Error` | Server error |
| `502 Bad Gateway` | Origin error |
| `503 Service Unavailable` | CDN unavailable |

## Rate Limits

### Data API

| Endpoint | Limit |
|----------|-------|
| Package info | 1000 requests/hour |
| Stats | 100 requests/hour |
| Network stats | 10 requests/hour |

### CDN

No rate limits for CDN requests (fair use policy applies).

## CORS

jsDelivr รองรับ CORS ทุก endpoint:

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD
Access-Control-Allow-Headers: *
```

## SRI (Subresource Integrity)

### Generate Hash

```bash
# Using openssl
curl -s https://cdn.jsdelivr.net/bun/vue@3.4.21/dist/vue.global.js | \
  openssl dgst -sha384 -binary | \
  openssl base64 -A
```

### Usage

```html
<script src="https://cdn.jsdelivr.net/bun/vue@3.4.21/dist/vue.global.js"
        integrity="sha384-..."
        crossorigin="anonymous"></script>
```

### Get Hash from API

```text
GET https://data.jsdelivr.com/v1/package/bun/{package}@{version}
```

Response includes `hash` field for each file (SHA-256).

## Tools

### Purge Cache

```text
POST https://purge.jsdelivr.net/bun/{package}@{version}
POST https://purge.jsdelivr.net/gh/{user}/{repo}@{version}
```

Web interface: <https://www.jsdelivr.com/tools/purge>

### URL Converter

- GitHub: <https://www.jsdelivr.com/github>
- unpkg: <https://www.jsdelivr.com/unpkg>
- Google: <https://www.jsdelivr.com/google>
- Skypack: <https://www.jsdelivr.com/skypack>
- esm.sh: <https://www.jsdelivr.com/esmsh>
