import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReuniaodiariaPage } from './reuniaodiaria.page';

const routes: Routes = [
  {
    path: '',
    component: ReuniaodiariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReuniaodiariaPageRoutingModule {}
