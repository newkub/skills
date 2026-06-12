# Memory

## Memory Management และ Allocation

### Memory Allocation

### malloc

**Definition**: Allocate memory on heap

**Example (C)**:

```c
#include <stdlib.h>

int main() {
    int *ptr = malloc(sizeof(int) * 1000);
    
    if (ptr == NULL) {
        fprintf(stderr, "Allocation failed\n");
        return 1;
    }
    
    // Use memory
    for (int i = 0; i < 1000; i++) {
        ptr[i] = i;
    }
    
    free(ptr);
    
    return 0;
}
```

### calloc

**Definition**: Allocate and zero memory

**Example (C)**:

```c
#include <stdlib.h>

int main() {
    int *ptr = calloc(1000, sizeof(int));
    
    // Memory is zero-initialized
    for (int i = 0; i < 1000; i++) {
        printf("%d ", ptr[i]); // All zeros
    }
    
    free(ptr);
    
    return 0;
}
```

### realloc

**Definition**: Reallocate memory

**Example (C)**:

```c
#include <stdlib.h>

int main() {
    int *ptr = malloc(sizeof(int) * 100);
    
    // Reallocate
    ptr = realloc(ptr, sizeof(int) * 200);
    
    free(ptr);
    
    return 0;
}
```

### Memory Leaks

### Detection

**Symptoms**:
- Memory usage increases over time
- Out of memory errors
- Slow performance

**Detection Tools**:
- **Valgrind**: Memory leak detection
- **AddressSanitizer**: Memory error detection

**Example (Valgrind)**:

```bash
valgrind --leak-check=full ./program
```

### Prevention

```c
// ✅ Good: Always free
int *ptr = malloc(sizeof(int));
free(ptr);

// ❌ Bad: Memory leak
int *ptr = malloc(sizeof(int));
// Forgot to free
```

### Stack vs Heap

### Stack

**Characteristics**:
- Automatic allocation
- Fixed size
- Fast
- LIFO

**Example**:

```c
void function() {
    int stack_var = 10; // Stack allocation
}
```

### Heap

**Characteristics**:
- Manual allocation
- Variable size
- Slower
- Random access

**Example**:

```c
void function() {
    int *heap_var = malloc(sizeof(int)); // Heap allocation
    free(heap_var);
}
```

### Memory Alignment

### Definition

**Alignment**: Data aligned to memory addresses

**Importance**:
- Performance
- Hardware requirements

**Example**:

```c
// Aligned access (fast)
int aligned = 10;

// Unaligned access (slow)
char buffer[5];
int *unaligned = (int*)&buffer[1];
```

### Memory Protection

### Segmentation Fault

**Definition**: Invalid memory access

**Causes**:
- Accessing null pointer
- Accessing freed memory
- Stack overflow

**Example**:

```c
// ✅ Good: Check pointer
int *ptr = NULL;
if (ptr != NULL) {
    *ptr = 10;
}

// ❌ Bad: Segmentation fault
int *ptr = NULL;
*ptr = 10; // Segmentation fault
```

### Memory Mapping

### mmap

**Definition**: Map file into memory

**Example (C)**:

```c
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("file.txt", O_RDONLY);
    
    void *addr = mmap(NULL, 4096, PROT_READ, MAP_SHARED, fd, 0);
    
    // Use mapped memory
    char *data = (char*)addr;
    printf("%s\n", data);
    
    munmap(addr, 4096);
    close(fd);
    
    return 0;
}
```

### Shared Memory

### Definition**: Memory shared between processes

**Example (C)**:

```c
#include <sys/shm.h>
#include <sys/ipc.h>

int main() {
    key_t key = ftok("/tmp", 'A');
    int shmid = shmget(key, 1024, IPC_CREAT | 0666);
    
    void *addr = shmat(shmid, NULL, 0);
    
    // Use shared memory
    char *data = (char*)addr;
    data[0] = 'H';
    
    shmdt(addr);
    shmctl(shmid, IPC_RMID, NULL);
    
    return 0;
}
```

### Best Practices

### 1. Always Check Allocation

```c
// ✅ Good: Check allocation
int *ptr = malloc(sizeof(int));
if (ptr == NULL) {
    // Handle error
}
```

### 2. Always Free Memory

```c
// ✅ Good: Free memory
free(ptr);
```

### 3. Initialize Memory

```c
// ✅ Good: Initialize memory
int *ptr = calloc(1000, sizeof(int));
```

### 4. Avoid Buffer Overflows

```c
// ✅ Good: Check bounds
if (len < buffer_size) {
    buffer[len] = '\0';
}
```

### 5. Use Memory Profiling

```bash
# ✅ Good: Profile memory
valgrind --tool=massif ./program
```
