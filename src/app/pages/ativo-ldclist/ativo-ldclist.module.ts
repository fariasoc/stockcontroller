import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtivoLDCListPageRoutingModule } from './ativo-ldclist-routing.module';

import { AtivoLDCListPage } from './ativo-ldclist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtivoLDCListPageRoutingModule
  ],
  declarations: [AtivoLDCListPage]
})
export class AtivoLDCListPageModule {}
