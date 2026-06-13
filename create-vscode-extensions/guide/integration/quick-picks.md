# Quick Picks

## Async Data

```typescript
async function showAsyncPicker() {
  const items = await fetchItems();

  const selected = await vscode.window.showQuickPick(
    items.map(item => ({
      label: item.name,
      description: item.description,
      detail: item.id
    })),
    {
      placeHolder: 'Select an item',
      matchOnDescription: true,
      matchOnDetail: true
    }
  );

  if (selected) {
    console.log('Selected:', selected.detail);
  }
}
```
