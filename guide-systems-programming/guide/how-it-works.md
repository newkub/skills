# How It Works

## OS Internals ทำงานอย่างไร

### Process Creation

### fork()

**How it works**:
1. Process calls fork()
2. OS creates child process
3. Child process is copy of parent
4. Both processes continue execution
5. fork() returns different values (0 in child, PID in parent)

**Example (C)**:

```c
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();
    
    if (pid == 0) {
        // Child process
        printf("Child: PID = %d\n", getpid());
    } else if (pid > 0) {
        // Parent process
        printf("Parent: PID = %d, Child PID = %d\n", getpid(), pid);
    } else {
        // Error
        perror("fork");
    }
    
    return 0;
}
```

### exec()

**How it works**:
1. Process calls exec()
2. OS replaces process memory with new program
3. Process continues with new program
4. PID remains the same

**Example (C)**:

```c
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();
    
    if (pid == 0) {
        // Child process
        execlp("/bin/ls", "ls", NULL);
        perror("exec");
    }
    
    // Parent process
    wait(NULL);
    
    return 0;
}
```

### Memory Management

### Virtual Memory

**How it works**:
1. Process uses virtual addresses
2. CPU translates virtual to physical via MMU
3. Page table stores mappings
4. Page fault loads page from disk

**Example**:
```
Virtual Address: 0x1000
    ↓ MMU
Physical Address: 0x5000
```

### Page Fault

**How it works**:
1. Process accesses invalid virtual address
2. CPU triggers page fault
3. OS handles page fault
4. OS loads page from disk
5. OS updates page table
6. Process resumes

### File I/O

### open()

**How it works**:
1. Process calls open()
2. OS checks file permissions
3. OS creates file descriptor
4. OS adds to process file table
5. OS returns file descriptor

### read()

**How it works**:
1. Process calls read()
2. OS checks file descriptor
3. OS reads data from disk (or cache)
4. OS copies data to user buffer
5. OS returns bytes read

### write()

**How it works**:
1. Process calls write()
2. OS checks file descriptor
3. OS copies data from user buffer
4. OS writes data to disk (or cache)
5. OS returns bytes written

### System Call Flow

**User Space to Kernel Space**:

```
User Program
    ↓ (system call)
Kernel
    ↓ (hardware)
Hardware
```

**Example**:
```
printf("Hello") → write() → kernel → screen
```

### Interrupt Handling

**How it works**:
1. Hardware sends interrupt
2. CPU saves current state
3. CPU jumps to interrupt handler
4. Interrupt handler processes interrupt
5. CPU restores state
6. CPU resumes execution

**Example**:
```
Keyboard pressed → interrupt → handler → key processed
```

### Device Driver

**How it works**:
1. Application writes to device file
2. Kernel calls device driver
3. Device driver communicates with hardware
4. Hardware performs operation
5. Device driver returns result

**Example**:
```
write(fd, data) → driver → hardware → write data
```

### Scheduling

**Process Scheduling**

**How it works**:
1. OS maintains ready queue
2. Scheduler selects process to run
3. Context switch to selected process
4. Process runs for time slice
5. Timer interrupt
6. Context switch back to scheduler

**Scheduling Algorithms**:
- **Round Robin**: Equal time slices
- **Priority**: Higher priority first
- **Multilevel Feedback**: Adaptive scheduling
