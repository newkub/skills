# Quick Start

## เริ่มต้น Systems Programming อย่างรวดเร็ว

### Step 1: สร้าง Project Structure

```bash
mkdir systems-demo
cd systems-demo
mkdir src tests docs
```

### Step 2: สร้าง Hello World (C)

**src/hello.c**:
```c
#include <stdio.h>

int main() {
    printf("Hello, Systems Programming!\n");
    return 0;
}
```

### Step 3: สร้าง Process Example (C)

**src/process.c**:
```c
#include <unistd.h>
#include <stdio.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();
    
    if (pid == 0) {
        // Child process
        printf("Child process\n");
    } else if (pid > 0) {
        // Parent process
        printf("Parent process\n");
        wait(NULL);
    } else {
        perror("fork");
        return 1;
    }
    
    return 0;
}
```

### Step 4: สร้าง Memory Example (C)

**src/memory.c**:
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Stack allocation
    int stack_var = 10;
    printf("Stack: %d\n", stack_var);
    
    // Heap allocation
    int *heap_var = malloc(sizeof(int));
    *heap_var = 20;
    printf("Heap: %d\n", *heap_var);
    free(heap_var);
    
    return 0;
}
```

### Step 5: สร้าง File I/O Example (C)

**src/file_io.c**:
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *file = fopen("test.txt", "w");
    if (file == NULL) {
        perror("fopen");
        return 1;
    }
    
    fprintf(file, "Hello, File!\n");
    fclose(file);
    
    file = fopen("test.txt", "r");
    if (file == NULL) {
        perror("fopen");
        return 1;
    }
    
    char buffer[1024];
    fgets(buffer, sizeof(buffer), file);
    printf("File content: %s", buffer);
    
    fclose(file);
    
    return 0;
}
```

### Step 6: สร้าง Makefile

**Makefile**:
```makefile
CC = gcc
CFLAGS = -Wall -Wextra -g

TARGETS = hello process memory file_io

all: $(TARGETS)

hello: src/hello.c
	$(CC) $(CFLAGS) -o $@ $<

process: src/process.c
	$(CC) $(CFLAGS) -o $@ $<

memory: src/memory.c
	$(CC) $(CFLAGS) -o $@ $<

file_io: src/file_io.c
	$(CC) $(CFLAGS) -o $@ $<

clean:
	rm -f $(TARGETS)
```

### Step 7: Build และ Run

```bash
# Build all
make

# Run hello
./hello

# Run process
./process

# Run memory
./memory

# Run file_io
./file_io

# Clean
make clean
```

### Step 8: Debug with GDB

```bash
# Compile with debug symbols
gcc -g -o process src/process.c

# Debug with GDB
gdb ./process

# GDB commands
(gdb) break main
(gdb) run
(gdb) next
(gdb) print pid
(gdb) quit
```

### Step 9: Check Memory with Valgrind

```bash
# Compile with debug symbols
gcc -g -o memory src/memory.c

# Check memory
valgrind --leak-check=full ./memory
```

### Step 10: Trace System Calls

```bash
# Trace system calls
strace ./process
```

### Next Steps

1. อ่าน `key-concept.md` สำหรับ concepts เพิ่มเติม
2. ดู `how-it-works.md` สำหรับ OS internals
3. ศึกษา `os-internals.md` สำหรับ OS internals และ kernel concepts
4. ดู `memory.md` สำหรับ memory management
5. ดู `file-systems.md` สำหรับ file systems และ I/O
