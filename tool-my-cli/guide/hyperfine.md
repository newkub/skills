---
description: Command-line benchmarking tool with statistical analysis and comprehensive reporting
title: cli-hyperfine
tags: [cli, benchmark, performance, statistics, analysis]
---

## Overview

`hyperfine` เป็น command-line benchmarking tool ที่มี statistical analysis, progress reporting และ outliers detection พร้อม comprehensive reporting และ advanced benchmarking features

## Installation

```powershell
scoop install hyperfine
# หรือ
choco install hyperfine
# หรือ
cargo install hyperfine
```

## Basic Usage

```bash
# Basic benchmark
hyperfine "ls -la"

# Compare multiple commands
hyperfine "ls -la" "exa -la"

# Warmup runs
hyperfine --warmup 3 "npm test"

# Multiple runs
hyperfine --runs 10 "sleep 0.1"
```

## Command Line Options

### Execution Options

| Flag | Description |
|------|-------------|
| `-w, --warmup <num>` | Warmup runs before measuring |
| `-m, --min-runs <num>` | Minimum number of runs |
| `-M, --max-runs <num>` | Maximum number of runs |
| `-r, --runs <num>` | Exact number of runs |
| `-p, --prepare <cmd>` | Prepare command before each run |
| `-c, --cleanup <cmd>` | Cleanup command after each run |
| `-n, --shell <shell>` | Shell to use for commands |

### Output Options

| Flag | Description |
|------|-------------|
| `-s, --style <style>` | Output style (auto, basic, full, none, table, csv, tsv, json) |
| `--export-json <file>` | Export results as JSON |
| `--export-markdown <file>` | Export results as Markdown |
| `--export-csv <file>` | Export results as CSV |
| `--output <file>` | Write output to file |
| `--ignore-failure` | Ignore non-zero exit codes |

### Analysis Options

| Flag | Description |
|------|-------------|
| `--show-output` | Show command output |
| `--hide-output` | Hide command output |
| `--time-unit <unit>` | Time unit (second, millisecond, microsecond) |
| `--sort <method>` | Sort method (command, mean, stderr) |
| `--rate-threshold <sec>` | Rate threshold for fast commands |

## Advanced Usage

### Parameterized Benchmarks

```bash
# Parameterized benchmark with different extensions
hyperfine -L extension md,txt 'cat {extension}'

# Multiple parameters
hyperfine -L cmd ls,exa -L flag -l,-a '{cmd} {flag}'

# Range parameters
hyperfine -L size 1,10,100 'sleep {size}ms'

# Combinations
hyperfine -L compiler gcc,clang -L opt -O2,-O3 '{compiler} {opt} main.c -o main'
```

### Prepare and Cleanup

```bash
# Prepare command before each run
hyperfine --prepare 'cargo build' 'cargo test'

# Cleanup after each run
hyperfine --cleanup 'rm -f temp.txt' 'echo "test" > temp.txt'

# Both prepare and cleanup
hyperfine --prepare 'docker start redis' --cleanup 'docker stop redis' 'redis-cli ping'
```

### Shell Comparison

```bash
# Compare different shells
hyperfine -s sh -s bash -s zsh -s fish 'for i in {1..100}; do echo $i; done'

# Shell-specific features
hyperfine -s bash 'echo {1..100}' 'printf "%s\n" {1..100}'
```

### Complex Benchmarks

```bash
# Database operations
hyperfine --prepare 'docker start postgres' \
  'psql -c "SELECT COUNT(*) FROM users"' \
  --cleanup 'docker stop postgres'

# Network operations
hyperfine 'curl -s https://api.github.com' \
  'wget -qO- https://api.github.com'

# File operations
hyperfine 'find . -name "*.py" -exec wc -l {} +' \
  'fd -e py | xargs wc -l'
```

## Output Formats

### Basic Output

```bash
# Simple output
hyperfine --style basic "sleep 0.1"

# Full output with statistics
hyperfine --style full "sleep 0.1"

# Table format
hyperfine --style table "ls -la" "exa -la"
```

### Export Formats

```bash
# Export as JSON
hyperfine --export-json results.json "ls -la"

# Export as Markdown
hyperfine --export-markdown benchmark.md "ls -la"

# Export as CSV
hyperfine --export-csv results.csv "ls -la"

# Export as TSV
hyperfine --export-markdown results.tsv "ls -la"
```

## Statistical Analysis

### Metrics Provided

| Metric | Description |
|--------|-------------|
| **Mean** | Average execution time |
| **Std Dev** | Standard deviation |
| **Min** | Fastest execution time |
| **Max** | Slowest execution time |
| **Median** | Median execution time |
| **User** | User CPU time |
| **System** | System CPU time |
| **Total** | Total CPU time |
| **Range** | Min to Max range |
| **IQR** | Interquartile range |

### Statistical Significance

```bash
# Statistical comparison
hyperfine "command1" "command2"

# Shows:
# - Which is faster
# - Statistical significance
# - Confidence intervals
# - Relative difference
```

## Performance Analysis

### Fast Commands

