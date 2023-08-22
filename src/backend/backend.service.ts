import { Injectable } from '@nestjs/common';
import { SampleInterface } from 'src/assets/sample.interface';

@Injectable()
export class BackendService {
  getHello(): SampleInterface {
    console.log('hello hit');

    const sampleObj: SampleInterface = {
      id: 234,
      name: 'asd',
    };
    return sampleObj;
  }
}
