#!/usr/bin/env bun
// Script สำหรับสร้าง Nitro project ใหม่

const projectName = process.argv[2];

if (!projectName) {
  console.error("Usage: bun scripts/create-project.ts <project-name>");
  process.exit(1);
}

console.log(`Creating Nitro project: ${projectName}`);

// Create project structure
const fs = await import("fs");
const path = await import("path");

const projectDir = path.join(process.cwd(), projectName);

// Create directories
await fs.promises.mkdir(path.join(projectDir, "routes"), { recursive: true });
await fs.promises.mkdir(path.join(projectDir, "api"), { recursive: true });
await fs.promises.mkdir(path.join(projectDir, "middleware"), { recursive: true });
await fs.promises.mkdir(path.join(projectDir, "plugins"), { recursive: true });
await fs.promises.mkdir(path.join(projectDir, "public"), { recursive: true });

// Create package.json
const packageJson = {
  name: projectName,
  version: "0.0.1",
  type: "module",
  scripts: {
    dev: "vite",
    build: "vite build",
    preview: "node .output/server/index.mjs"
  },
  dependencies: {
    nitropack: "latest"
  },
  devDependencies: {
    "@types/node": "latest",
    vite: "latest"
  }
};

await fs.promises.writeFile(
  path.join(projectDir, "package.json"),
  JSON.stringify(packageJson, null, 2)
);

// Create nitro.config.ts
const nitroConfig = `import { defineConfig } from "nitro";

export default defineConfig({
  debug: true,
  logLevel: 3
});
`;

await fs.promises.writeFile(
  path.join(projectDir, "nitro.config.ts"),
  nitroConfig
);

// Create example route
const exampleRoute = `import { defineHandler } from "nitro";

export default defineHandler(() => {
  return { message: "Hello from Nitro!" };
});
`;

await fs.promises.writeFile(
  path.join(projectDir, "routes", "index.ts"),
  exampleRoute
);

console.log(`✅ Project created at: ${projectDir}`);
console.log(`\nNext steps:`);
console.log(`  cd ${projectName}`);
console.log(`  bun install`);
console.log(`  bun run dev`);
