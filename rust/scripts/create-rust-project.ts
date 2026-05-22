#!/usr/bin/env deno run --allow-read --allow-write --allow-run

/**
 * Create Rust Project
 * 
 * Creates a new Rust project with the recommended structure
 * and best practices outlined in the Rust skill.
 */

import { ensureDir, ensureFile } from "https://deno.land/std@0.207.0/fs/mod.ts";

interface ProjectConfig {
  name: string;
  type: "binary" | "library";
  description?: string;
  author?: string;
  license?: string;
  repository?: string;
  homepage?: string;
}

class RustProjectCreator {
  private config: ProjectConfig;
  private projectPath: string;

  constructor(config: ProjectConfig) {
    this.config = config;
    this.projectPath = `./${config.name}`;
  }

  async create(): Promise<void> {
    console.log(`🚀 Creating Rust project: ${this.config.name}`);
    
    await this.createDirectoryStructure();
    await this.createCargoToml();
    await this.createSourceFiles();
    await this.createDocumentation();
    await this.createConfiguration();
    await this.createExamples();
    await this.createTests();
    
    console.log("✅ Project created successfully!");
    console.log(`📁 Location: ${this.projectPath}`);
    console.log("\nNext steps:");
    console.log(`  cd ${this.config.name}`);
    console.log("  cargo build");
    console.log("  cargo run");
  }

  private async createDirectoryStructure(): Promise<void> {
    console.log("📁 Creating directory structure...");
    
    const directories = [
      "src",
      "tests",
      "examples",
      "benches",
      ".cargo"
    ];

    for (const dir of directories) {
      await ensureDir(`${this.projectPath}/${dir}`);
      console.log(`  ✅ Created ${dir}/`);
    }
  }

  private async createCargoToml(): Promise<void> {
    console.log("📦 Creating Cargo.toml...");
    
    const cargoToml = this.generateCargoToml();
    await Deno.writeTextFile(`${this.projectPath}/Cargo.toml`, cargoToml);
    console.log("  ✅ Created Cargo.toml");
  }

  private generateCargoToml(): string {
    const { name, type, description, author, license, repository, homepage } = this.config;
    
    let cargoToml = `[package]
name = "${name}"
version = "0.1.0"
edition = "2021"`;

    if (description) {
      cargoToml += `\ndescription = "${description}"`;
    }

    if (author) {
      cargoToml += `\nauthors = ["${author}"]`;
    }

    if (license) {
      cargoToml += `\nlicense = "${license}"`;
    }

    if (repository) {
      cargoToml += `\nrepository = "${repository}"`;
    }

    if (homepage) {
      cargoToml += `\nhomepage = "${homepage}"`;
    }

    // Add common dependencies
    cargoToml += `

[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.0", features = ["full"] }
tracing = "0.1"
thiserror = "1.0"

[dev-dependencies]
criterion = "0.5"
proptest = "1.0"
tokio-test = "0.4"

[features]
default = ["std"]
std = []
async = ["tokio"]

[profile.release]
lto = true
codegen-units = 1
panic = "abort"
strip = true
`;

    return cargoToml;
  }

  private async createSourceFiles(): Promise<void> {
    console.log("🔧 Creating source files...");
    
    if (this.config.type === "binary") {
      await this.createMainRs();
    } else {
      await this.createLibRs();
    }
    
    await this.createErrorModule();
    await this.createUtilsModule();
    console.log("  ✅ Created source files");
  }

  private async createMainRs(): Promise<void> {
    const mainRs = `use ${this.config.name}::{Result, app_error::AppError};
use tracing::{info, error};
use tracing_subscriber;

#[tokio::main]
async fn main() -> Result<()> {
    // Initialize logging
    tracing_subscriber::fmt::init();
    
    info!("Starting {} application", "${this.config.name}");
    
    if let Err(e) = run().await {
        error!("Application error: {}", e);
        return Err(e);
    }
    
    info!("Application finished successfully");
    Ok(())
}

async fn run() -> Result<()> {
    // Your application logic goes here
    println!("Hello, {}!", "${this.config.name}");
    
    Ok(())
}
`;
    
    await Deno.writeTextFile(`${this.projectPath}/src/main.rs`, mainRs);
  }

