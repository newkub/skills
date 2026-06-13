# Progress Bar

## Long Running Tasks

```typescript
await vscode.window.withProgress(
  {
    location: vscode.ProgressLocation.Progressbar,
    title: 'Processing files',
    cancellable: true
  },
  async (progress, token) => {
    const files = await getFiles();

    for (let i = 0; i < files.length; i++) {
      if (token.isCancellationRequested) {
        break;
      }

      await processFile(files[i]);

      progress.report({
        message: `Processing ${i + 1}/${files.length}`,
        increment: (i / files.length) * 100
      });
    }
  }
);
```
