# Key Concept

## What is Flutter?

Flutter คือ open-source UI toolkit จาก Google สำหรับสร้างแอปพลิเคชันที่ compile เป็น native code สำหรับ mobile (iOS, Android), web และ desktop จาก codebase เดียว

## Core Components

| Component | Description |
|-----------|-------------|
| **Dart** | ภาษาโปรแกรมที่ใช้พัฒนา Flutter |
| **Widgets** | Building blocks สำหรับ UI ทุก component |
| **Flutter Engine** | Core runtime สำหรับ rendering |
| **Foundation Library** | Basic APIs และ utilities |

## Key Features

| Feature | Description |
|---------|-------------|
| **Hot Reload** | เห็นการเปลี่ยนแปลงทันทีโดยไม่ต้อง restart |
| **Dart Language** | Optimized สำหรับ UI ด้วย JIT และ AOT compilation |
| **Widget System** | Everything is a widget - composable และ reusable |
| **Cross-Platform** | เขียนครั้งเดียว รันได้ทุก platform |
| **Skia Engine** | High-performance 2D rendering engine |

## Flutter Architecture

```
┌─────────────────────────────────────────┐
│              Flutter App                 │
├─────────────────────────────────────────┤
│              Widgets                    │
│  (StatelessWidget / StatefulWidget)     │
├─────────────────────────────────────────┤
│         Foundation & Animation           │
├─────────────────────────────────────────┤
│            Flutter Engine               │
│   (Dart Runtime + Skia + Platform APIs)  │
├─────────────────────────────────────────┤
│      Platform (iOS/Android/Web)         │
└─────────────────────────────────────────┘
```

## Widget Types

| Type | Description | Example |
|------|-------------|---------|
| **StatelessWidget** | UI ที่ไม่เปลี่ยนแปลง | `Text`, `Icon`, `Container` |
| **StatefulWidget** | UI ที่มี state เปลี่ยนแปลงได้ | `Checkbox`, `TextField`, `Slider` |
| **InheritedWidget** | ส่งข้อมูลลงไป subtree | `Theme`, `MediaQuery` |

## When to Use Flutter

| Use Case | Recommendation |
|----------|----------------|
| Cross-platform mobile apps | ✅ เหมาะมาก |
| MVP / Prototype | ✅ พัฒนาเร็ว |
| Complex animations | ✅ Skia engine แรง |
| Heavy native features | ⚠️ ต้องใช้ platform channels |
| Simple web apps | ⚠️ ใช้ React/Vue อาจเหมาะกว่า |
| Game development | ❌ ใช้ Unity/Firebase แทน |