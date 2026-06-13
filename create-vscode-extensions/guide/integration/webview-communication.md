# WebView Communication

## Send Messages to WebView

```typescript
const panel = vscode.window.createWebviewPanel(
  'myPanel',
  'My Panel',
  vscode.ViewColumn.One,
  {}
);

// Send message
panel.webview.postMessage({ type: 'update', data: someData });

// Listen for response
panel.webview.onDidReceiveMessage(msg => {
  if (msg.type === 'response') {
    console.log('Got response:', msg.payload);
  }
});
```

## WebView Script

```html
<script>
  const vscode = acquireVsCodeApi();

  // Listen for messages from extension
  window.addEventListener('message', event => {
    const message = event.data;
    if (message.type === 'update') {
      document.getElementById('content').textContent = message.data;
    }
  });

  // Send message to extension
  document.getElementById('btn').onclick = () => {
    vscode.postMessage({ type: 'click', value: 'hello' });
  };
</script>
```
