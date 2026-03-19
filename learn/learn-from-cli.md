# Learn from CLI

## Purpose

แนวทางการเรียนรู้จาก Command Line Interface (CLI) tools โดยการใช้งานจริง ทดลอง commands และศึกษา documentation ผ่าน terminal อย่างเป็นระบบ

## Part 1: CLI Discovery

### 1.1 Find Relevant CLI Tools

#### Sources for CLI Tools

- **Package managers** - npm, bun, yarn, cargo, pip
- **Development tools** - git, docker, kubectl, webpack
- **Framework CLIs** - create-react-app, vue-cli, nuxt, next
- **System tools** - curl, wget, grep, sed, awk
- **Cloud CLIs** - aws, gcloud, az, terraform

#### Tool Selection Criteria

1. **Relevance to your work** - เกี่ยวข้องกับโปรเจกต์ปัจจุบัน
2. **Active maintenance** - มีการอัพเดตล่าสุด
3. **Good documentation** - มี help และ man pages ครบถ้วน
4. **Community adoption** - มีคนใช้งานจริงมาก

### 1.2 Initial CLI Assessment

#### Quick Tool Evaluation

```bash
# ตรวจสอบเวอร์ชัน
tool --version
tool -v

# ดู help ทั้งหมด
tool --help
tool -h

# ตรวจสอบ installation
which tool
where tool
```

#### Documentation Discovery

- **Built-in help** - `--help`, `-h`, `help` command
- **Man pages** - `man tool` (Unix/Linux)
- **Online docs** - official website และ GitHub
- **Community resources** - Stack Overflow, tutorials

ค้นหาเครื่องมือ → ประเมินความเหมาะสม → ศึกษาพื้นฐาน

## Part 2: CLI Fundamentals

### 2.1 Basic Command Structure

#### Command Syntax Patterns

```bash
# Basic pattern
command [options] [arguments]

# Common option formats
command --long-option=value
command -s value
command -f value1 -g value2

# Subcommands pattern
command subcommand [options] [arguments]
```

#### Understanding Command Components

- **Command** - ชื่อเครื่องมือ (npm, git, docker)
- **Subcommands** - คำสั่งย่อย (install, commit, run)
- **Options/Flags** - การตั้งค่า (--save, -m, --port)
- **Arguments** - ข้อมูลนำเข้า (package.json, "commit message")

### 2.2 CLI Navigation Skills

#### Essential Navigation Commands

```bash
# Help and discovery
command --help                    # Show help
command --help | less            # Scrollable help
command --help | grep "pattern"  # Search in help

# Command completion
command <Tab>                    # Auto-complete
command --<Tab>                  # Show available options

# Command history
history | grep command           # Find previous commands
!command                         # Repeat last command
```

#### Learning New Commands

1. **Start with --help** - อ่าน help ทั้งหมดก่อน
2. **Identify main subcommands** - หาคำสั่งหลักๆ
3. **Test basic usage** - ลองใช้คำสั่งง่ายๆ
4. **Explore options** - ทดลอง flags ต่างๆ

เข้าใจโครงสร้าง -> ฝึกใช้งาน -> สำรวจ options

## Part 3: Hands-on Practice

### 3.1 Interactive Learning

#### Practice Methodology

```bash
# 1. Start with safe commands
command --version
command --help

# 2. Try dry-run modes
command --dry-run [args]
command --check [args]

# 3. Use verbose output
command --verbose [args]
command -v [args]

# 4. Test with examples
command example-command
command --example
```

#### Learning by Doing

1. **Create sandbox environment** - สร้างโฟลเดอร์ทดลอง
2. **Use version control** - git init เพื่อ rollback ได้
3. **Document experiments** - บันทึกคำสั่งที่ลอง
4. **Build muscle memory** - พิมพ์ command ซ้ำๆ

### 3.2 Command chaining

#### Building Complex Workflows

```bash
# Basic piping
command1 | command2

# Command substitution
command1 $(command2)

# Conditional execution
command1 && command2    # Run second if first succeeds
command1 || command2    # Run second if first fails

# Background execution
command &

# Command grouping
{ command1; command2; }
```

#### Workflow Examples

```bash
# File processing workflow
find . -name "*.js" | xargs eslint --fix

# Git workflow
git add . && git commit -m "message" && git push

# Build and test
npm run build && npm run test
```

ทดสอบคำสั่งเดี่ยว -> ผสมคำสั่ง -> สร้าง workflows

## Part 4: Configuration & Customization

### 4.1 Environment Setup

#### Configuration Files

