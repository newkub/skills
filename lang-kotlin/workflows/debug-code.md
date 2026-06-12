# Debug Code - Kotlin

## Overview

วิธีการ debug โค้ด Kotlin ในสภาพแวดล้อมต่างๆ

## IntelliJ IDEA Debugging

### Setting Breakpoints

1. Click on the gutter next to the line number
2. Red dot indicates a breakpoint
3. Right-click for breakpoint options:
   - Condition: Break when expression is true
   - Log: Evaluate expression without breaking
   - Disable: Temporarily disable breakpoint

### Debugging Configuration

```kotlin
// Example code to debug
fun processUsers(users: List<User>): List<String> {
    return users
        .filter { it.age >= 18 }  // Set breakpoint here
        .map { it.name }
        .sorted()
}
```

### Debugging Steps

1. Click the "Debug" button (bug icon)
2. Execution pauses at breakpoint
3. Use debug controls:
   - **Step Over (F8)**: Execute current line
   - **Step Into (F7)**: Enter function call
   - **Step Out (Shift+F8)**: Exit current function
   - **Resume (F9)**: Continue execution
   - **Stop**: Stop debugging

### Viewing Variables

- **Variables Tab**: Shows all variables in current scope
- **Watches**: Add custom expressions to watch
- **Evaluate Expression (Alt+F8)**: Evaluate arbitrary code

### Conditional Breakpoints

```kotlin
// Break only when user.name starts with "A"
users.filter { it.age >= 18 }  // Right-click → Condition: it.name.startsWith("A")
```

### Exception Breakpoints

1. Run → View Breakpoints
2. Click "+" → Java Exception Breakpoints
3. Select exception type (e.g., NullPointerException)
4. Breaks when exception is thrown

## Android Studio Debugging

### Debug Android App

1. Connect device or start emulator
2. Click "Debug 'app'" button
3. Set breakpoints in code
4. Interact with app to trigger breakpoints

### Logcat Debugging

```kotlin
// Use Logcat for debugging
import android.util.Log

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("MainActivity", "onCreate called")
        Log.e("MainActivity", "Error occurred", exception)
    }
}
```

### Layout Inspector

1. Run app
2. Tools → Layout Inspector
3. Inspect view hierarchy
4. Check view properties

### Network Inspector

1. Run app
2. View → Tool Windows → App Inspection
3. Select Network Inspector
4. Monitor network requests

## VS Code Debugging

### Launch Configuration

Create `.vscode/launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "kotlin",
            "request": "launch",
            "name": "Kotlin Launch",
            "projectName": "my-project",
            "mainClass": "MainKt",
            "classPaths": [
                "${workspaceFolder}/build/classes/kotlin/main",
                "${workspaceFolder}/build/libs/*"
            ],
            "vmArgs": "-Djava.library.path=/path/to/libs"
        }
    ]
}
```

### Debugging Steps

1. Set breakpoints by clicking the gutter
2. Press F5 or click "Run and Debug"
3. Use debug controls in the debug toolbar
4. View variables in the Variables panel

## Command Line Debugging

### Using jdb

```bash
# Compile with debug info
kotlinc -g:source,lines,vars Main.kt -d Main.jar

# Run with jdb
jdb -attach localhost:8000

# Common jdb commands
stop in MyClass.myMethod
run
step
next
cont
print variable
locals
```

### Using jdwp

```bash
# Run with debug enabled
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=8000 -jar Main.jar

# Connect from another terminal
jdb -attach 8000
```

## Coroutine Debugging

### Enable Coroutine Debugging

```kotlin
// Add JVM argument
-Dkotlinx.coroutines.debug

// Or in build.gradle.kts
tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.freeCompilerArgs += "-Xopt-in=kotlinx.coroutines.ExperimentalCoroutinesApi"
}
```

### Debug Coroutines in IntelliJ

1. Enable coroutine debugging in settings
2. Set breakpoints in suspend functions
3. View coroutine state in Debug tool window
4. Check coroutine hierarchy

### Coroutine Inspector

```kotlin
import kotlinx.coroutines.debug.DebugProbes

// Dump coroutine state
DebugProbes.dumpCoroutines()

// Install coroutine probe
DebugProbes.install()
```

## Common Debugging Scenarios

### Debugging Null Pointer Exception

