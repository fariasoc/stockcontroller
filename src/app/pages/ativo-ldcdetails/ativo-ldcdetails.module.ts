import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtivoLDCDetailsPageRoutingModule } from './ativo-ldcdetails-routing.module';

import { AtivoLDCDetailsPage } from './ativo-ldcdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtivoLDCDetailsPageRoutingModule
  ],
  declarations: [AtivoLDCDetailsPage]
})
export class AtivoLDCDetailsPageModule {}
