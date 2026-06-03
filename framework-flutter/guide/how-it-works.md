# How It Works

## Flutter Rendering Pipeline

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Widget    │───▶│   Element   │───▶│  RenderObject│───▶│    Layer    │
│    Tree     │    │    Tree     │    │    Tree     │    │    Tree     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

## Build Flow

```
1. Flutter App Starts
   ↓
2. main() calls runApp()
   ↓
3. BuildContext provides element tree
   ↓
4. Widget tree builds element tree
   ↓
5. Element tree creates render objects
   ↓
6. Layer tree composites to screen
```

## Hot Reload Mechanism

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Code Change │────▶│   JIT Reify  │────▶│  Widget Tree │
│              │     │  New Widgets │     │    Updated   │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                     │
       └────────────────────┴─────────────────────┘
                    Incremental Update
                 (preserves app state)
```

## Widget Lifecycle

| Phase | Description |
|-------|-------------|
| **Constructor** | Widget created with parameters |
| **build()** | Returns widget tree |
| **didUpdateWidget()** | Called when parent widget changes |
| **dispose()** | Cleanup resources |

## State Management Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    State Management Options                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   setState  │  │   Provider   │  │    Riverpod  │       │
│  │  (Built-in) │  │  (Official)  │  │  (Community) │       │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │    BLoC     │  │   GetX      │  │   MobX      │        │
│  │  (Streams)  │  │  (Simple)    │  │ (Observable)│        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Platform Channel Communication

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│   Dart Code     │         │  Flutter Engine │         │  Native Code    │
│                 │  Method  │                 │  Method  │                 │
│  Channel.invoke │────────▶│  MethodChannel  │────────▶│  (Kotlin/Swift) │
│                 │◀────────│                 │◀────────│                 │
│                 │  Result │                 │  Result │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

## Compilation Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| **JIT** | Just-in-Time compilation | Development (Hot Reload) |
| **AOT** | Ahead-of-Time compilation | Release builds |
| **DDC** | Dart Development Compiler | Debug with type checking |