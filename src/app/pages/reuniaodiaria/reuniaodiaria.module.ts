import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReuniaodiariaPageRoutingModule } from './reuniaodiaria-routing.module';

import { ReuniaodiariaPage } from './reuniaodiaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReuniaodiariaPageRoutingModule
  ],
  declarations: [ReuniaodiariaPage]
})
export class ReuniaodiariaPageModule {}
