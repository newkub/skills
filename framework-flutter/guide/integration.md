# Integration

## Firebase Integration

### Setup

```bash
flutter pub add firebase_core
flutter pub add firebase_auth
flutter pub add cloud_firestore
```

### Configuration

```yaml
# pubspec.yaml
dependencies:
  firebase_core: ^2.24.0
  firebase_auth: ^4.16.0
  cloud_firestore: ^4.14.0
```

### Usage

```dart
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}
```

## State Management Libraries

### Provider

```bash
flutter pub add provider
```

```dart
// lib/providers/user_provider.dart
class UserProvider extends ChangeNotifier {
  User? _user;
  User? get user => _user;

  Future<void> signIn(String email, String password) async {
    // Sign in logic
    notifyListeners();
  }
}
```

### Riverpod

```bash
flutter pub add flutter_riverpod
```

```dart
// lib/providers/user_provider.dart
@riverpod
class UserNotifier extends _$UserNotifier {
  @override
  Future<User?> build() async {
    return null;
  }
}
```

## HTTP Clients

### Dio

```bash
flutter pub add dio
```

```dart
final dio = Dio(BaseOptions(
  baseUrl: 'https://api.example.com',
  connectTimeout: const Duration(seconds: 10),
));

final response = await dio.get('/users');
```

### HTTP (Simple)

```bash
flutter pub add http
```

```dart
final response = await http.get(Uri.parse('https://api.example.com/users'));
```

## Local Storage

### SharedPreferences

```bash
flutter pub add shared_preferences
```

```dart
final prefs = await SharedPreferences.getInstance();
await prefs.setString('name', 'John');
final name = prefs.getString('name');
```

### SQLite (sqflite)

```bash
flutter pub add sqflite path
```

```dart
final db = await openDatabase('my_db.db');
await db.execute('''
  CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)
''');
```

## Navigation

### go_router

```bash
flutter pub add go_router
```

```dart
final router = GoRouter(
  routes: [
    GoRoute(path: '/', builder: (context, state) => const HomePage()),
    GoRoute(
      path: '/details/:id',
      builder: (context, state) => DetailsPage(id: state.pathParameters['id']!),
    ),
  ],
);
```

## Testing Tools

### Mocktail

```bash
flutter pub add --dev mocktail
```

```dart
@GenerateMocks([UserRepository])
void main() {
  late MockUserRepository mockRepo;

  setUp(() {
    mockRepo = MockUserRepository();
  });

  test('get user returns data', () {
    when(() => mockRepo.getUser()).thenAnswer((_) async => User(name: 'John'));
    // Test logic
  });
}
```

## Build Tools

### Build Runner

```bash
flutter pub add --dev build_runner
flutter pub add freezed freezed_annotation json_serializable json_annotation
```

```bash
flutter pub run build_runner build --delete-conflicting-outputs
```

## Platform Channels

### MethodChannel

```dart
// Dart side
const channel = MethodChannel('com.example.app/native');
final result = await channel.invokeMethod('getBatteryLevel');

// iOS (Swift)
import Flutter
import UIKit

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    let controller = window?.rootViewController as! FlutterViewController
    let channel = FlutterMethodChannel(name: "com.example.app/native", binaryMessenger: controller.binaryMessenger)
    
    channel.setMethodCallHandler { call, result in
      if call.method == "getBatteryLevel" {
        UIDevice.current.isBatteryMonitoringEnabled = true
        let level = Int(UIDevice.current.batteryLevel * 100)
        result(level)
      }
    }
    
    GeneratedPluginRegistrant.register(with: self)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}
```

## CI/CD

| Tool | Description |
|------|-------------|
| **GitHub Actions** | Free for public repos |
| **Codemagic** | Flutter-specific CI/CD |
| **Bitrise** | Mobile-focused CI/CD |
| **Fastlane** | Automate builds and deployment |