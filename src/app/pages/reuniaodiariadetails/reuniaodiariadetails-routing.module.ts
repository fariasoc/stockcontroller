import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReuniaodiariadetailsPage } from './reuniaodiariadetails.page';

const routes: Routes = [
  {
    path: '',
    component: ReuniaodiariadetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReuniaodiariadetailsPageRoutingModule {}
