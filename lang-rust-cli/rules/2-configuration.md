# Configuration

## When to Use
ตั้งค่า CLI arguments และ configuration

## Rules

### 2.1 Argument Types
```rust
#[derive(Parser)]
struct Cli {
    /// Input file path
    #[clap(short, long)]
    input: PathBuf,
    
    /// Output directory
    #[clap(short, long, default_value = "./output")]
    output: PathBuf,
    
    /// Number of threads
    #[clap(short, long, default_value = "4")]
    threads: usize,
    
    /// Enable debug mode
    #[clap(short, long)]
    debug: bool,
}
```

### 2.2 Subcommands
```rust
#[derive(Parser)]
struct Cli {
    #[clap(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Build the project
    Build {
        #[clap(short, long)]
        release: bool,
    },
    /// Run tests
    Test {
        #[clap(short, long)]
        name: Option<String>,
    },
}
```

### 2.3 Validation
```rust
use clap::Args;

#[derive(Args)]
struct ValidateArgs {
    /// Port number (1-65535)
    #[clap(short, long, value_parser = clap::value_parser!(u16).range(1..))]
    port: u16,
    
    /// Email address
    #[clap(short, long, value_parser = clap::value_parser!(String))]
    email: String,
}

impl ValidateArgs {
    fn validate(&self) -> Result<(), String> {
        if !self.email.contains('@') {
            return Err("Invalid email format".to_string());
        }
        Ok(())
    }
}
```

### 2.4 Environment Variables
```rust
use std::env;

#[derive(Parser)]
struct Cli {
    /// API key (or set API_KEY env var)
    #[clap(short, long, env = "API_KEY")]
    api_key: String,
    
    /// Config file path
    #[clap(short, long, default_value = "config.toml")]
    config: PathBuf,
}
```
