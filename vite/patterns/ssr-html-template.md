---
title: SSR HTML Template
description: HTML template สำหรับ SSR รวมถึง placeholders
---

# SSR HTML Template

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head><!--vue-ssr-head--></head>
  <body>
    <div id="app"><!--vue-ssr-outlet--></div>
    <script>
      window.__INITIAL_STATE__ = <!--vue-ssr-state-->
    </script>
    <script type="module" src="/src/entry-client.js"></script>
  </body>
</html>
```
