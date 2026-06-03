# Quick Start

## Create New Project

```bash
# สร้างโปรเจกต์ใหม่
flutter create my_app --org com.example

# สร้างโปรเจกต์พร้อม platform เฉพาะ
flutter create --platforms=ios,android my_app
```

## Basic App Structure

```dart
// lib/main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Welcome')),
      body: const Center(
        child: Text('Hello Flutter!'),
      ),
    );
  }
}
```

## Run Application

```bash
# Run on current device
flutter run

# Run on specific device
flutter run -d chrome
flutter run -d android
flutter run -d iphone

# Run with hot reload
flutter run --hot
```

## Adding Dependencies

```bash
# Add provider for state management
flutter pub add provider

# Add HTTP client
flutter pub add http
```

## Create First Widget

```dart
class CounterWidget extends StatefulWidget {
  const CounterWidget({super.key});

  @override
  State<CounterWidget> createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Count: $_count'),
        ElevatedButton(
          onPressed: _increment,
          child: const Text('Increment'),
        ),
      ],
    );
  }
}
```

## Build for Release

```bash
# Build APK (Android)
flutter build apk --release

# Build iOS (macOS only)
flutter build ios --release

# Build Web
flutter build web
```

## Next Steps

| Resource | Description |
|----------|-------------|
| [Key Concept](key-concept.md) | เข้าใจ Flutter fundamentals |
| [Features](features.md) | สำรวจฟีเจอร์ทั้งหมด |
| [Best Practices](best-practices.md) | แนวทางการพัฒนาที่ดี |
| [Architecture](architecture.md) | Flutter architecture patterns |