  private async createLibRs(): Promise<void> {
    const libRs = `//! # ${this.config.name}
//!
//! ${this.config.description || "A Rust library"}
//!
//! ## Features
//!
//! - \`std\`: Enable standard library support (default)
//! - \`async\`: Enable async support
//!
//! ## Example
//!
//! \`\`\`rust
//! use ${this.config.name}::*;
//!
//! # fn main() -> Result<()> {
//! let result = some_function()?;
//! println!("Result: {:?}", result);
//! # Ok(())
//! # }
//! \`\`\`

pub mod app_error;
pub mod utils;

pub use app_error::{AppError, Result};
pub use utils::*;

/// Example function demonstrating the library
pub fn some_function() -> Result<String> {
    Ok("Hello from ${this.config.name}!".to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_some_function() {
        let result = some_function().unwrap();
        assert_eq!(result, "Hello from ${this.config.name}!");
    }
}
`;
    
    await Deno.writeTextFile(`${this.projectPath}/src/lib.rs`, libRs);
  }

  private async createErrorModule(): Promise<void> {
    const errorRs = `//! Error handling module

use thiserror::Error;

/// Application error type
#[derive(Error, Debug)]
pub enum AppError {
    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),
    
    #[error("Serialization error: {0}")]
    Serialization(#[from] serde_json::Error),
    
    #[error("Configuration error: {0}")]
    Config(String),
    
    #[error("Validation error: {0}")]
    Validation(String),
    
    #[error("Not found: {0}")]
    NotFound(String),
}

/// Result type alias for convenience
pub type Result<T> = std::result::Result<T, AppError>;
`;
    
    await Deno.writeTextFile(`${this.projectPath}/src/app_error.rs`, errorRs);
  }

  private async createUtilsModule(): Promise<void> {
    const utilsRs = `//! Utility functions

use crate::Result;

/// Utility function example
pub fn format_message(message: &str) -> String {
    format!("Formatted: {}", message)
}

/// Async utility function example
pub async fn async_operation() -> Result<String> {
    tokio::time::sleep(tokio::time::Duration::from_millis(100)).await;
    Ok("Async operation completed".to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_format_message() {
        let result = format_message("test");
        assert_eq!(result, "Formatted: test");
    }

    #[tokio::test]
    async fn test_async_operation() {
        let result = async_operation().await.unwrap();
        assert_eq!(result, "Async operation completed");
    }
}
`;
    
    await Deno.writeTextFile(`${this.projectPath}/src/utils.rs`, utilsRs);
  }

  private async createDocumentation(): Promise<void> {
    console.log("📚 Creating documentation...");
    
    const readme = this.generateReadme();
    await Deno.writeTextFile(`${this.projectPath}/README.md`, readme);
    console.log("  ✅ Created README.md");
    
    const license = this.generateLicense();
    await Deno.writeTextFile(`${this.projectPath}/LICENSE`, license);
    console.log("  ✅ Created LICENSE");
    
    const gitignore = this.generateGitignore();
    await Deno.writeTextFile(`${this.projectPath}/.gitignore`, gitignore);
    console.log("  ✅ Created .gitignore");
  }

  private generateReadme(): string {
    const { name, description, author, license, repository } = this.config;
    
    let readme = `# ${name}

${description || "A Rust project"}

## Features

- Memory safe implementation
- High performance
- Easy to use API
- Comprehensive error handling
- Full test coverage

## Installation

Add this to your \`Cargo.toml\`:

\`\`\`toml
[dependencies]
${name} = "0.1.0"
\`\`\`

## Usage

\`\`\`rust
use ${name}::*;

fn main() -> Result<()> {
    let result = some_function()?;
    println!("{}", result);
    Ok(())
}
\`\`\`

## Development

\`\`\`bash
# Clone the repository
git clone ${repository || `https://github.com/username/${name}.git`}
cd ${name}

# Build
cargo build

# Run tests
cargo test

# Run with logging
RUST_LOG=debug cargo run
\`\`\`

## License

${license || "MIT"}
`;

    if (author) {
      readme += `\n## Author\n\n${author}\n`;
    }

    return readme;
  }

