import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Register TypeScript files for ES modules
register("ts-node/esm", pathToFileURL("./"));
