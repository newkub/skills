# Raycast API Reference

Complete reference for @raycast/api

## Components

### List

```typescript
import { List } from "@raycast/api";

// Basic usage
<List>
  <List.Item title="Item 1" />
  <List.Item title="Item 2" />
</List>

// With search
<List
  searchText={search}
  onSearchTextChange={setSearch}
  navigationTitle="My List"
>
  {items.map(item => (
    <List.Item key={item.id} title={item.name} />
  ))}
</List>

// With sections
<List>
  <List.Section title="Section 1">
    <List.Item title="Item 1" />
  </List.Section>
  <List.Section title="Section 2">
    <List.Item title="Item 2" />
  </List.Section>
</List>

// Empty view
<List>
  <List.EmptyView
    title="No Results"
    description="Try a different search"
  />
</List>
```

### List.Item

| Prop | Type | Description |
|------|------|-------------|
| title | string | Main text |
| subtitle | string | Secondary text |
| icon | string | Icon name/path |
| accessories | Accessory[] | Right-side items |
| actions | ReactNode | Action panel |

### List.Item Accessories

| Type | Prop | Description |
|------|------|-------------|
| text | accessoryTitle | Text value |
| icon | accessoryIcon | SF Symbol name |
| fileIcon | accessoryFileIcon | File icon for path |

### Form

```typescript
import { Form } from "@raycast/api";

<Form>
  <Form.TextField
    title="Name"
    placeholder="Enter name"
    defaultValue=""
    onChange={handleChange}
  />

  <Form.Dropdown
    title="Category"
    defaultValue="a"
    onChange={handleChange}
  >
    <Form.Dropdown.Item value="a" title="Option A" />
    <Form.Dropdown.Item value="b" title="Option B" />
  </Form.Dropdown>

  <Form.Checkbox
    title="Enable"
    label="Enable feature"
    defaultValue={true}
  />

  <Form.PasswordField
    title="API Key"
    placeholder="Enter key"
  />

  <Form.Slider
    title="Volume"
    minValue={0}
    maxValue={100}
    defaultValue={50}
  />
</Form>
```

### ActionPanel

```typescript
import { ActionPanel, Action } from "@raycast/api";

<ActionPanel>
  <Action
    title="Do Something"
    onAction={() => console.log("clicked")}
    shortcut={{ modifiers: ["cmd"], key: "enter" }}
  />

  <Action.OpenInBrowser url="https://example.com" />

  <Action.CopyToClipboard content="text to copy" />

  <Action.Push title="View" target={<DetailView />} />

  <ActionPanel.Section title="Section">
    <Action title="Action 1" onAction={() => {}} />
    <Action title="Action 2" onAction={() => {}} />
  </ActionPanel.Section>

  <ActionPanel.Submenu title="More">
    <Action title="Sub 1" onAction={() => {}} />
  </ActionPanel.Submenu>
</ActionPanel>
```

### NavigationStack

```typescript
import { NavigationStack } from "@raycast/api";

<NavigationStack>
  <ParentView />
</NavigationStack>
```

## Hooks

### useState

```typescript
const [value, setValue] = useState(initialValue);
```

### useEffect

```typescript
useEffect(() => {
  // Effect logic
  return () => { /* cleanup */ };
}, [dependencies]);
```

### usePreferences

```typescript
import { usePreferences } from "@raycast/api";

interface Preferences {
  apiKey: string;
  theme: "light" | "dark";
}

const { preferences, hasPreferences } = usePreferences<Preferences>();
```

### useLocalStorage

```typescript
import { useLocalStorage } from "@raycast/api";

const [value, setValue] = useLocalStorage("key", defaultValue);
```

### useKeyEquivalents

```typescript
import { useKeyEquivalents } from "@raycast/api";

useKeyEquivalents({
  onEnter: () => handleEnter(),
  onEscape: () => handleEscape(),
  onBackspace: () => handleBackspace(),
  onTab: () => handleTab(),
});
```

## Utilities

### Toast

```typescript
import { Toast, showToast } from "@raycast/api";

// Show toast
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

// Animated (loading)
const toast = await Toast.show({
  title: "Loading...",
  style: Toast.Style.Animated
});
toast.hide();
```

### Clipboard

```typescript
import { Clipboard } from "@raycast/api";

// Copy text
await Clipboard.copy("Hello");

// Copy with options
await Clipboard.copy({
  text: "Hello",
  rtf: richTextData
});
```

### getSelectedText

```typescript
import { getSelectedText } from "@raycast/api";

const text = await getSelectedText();
```

### open

```typescript
import { open } from "@raycast/api";

// Open URL
await open("https://example.com");

// Open with bundle ID
await open("https://example.com", {
  bundleIdentifier: "com.example.app"
});
```

### launchCommand

```typescript
import { launchCommand } from "@raycast/api";

// Launch command
await launchCommand({ name: "my-command", type: "user" });

// With arguments
await launchCommand({
  name: "search",
  type: "user",
  arguments: { query: "search term" }
});
```

### runShellCommand

```typescript
import { runShellCommand } from "@raycast/api";

const { stdout, stderr } = await runShellCommand({
  command: "echo 'Hello'",
  shell: "/bin/zsh",
  env: { KEY: "value" }
});
```

### environment

```typescript
import { environment } from "@raycast/api";

environment.extensionName   // Extension name
environment.commandName     // Current command name
environment.homeDir         // Home directory
environment.workspaceStorage // Workspace storage path
```

### Cache

```typescript
import { useCache } from "@raycast/api";

const { get, set, clear } = useCache();

await set("key", "value");
const value = await get("key");
await clear();
```

## File System

### readTextFile

```typescript
import { readTextFile } from "@raycast/api";

const content = await readTextFile("~/.config/myapp/config.json");
```

### writeTextFile

```typescript
import { writeTextFile } from "@raycast/api";

await writeTextFile("~/.config/myapp/data.json", jsonContent);
```

### mkdir

```typescript
import { mkdir } from "@raycast/api";

await mkdir("~/.config/myapp", { intermediates: true });
```

### expandPath

```typescript
import { expandPath } from "@raycast/api";

const path = await expandPath("~/documents");
```

## Data Types

### LaunchProps

```typescript
interface LaunchProps {
  arguments: Record<string, string>;
  executionId: string;
  option?: string;
}
```

### ListItemProps

```typescript
interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: string;
  accessoryTitle?: string;
  accessoryIcon?: string;
  actions?: ReactNode;
}
```

### ActionProps

```typescript
interface ActionProps {
  title: string;
  onAction: () => void;
  shortcut?: KeyboardShortcut;
  icon?: string;
}
```

### KeyboardShortcut

```typescript
interface KeyboardShortcut {
  modifiers: ("cmd" | "alt" | "ctrl" | "shift")[];
  key: string;
}

// Example
{ modifiers: ["cmd", "shift"], key: "f" }
```

## Icon System

SF Symbols are used for icons:

```typescript
// Built-in icons
<List.Item icon="folder" />

// Custom path
<List.Item icon="./assets/icon.png" />

// System symbols
<Action icon="terminal" />
```