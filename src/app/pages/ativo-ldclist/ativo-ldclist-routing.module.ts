import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtivoLDCListPage } from './ativo-ldclist.page';

const routes: Routes = [
  {
    path: '',
    component: AtivoLDCListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtivoLDCListPageRoutingModule {}
