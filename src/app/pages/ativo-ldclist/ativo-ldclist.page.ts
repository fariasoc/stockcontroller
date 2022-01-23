import { Component, OnInit } from '@angular/core';
import { AtivoLDCService, Ativo } from 'src/app/services/ativo-ldc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ativo-ldclist',
  templateUrl: './ativo-ldclist.page.html',
  styleUrls: ['./ativo-ldclist.page.scss'],
})
export class AtivoLDCListPage implements OnInit {

  public ativos: Observable<Ativo[]>;
  items = [];

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor( private ativoLDCService : AtivoLDCService) { }

  ngOnInit() {
    this.ativos = this.ativoLDCService.getAtivos();
    this.items = this.ativoLDCService.getdadosFake();
  }

}