```bash
# Common config locations
~/.config/tool/
~/.toolrc
~/.tool/config.json
~/.tool/config.yml

# Environment variables
export TOOL_CONFIG_PATH=~/.config/tool/
export TOOL_API_KEY="your-key"
```

#### Shell Integration

```bash
# Aliases for common commands
alias ll='ls -la'
alias gs='git status'
alias npm-dev='npm run dev'

# Shell functions
tool-function() {
    command --option1 "$1" --option2 "$2"
}

# Tab completion
source <(command completion)
```

### 4.2 Advanced CLI Features

#### Power User Features

- **Shell integration** - tab completion, aliases
- **Configuration files** - การตั้งค่าถาวร
- **Environment variables** - การตั้งค่าแบบ dynamic
- **Plugins and extensions** - เพิ่มความสามารถ

#### Customization Strategies

1. **Create aliases** - ย่อคำสั่งที่ใช้บ่อย
2. **Set up completion** - เพิ่ม auto-completion
3. **Configure defaults** - ตั้งค่าที่ใช้ประจำ
4. **Build shell functions** - สร้างคำสั่งประยุกต์

ตั้งค่าพื้นฐาน -> ปรับแต่งการใช้งาน -> สร้าง shortcuts

## Part 5: Documentation Mastery

### 5.1 Reading CLI Documentation

#### Documentation Types

- **Built-in help** - `--help`, `-h`
- **Man pages** - `man command`
- **Info pages** - `info command`
- **Online docs** - official website
- **README files** - GitHub documentation

#### Effective Documentation Reading

```bash
# Search in help
command --help | grep "pattern"

# Read man pages section by section
man command | less

# Find specific sections
man -k "keyword"
apropos "keyword"

# Export help for reference
command --help > command-help.txt
```

### 5.2 Creating Personal References

#### Command Cheat Sheets

```bash
# Create personal command reference
echo "# My CLI Commands" > ~/cli-cheatsheet.md
echo "## Git" >> ~/cli-cheatsheet.md
echo "git status - Check repository status" >> ~/cli-cheatsheet.md
```

#### Knowledge Organization

- **By tool** - จัดตามเครื่องมือ
- **By task** - จัดตามงานที่ทำ
- **By frequency** - จัดตามความถี่ใช้
- **By complexity** - จัดตามความซับซ้อน

อ่าน docs -> สรุปความรู้ -> สร้าง cheat sheets

## Part 6: Troubleshooting & Debugging

### 6.1 Common CLI Issues

#### Error Diagnosis

```bash
# Check command existence
which command
command --version

# Debug with verbose output
command --verbose
command -v

# Check permissions
ls -la $(which command)

# Test in clean environment
env -i command
```

#### Error Resolution Strategies

1. **Read error messages** - อ่านข้อความผิดพลาดอย่างละเอียด
2. **Check documentation** - ดูวิธีแก้ไขใน docs
3. **Search online** - หาวิธีแก้ไขจาก community
4. **Isolate the problem** - ทดสอบใน environment สะอาด

### 6.2 Performance Optimization

#### Command Performance

```bash
# Time command execution
time command

# Profile with verbose output
command --verbose --debug

# Check resource usage
command &; ps aux | grep command
```

#### Optimization Techniques

- **Use appropriate flags** - เลือก options ที่เหมาะสม
- **Avoid unnecessary operations** - ไม่ทำงานซ้ำซ้อน
- **Cache results** - เก็บผลลัพธ์ที่ใช้บ่อย
- **Parallel execution** - รันคำสั่งพร้อมกันเมื่อได้ประโยชน์

ตรวจสอบปัญหา -> หาสาเหตุ -> แก้ไขและทดสอบ

## Part 7: Automation & Scripting

### 7.1 Shell Scripting

#### Basic Script Structure

```bash
#!/bin/bash

# Script header
set -euo pipefail  # Error handling

# Variables
PROJECT_DIR="$HOME/projects"
BACKUP_DIR="$HOME/backups"

# Functions
backup_project() {
    local project="$1"
    tar -czf "$BACKUP_DIR/$project.tar.gz" "$PROJECT_DIR/$project"
}

# Main logic
for project in "$PROJECT_DIR"/*; do
    backup_project "$(basename "$project")"
done
```

#### Script Best Practices

1. **Use set -euo pipefail** - จัดการ error อย่างเข้มงวด
2. **Quote variables** - ป้องกัน word splitting
3. **Use functions** - จัดระเบียบโค้ด
4. **Add comments** - อธิบายสิ่งที่ทำ

### 7.2 CLI Integration

#### Making Scripts Executable

