# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Systems Programming

### Memory Issues

### Problem: Segmentation Fault

**Symptoms**:
- Program crashes
- Segmentation fault error

**Causes**:
1. Null pointer dereference
2. Accessing freed memory
3. Stack overflow
4. Invalid memory access

**Solutions**:

```c
// ✅ Good: Check pointer
int *ptr = NULL;
if (ptr != NULL) {
    *ptr = 10;
}

// ✅ Good: Check array bounds
if (index < array_size) {
    array[index] = value;
}
```

### Problem: Memory Leak

**Symptoms**:
- Memory usage increases over time
- Out of memory errors

**Causes**:
1. Not freeing allocated memory
2. Lost pointers
3. Circular references

**Solutions**:

```c
// ✅ Good: Always free
int *ptr = malloc(sizeof(int));
free(ptr);

// ✅ Good: Use Valgrind
valgrind --leak-check=full ./program
```

### Problem: Buffer Overflow

**Symptoms**:
- Data corruption
- Security vulnerabilities
- Crashes

**Causes**:
1. Writing beyond array bounds
2. Not checking input size
3. Unsafe string functions

**Solutions**:

```c
// ✅ Good: Check bounds
if (len < buffer_size) {
    buffer[len] = '\0';
}

// ✅ Good: Use safe functions
strncpy(dest, src, dest_size);
```

### File I/O Issues

### Problem: File Not Found

**Symptoms**:
- File open fails
- ENOENT error

**Causes**:
1. File doesn't exist
2. Wrong path
3. Permission denied

**Solutions**:

```c
// ✅ Good: Check file existence
if (access("file.txt", F_OK) == -1) {
    perror("access");
    return 1;
}
```

### Problem: Permission Denied

**Symptoms**:
- File open fails
- EACCES error

**Causes**:
1. Insufficient permissions
2. Wrong user

**Solutions**:

```bash
# ✅ Good: Change permissions
chmod 644 file.txt
```

### Process Issues

### Problem: Zombie Process

**Symptoms**:
- Child process not reaped
- Zombie processes accumulate

**Causes**:
1. Parent not waiting for child
2. Parent exited before child

**Solutions**:

```c
// ✅ Good: Wait for child
pid_t pid = fork();
if (pid == 0) {
    // Child
    exit(0);
} else {
    // Parent
    wait(NULL);
}
```

### Problem: Orphan Process

**Symptoms**:
- Child process parent died
- Init adopts child

**Causes**:
1. Parent exited before child
2. Parent crashed

**Solutions**:

```c
// ✅ Good: Handle parent death
signal(SIGCHLD, SIG_IGN);
```

### Debugging Tips

### 1. Use GDB

```bash
# ✅ Good: Debug with GDB
gdb ./program
(gdb) run
(gdb) backtrace
```

### 2. Use strace

```bash
# ✅ Good: Trace system calls
strace ./program
```

### 3. Use Valgrind

```bash
# ✅ Good: Check memory
valgrind ./program
```

### 4. Use perf

```bash
# ✅ Good: Profile performance
perf record ./program
perf report
```

### Common Pitfalls

### 1. Not Checking Return Values

```c
// ❌ Bad: No check
malloc(sizeof(int));

// ✅ Good: Check return value
int *ptr = malloc(sizeof(int));
if (ptr == NULL) {
    // Handle error
}
```

### 2. Not Freeing Memory

```c
// ❌ Bad: Memory leak
malloc(sizeof(int));

// ✅ Good: Free memory
int *ptr = malloc(sizeof(int));
free(ptr);
```

### 3. Not Checking Array Bounds

```c
// ❌ Bad: Buffer overflow
array[1000] = value;

// ✅ Good: Check bounds
if (index < array_size) {
    array[index] = value;
}
```

### 4. Not Handling Signals

```c
// ❌ Bad: No signal handling
// Default behavior may terminate

// ✅ Good: Handle signals
signal(SIGINT, signal_handler);
```

### 5. Not Using Safe Functions

```c
// ❌ Bad: Unsafe function
strcpy(dest, src);

// ✅ Good: Safe function
strncpy(dest, src, dest_size);
```
