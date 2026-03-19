import { $ } from "execa";
import fs from "fs-extra";
import { glob } from "glob";
import { logSuccess, logError, logInfo, logWarning } from "./utils.js";

export async function checkMyCliProgram() {
	logInfo("Checking installed CLI tools...");

	const checks = [
		{ name: "Scoop", command: "scoop list" },
		{ name: "Bun Global", command: "bun pm ls -g" },
		{ name: "Cargo", command: "cargo install --list" },
		{ name: "Winget", command: "winget list" },
		{ name: "Mise", command: "mise list" },
	];

	let successCount = 0;
	for (const check of checks) {
		try {
			logInfo(`Checking ${check.name}...`);
			await $`${check.command}`;
			logSuccess(`${check.name} check completed`);
			successCount++;
		} catch (_error) {
			logWarning(`${check.name} not available or failed`);
		}
	}

	return successCount > 0;
}

export async function checkTestCoverage() {
	logInfo("Checking test coverage...");
	try {
		await $`bun test --coverage`;
		logSuccess("Test coverage check completed");
		return true;
	} catch (_error) {
		logWarning("Test coverage check failed or no tests found");
		return false;
	}
}

export async function checkTodo() {
	logInfo("Checking for TODO comments...");
	try {
		const files = await glob("**/*.{ts,js,tsx,jsx,vue,md}", {
			ignore: ["node_modules/**", "dist/**", ".git/**"],
		});

		let todoCount = 0;
		for (const file of files) {
			const content = await fs.readFile(file, "utf-8");
			const todos = content.match(/TODO|FIXME|HACK/gi);
			if (todos) {
				todoCount += todos.length;
				logWarning(`${file}: ${todos.length} TODO(s)`);
			}
		}

		if (todoCount === 0) {
			logSuccess("No TODO comments found");
			return true;
		} else {
			logWarning(`Found ${todoCount} TODO comments`);
			return false;
		}
	} catch (_error) {
		logError("Failed to check TODO comments");
		return false;
	}
}
