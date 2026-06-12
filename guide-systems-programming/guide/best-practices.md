# Best Practices

## Best Practices สำหรับ Systems Programming

### Memory Management

### 1. Always Free Allocated Memory

```c
// ✅ Good: Free memory
int *ptr = malloc(sizeof(int));
*ptr = 10;
free(ptr);

// ❌ Bad: Memory leak
int *ptr = malloc(sizeof(int));
*ptr = 10;
// Forgot to free
```

### 2. Check for Allocation Failure

```c
// ✅ Good: Check allocation
int *ptr = malloc(sizeof(int) * 1000);
if (ptr == NULL) {
    fprintf(stderr, "Allocation failed\n");
    return 1;
}

// ❌ Bad: No check
int *ptr = malloc(sizeof(int) * 1000);
*ptr = 10; // May crash
```

### 3. Initialize Memory

```c
// ✅ Good: Initialize memory
int *ptr = calloc(1000, sizeof(int));

// ❌ Bad: Uninitialized memory
int *ptr = malloc(1000 * sizeof(int));
printf("%d\n", ptr[0]); // Undefined behavior
```

### File I/O

### 4. Check File Operations

```c
// ✅ Good: Check file operations
FILE *file = fopen("file.txt", "r");
if (file == NULL) {
    perror("fopen");
    return 1;
}

// ❌ Bad: No check
FILE *file = fopen("file.txt", "r");
fprintf(file, "Hello"); // May crash
```

### 5. Close Files

```c
// ✅ Good: Close file
FILE *file = fopen("file.txt", "r");
if (file) {
    // Use file
    fclose(file);
}

// ❌ Bad: Not closing file
FILE *file = fopen("file.txt", "r");
// Forgot to close
```

### Error Handling

### 6. Check System Call Errors

```c
// ✅ Good: Check system call errors
if (fork() == -1) {
    perror("fork");
    return 1;
}

// ❌ Bad: No error check
fork(); // May fail silently
```

### 7. Use errno

```c
// ✅ Good: Use errno
#include <errno.h>

if (open("file.txt", O_RDONLY) == -1) {
    fprintf(stderr, "Error: %s\n", strerror(errno));
}

// ❌ Bad: No error info
if (open("file.txt", O_RDONLY) == -1) {
    fprintf(stderr, "Error opening file\n");
}
```

### Process Management

### 8. Wait for Child Processes

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

// ❌ Bad: Not waiting
pid_t pid = fork();
if (pid == 0) {
    // Child
    exit(0);
}
// Parent continues, child becomes zombie
```

### 9. Handle Signals

```c
// ✅ Good: Handle signals
#include <signal.h>

void signal_handler(int sig) {
    printf("Signal %d received\n", sig);
}

int main() {
    signal(SIGINT, signal_handler);
    // ...
}

// ❌ Bad: No signal handling
// Default behavior may terminate
```

### Synchronization

### 10. Initialize Mutexes

```c
// ✅ Good: Initialize mutex
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

// ❌ Bad: Uninitialized mutex
pthread_mutex_t mutex;
pthread_mutex_lock(&mutex); // Undefined behavior
```

### 11. Always Unlock Mutexes

```c
// ✅ Good: Always unlock
pthread_mutex_lock(&mutex);
// Critical section
pthread_mutex_unlock(&mutex);

// ❌ Bad: Not unlocking
pthread_mutex_lock(&mutex);
// Critical section
// Forgot to unlock
```

### 12. Avoid Deadlocks

```c
// ✅ Good: Lock in consistent order
pthread_mutex_lock(&mutex1);
pthread_mutex_lock(&mutex2);
// Critical section
pthread_mutex_unlock(&mutex2);
pthread_mutex_unlock(&mutex1);

// ❌ Bad: Lock in inconsistent order
// Thread 1
pthread_mutex_lock(&mutex1);
pthread_mutex_lock(&mutex2);

// Thread 2
pthread_mutex_lock(&mutex2);
pthread_mutex_lock(&mutex1);
// Deadlock
```

### Performance

### 13. Minimize System Calls

```c
// ✅ Good: Batch operations
write(fd, buffer, size);

// ❌ Bad: Individual writes
for (int i = 0; i < size; i++) {
    write(fd, &buffer[i], 1);
}
```

### 14. Use Efficient Data Structures

```c
// ✅ Good: Use appropriate data structure
// Array for random access
// Linked list for insertions

// ❌ Bad: Wrong data structure
// Linked list for random access
```

### 15. Cache-Friendly Code

```c
// ✅ Good: Sequential access
for (int i = 0; i < size; i++) {
    process(array[i]);
}

// ❌ Bad: Random access
for (int i = 0; i < size; i++) {
    process(array[random_index()]);
}
```

### Security

### 16. Validate Input

```c
// ✅ Good: Validate input
if (size > MAX_SIZE) {
    fprintf(stderr, "Size too large\n");
    return 1;
}

// ❌ Bad: No validation
// Buffer overflow possible
```

### 17. Use Safe Functions

```c
// ✅ Good: Use safe functions
strncpy(dest, src, dest_size);

// ❌ Bad: Unsafe functions
strcpy(dest, src); // Buffer overflow
```

### 18. Avoid Buffer Overflows

```c
// ✅ Good: Check bounds
if (len < buffer_size) {
    buffer[len] = '\0';
}

// ❌ Bad: No bounds check
buffer[len] = '\0'; // May overflow
```
