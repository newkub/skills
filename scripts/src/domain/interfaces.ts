// Core domain entities and interfaces
export interface CheckResult {
	name: string;
	success: boolean;
	message: string;
	duration?: number;
	details?: Record<string, unknown> | undefined;
}

export interface CheckConfig {
	name: string;
	description: string;
	enabled: boolean;
	category: CheckCategory;
}

export type CheckCategory = "system" | "project" | "development" | "analysis";

export interface CheckRunner {
	name: string;
	run(): Promise<CheckResult>;
}

export interface Logger {
	success(message: string): void;
	error(message: string): void;
	info(message: string): void;
	warning(message: string): void;
}

export interface CommandExecutor {
	execute(command: string): Promise<boolean>;
}
