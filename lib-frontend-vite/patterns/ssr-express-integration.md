---
title: SSR Express Integration
description: การใช้ SSR ร่วมกับ Express server
---

# SSR Express Integration

```javascript
// server.js
import express from 'express'
import { render } from './src/entry-server.js'

const app = express()

// Serve static files
app.use('/assets', express.static('./dist/client/assets'))

// SSR route
app.get('*', async (req, res) => {
  const context = {}
  const { html, state } = await render(req.url, context)

  if (context.redirect) {
    return res.redirect(context.redirect)
  }

  if (context.notFound) {
    res.status(404)
  }

  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="app">${html}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
        <script type="module" src="/assets/entry-client.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000)
```
