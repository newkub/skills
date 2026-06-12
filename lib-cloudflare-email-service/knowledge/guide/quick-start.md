# Quick Start

## Send Email with Workers

```typescript
export default {
  async fetch(request, env) {
    await env.EMAIL.send({
      from: "sender@yourdomain.com",
      to: "recipient@example.com",
      subject: "Hello from Cloudflare",
      text: "This is a test email",
    });
    return new Response("Email sent!");
  }
};
```

## Receive Email with Workers

```typescript
export default {
  async email(message, env) {
    const { from, to, subject, text } = message;
    console.log(`Received email from ${from}: ${subject}`);
    
    await message.forward("admin@yourdomain.com");
  }
};
```

## Send via REST API

```bash
curl -X POST https://api.cloudflare.com/client/v4/accounts/{account_id}/email/routing/addresses/{address_id}/send \
  -H "Authorization: Bearer {api_token}" \
  -H "Content-Type: application/json" \
  -d '{
    "personalizations": [{"to": [{"email": "recipient@example.com"}]}],
    "from": {"email": "sender@yourdomain.com"},
    "subject": "Hello",
    "content": [{"type": "text/plain", "value": "This is a test"}]
  }'
```
