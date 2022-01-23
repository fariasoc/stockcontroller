import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtivoLDCDetailsPage } from './ativo-ldcdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AtivoLDCDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtivoLDCDetailsPageRoutingModule {}
