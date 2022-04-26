import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const ENVIRONMENT = process.env.NODE_ENV;
  Logger.log(`Starting app for environment: ${ENVIRONMENT.toUpperCase()}`, 'bootstrap');
  Logger.log(`Starting server on port ${PORT}`, 'bootstrap');
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();
