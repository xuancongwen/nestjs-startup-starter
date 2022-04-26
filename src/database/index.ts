import { TypeOrmModule } from "@nestjs/typeorm";
import { Logger } from "@nestjs/common";
import loadYAMLForEnv from "../utils/load.yaml.for.env";
import { join } from "path";

const { type, host, port, username, database } = loadYAMLForEnv(join(__dirname, './database.yaml'), process.env.NODE_ENV);

Logger.log(`Setting up database at ${username}@${host}:${port} for db: ${database}`, 'database');

const db = TypeOrmModule.forRoot({
  type,
  host,
  port,
  username,
  database,
});

export default db;
