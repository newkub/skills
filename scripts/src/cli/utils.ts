import { $ } from "execa";
import chalk from "chalk";

export function logSuccess(message: string) {
	console.log(chalk.green("✅"), message);
}

export function logError(message: string) {
	console.log(chalk.red("❌"), message);
}

export function logInfo(message: string) {
	console.log(chalk.blue("ℹ️"), message);
}

export function logWarning(message: string) {
	console.log(chalk.yellow("⚠️"), message);
}

export async function runCommand(
	command: string,
	description: string,
): Promise<boolean> {
	try {
		logInfo(`Running: ${description}`);
		await $`${command}`;
		logSuccess(`${description} completed`);
		return true;
	} catch (_error) {
		logError(`${description} failed`);
		return false;
	}
}
