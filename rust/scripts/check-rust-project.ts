#!/usr/bin/env deno run --allow-read --allow-run --allow-write

/**
 * Check Rust Project Structure
 * 
 * Validates that a Rust project follows the established structure
 * and best practices outlined in the Rust skill.
 */

import { walk } from "https://deno.land/std@0.207.0/fs/walk.ts";
import { exists } from "https://deno.land/std@0.207.0/fs/mod.ts";

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

interface ProjectStructure {
  required: string[];
  optional: string[];
  patterns: string[];
}

class RustProjectChecker {
  private projectPath: string;
  private results: ValidationResult;

  constructor(projectPath: string = ".") {
    this.projectPath = projectPath;
    this.results = {
      valid: true,
      errors: [],
      warnings: []
    };
  }

  async checkProject(): Promise<ValidationResult> {
    console.log("🔍 Checking Rust project structure...");
    
    await this.checkRequiredFiles();
    await this.checkProjectStructure();
    await this.checkCargoToml();
    await this.checkSourceCode();
    await this.checkTests();
    await this.checkDocumentation();
    
    this.printResults();
    return this.results;
  }

  private async checkRequiredFiles(): Promise<void> {
    console.log("📁 Checking required files...");
    
    const requiredFiles = [
      "Cargo.toml",
      "src/main.rs",
      "src/lib.rs"
    ];

    for (const file of requiredFiles) {
      const filePath = `${this.projectPath}/${file}`;
      if (await exists(filePath)) {
        console.log(`✅ ${file} exists`);
      } else {
        this.results.errors.push(`Missing required file: ${file}`);
        console.log(`❌ ${file} missing`);
      }
    }
  }

  private async checkProjectStructure(): Promise<void> {
    console.log("📂 Checking project structure...");
    
    const expectedDirectories = [
      "src",
      "tests",
      "examples",
      "benches"
    ];

    for (const dir of expectedDirectories) {
      const dirPath = `${this.projectPath}/${dir}`;
      if (await exists(dirPath)) {
        console.log(`✅ ${dir}/ directory exists`);
      } else {
        this.results.warnings.push(`Missing recommended directory: ${dir}/`);
        console.log(`⚠️  ${dir}/ directory missing (optional)`);
      }
    }
  }

  private async checkCargoToml(): Promise<void> {
    console.log("📦 Checking Cargo.toml...");
    
    const cargoPath = `${this.projectPath}/Cargo.toml`;
    if (!await exists(cargoPath)) {
      return;
    }

    try {
      const content = await Deno.readTextFile(cargoPath);
      
      // Check for required sections
      const requiredSections = ["[package]"];
      for (const section of requiredSections) {
        if (content.includes(section)) {
          console.log(`✅ ${section} section found`);
        } else {
          this.results.errors.push(`Missing ${section} section in Cargo.toml`);
        }
      }

      // Check for recommended fields
      const recommendedFields = [
        "name",
        "version",
        "edition",
        "description",
        "license"
      ];

      for (const field of recommendedFields) {
        if (content.includes(`${field} =`)) {
          console.log(`✅ ${field} field found`);
        } else {
          this.results.warnings.push(`Missing ${field} field in Cargo.toml`);
        }
      }

      // Check edition
      if (content.includes('edition = "2021"')) {
        console.log("✅ Using Rust 2021 edition");
      } else if (content.includes('edition = "2024"')) {
        console.log("✅ Using Rust 2024 edition");
      } else {
        this.results.warnings.push("Consider using Rust 2021 or 2024 edition");
      }

    } catch (error) {
      this.results.errors.push(`Failed to read Cargo.toml: ${error.message}`);
    }
  }

