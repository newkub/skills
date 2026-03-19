import { logInfo, runCommand } from "./utils.js";

export async function checkDependenciesLatest() {
	logInfo("Checking for latest dependency versions...");
	return await runCommand("npm outdated", "Dependency check");
}

export async function checkDiskSpace() {
	logInfo("Checking disk space...");
	return await runCommand("df -h", "Disk space check");
}

export async function checkFileLength() {
	logInfo("Checking file lengths...");
	return await runCommand("tokei --files --exclude .git", "File length check");
}

export async function checkFileStructure() {
	logInfo("Checking file structure...");
	return await runCommand(
		"tokei --files --exclude .git",
		"File structure check",
	);
}
