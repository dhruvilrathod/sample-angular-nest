import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [FrontendComponent],
  imports: [BrowserModule, FrontendRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [FrontendComponent],
})
export class FrontendModule {}
