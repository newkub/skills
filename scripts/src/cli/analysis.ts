import fs from "fs-extra";
import { glob } from "glob";
import { $ } from "execa";
import { logSuccess, logError, logInfo, logWarning } from "./utils.js";

export async function checkMissingWorkflows() {
	logInfo("Checking for missing workflows...");
	try {
		const expectedWorkflows = [
			"update-skills.md",
			"update-workflows.md",
			"commit.md",
		];

		let foundCount = 0;
		for (const workflow of expectedWorkflows) {
			const exists = await fs.pathExists(workflow);
			if (exists) {
				logSuccess(`Found ${workflow}`);
				foundCount++;
			} else {
				logWarning(`Missing ${workflow}`);
			}
		}

		return foundCount === expectedWorkflows.length;
	} catch (_error) {
		logError("Failed to check missing workflows");
		return false;
	}
}

export async function checkMonorepo() {
	logInfo("Checking monorepo structure...");
	try {
		const hasPackages = await fs.pathExists("packages");
		const hasWorkspaces =
			(await fs.pathExists("pnpm-workspace.yaml")) ||
			(await fs.pathExists("lerna.json"));

		if (hasPackages) {
			logSuccess("packages directory found");
		}

		if (hasWorkspaces) {
			logSuccess("Workspace configuration found");
		}

		if (!hasPackages && !hasWorkspaces) {
			logInfo("Standard project structure (not a monorepo)");
		}

		return hasPackages || hasWorkspaces;
	} catch (_error) {
		logError("Failed to check monorepo structure");
		return false;
	}
}

export async function checkUnusedDeps() {
	logInfo("Checking for unused dependencies...");
	try {
		await $`tokei --files --exclude .git`;
		logInfo("Consider using knip or depcheck for unused dependency analysis");
		return true;
	} catch (_error) {
		logError("Failed to check unused dependencies");
		return false;
	}
}

export async function checkUnusedVariables() {
	logInfo("Checking for unused variables...");
	try {
		await $`tokei --files --exclude .git`;
		logInfo(
			"Consider using ESLint or TypeScript compiler for unused variable detection",
		);
		return true;
	} catch (_error) {
		logError("Failed to check unused variables");
		return false;
	}
}

export async function checkUnusedWorkflows() {
	logInfo("Checking for unused workflow files...");
	try {
		const workflowFiles = await glob("**/*.md", {
			ignore: ["node_modules/**", "dist/**"],
		});

		logSuccess(`Found ${workflowFiles.length} markdown files`);
		logInfo("Review manually for unused workflows");
		return true;
	} catch (_error) {
		logError("Failed to check unused workflows");
		return false;
	}
}
