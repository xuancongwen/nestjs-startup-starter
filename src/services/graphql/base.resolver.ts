import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class BaseResolver {
  @Query(() => String)
  resolve(): string {
    return 'Hello, GraphQL';
  }
}