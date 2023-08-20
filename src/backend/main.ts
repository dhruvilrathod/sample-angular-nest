import { NestFactory } from '@nestjs/core';
import { BacknedModule } from './backend.module';

async function bootstrap() {
    const app = await NestFactory.create(BacknedModule);
    await app.listen(3000);
}
bootstrap();
