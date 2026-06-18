#!/usr/bin/env bun
// Script สำหรับตรวจสอบ Nitro configuration

const fs = await import("fs");
const path = await import("path");

const configPath = path.join(process.cwd(), "nitro.config.ts");

try {
  const config = await fs.promises.readFile(configPath, "utf-8");
  console.log("✅ Nitro config found");
  console.log("\nConfig content:");
  console.log(config);
} catch (error) {
  console.error("❌ Nitro config not found");
  console.log("Creating default config...");
  
  const defaultConfig = `import { defineConfig } from "nitro";

export default defineConfig({
  debug: true,
  logLevel: 3
});
`;
  
  await fs.promises.writeFile(configPath, defaultConfig);
  console.log("✅ Default config created");
}
