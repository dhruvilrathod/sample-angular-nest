import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleInterface } from 'src/assets/sample.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'frontend-root',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
})
export class FrontendComponent implements OnInit {
  title = 'sample-angular-nest';

  public currentEnv: string = environment.currentEnv;

  public apiStatus: Observable<any>;

  public statusUrl: string;

  public fakeUrl = 'http://localhost:8082/api';

  public fakeCallStatus: Observable<any>;

  public sampleObj: SampleInterface = {
    id: 1234,
    name: 'abc',
  };

  constructor(private _httpClinet: HttpClient) {}

  ngOnInit(): void {
    this.statusUrl = `${environment.apiEndpoint}public/status`;
    this.apiStatus = this._httpClinet.get(this.statusUrl);
    this.fakeCallStatus = this._httpClinet.get(this.fakeUrl);
  }
}
