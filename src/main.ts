import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';;
import { ThrottlerGuard } from '@nestjs/throttler';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security middleware
  app.use(helmet());

  app.enableCors({
      origin: '*', 
      methods: ['GET','POST','PATCH','DELETE'],
  });

  // Global validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(process.env.APP_PORT || 3000);
  console.log(`🚀 ${process.env.APP_NAME} running on port ${process.env.APP_PORT}`);
}
bootstrap();
