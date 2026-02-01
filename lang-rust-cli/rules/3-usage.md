# Usage Patterns

## When to Use
ใช้ patterns ทั่วไปสำหรับ CLI development

## Rules

### 3.1 Error Handling
```rust
use anyhow::{Context, Result};
use thiserror::Error;

#[derive(Error, Debug)]
enum AppError {
    #[error("File not found: {0}")]
    FileNotFound(PathBuf),
    
    #[error("Parse error: {0}")]
    ParseError(String),
    
    #[error("IO error: {0}")]
    IoError(#[from] std::io::Error),
}

fn process_file(path: &Path) -> Result<String> {
    let content = std::fs::read_to_string(path)
        .with_context(|| format!("Failed to read file: {}", path.display()))?;
    
    // Process content
    Ok(content)
}
```

### 3.2 Async Operations
```rust
use clap::Parser;
use tokio::fs;

#[derive(Parser)]
struct Cli {
    input: PathBuf,
    output: PathBuf,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();
    
    let content = fs::read_to_string(&cli.input).await?;
    // Process content asynchronously
    fs::write(&cli.output, content).await?;
    
    Ok(())
}
```

### 3.3 Progress Indicators
```rust
use indicatif::{ProgressBar, ProgressStyle};

fn process_files(files: Vec<PathBuf>) -> Result<()> {
    let bar = ProgressBar::new(files.len() as u64);
    bar.set_style(
        ProgressStyle::default_bar()
            .template("{spinner:.green} [{elapsed_precise}] [{bar:40.cyan/blue}] {pos}/{len} ({eta})")
            .progress_chars("#>-")
    );
    
    for file in files {
        process_single_file(&file)?;
        bar.inc(1);
    }
    
    bar.finish();
    Ok(())
}
```

### 3.4 Logging
```rust
use env_logger::Env;
use log::{info, warn, error};

fn main() -> Result<()> {
    env_logger::Builder::from_env(Env::default().default_filter_or("info")).init();
    
    info!("Starting application");
    
    match process_data() {
        Ok(_) => info!("Processing completed successfully"),
        Err(e) => {
            error!("Processing failed: {}", e);
            return Err(e);
        }
    }
    
    Ok(())
}
```

### 3.5 Testing CLI
```rust
#[cfg(test)]
mod tests {
    use super::*;
    use assert_cmd::Command;
    
    #[test]
    fn test_cli_with_valid_input() -> Result<()> {
        let mut cmd = Command::cargo_bin("my-cli")?;
        cmd.arg("test.txt")
           .assert()
           .success();
        
        Ok(())
    }
    
    #[test]
    fn test_cli_with_invalid_input() -> Result<()> {
        let mut cmd = Command::cargo_bin("my-cli")?;
        cmd.arg("nonexistent.txt")
           .assert()
           .failure();
        
        Ok(())
    }
}
```
