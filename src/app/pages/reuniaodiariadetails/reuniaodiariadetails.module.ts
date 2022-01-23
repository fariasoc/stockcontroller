import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReuniaodiariadetailsPageRoutingModule } from './reuniaodiariadetails-routing.module';

import { ReuniaodiariadetailsPage } from './reuniaodiariadetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReuniaodiariadetailsPageRoutingModule
  ],
  declarations: [ReuniaodiariadetailsPage]
})
export class ReuniaodiariadetailsPageModule {}
