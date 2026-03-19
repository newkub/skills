// Infrastructure layer - External dependencies
import { $ } from "execa";
import fs from "fs-extra";
import { glob } from "glob";
import type { CommandExecutor } from '@/domain/interfaces';

export class SystemCommandExecutor implements CommandExecutor {
	async execute(command: string): Promise<boolean> {
		try {
			await $`${command}`;
			return true;
		} catch {
			return false;
		}
	}
}

export class FileSystem {
	static async exists(path: string): Promise<boolean> {
		return await fs.pathExists(path);
	}

	static async readFile(path: string): Promise<string> {
		return await fs.readFile(path, "utf-8");
	}

	static async findFiles(
		pattern: string,
		options?: { ignore?: string[] },
	): Promise<string[]> {
		return await glob(pattern, {
			ignore: options?.ignore || ["node_modules/**", "dist/**"],
		});
	}
}

export class ProcessRunner {
	static async runCommand(command: string): Promise<{
		success: boolean;
		stdout: string;
		stderr: string;
	}> {
		try {
			const result = await $`${command}`;
			return {
				success: true,
				stdout: result.stdout,
				stderr: result.stderr,
			};
		} catch (error: any) {
			return {
				success: false,
				stdout: error.stdout || "",
				stderr: error.stderr || "",
			};
		}
	}
}
