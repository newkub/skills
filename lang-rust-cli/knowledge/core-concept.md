# Core Concepts

## When to Use
ศึกษาหลักการพื้นฐานของ Rust CLI development

## Key Concepts

### 1. Command Line Interface (CLI)
CLI คือ interface ที่ผู้ใช้ interact กับโปรแกรมผ่าน command line
- รับ input ผ่าน arguments และ flags
- ส่ง output ผ่าน stdout/stderr
- ใช้ exit codes สำหรับ status reporting

### 2. Argument Parsing
การแปลง command line arguments เป็น structured data
- Positional arguments: `my-cli <input> <output>`
- Optional flags: `my-cli --verbose --debug`
- Subcommands: `my-cli build --release`

### 3. Error Handling Philosophy
Rust แยกประเภท errors:
- **Recoverable errors**: ใช้ `Result<T, E>`
- **Unrecoverable errors**: ใช้ `panic!`

### 4. Binary vs Library
CLI applications เป็น binary targets:
- มี `fn main()` เป็น entry point
- สามารถแยก business logic เป็น library
- ทำให้ testing ง่ายขึ้น

### 5. Synchronous vs Asynchronous
เลือกระหว่าง sync และ async:
- **Sync**: ง่ายกว่า เหมาะกับงาน I/O น้อย
- **Async**: เหมาะกับ network calls, file operations จำนวนมาก

### 6. Exit Codes
CLI applications ใช้ exit codes เพื่อสื่อสารสถานะ:
- **0**: Success - ทำงานสำเร็จ
- **1**: General error - เกิดข้อผิดพลาดทั่วไป
- **2**: Usage error - การใช้งานผิด syntax
- **127**: Command not found - ไม่พบคำสั่ง

### 7. Standard Streams
การจัดการ input/output streams:
- **stdin**: Input stream สำหรับรับข้อมูล
- **stdout**: Normal output สำหรับผลลัพธ์ปกติ
- **stderr**: Error output สำหรับ errors และ warnings

### 8. Configuration Hierarchy
ลำดับความสำคัญของ configuration (มากไปน้อย):
1. Command line arguments
2. Environment variables
3. Configuration files
4. Default values

### 9. Shell Integration
การทำงานร่วมกับ shell:
- **Tab completion**: Auto-complete commands และ arguments
- **Piping**: ส่ง output ระหว่าง commands
- **Redirection**: เปลี่ยนทิศทาง input/output
- **Exit status**: ใช้ใน shell scripts

## Common Patterns

### 10. Command Structure
โครงสร้าง command ทั่วไป:
```
command [OPTIONS] <ARGUMENTS> [SUBCOMMAND]
```

### 11. Help System
การจัดการ help information:
- `--help` หรือ `-h`: แสดง usage information
- `command --help`: แสดง help สำหรับ subcommand
- Auto-generated help จาก clap documentation

### 12. Version Information
การแสดง version:
- `--version` หรือ `-V`: แสดง version number
- รวม build information สำหรับ debugging
- ใช้ semantic versioning (MAJOR.MINOR.PATCH)

### 13. Input Validation
การตรวจสอบ input:
- Type validation ผ่าน clap
- Custom validation logic
- Clear error messages สำหรับ invalid input

### 14. Output Formats
รูปแบบ output ที่นิยม:
- **Plain text**: สำหรับ human reading
- **JSON**: สำหรับ machine processing
- **Table**: สำหรับ structured data display
- **Silent mode**: สำหรับ scripting
