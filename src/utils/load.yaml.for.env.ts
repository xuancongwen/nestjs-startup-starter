import * as yaml from 'js-yaml';
import { Logger } from "@nestjs/common";
import * as fs from "fs";

export default (YAMLFile: string, environment: string): Record<string, any> => {
  const yml = yaml.load(fs.readFileSync(YAMLFile, 'utf8')) as Record<string, any>;
  const envSpecificYml = yml[environment];

  if (!envSpecificYml) {
    throw new Error(`Unable to find environment specific yml ${YAMLFile} for ${environment}`);
  }

  return envSpecificYml;
};