import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Logger } from "@nestjs/common";
import loadYamlForEnv from "../utils/load.yaml.for.env";
import { join } from "path";

Logger.log('Setting up GraphQL', 'graphql');

const graphqlOptions = loadYamlForEnv(join(__dirname, 'graphql.yaml'), process.env.NODE_ENV);

export default GraphQLModule.forRoot<ApolloDriverConfig>({
  ...graphqlOptions,
  driver: ApolloDriver,
  autoSchemaFile: true,
});
