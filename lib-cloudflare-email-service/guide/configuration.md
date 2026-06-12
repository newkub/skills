# Configuration

## DNS Records

### Email Sending

Add SPF record:

```
v=spf1 include:_spf.cloudflareemail.com ~all
```

### Email Routing

Add MX records:

```
@ MX 10 mx.cloudflareemail.com
```

## Wrangler Configuration

### Send Email

```jsonc
{
  "email": {
    "bindings": [{ "name": "EMAIL", "type": "send" }]
  }
}
```

### Receive Email

```jsonc
{
  "email": {
    "bindings": [{ "name": "EMAIL", "type": "receive" }]
  }
}
```

## Environment Variables

```bash
CLOUDFLARE_API_TOKEN=your_api_token
CLOUDFLARE_ACCOUNT_ID=your_account_id
```