  private generateLicense(): string {
    const license = this.config.license || "MIT";
    
    if (license === "MIT") {
      return `MIT License

Copyright (c) ${new Date().getFullYear()} ${this.config.author || "Author"}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
    }
    
    return license;
  }

  private generateGitignore(): string {
    return `# Rust
/target/
**/*.rs.bk
Cargo.lock

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Environment
.env
.env.local
.env.*.local

# Coverage
tarpaulin-report.html
cobertura.xml

# Backup files
*.bak
*.backup
`;
  }

  private async createConfiguration(): Promise<void> {
    console.log("⚙️ Creating configuration files...");
    
    const cargoConfig = this.generateCargoConfig();
    await Deno.writeTextFile(`${this.projectPath}/.cargo/config.toml`, cargoConfig);
    console.log("  ✅ Created .cargo/config.toml");
    
    const rustfmt = this.generateRustfmt();
    await Deno.writeTextFile(`${this.projectPath}/rustfmt.toml`, rustfmt);
    console.log("  ✅ Created rustfmt.toml");
    
    const clippy = this.generateClippy();
    await Deno.writeTextFile(`${this.projectPath}/clippy.toml`, clippy);
    console.log("  ✅ Created clippy.toml");
  }

  private generateCargoConfig(): string {
    return `# Build configuration
[build]
rustflags = ["-C", "target-cpu=native"]

# Registry configuration
[registry]
default = "crates-io"

# Net configuration
[net]
retry = 2
git-fetch-with-cli = true

# Target-specific configuration
[target.wasm32-unknown-unknown]
runner = "wasm-bindgen-test-runner"
`;
  }

  private generateRustfmt(): string {
    return `edition = "2021"
hard_tabs = false
tab_spaces = 4
max_width = 100
use_small_heuristics = "Default"

# Imports
imports_granularity = "Crate"
group_imports = "StdExternalCrate"
reorder_imports = true

# Comments
normalize_comments = true
normalize_doc_attributes = true
wrap_comments = true

# Spaces
spaces_around_ranges = false
binop_separator = "Front"
`;
  }

  private generateClippy(): string {
    return `# Cognitive complexity
cognitive-complexity-threshold = 30

# Function size
too-many-arguments-threshold = 7
too-many-lines-threshold = 100

# Documentation
missing-docs-in-crate-items = true

# Performance
vec-box-size-threshold = 4096
trivial-copy-size-limit = 256

# Style
enum-variant-name-threshold = 3
single-char-lifetime-names-threshold = 4
`;
  }

  private async createExamples(): Promise<void> {
    console.log("📝 Creating examples...");
    
    const basicExample = this.generateBasicExample();
    await Deno.writeTextFile(`${this.projectPath}/examples/basic.rs`, basicExample);
    console.log("  ✅ Created examples/basic.rs");
  }

  private generateBasicExample(): string {
    if (this.config.type === "binary") {
      return `//! Basic example for ${this.config.name}

use ${this.config.name}::*;

fn main() -> Result<()> {
    println!("Basic example for ${this.config.name}");
    
    let result = some_function()?;
    println!("Result: {}", result);
    
    let formatted = format_message("example");
    println!("Formatted: {}", formatted);
    
    Ok(())
}
`;
    } else {
      return `//! Basic example for ${this.config.name}

use ${this.config.name}::*;

fn main() -> Result<()> {
    println!("Basic example for ${this.config.name}");
    
    let result = some_function()?;
    println!("Result: {}", result);
    
    let formatted = format_message("example");
    println!("Formatted: {}", formatted);
    
    Ok(())
}
`;
    }
  }

  private async createTests(): Promise<void> {
    console.log("🧪 Creating tests...");
    
    const integrationTest = this.generateIntegrationTest();
    await Deno.writeTextFile(`${this.projectPath}/tests/integration_test.rs`, integrationTest);
    console.log("  ✅ Created tests/integration_test.rs");
  }

  private generateIntegrationTest(): string {
    return `//! Integration tests for ${this.config.name}

use ${this.config.name}::*;

#[test]
fn test_integration() -> Result<()> {
    let result = some_function()?;
    assert_eq!(result, "Hello from ${this.config.name}!");
    
    let formatted = format_message("test");
    assert_eq!(formatted, "Formatted: test");
    
    Ok(())
}

#[tokio::test]
async fn test_async_integration() -> Result<()> {
    let result = async_operation().await?;
    assert_eq!(result, "Async operation completed");
    
    Ok(())
}
`;
  }
}

// CLI interface
if (import.meta.main) {
  const args = Deno.args;
  
  if (args.length === 0) {
    console.error("Usage: deno run --allow-read --allow-write create-rust-project.ts <project-name> [options]");
    console.error("");
    console.error("Options:");
    console.error("  --type <binary|library>    Project type (default: binary)");
    console.error("  --description <text>      Project description");
    console.error("  --author <name>           Author name");
    console.error("  --license <license>       License (default: MIT)");
    console.error("  --repository <url>        Repository URL");
    console.error("  --homepage <url>          Homepage URL");
    Deno.exit(1);
  }

  const name = args[0];
  const config: ProjectConfig = {
    name,
    type: "binary"
  };

  // Parse command line arguments
  for (let i = 1; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];
    
    switch (flag) {
      case "--type":
        config.type = value as "binary" | "library";
        break;
      case "--description":
        config.description = value;
        break;
      case "--author":
        config.author = value;
        break;
      case "--license":
        config.license = value;
        break;
      case "--repository":
        config.repository = value;
        break;
      case "--homepage":
        config.homepage = value;
        break;
    }
  }

  try {
    const creator = new RustProjectCreator(config);
    await creator.create();
  } catch (error) {
    console.error("Error creating project:", error.message);
    Deno.exit(1);
  }
}

export { RustProjectCreator };
