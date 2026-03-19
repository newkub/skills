// Presentation layer - CLI interface and output formatting
import chalk from "chalk";
import type { Logger, CheckResult } from '@/domain/interfaces';

export class ConsoleLogger implements Logger {
	success(message: string): void {
		console.log(chalk.green("✅"), message);
	}

	error(message: string): void {
		console.log(chalk.red("❌"), message);
	}

	info(message: string): void {
		console.log(chalk.blue("ℹ️"), message);
	}

	warning(message: string): void {
		console.log(chalk.yellow("⚠️"), message);
	}
}

export class OutputFormatter {
	static formatCheckResult(result: CheckResult): string {
		const status = result.success ? chalk.green("✓") : chalk.red("✗");
		const duration = result.duration ? ` (${result.duration}ms)` : "";

		return `${status} ${chalk.cyan(result.name)}${duration} - ${result.message}`;
	}

	static formatSummary(results: CheckResult[]): string {
		const passed = results.filter((r) => r.success).length;
		const failed = results.filter((r) => !r.success).length;
		const total = results.length;

		return `
${chalk.cyan("=== Summary ===")}
${chalk.green(`✅ Passed: ${passed}`)}
${chalk.red(`❌ Failed: ${failed}`)}
${chalk.blue(`📊 Total: ${total}`)}
    `.trim();
	}
}

export class ProgressBar {
	static show(current: number, total: number, message: string): void {
		const percentage = Math.round((current / total) * 100);
		const bar =
			"█".repeat(Math.floor(percentage / 5)) +
			"░".repeat(20 - Math.floor(percentage / 5));

		process.stdout.write(
			`\r${chalk.cyan(message)} [${chalk.green(bar)}] ${percentage}%`,
		);

		if (current === total) {
			process.stdout.write("\n");
		}
	}
}
