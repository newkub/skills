# Configuration

## Systems Tools Configuration

### GCC Configuration

### Compile with Debug Symbols

```bash
# ✅ Good: Compile with debug symbols
gcc -g -o program program.c

# ✅ Good: Compile with optimization
gcc -O2 -o program program.c

# ✅ Good: Compile with warnings
gcc -Wall -Wextra -o program program.c
```

### Makefile

```makefile
CC = gcc
CFLAGS = -Wall -Wextra -g
LDFLAGS = -lpthread

TARGET = program
SOURCES = $(wildcard *.c)
OBJECTS = $(SOURCES:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJECTS)
	$(CC) $(LDFLAGS) -o $@ $^

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJECTS) $(TARGET)
```

### CMake Configuration

### CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.10)
project(SystemsDemo)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -Wextra")

add_executable(program main.c)
target_link_libraries(program pthread)
```

### Build with CMake

```bash
mkdir build
cd build
cmake ..
make
```

### GDB Configuration

### .gdbinit

```gdb
# Set disassembly flavor
set disassembly-flavor intel

# Set pretty print
set print pretty on

# Show source code
set listsize 20
```

### Debug with GDB

```bash
# Compile with debug symbols
gcc -g -o program program.c

# Debug with GDB
gdb ./program

# Common GDB commands
(gdb) break main
(gdb) run
(gdb) next
(gdb) print variable
(gdb) backtrace
```

### Valgrind Configuration

### Memory Check

```bash
# Check for memory leaks
valgrind --leak-check=full ./program

# Check for invalid memory access
valgrind ./program
```

### strace Configuration

### Trace System Calls

```bash
# Trace all system calls
strace ./program

# Trace specific system call
strace -e open,read,write ./program

# Trace child processes
strace -f ./program
```

### perf Configuration

### Profile CPU

```bash
# Profile CPU usage
perf record ./program

# Analyze profile
perf report

# Generate flame graph
perf script | flamegraph.pl > flamegraph.svg
```

### Rust Configuration

### Cargo.toml

```toml
[package]
name = "systems-demo"
version = "0.1.0"
edition = "2021"

[dependencies]
libc = "0.2"

[profile.release]
opt-level = 3
lto = true
```

### Build with Cargo

```bash
# Debug build
cargo build

# Release build
cargo build --release
```

### Go Configuration

### go.mod

```go
module systems-demo

go 1.21
```

### Build with Go

```bash
# Build
go build -o program main.go

# Build with race detector
go build -race -o program main.go
```

### System Configuration

### ulimit

```bash
# Set core dump size
ulimit -c unlimited

# Set file descriptor limit
ulimit -n 4096
```

### sysctl

```bash
# View kernel parameters
sysctl -a

# Set kernel parameter
sysctl -w kernel.shmmax=68719476736
```
