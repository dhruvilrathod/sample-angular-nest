import { Controller, Get } from '@nestjs/common';
import { PublicPointsService } from './public-points.service';

@Controller()
export class PublicPointsController {
  constructor(private _publicPointsService: PublicPointsService) {}

  @Get('status')
  getStatus(): any {
    return { server_online: true };
  }
}