```bash
# Rate-limited for very fast commands
hyperfine --rate-threshold 0.001 'echo "test"'

# Use microsecond precision
hyperfine --time-unit microsecond 'echo "test"'
```

### Slow Commands

```bash
# Set minimum runs for slow commands
hyperfine --min-runs 3 'sleep 5'

# Show progress for long-running benchmarks
hyperfine --show-output 'make build'
```

## Integration Examples

### Development Benchmarks

```bash
# Compare build tools
hyperfine 'make build' 'cargo build' 'npm run build'

# Test framework comparison
hyperfine 'pytest' 'node test' 'go test'

# Package managers
hyperfine 'pip install requests' 'npm install express' 'cargo add serde'
```

### System Performance

```bash
# CPU benchmarks
hyperfine 'python -c "sum(range(1000000))"' \
  'node -e "let sum=0; for(let i=0;i<1000000;i++) sum+=i; console.log(sum)"'

# I/O benchmarks
hyperfine 'dd if=/dev/zero of=test bs=1M count=100' \
  'head -c 100M /dev/zero > test'

# Network benchmarks
hyperfine 'curl -s https://example.com' \
  'wget -q -O- https://example.com'
```

### Database Benchmarks

```bash
# Database queries
hyperfine --prepare 'docker start mysql' \
  'mysql -e "SELECT COUNT(*) FROM users"' \
  --cleanup 'docker stop mysql'

# Redis operations
hyperfine --prepare 'docker start redis' \
  'redis-cli set test value' \
  'redis-cli get test' \
  --cleanup 'docker stop redis'
```

## Advanced Features

### Custom Measurements

```bash
# Measure with custom preparation
hyperfine --prepare 'sync && echo 3 > /proc/sys/vm/drop_caches' \
  'cat large_file.txt'

# Measure with cleanup
hyperfine --cleanup 'rm -f temp_file' \
  'echo "test" > temp_file'
```

### Comparative Analysis

```bash
# Multiple command comparison
hyperfine 'cmd1' 'cmd2' 'cmd3' 'cmd4'

# Sort by different metrics
hyperfine --sort mean 'cmd1' 'cmd2'
hyperfine --sort command 'cmd1' 'cmd2'
```

### Batch Processing

```bash
# Run multiple benchmarks
for cmd in "ls" "find" "fd"; do
    hyperfine --export-json "${cmd}.json" "$cmd"
done

# Generate comparison report
hyperfine --export-markdown comparison.md \
  'python script.py' \
  'node script.js' \
  'go run script.go'
```

## Configuration

### Environment Variables

```bash
# Set default shell
export HYPERFINE_SHELL="bash"

# Set default time unit
export HYPERFINE_TIME_UNIT="millisecond"

# Set default style
export HYPERFINE_STYLE="full"
```

### Custom Scripts

```bash
#!/bin/bash
# Benchmark script with common setup
hyperfine \
  --warmup 3 \
  --min-runs 5 \
  --export-json benchmark-$(date +%Y%m%d).json \
  "$@"
```

## Troubleshooting

### Common Issues

1. **Command not found**: Check PATH and shell
2. **Permission denied**: Use appropriate shell/permissions
3. **Timeout**: Adjust max-runs for slow commands
4. **Outliers**: Use statistical analysis to identify

### Debug Mode

```bash
# Show command output for debugging
hyperfine --show-output "problematic_command"

# Ignore failures for testing
hyperfine --ignore-failure "might_fail_command"
```

## Performance Tips

1. **Warmup**: Use warmup for JIT compilation
2. **Runs**: Adjust runs based on command duration
3. **Environment**: Consistent environment for fair comparison
4. **Caching**: Clear caches for fair measurements
5. **System load**: Consider system load for benchmarks

## Use Cases

### Algorithm Comparison

```bash
# Sort algorithm comparison
hyperfine 'sort numbers.txt' 'python -c "sorted(open(\"numbers.txt\"))"'
```

### Library Performance

```bash
# JSON parsing libraries
hyperfine 'python -c "import json; json.load(open(\"data.json\"))"' \
  'node -e "JSON.parse(require(\"fs\").readFileSync(\"data.json\"))"'
```

### Tool Selection

```bash
# Text editors performance
hyperfine 'vim -c "wq" file.txt' 'nano file.txt' 'emacs --batch file.txt'
```

## Features

- **Statistical analysis**: Comprehensive statistics
- **Outlier detection**: Automatic outlier identification
- **Multiple formats**: JSON, CSV, Markdown, TSV export
- **Parameterized**: Variable substitution in commands
- **Shell comparison**: Compare different shells
- **Preparation/Cleanup**: Setup and teardown commands
- **Progress reporting**: Real-time progress for long runs
- **Time units**: Flexible time unit display
- **Rate limiting**: Handle very fast commands
- **Cross-platform**: Windows, macOS, Linux support
- **Confidence intervals**: Statistical significance testing
- **Relative comparison**: Percentage differences
- **Export capabilities**: Multiple export formats
- **Customizable**: Extensive configuration options
