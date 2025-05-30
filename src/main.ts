import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove property that are not defined in dto
    forbidNonWhitelisted: true, // give error if found unknown feild
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