```kotlin
fun processUser(user: User?) {
    // Breakpoint here to check user value
    val name = user?.name ?: "Unknown"  // Safe call
    println(name)
}
```

### Debugging Collection Operations

```kotlin
val result = list
    .filter { it > 0 }  // Breakpoint to check intermediate results
    .map { it * 2 }
    .take(5)

// Use .also() to inspect
val result = list
    .also { println("Original: $it") }
    .filter { it > 0 }
    .also { println("Filtered: $it") }
    .map { it * 2 }
```

### Debugging Async Code

```kotlin
fun loadData() {
    viewModelScope.launch {
        val data = repository.fetchData()  // Breakpoint
        _uiState.value = UiState.Success(data)
    }
}
```

## Logging

### Using Kotlin Logging

```kotlin
// build.gradle.kts
dependencies {
    implementation("io.github.microutils:kotlin-logging-jvm:3.0.5")
    implementation("ch.qos.logback:logback-classic:1.4.11")
}
```

```kotlin
import io.github.oshai.kotlinlogging.KotlinLogging

private val logger = KotlinLogging.logger {}

class Service {
    fun process() {
        logger.debug { "Processing started" }
        logger.info { "Processing item: $item" }
        logger.warn { "Potential issue detected" }
        logger.error { "Error occurred", exception }
    }
}
```

### Log Levels

| Level | Description | Use Case |
|-------|-------------|----------|
| TRACE | Very detailed | Method entry/exit |
| DEBUG | Debugging | Variable values |
| INFO | Informational | General flow |
| WARN | Warnings | Potential issues |
| ERROR | Errors | Exceptions and failures |

## Performance Profiling

### IntelliJ Profiler

1. Run → Profile
2. Select profiling type:
   - CPU: Method execution time
   - Memory: Allocation and GC
   - Threads: Thread activity
3. Analyze results in profiler window

### Android Profiler

1. Run app
2. View → Tool Windows → Profiler
3. Select CPU, Memory, Network, or Energy
4. Record and analyze performance

### Async Profiler

```bash
# Install async-profiler
# Run with profiler
java -agentpath:/path/to/libasyncProfiler.so=start,profile=100,file=profile.svg -jar app.jar
```

## Debugging Build Issues

### Gradle Debug

```bash
# Run Gradle with debug info
./gradlew build --debug --stacktrace

# Run with info
./gradlew build --info

# Run with scan
./gradlew build --scan
```

### Dependency Issues

```bash
# Check dependency tree
./gradlew dependencies

# Check for conflicts
./gradlew dependencyInsight --dependency library-name

# Resolve dependencies
./gradlew dependencies --refresh-dependencies
```

## Remote Debugging

### Configure Remote Debug

1. Run application with debug flags:
   ```bash
   java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -jar app.jar
   ```

2. Configure remote debug in IDE:
   - IntelliJ: Run → Edit Configurations → Remote
   - Host: localhost
   - Port: 5005

3. Start remote debug session

## Debugging Tips

### Print Debugging

```kotlin
// Quick and dirty
println("Debug: variable = $variable")

// Better with context
println("[MyClass] [process] variable = $variable")
```

### Use Assertions

```kotlin
fun process(value: Int) {
    require(value > 0) { "Value must be positive: $value" }
    check(state == State.READY) { "Invalid state: $state" }
    assert(result != null) { "Result should not be null" }
}
```

### Use TODO with Comments

```kotlin
// TODO: Fix this issue
// FIXME: This is a workaround
// HACK: Temporary solution
```

## Common Debugging Issues

### Breakpoint Not Hit

- Check if code is compiled with debug info
- Verify breakpoint is enabled
- Ensure code path reaches the breakpoint
- Check for optimization flags

### Variables Not Visible

- Compile with `-g` flag for debug info
- Check variable scope
- Ensure code is not optimized away

### Async Code Hard to Debug

- Use logging for async operations
- Enable coroutine debugging
- Use breakpoints in suspend functions
- Check thread context

## Best Practices

- Use meaningful variable names
- Add logging at key points
- Write unit tests to reproduce issues
- Use version control to bisect issues
- Document known issues and workarounds
- Keep debug code separate from production

## Next Steps

- Optimize performance: See `workflows/optimize-performance.md`
- Troubleshoot issues: See `guide/troubleshooting.md`
