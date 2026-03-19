import fs from "fs-extra";
import { glob } from "glob";
import { logSuccess, logError, logInfo, logWarning } from "./utils.js";

export async function checkFollowSkills() {
	logInfo("Checking skills adherence...");
	try {
		const skillFiles = await glob("**/SKILL.md", {
			ignore: ["node_modules/**", "dist/**"],
		});

		if (skillFiles.length > 0) {
			logSuccess(`Found ${skillFiles.length} skill files`);
			skillFiles.forEach((file: string) => {
				logInfo(`  - ${file}`);
			});
			return true;
		} else {
			logWarning("No skill files found");
			return false;
		}
	} catch (_error) {
		logError("Failed to check skills");
		return false;
	}
}

export async function checkFollowWorkflows() {
	logInfo("Checking workflow adherence...");
	try {
		const workflowFiles = await glob("**/*.md", {
			ignore: ["node_modules/**", "dist/**"],
		});

		const workflowCount = workflowFiles.filter(
			(file: string) => file.includes("workflow") || file.includes("workflows"),
		).length;

		logSuccess(`Found ${workflowCount} workflow files`);
		return workflowCount > 0;
	} catch (_error) {
		logError("Failed to check workflows");
		return false;
	}
}

export async function checkLegalCompliance() {
	logInfo("Checking legal compliance...");
	try {
		const hasLicense = await fs.pathExists("LICENSE");
		const hasPackageJson = await fs.pathExists("package.json");

		if (hasLicense) {
			logSuccess("License file found");
		} else {
			logWarning("No license file found");
		}

		if (hasPackageJson) {
			logSuccess("package.json found");
		} else {
			logWarning("No package.json found");
		}

		return hasLicense || hasPackageJson;
	} catch (_error) {
		logError("Failed to check legal compliance");
		return false;
	}
}
