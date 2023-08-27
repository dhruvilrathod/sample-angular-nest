import { Module } from '@nestjs/common';
import { PublicPointsController } from './public-points/public-points.controller';
import { PublicPointsService } from './public-points/public-points.service';

@Module({
  controllers: [PublicPointsController],
  providers: [PublicPointsService],
  exports: [PublicModule],
})
export class PublicModule {}
