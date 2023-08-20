import { Controller, Get } from '@nestjs/common';
import { BackendService } from './backend.service';
import { SampleInterface } from 'src/assets/sample.interface';

@Controller()
export class BackendController {
  constructor(private readonly backendService: BackendService) {}

  @Get()
  getHello(): SampleInterface {
    return this.backendService.getHello();
  }
}
