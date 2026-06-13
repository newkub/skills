# Features

Features และ capabilities ของ Raycast API

## List Component

### Basic List

```typescript
import { List } from "@raycast/api";

export default function Command() {
  return (
    <List>
      <List.Item title="Item 1" />
      <List.Item title="Item 2" />
      <List.Item title="Item 3" />
    </List>
  );
}
```

### Searchable List

```typescript
export default function Command() {
  const [search, setSearch] = useState("");

  return (
    <List
      searchText={search}
      onSearchTextChange={setSearch}
      navigationTitle="Search Items"
    >
      {items
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => (
          <List.Item key={item.id} title={item.name} />
        ))}
    </List>
  );
}
```

### Section Headers

```typescript
<List>
  <List.Section title="Favorites">
    <List.Item title="Important Item" />
  </List.Section>
  <List.Section title="Recent">
    <List.Item title="Recent Item" />
  </List.Section>
</List>
```

### List Item Accessories

```typescript
<List.Item
  title="Document"
  subtitle="Last edited yesterday"
  accessoryTitle="5 MB"
  accessoryIcon="document.pdf"
  icon="📄"
/>
```

## Form Component

### Text Input

```typescript
<Form.TextField
  title="Name"
  placeholder="Enter your name"
  defaultValue=""
  onChange={(value) => console.log(value)}
/>
```

### Dropdown

```typescript
<Form.Dropdown
  title="Category"
  defaultValue="a"
  onChange={(value) => console.log(value)}
>
  <Form.Dropdown.Item value="a" title="Category A" />
  <Form.Dropdown.Item value="b" title="Category B" />
  <Form.Dropdown.Item value="c" title="Category C" />
</Form.Dropdown>
```

### Checkbox

```typescript
<Form.Checkbox
  label="Enable notifications"
  defaultValue={true}
  onChange={(value) => console.log(value)}
/>
```

### Password Field

```typescript
<Form.PasswordField
  title="API Key"
  placeholder="Enter your API key"
/>
```

### Date Picker

```typescript
<Form.DatePicker
  title="Due Date"
  type={Form.DatePicker.Type.Date}
/>
```

### Slider

```typescript
<Form.Slider
  title="Volume"
  minValue={0}
  maxValue={100}
  defaultValue={50}
/>
```

## Action Panel

### Basic Actions

```typescript
<List.Item
  title="Item"
  actions={
    <ActionPanel>
      <Action title="Do Something" onAction={() => console.log("clicked")} />
    </ActionPanel>
  }
/>
```

### Open URL

```typescript
<Action.OpenInBrowser url="https://example.com" />
```

### Copy to Clipboard

```typescript
<Action.CopyToClipboard content="Text to copy" />
```

### Push View

```typescript
<Action.Push title="View Details" target={<DetailView />} />
```

### Create Child Action Panel

```typescript
<List.Item
  title="Item"
  actions={
    <ActionPanel>
      <Action title="Primary" onAction={() => {}} />
      <ActionPanel.Submenu title="More Actions">
        <Action title="Action 1" onAction={() => {}} />
        <Action title="Action 2" onAction={() => {}} />
      </ActionPanel.Submenu>
    </ActionPanel>
  }
/>
```

## Navigation

### Navigation Stack

```typescript
import { NavigationStack } from "@raycast/api";

export default function App() {
  return (
    <NavigationStack>
      <HomeView />
    </NavigationStack>
  );
}
```

### Pop to Root

```typescript
<Action
  title="Go Home"
  onAction={() => navigation.popToRoot()}
/>
```

## Storage

### Local Storage

```typescript
import { useLocalStorage } from "@raycast/api";

export default function Command() {
  const [value, setValue] = useLocalStorage("myKey", "default");

  return <List>{value}</List>;
}
```

### Clear Storage

```typescript
const { clear: clearCache } = useCache();
await clearCache();
```

## Clipboard

### Read Clipboard

```typescript
import { getSelectedText } from "@raycast/api";

const text = await getSelectedText();
```

### Write to Clipboard

```typescript
import { Clipboard } from "@raycast/api";

await Clipboard.copy("Hello, World!");
```

## Toast

### Show Toast

```typescript
import { Toast } from "@raycast/api";

// Success
await Toast.show({
  title: "Success",
  message: "Operation completed",
  style: Toast.Style.Success
});

// Error
await Toast.show({
  title: "Error",
  message: "Something went wrong",
  style: Toast.Style.Failure
});

// Loading
const toast = await Toast.show({
  title: "Loading...",
  style: Toast.Style.Animated
});

// Update
toast.hide();
```

## Launch Commands

### Launch Another Command

```typescript
import { launchCommand } from "@raycast/api";

await launchCommand({ name: "my-other-command", type: "user" });
```

### Launch with Arguments

```typescript
await launchCommand({
  name: "my-command",
  type: "user",
  arguments: { query: "search term" }
});
```

## Environment

### Get Environment Info

```typescript
import { environment } from "@raycast/api";

console.log(environment.commandName);     // Current command name
console.log(environment.extensionName);    // Extension name
console.log(environment.homeDir);          // Home directory
console.log(environment.commandMode);     // "view" | "prompt" | "launcher"
```

## Key Events

```typescript
import { useKey equivalents } from "@raycast/api";

useKeyEquivalents({
  onEnter: () => handleEnter(),
  onEscape: () => handleEscape(),
});
```

## Search Bar

### Custom Placeholder

```typescript
<List searchBarPlaceholder="Search files...">
```

### Disable Search

```typescript
<List searchBarProps={{ enable: false }}>
```

## Empty States

```typescript
<List>
  <List.EmptyView
    title="No Items"
    description="No items found"
    icon="📦"
  />
</List>
```

## Throwing Errors

```typescript
import { showToast, Toast } from "@raycast/api";

throw new Error("Something went wrong");

// With toast
await showToast({
  title: "Error",
  message: "Failed to fetch data",
  style: Toast.Style.Failure
});
```

## Preferences

### Define Preferences

```typescript
// manifest.json
{
  "preferences": [
    {
      "name": "apiKey",
      "type": "password",
      "required": true,
      "title": "API Key",
      "description": "Your API key"
    }
  ]
}
```

### Use Preferences

```typescript
import { usePreferences } from "@raycast/api";

interface Preferences {
  apiKey: string;
  theme: "light" | "dark";
}

export default function Command() {
  const { preferences } = usePreferences<Preferences>();

  return <List>API: {preferences.apiKey}</List>;
}
```