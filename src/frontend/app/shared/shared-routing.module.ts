import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { SharedComponent } from './shared.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent
  },
  {
    path: 'sample1',
    component: Sample1Component
  },
  {
    path: 'sample2',
    component: Sample2Component
  },
  {
    path: 'sample3',
    component: Sample3Component
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