```bash
# Make script executable
chmod +x script.sh

# Add to PATH
export PATH="$HOME/bin:$PATH"

# Create symbolic link
ln -s /path/to/script /usr/local/bin/command
```

#### Building CLI Tools

- **Argument parsing** - จัดการ command line arguments
- **Help system** - สร้าง --help ให้เครื่องมือเอง
- **Error handling** - จัดการข้อผิดพลาดอย่างเหมาะสม
- **Logging** - บันทึกการทำงาน

เขียนสคริปต์ -> ทดสอบ -> แจกจ่าย -> บำรุงรักษา

## Part 8: Advanced CLI Techniques

### 8.1 Power User Features

#### Advanced Shell Features

```bash
# Process substitution
diff <(command1) <(command2)

# Command grouping with redirection
{ command1; command2; } > output.txt

# Background job management
command &
jobs
fg %1
bg %1

# Signal handling
trap 'cleanup' EXIT
```

#### CLI Tool Integration

- **Pipes and redirection** - ส่งข้อมูลระหว่างคำสั่ง
- **Process management** - จัดการ background processes
- **Signal handling** - จัดการ interrupts และ termination
- **Resource monitoring** - ติดตามการใช้ทรัพยากร

### 8.2 Cross-platform Considerations

#### Platform Differences

- **Path separators** - `/` vs `\`
- **Command availability** - Unix vs Windows commands
- **Shell differences** - bash, zsh, PowerShell
- **Encoding issues** - UTF-8 vs locale settings

#### Portable Scripting

```bash
# Detect OS
case "$(uname)" in
    Linux*) echo "Linux" ;;
    Darwin*) echo "macOS" ;;
    CYGWIN*|MINGW*) echo "Windows" ;;
esac

# Use cross-platform tools
# Instead of ls, use find
find . -name "*.txt"
```

เชี่ยวชาญพื้นฐาน -> เรียนรู้เทคนิคขั้นสูง -> ปรับให้ทำงานได้ทุก platform

## Best Practices

### CLI Learning Best Practices

1. **Start with --help** - อ่าน documentation ก่อนเสมอ
2. **Use dry-run modes** - ทดสอบโดยไม่สร้างผลกระทบ
3. **Build incrementally** - เริ่มจากคำสั่งง่ายๆ
4. **Document your workflow** - บันทึกสิ่งที่ใช้บ่อย

### Command Line Safety

1. **Use version control** - git init ก่อนทดลอง
2. **Test in sandbox** - สร้าง environment ทดลอง
3. **Backup important data** - สำรองข้อมูลก่อนรันคำสั่ง risky
4. **Read before executing** - อ่านคำสั่งให้เข้าใจก่อนรัน

## Tools & Resources

### Essential CLI Tools

- **Shell** - bash, zsh, fish, PowerShell
- **Text editors** - vim, nano, emacs
- **File management** - find, grep, sed, awk
- **System monitoring** - top, htop, ps
- **Network tools** - curl, wget, netcat

### Learning Resources

- **Man pages** - `man command`
- **tldr pages** - Simplified man pages
- **Explainshell** - Break down shell commands
- **Commandlinefu** - Community command examples
- **ShellCheck** - Shell script analysis

## Common Pitfalls

### Learning Pitfalls

1. **Copy-paste without understanding** - คัดลอกโดยไม่เข้าใจ
2. **Ignoring error messages** - มองข้ามข้อความผิดพลาด
3. **Using destructive commands** - ใช้คำสั่งที่เสียหายโดยไม่ระมัดระวัง
4. **Not reading documentation** - ข้ามการอ่าน docs

### Usage Pitfalls

1. **Wrong directory** - รันคำสั่งในโฟลเดอร์ผิด
2. **Permission issues** - ไม่มีสิทธิ์ในการรันคำสั่ง
3. **Path problems** - ใช้ relative path ผิด
4. **Environment issues** - ตัวแปรสภาพแวดล้อมไม่ถูกต้อง

## Success Metrics

### CLI Proficiency Indicators

- **Command recall** - จำคำสั่งที่ใช้บ่อยได้
- **Problem solving** - แก้ปัญหาด้วย CLI ได้
- **Script writing** - เขียน shell scripts ได้
- **Tool integration** - ผสมผสาน tools ต่างๆ ได้

### Workflow Efficiency

- **Speed** - ทำงานเร็วกว่า GUI
- **Automation** - สร้าง automated workflows ได้
- **Reproducibility** - ทำซ้ำผลลัพธ์ได้
- **Remote capability** - ทำงานผ่าน SSH ได้