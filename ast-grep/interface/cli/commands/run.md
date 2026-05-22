# ast-grep run

Pattern-based search and replacement.

## Basic Usage

```bash
# Basic pattern search
ast-grep run -p 'console.log($ARG)'

# Specify language
ast-grep run -p 'pattern' --lang typescript

# Search and rewrite
ast-grep run -p 'console.log($ARG)' -r 'logger.info($ARG)'

# File filtering
ast-grep run -p 'pattern' --glob 'src/**/*.ts'

# Interactive mode
ast-grep run -p 'pattern' --interactive
```

## Options

- `-p, --pattern <PATTERN>`: Search pattern
- `-r, --rewrite <FIX>`: Rewrite template
- `-l, --lang <LANG>`: Target language
- `--debug-query`: Debug pattern matching
- `--selector <KIND>`: Node kind selector
- `--strictness <LEVEL>`: Matching strictness
- `--no-ignore <TYPE>`: Ignore files
- `--stdin`: Read from stdin
- `--globs <GLOBS>`: File patterns
- `--follow`: Follow symlinks
- `-i, --interactive`: Interactive mode
- `-j, --threads <NUM>`: Thread count
- `-U, --update-all`: Update all matches
- `--json[=STYLE]`: JSON output
- `--color <WHEN>`: Color output
- `--heading <WHEN>`: File headings
- `--inspect <GRANULARITY>`: Inspection mode
- `-A, --after <NUM>`: Lines after match
- `-B, --before <NUM>`: Lines before match
- `-C, --context <NUM>`: Context lines
