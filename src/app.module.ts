import { Module } from '@nestjs/common';
import controllers from './controllers';
import services from './services';
import db from './database';
import redis from './config/redis';
import graphql from './config/graphql';
import scheduler from './config/scheduler';
import configuration from './config/configuration';

@Module({
  imports: [
    db,
    redis,
    graphql,
    scheduler,
    configuration,
  ],
  controllers,
  providers: services,
})
export class AppModule {}
