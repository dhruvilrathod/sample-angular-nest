import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FrontendComponent } from './frontend.component';

describe('FrontendComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [FrontendComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FrontendComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-angular-nest'`, () => {
    const fixture = TestBed.createComponent(FrontendComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample-angular-nest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FrontendComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('sample-angular-nest app is running!');
  });
});