  private async checkSourceCode(): Promise<void> {
    console.log("🔧 Checking source code...");
    
    const srcPath = `${this.projectPath}/src`;
    if (!await exists(srcPath)) {
      return;
    }

    let rustFileCount = 0;
    let hasModFile = false;

    for await (const entry of walk(srcPath, { exts: ["rs"] })) {
      rustFileCount++;
      
      if (entry.path.endsWith("mod.rs")) {
        hasModFile = true;
      }

      // Check for common issues
      try {
        const content = await Deno.readTextFile(entry.path);
        
        // Check for TODO comments
        if (content.includes("TODO") || content.includes("FIXME")) {
          this.results.warnings.push(`Found TODO/FIXME in ${entry.path}`);
        }

        // Check for unwrap() usage
        if (content.includes(".unwrap()")) {
          this.results.warnings.push(`Found .unwrap() in ${entry.path} - consider proper error handling`);
        }

        // Check for panic! usage
        if (content.includes("panic!")) {
          this.results.warnings.push(`Found panic! in ${entry.path} - consider proper error handling`);
        }

      } catch (error) {
        // Skip files that can't be read
      }
    }

    console.log(`✅ Found ${rustFileCount} Rust source files`);
    
    if (rustFileCount > 5 && !hasModFile) {
      this.results.warnings.push("Consider organizing code into modules with mod.rs files");
    }
  }

  private async checkTests(): Promise<void> {
    console.log("🧪 Checking tests...");
    
    const testPaths = [
      `${this.projectPath}/tests`,
      `${this.projectPath}/src`
    ];

    let testCount = 0;

    for (const testPath of testPaths) {
      if (!await exists(testPath)) {
        continue;
      }

      for await (const entry of walk(testPath, { exts: ["rs"] })) {
        try {
          const content = await Deno.readTextFile(entry.path);
          
          // Count test functions
          const testMatches = content.match(/#\[test\]/g);
          if (testMatches) {
            testCount += testMatches.length;
          }

          // Count doctests
          const docTestMatches = content.match(/```rust/g);
          if (docTestMatches) {
            testCount += docTestMatches.length;
          }

        } catch (error) {
          // Skip files that can't be read
        }
      }
    }

    if (testCount > 0) {
      console.log(`✅ Found ${testCount} tests`);
    } else {
      this.results.warnings.push("No tests found - consider adding tests");
    }
  }

  private async checkDocumentation(): Promise<void> {
    console.log("📚 Checking documentation...");
    
    const docFiles = [
      "README.md",
      "LICENSE",
      "CHANGELOG.md"
    ];

    for (const file of docFiles) {
      const filePath = `${this.projectPath}/${file}`;
      if (await exists(filePath)) {
        console.log(`✅ ${file} exists`);
      } else {
        if (file === "README.md") {
          this.results.warnings.push("Missing README.md file");
        } else if (file === "LICENSE") {
          this.results.warnings.push("Missing LICENSE file");
        }
      }
    }

    // Check for crate documentation
    const srcPath = `${this.projectPath}/src`;
    if (await exists(srcPath)) {
      let hasDocComments = false;
      
      for await (const entry of walk(srcPath, { exts: ["rs"] })) {
        try {
          const content = await Deno.readTextFile(entry.path);
          
          if (content.includes("///") || content.includes("//!")) {
            hasDocComments = true;
            break;
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

      if (hasDocComments) {
        console.log("✅ Found documentation comments");
      } else {
        this.results.warnings.push("Consider adding documentation comments");
      }
    }
  }

  private printResults(): void {
    console.log("\n" + "=".repeat(50));
    console.log("📊 VALIDATION RESULTS");
    console.log("=".repeat(50));

    if (this.results.errors.length === 0 && this.results.warnings.length === 0) {
      console.log("🎉 Perfect! No issues found.");
    } else {
      if (this.results.errors.length > 0) {
        console.log("\n❌ ERRORS:");
        this.results.errors.forEach(error => {
          console.log(`  • ${error}`);
        });
        this.results.valid = false;
      }

      if (this.results.warnings.length > 0) {
        console.log("\n⚠️  WARNINGS:");
        this.results.warnings.forEach(warning => {
          console.log(`  • ${warning}`);
        });
      }
    }

    console.log("\n" + "=".repeat(50));
    console.log(`Overall Status: ${this.results.valid ? "✅ VALID" : "❌ INVALID"}`);
    console.log("=".repeat(50));
  }
}

// CLI interface
if (import.meta.main) {
  const projectPath = Deno.args[0] || ".";
  const checker = new RustProjectChecker(projectPath);
  const result = await checker.checkProject();
  
  // Exit with appropriate code
  Deno.exit(result.valid ? 0 : 1);
}

export { RustProjectChecker };
