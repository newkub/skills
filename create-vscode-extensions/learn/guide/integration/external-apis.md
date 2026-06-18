# External APIs

## HTTP Requests

```typescript
import * as vscode from 'vscode';
import * as http from 'http';

async function fetchFromAPI<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Invalid JSON'));
        }
      });
    }).on('error', reject);
  });
}

// Usage with error handling
async function loadData() {
  try {
    const data = await fetchFromAPI<Data>('https://api.example.com/data');
    vscode.window.showInformationMessage(`Loaded ${data.length} items`);
  } catch (error) {
    vscode.window.showErrorMessage('Failed to load data');
  }
}
```

## Using node-fetch

```bash
bun install node-fetch
```

```typescript
import fetch from 'node-fetch';

async function apiFetch(url: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'value' })
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
```
