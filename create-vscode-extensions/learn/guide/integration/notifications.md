# Notifications

## Show with Actions

```typescript
const choice = await vscode.window.showInformationMessage(
  'Continue?',
  { modal: true },
  'Yes',
  'No',
  'Cancel'
);

if (choice === 'Yes') {
  // Continue
} else if (choice === 'No') {
  // Alternative
}
```
