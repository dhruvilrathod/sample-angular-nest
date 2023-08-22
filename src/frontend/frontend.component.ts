import { Component } from '@angular/core';
import { SampleInterface } from 'src/assets/sample.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'frontend-root',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
})
export class FrontendComponent {
  title = 'sample-angular-nest';

  public currentEnv: string = environment.currentEnv;

  public sampleObj: SampleInterface = {
    id: 1234,
    name: 'abc',
  };
}
