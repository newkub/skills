# How It Works

## C# Compilation Flow

```
┌─────────────────────────────────────┐
│           .cs Source Files          │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│        C# Compiler (csc)             │
│         Roslyn Parser                │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│      Intermediate Language (IL)     │
│           (.dll / .exe)              │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│         .NET Runtime                 │
│    (CLR - Common Language Runtime)   │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│     Machine Code (Native)            │
│         Just-In-Time (JIT)           │
└─────────────────────────────────────┘
```

## .NET Architecture

```
┌──────────────────────────────────────────────────────────┐
│                    .NET Application                       │
├──────────────────────────────────────────────────────────┤
│                   C# / F# / VB.NET                        │
├──────────────────────────────────────────────────────────┤
│               Language Compilers                          │
│          (CSC, FSC, VBC) - Roslyn                        │
├──────────────────────────────────────────────────────────┤
│              Common Intermediate Language (CIL)          │
├──────────────────────────────────────────────────────────┤
│               .NET Runtime (CLR)                          │
│   ┌─────────────┬──────────────┬──────────────────┐     │
│   │   JIT       │   GC         │  Exception       │     │
│   │   Compiler  │   Collector   │  Handling       │     │
│   └─────────────┴──────────────┴──────────────────┘     │
├──────────────────────────────────────────────────────────┤
│                   Operating System                        │
│              (Windows/Linux/macOS)                        │
└──────────────────────────────────────────────────────────┘
```

## Assembly Structure

```
┌────────────────────────────────────┐
│          Assembly (.dll)            │
├────────────────────────────────────┤
│  Manifest                          │
│  - Assembly name                   │
│  - Version                         │
│  - Dependencies                    │
├────────────────────────────────────┤
│  Type Metadata                     │
│  - Classes, interfaces             │
│  - Methods, properties             │
│  - Fields, events                  │
├────────────────────────────────────┤
│  CIL Code                          │
│  - Compiled bytecode               │
│  - Method implementations           │
└────────────────────────────────────┘
```

## Key Components

### 1. Roslyn Compiler
- Parse C# code เป็น AST (Abstract Syntax Tree)
- Perform semantic analysis
- Emit IL (Intermediate Language)

### 2. Common Language Runtime (CLR)
- **JIT Compilation**: Compile IL to native code on execution
- **Garbage Collection**: Automatic memory management
- **Security**: Code access security
- **Thread Management**: Built-in threading support

### 3. Base Class Library (BCL)
- Collections, IO, Networking
- Text processing, Regular expressions
- Database access (ADO.NET)
- XML/JSON manipulation

### 4. Assembly Loading

```csharp
// Assembly loading example
var assembly = Assembly.LoadFrom("MyLibrary.dll");
var types = assembly.GetTypes();

foreach (var type in types)
{
    Console.WriteLine(type.FullName);
}
```

## Runtime Execution

```csharp
// Source Code
void Main() {
    var greeting = "Hello, World!";
    Console.WriteLine(greeting);
}

// 1. Source → IL (Compilation)
// 2. IL → Native Code (JIT)
// 3. Execute Native Code
```