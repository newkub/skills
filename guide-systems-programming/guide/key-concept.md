# Key Concept

## Systems Programming Fundamentals

### OS Internals

### Process Management

**Definition**: OS manages process creation, scheduling, and termination

**Key Concepts**:
- **Process ID (PID)**: Unique identifier
- **Parent Process**: Process that created another
- **Child Process**: Process created by another
- **Process State**: Running, waiting, stopped, zombie

**Example (C)**:

```c
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork();
    
    if (pid == 0) {
        // Child process
        printf("Child process\n");
    } else {
        // Parent process
        printf("Parent process\n");
    }
    
    return 0;
}
```

### Memory Management

### Virtual Memory

**Definition**: OS provides virtual address space to each process

**Key Concepts**:
- **Virtual Address**: Address seen by process
- **Physical Address**: Actual RAM address
- **Page Table**: Maps virtual to physical addresses
- **Page Fault**: Triggered when page not in memory

**Example (C)**:

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate memory
    int *ptr = malloc(sizeof(int) * 1000);
    
    // Use memory
    for (int i = 0; i < 1000; i++) {
        ptr[i] = i;
    }
    
    // Free memory
    free(ptr);
    
    return 0;
}
```

### Memory Allocation

### Stack vs Heap

**Stack**:
- Automatic allocation
- Fixed size
- Fast allocation
- LIFO order

**Heap**:
- Dynamic allocation
- Variable size
- Slower allocation
- Manual management

**Example (C)**:

```c
// Stack allocation
int stack_var = 10;

// Heap allocation
int *heap_var = malloc(sizeof(int));
*heap_var = 10;
free(heap_var);
```

### File Systems

### File Descriptors

**Definition**: OS uses file descriptors to track open files

**Key Concepts**:
- **File Descriptor**: Integer representing open file
- **Standard I/O**: 0 (stdin), 1 (stdout), 2 (stderr)
- **File Table**: Maps descriptors to files

**Example (C)**:

```c
#include <fcntl.h>
#include <unistd.h>

int main() {
    // Open file
    int fd = open("file.txt", O_RDONLY);
    
    if (fd == -1) {
        perror("open");
        return 1;
    }
    
    // Read file
    char buffer[1024];
    read(fd, buffer, sizeof(buffer));
    
    // Close file
    close(fd);
    
    return 0;
}
```

### System Calls

### Definition

**System Call**: Interface between user space and kernel space

**Examples**:
- `fork()`: Create process
- `exec()`: Execute program
- `open()`: Open file
- `read()`: Read file
- `write()`: Write file

### System Call vs Library Function

**System Call**: Direct kernel interaction

**Library Function**: May use system calls internally

**Example**:
- `fopen()` (library) → `open()` (system call)
- `printf()` (library) → `write()` (system call)

### Device Drivers

### Definition

**Device Driver**: Software that controls hardware devices

**Types**:
- **Character Device**: Stream of bytes (keyboard, serial port)
- **Block Device**: Block of data (disk, SSD)

**Example**:
- `/dev/tty`: Terminal device
- `/dev/sda`: Disk device

### Interrupts

### Definition

**Interrupt**: Signal that interrupts CPU execution

**Types**:
- **Hardware Interrupt**: From hardware devices
- **Software Interrupt**: From software (system calls)

**Example**:
- Timer interrupt
- Keyboard interrupt
- Network interrupt

### Synchronization

### Mutex

**Definition**: Mutual exclusion lock

**Example (C)**:

```c
#include <pthread.h>

pthread_mutex_t mutex;

void* thread_func(void* arg) {
    pthread_mutex_lock(&mutex);
    // Critical section
    pthread_mutex_unlock(&mutex);
    return NULL;
}
```

### Semaphore

**Definition**: Synchronization primitive for signaling

**Example (C)**:

```c
#include <semaphore.h>

sem_t semaphore;

void* thread_func(void* arg) {
    sem_wait(&semaphore);
    // Critical section
    sem_post(&semaphore);
    return NULL;
}
```
