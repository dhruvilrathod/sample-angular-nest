import { Module } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';
import { BackendRoutingModule } from './backend-routing.module';
import { PublicModule } from './public/public.module';

@Module({
  imports: [BackendRoutingModule, PublicModule],
  controllers: [BackendController],
  providers: [BackendService],
})
export class BacknedModule {}
