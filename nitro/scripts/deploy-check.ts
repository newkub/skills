#!/usr/bin/env bun
// Script สำหรับตรวจสอบ deployment readiness

const fs = await import("fs");
const path = await import("path");

const checks = {
  config: false,
  routes: false,
  env: false
};

// Check config
try {
  await fs.promises.access(path.join(process.cwd(), "nitro.config.ts"));
  checks.config = true;
  console.log("✅ Config found");
} catch {
  console.log("❌ Config missing");
}

// Check routes
try {
  const routesDir = path.join(process.cwd(), "routes");
  const files = await fs.promises.readdir(routesDir);
  if (files.length > 0) {
    checks.routes = true;
    console.log(`✅ Routes found (${files.length} files)`);
  } else {
    console.log("⚠️ No routes defined");
  }
} catch {
  console.log("❌ Routes directory missing");
}

// Check env
try {
  await fs.promises.access(path.join(process.cwd(), ".env"));
  checks.env = true;
  console.log("✅ .env file found");
} catch {
  console.log("⚠️ No .env file (optional)");
}

const allPassed = Object.values(checks).every(Boolean);

if (allPassed) {
  console.log("\n✅ Ready for deployment");
} else {
  console.log("\n⚠️ Some checks failed");
}
