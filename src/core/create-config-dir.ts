import { CONFIG_DIR_NAME } from "../constants/constants";
import fs from "fs";
import { FunctionResponse, ResponseType } from "../models/common.model";

/**
 *  Creates a config directory to store the configuration files
 */
async function createConfigDir(
	path: string,
	name: string = CONFIG_DIR_NAME,
): FunctionResponse<void> {
	// Check if the config directory already exists
	const dirPath = `${path}/${name}`;

	fs.promises.access(dirPath).then(() => {
		fs.promises.mkdir(dirPath);
	});

	fs.promises.access(dirPath, (readDirError) => {
		if (readDirError) {
			// Directory doesn't exist, creating a new one
			fs.mkdir(dirPath, (createDirError) => {
				if (createDirError) {
					return [ResponseType.ERROR, createDirError];
				}
				return [ResponseType.SUCCESS];
			});
		}
		return [ResponseType.SUCCESS];
	});
}
