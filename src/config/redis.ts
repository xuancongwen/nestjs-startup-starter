import { CacheModule, Logger } from "@nestjs/common";
import * as store from 'cache-manager-redis-store';
import loadYamlForEnv from "../utils/load.yaml.for.env";
import { join } from "path";

const { port, host } = loadYamlForEnv(join(__dirname, 'redis.yaml'), process.env.NODE_ENV);

Logger.log(`Setting up redis ${host}:${port}`, 'redis.ts');

export default CacheModule.register({
  store,
  host,
  port,
});
