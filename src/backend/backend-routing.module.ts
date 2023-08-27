import { RouterModule, Routes } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { BacknedModule } from './backend.module';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  {
    path: '',
    module: BacknedModule,
    children: [
      {
        path: 'public',
        module: PublicModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.register(routes)],
  exports: [BackendRoutingModule],
})
export class BackendRoutingModule {}
