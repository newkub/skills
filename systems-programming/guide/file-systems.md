# File Systems

## File Systems และ I/O

### File Operations

### open()

**Definition**: Open file and return file descriptor

**Example (C)**:

```c
#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("file.txt", O_RDONLY);
    
    if (fd == -1) {
        perror("open");
        return 1;
    }
    
    close(fd);
    
    return 0;
}
```

### read()

**Definition**: Read from file descriptor

**Example (C)**:

```c
#include <unistd.h>

int main() {
    int fd = open("file.txt", O_RDONLY);
    
    char buffer[1024];
    ssize_t bytes_read = read(fd, buffer, sizeof(buffer));
    
    if (bytes_read == -1) {
        perror("read");
    }
    
    close(fd);
    
    return 0;
}
```

### write()

**Definition**: Write to file descriptor

**Example (C)**:

```c
#include <unistd.h>

int main() {
    int fd = open("file.txt", O_WRONLY | O_CREAT, 0644);
    
    const char *data = "Hello, World!";
    ssize_t bytes_written = write(fd, data, strlen(data));
    
    if (bytes_written == -1) {
        perror("write");
    }
    
    close(fd);
    
    return 0;
}
```

### Standard I/O

### fopen()

**Definition**: Open file and return FILE pointer

**Example (C)**:

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("file.txt", "r");
    
    if (file == NULL) {
        perror("fopen");
        return 1;
    }
    
    fclose(file);
    
    return 0;
}
```

### fread()

**Definition**: Read from FILE pointer

**Example (C)**:

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("file.txt", "r");
    
    char buffer[1024];
    size_t bytes_read = fread(buffer, 1, sizeof(buffer), file);
    
    fclose(file);
    
    return 0;
}
```

### fwrite()

**Definition**: Write to FILE pointer

**Example (C)**:

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("file.txt", "w");
    
    const char *data = "Hello, World!";
    fwrite(data, 1, strlen(data), file);
    
    fclose(file);
    
    return 0;
}
```

### File Positioning

### lseek()

**Definition**: Change file position

**Example (C)**:

```c
#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("file.txt", O_RDWR);
    
    // Seek to position 100
    off_t offset = lseek(fd, 100, SEEK_SET);
    
    close(fd);
    
    return 0;
}
```

### fseek()

**Definition**: Change FILE pointer position

**Example (C)**:

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("file.txt", "r");
    
    // Seek to position 100
    fseek(file, 100, SEEK_SET);
    
    fclose(file);
    
    return 0;
}
```

### File Metadata

### stat()

**Definition**: Get file metadata

**Example (C)**:

```c
#include <sys/stat.h>

int main() {
    struct stat st;
    
    if (stat("file.txt", &st) == -1) {
        perror("stat");
        return 1;
    }
    
    printf("Size: %ld bytes\n", st.st_size);
    printf("Mode: %o\n", st.st_mode);
    
    return 0;
}
```

### Directory Operations

### opendir()

**Definition**: Open directory

**Example (C)**:

```c
#include <dirent.h>

int main() {
    DIR *dir = opendir(".");
    
    if (dir == NULL) {
        perror("opendir");
        return 1;
    }
    
    struct dirent *entry;
    while ((entry = readdir(dir)) != NULL) {
        printf("%s\n", entry->d_name);
    }
    
    closedir(dir);
    
    return 0;
}
```

### File Permissions

### chmod()

**Definition**: Change file permissions

**Example (C)**:

```c
#include <sys/stat.h>

int main() {
    chmod("file.txt", 0644);
    return 0;
}
```

### File Locking

### flock()

**Definition**: Lock file

**Example (C)**:

```c
#include <sys/file.h>

int main() {
    int fd = open("file.txt", O_RDWR);
    
    // Exclusive lock
    if (flock(fd, LOCK_EX) == -1) {
        perror("flock");
        return 1;
    }
    
    // Critical section
    
    // Unlock
    flock(fd, LOCK_UN);
    
    close(fd);
    
    return 0;
}
```

### Best Practices

### 1. Always Check File Operations

```c
// ✅ Good: Check file operations
FILE *file = fopen("file.txt", "r");
if (file == NULL) {
    perror("fopen");
    return 1;
}
```

### 2. Always Close Files

```c
// ✅ Good: Close files
FILE *file = fopen("file.txt", "r");
if (file) {
    fclose(file);
}
```

### 3. Use Appropriate Buffering

```c
// ✅ Good: Set buffering
setvbuf(file, NULL, _IOLBF, 0);
```

### 4. Handle Errors Gracefully

```c
// ✅ Good: Handle errors
if (read(fd, buffer, size) == -1) {
    perror("read");
    // Handle error
}
```

### 5. Use Atomic Operations

```c
// ✅ Good: Atomic write
write(fd, data, size);
```
