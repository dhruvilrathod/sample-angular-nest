import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { ErrorComponent } from './app/shared/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent
  },
  {
    path: 'shared',
    loadChildren: () => import('./app/shared/shared.module').then((module) => module.SharedModule)
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

const routeConfigs: ExtraOptions = { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' }

@NgModule({
  imports: [RouterModule.forRoot(routes, routeConfigs)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
