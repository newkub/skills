// Application layer - Use cases and orchestration
import chalk from "chalk";
import type { CheckResult, CheckRunner, Logger } from "@/domain/interfaces";
import { ConsoleLogger } from "@/app/output";
import { OutputFormatter } from "@/app/output";

export class CheckOrchestrator {
	private logger: Logger;

	constructor(logger?: Logger) {
		this.logger = logger || new ConsoleLogger();
	}

	async runSingleCheck(check: CheckRunner): Promise<CheckResult> {
		this.logger.info(`Running: ${check.name || "unknown"}`);

		try {
			const result = await check.run();

			if (result.success) {
				this.logger.success(result.message);
			} else {
				this.logger.error(result.message);
			}

			return result;
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : "Unknown error";
			this.logger.error(`Check failed: ${errorMessage}`);

			return {
				name: check.name || "unknown",
				success: false,
				message: errorMessage,
			};
		}
	}

	async runMultipleChecks(checks: CheckRunner[]): Promise<CheckResult[]> {
		this.logger.info(`Running ${checks.length} checks...`);

		const results: CheckResult[] = [];

		for (let i = 0; i < checks.length; i++) {
			const check = checks[i];
			if (check) {
				const result = await this.runSingleCheck(check);
				results.push(result);

				// Show progress
				this.showProgress(i + 1, checks.length);
			}
		}

		// Show summary
		console.log(OutputFormatter.formatSummary(results));

		return results;
	}

	private showProgress(current: number, total: number): void {
		const percentage = Math.round((current / total) * 100);
		const bar =
			"█".repeat(Math.floor(percentage / 5)) +
			"░".repeat(20 - Math.floor(percentage / 5));

		process.stdout.write(
			`\r${chalk.cyan("Progress")} [${chalk.green(bar)}] ${percentage}%`,
		);

		if (current === total) {
			process.stdout.write("\n");
		}
	}
}

export class CheckRegistry {
	private checks = new Map<string, CheckRunner>();

	register(name: string, check: CheckRunner): void {
		this.checks.set(name, check);
	}

	get(name: string): CheckRunner {
		const check = this.checks.get(name);
		if (!check) {
			throw new Error(`Check '${name}' not found`);
		}
		return check;
	}

	getAll(): CheckRunner[] {
		return Array.from(this.checks.values());
	}

	list(): Array<{ name: string; check: CheckRunner }> {
		return Array.from(this.checks.entries()).map(([name, check]) => ({
			name,
			check,
		}));
	}
}
