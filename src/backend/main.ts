import { NestFactory } from '@nestjs/core';
import { BacknedModule } from './backend.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(BacknedModule);
  await app.listen(3000);
}
bootstrap();
