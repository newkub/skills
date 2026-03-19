// Main application entry point - Clean Architecture
import { cac } from "cac";
import chalk from "chalk";
import { CheckOrchestrator, CheckRegistry } from "@/domain/orchestrator";
import { SystemHealthCheck, ProjectStructureCheck } from "@/domain/checks";
import { ConsoleLogger } from "@/app/output";
import { defaultConfig } from "@/config/app.config";

// Import CLI check implementations
import * as systemChecks from "@/cli/system";
import * as projectChecks from "@/cli/project";
import * as developmentChecks from "@/cli/development";

const cli = cac("check");
const logger = new ConsoleLogger();
const orchestrator = new CheckOrchestrator(logger);
const registry = new CheckRegistry();

// Register all checks
function registerChecks() {
	// Register new clean architecture checks
	registry.register("system-health", new SystemHealthCheck());
	registry.register("project-structure", new ProjectStructureCheck());

	// Register legacy checks (adapted)
	registry.register("dependencies-latest", {
		name: "dependencies-latest",
		async run() {
			const success = await systemChecks.checkDependenciesLatest();
			return {
				name: "dependencies-latest",
				success,
				message: success
					? "Dependencies are up to date"
					: "Some dependencies are outdated",
			};
		},
	});

	registry.register("disk-space", {
		name: "disk-space",
		async run() {
			const success = await systemChecks.checkDiskSpace();
			return {
				name: "disk-space",
				success,
				message: success
					? "Disk space check passed"
					: "Disk space check failed",
			};
		},
	});

	registry.register("follow-skills", {
		name: "follow-skills",
		async run() {
			const success = await projectChecks.checkFollowSkills();
			return {
				name: "follow-skills",
				success,
				message: success
					? "Skills adherence check passed"
					: "Skills adherence check failed",
			};
		},
	});

	registry.register("todo", {
		name: "todo",
		async run() {
			const success = await developmentChecks.checkTodo();
			return {
				name: "todo",
				success,
				message: success ? "No TODO comments found" : "TODO comments found",
			};
		},
	});

	// Add more checks as needed...
}

// Initialize
registerChecks();

// CLI Commands
cli.command("all", "Run all checks").action(async () => {
	logger.info("🚀 Running all checks...");
	const checks = registry.getAll();
	await orchestrator.runMultipleChecks(checks);
});

cli.command("list", "List all available checks").action(() => {
	logger.info("📋 Available checks:");

	registry.list().forEach(({ name }) => {
		const config = Object.values(defaultConfig.checks).find(c => c.name === name);
		if (config) {
			const status = config.enabled ? chalk.green("✓") : chalk.red("✗");
			const description = config.description || "No description";
			console.log(`${status} ${chalk.cyan(name.padEnd(25))} - ${description}`);
		}
	});
});

// Dynamic command registration for individual checks
registry.list().forEach(({ name }) => {
	const config = Object.values(defaultConfig.checks).find(
		(c) => c.name === name,
	);
	cli
		.command(name, config?.description || `Run ${name} check`)
		.action(async () => {
			const check = registry.get(name);
			if (check) {
				await orchestrator.runSingleCheck(check);
			} else {
				logger.error(`Check ${name} not found`);
			}
		});
});

cli.help();
cli.version(defaultConfig.cli.version);

cli.parse();
