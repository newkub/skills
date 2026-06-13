# OS Internals

## OS Internals และ Kernel Concepts

### Kernel Architecture

### Monolithic Kernel

**Definition**: All OS services run in kernel space

**Examples**: Linux, Unix

**Pros**:
- Fast performance
- Simple design

**Cons**:
- Crash affects entire system
- Hard to extend

### Microkernel

**Definition**: Only essential services in kernel space

**Examples**: Minix, QNX

**Pros**:
- More stable
- Easier to extend

**Cons**:
- Slower performance
- More complex

### Hybrid Kernel

**Definition**: Combination of monolithic and microkernel

**Examples**: Windows NT, macOS

### Process Management

### Process States

**States**:
- **Running**: Currently executing
- **Ready**: Waiting for CPU
- **Blocked**: Waiting for I/O
- **Zombie**: Terminated but not reaped

**State Transitions**:
```
Ready → Running → Blocked → Ready
Running → Zombie → Reaped
```

### Process Control Block (PCB)

**Definition**: Data structure that stores process information

**Contents**:
- Process ID
- Process state
- Register values
- Memory information
- Open files

### Context Switch

**Definition**: Switching from one process to another

**Steps**:
1. Save current process state
2. Select next process
3. Load next process state
4. Resume next process

**Overhead**:
- Save/restore registers
- Flush TLB
- Cache misses

### Memory Management

### Virtual Memory

**Concept**: Each process has its own virtual address space

**Benefits**:
- Memory protection
- Process isolation
- More memory than physical RAM

**Implementation**:
- Page tables
- TLB (Translation Lookaside Buffer)
- Page replacement algorithms

### Paging

**Definition**: Divide memory into fixed-size pages

**Page Size**: Typically 4KB

**Page Table**: Maps virtual pages to physical pages

**Page Replacement Algorithms**:
- **FIFO**: First In First Out
- **LRU**: Least Recently Used
- **Clock**: Clock algorithm

### Memory Allocation

### Stack Allocation

**Characteristics**:
- Automatic
- Fast
- Fixed size
- LIFO

**Use Case**: Local variables, function calls

### Heap Allocation

**Characteristics**:
- Manual
- Slower
- Variable size
- Random access

**Use Case**: Dynamic data structures

### Fragmentation

**External Fragmentation**:
- Free memory between allocated blocks
- Can be solved by compaction

**Internal Fragmentation**:
- Wasted space within allocated blocks
- Cannot be solved

### File Systems

### File System Types

**Types**:
- **ext4**: Linux default
- **NTFS**: Windows default
- **APFS**: macOS default
- **FAT32**: Simple, portable

### Inode

**Definition**: Data structure that stores file metadata

**Contents**:
- File type
- Permissions
- Size
- Timestamps
- Data block pointers

### Directory Structure

**Example**:
```
/
├── bin
├── etc
├── home
├── usr
└── var
```

### File Descriptors

**Definition**: Integer representing open file

**Standard I/O**:
- 0: stdin
- 1: stdout
- 2: stderr

### I/O Management

### Buffering

**Definition**: Store data in memory before writing to disk

**Types**:
- **No buffering**: Immediate write
- **Line buffering**: Write on newline
- **Full buffering**: Write when buffer full

**Example**:
```c
// Set line buffering
setvbuf(stdout, NULL, _IOLBF, 0);
```

### Direct I/O

**Definition**: Bypass OS cache

**Use Case**: Databases, high-performance applications

**Example**:
```c
// Open with O_DIRECT
int fd = open("file.txt", O_RDWR | O_DIRECT);
```

### Memory-Mapped Files

**Definition**: Map file into memory

**Benefits**:
- Fast access
- Shared memory

**Example**:
```c
// Map file
void *addr = mmap(NULL, size, PROT_READ, MAP_SHARED, fd, 0);
```

### Interrupts

### Interrupt Types

**Hardware Interrupts**:
- Timer
- Keyboard
- Network
- Disk

**Software Interrupts**:
- System calls
- Signals

### Interrupt Handler

**Definition**: Function that handles interrupt

**Steps**:
1. Save current state
2. Disable interrupts
3. Handle interrupt
4. Enable interrupts
5. Restore state

### Device Drivers

### Character Device Drivers

**Examples**:
- Keyboard driver
- Serial port driver
- Terminal driver

### Block Device Drivers

**Examples**:
- Disk driver
- SSD driver
- USB mass storage driver

### Driver Architecture

**User Space**:
- Applications

**Kernel Space**:
- Device drivers
- File system
- Network stack

**Hardware**:
- Devices
