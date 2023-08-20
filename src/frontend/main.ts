import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FrontendModule } from './frontend.module';

platformBrowserDynamic().bootstrapModule(FrontendModule)
  .catch(err => console.error(err));