# How It Works

## Purpose

อธิบายการทำงานของ Trae IDE

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Trae IDE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │   Editor    │    │  AI Engine  │    │  Terminal   │     │
│  │   (VS Code) │◄──►│  (Claude)   │◄──►│   (Shell)   │     │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘     │
│         │                   │                   │           │
│         └───────────────────┼───────────────────┘           │
│                             │                               │
│                    ┌────────▼────────┐                      │
│                    │   Project      │                      │
│                    │   Context      │                      │
│                    └─────────────────┘                      │
└─────────────────────────────────────────────────────────────┘
```

## Workflow Modes

### 1. Builder Mode Flow

```
┌──────────────────────────────────────────────────────────┐
│                    BUILDER MODE                           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  User Input ──► Planning ──► Preview ──► Execute       │
│      │             │             │            │          │
│      ▼             ▼             ▼            ▼          │
│  "Build a     "Parse and    "Show       "Apply          │
│   login..."    divide       changes     changes         │
│                into steps   to be made  to files"        │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Step 1: Create login component                     │  │
│  │  Step 2: Add validation logic                       │  │
│  │  Step 3: Update routes                              │  │
│  │  ─────────────────────────────────                  │  │
│  │  [Confirm]  [Cancel]  [Edit Plan]                   │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### 2. Chat Mode Flow

```
┌──────────────────────────────────────────────────────────┐
│                     CHAT MODE                             │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  User Message ──► Context ──► Model ──► Response        │
│       │              │            │           │          │
│       ▼              ▼            ▼           ▼          │
│  "Explain      "Attach       "Claude     "Markdown       │
│   this code"     file         3.7        response        │
│                  content      processes  with code"      │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  💬 Attachments: [screenshot.png] [error.log]      │  │
│  │  ─────────────────────────────────────              │  │
│  │  [Chat Input...]                        [Send]      │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Code Generation Process

```
┌─────────────────────────────────────────────────────────────┐
│               CODE GENERATION WORKFLOW                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Intent Detection                                        │
│     ┌─────────────┐                                         │
│     │ User writes │                                         │
│     │ comment or  │                                         │
│     │ prompt      │                                         │
│     └──────┬──────┘                                         │
│            │                                                │
│            ▼                                                │
│  2. Context Collection                                      │
│     ┌─────────────┐                                         │
│     │ Read related│                                         │
│     │ files in    │                                         │
│     │ project     │                                         │
│     └──────┬──────┘                                         │
│            │                                                │
│            ▼                                                │
│  3. AI Processing                                           │
│     ┌─────────────┐                                         │
│     │ Claude 3.5/ │                                         │
│     │ 3.7 model   │                                         │
│     └──────┬──────┘                                         │
│            │                                                │
│            ▼                                                │
│  4. Output Generation                                       │
│     ┌─────────────┐                                         │
│     │ Code +      │                                         │
│     │ Explanation │                                         │
│     └─────────────┘                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Summary

| Phase | Description |
|-------|-------------|
| **Input** | User prompt, file context, attachments |
| **Planning** | Parse request, divide into steps |
| **Preview** | Show planned changes |
| **Execute** | Apply code modifications |
| **Output** | Generated code with explanation |