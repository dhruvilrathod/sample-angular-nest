import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [FrontendComponent],
  imports: [BrowserModule, FrontendRoutingModule],
  providers: [],
  bootstrap: [FrontendComponent],
})
export class FrontendModule {}
