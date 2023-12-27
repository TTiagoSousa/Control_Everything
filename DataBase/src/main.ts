import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
  }

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.use(cors(corsOptions));

  app.use(cookieParser());
  
  await app.listen(3000);
}
bootstrap();
