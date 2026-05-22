#!/usr/bin/env deno run --allow-read --allow-write

/**
 * Verify Rust Skill Structure
 */

import { walk } from "https://deno.land/std@0.207.0/fs/walk.ts";
import { exists } from "https://deno.land/std@0.207.0/fs/mod.ts";

class RustSkillVerifier {
  private skillPath: string;
  private results: any;

  constructor(skillPath: string = ".") {
    this.skillPath = skillPath;
    this.results = {
      valid: true,
      errors: [],
      warnings: [],
      passed: []
    };
  }

  async verify() {
    console.log("🔍 Verifying Rust skill structure...");
    
    await this.checkSkillStructure();
    await this.checkRequiredFiles();
    await this.checkMainSkillFile();
    
    this.printResults();
    return this.results;
  }

  private async checkSkillStructure() {
    const requiredDirectories = [
      "knowledge", "rules", "get-started", "guide", 
      "examples", "apis", "scripts", "references"
    ];

    for (const dir of requiredDirectories) {
      const dirPath = `${this.skillPath}/${dir}`;
      if (await exists(dirPath)) {
        this.results.passed.push(`✅ ${dir}/ exists`);
      } else {
        this.results.errors.push(`Missing ${dir}/`);
        this.results.valid = false;
      }
    }
  }

  private async checkRequiredFiles() {
    const requiredFiles = ["SKILL.md"];
    
    for (const file of requiredFiles) {
      const filePath = `${this.skillPath}/${file}`;
      if (await exists(filePath)) {
        this.results.passed.push(`✅ ${file} exists`);
      } else {
        this.results.errors.push(`Missing ${file}`);
        this.results.valid = false;
      }
    }
  }

  private async checkMainSkillFile() {
    const skillFilePath = `${this.skillPath}/SKILL.md`;
    if (!await exists(skillFilePath)) return;

    try {
      const content = await Deno.readTextFile(skillFilePath);
      const requiredSections = [
        "## When to Execute",
        "## Quick Start",
        "## Rules",
        "## Knowledge"
      ];

      for (const section of requiredSections) {
        if (content.includes(section)) {
          this.results.passed.push(`✅ ${section} section found`);
        } else {
          this.results.errors.push(`Missing ${section} section`);
          this.results.valid = false;
        }
      }
    } catch (error) {
      this.results.errors.push(`Failed to read SKILL.md: ${error.message}`);
      this.results.valid = false;
    }
  }

  private printResults() {
    console.log("\n" + "=".repeat(50));
    console.log("📊 VERIFICATION RESULTS");
    console.log("=".repeat(50));

    if (this.results.errors.length === 0) {
      console.log("🎉 All checks passed!");
    } else {
      console.log("\n❌ ERRORS:");
      this.results.errors.forEach(error => console.log(`  • ${error}`));
    }

    if (this.results.warnings.length > 0) {
      console.log("\n⚠️  WARNINGS:");
      this.results.warnings.forEach(warning => console.log(`  • ${warning}`));
    }

    console.log(`\nStatus: ${this.results.valid ? "✅ VALID" : "❌ INVALID"}`);
  }
}

if (import.meta.main) {
  const skillPath = Deno.args[0] || ".";
  const verifier = new RustSkillVerifier(skillPath);
  const result = await verifier.verify();
  Deno.exit(result.valid ? 0 : 1);
}

export { RustSkillVerifier };
