import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtivoLDCService, Ativo, Reuniao } from 'src/app/services/ativo-ldc.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ativo-ldcdetails',
  templateUrl: './ativo-ldcdetails.page.html',
  styleUrls: ['./ativo-ldcdetails.page.scss'],
})
export class AtivoLDCDetailsPage implements OnInit {

  ativo: Ativo = {
    nome: ' ',
    setor: ' ',
    lacre_num:  null,
    status: null,
    resp_operacao: ' ',
    resp_estoque: ' ',
    data: null,
  }
  
  reuniao: Reuniao = {
    dia: ' ',
    setor: ' ',
    anotacao: ' ',
    status: false,
    responsavel: ' ',
    prazo: null,
  }


  constructor(private activatedRoute: ActivatedRoute,
    private ativoLDCService: AtivoLDCService,
    private toastCtrl: ToastController,
    private router: Router){ }


  ngOnInit() {
  }


  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ativoLDCService.getAtivo(id).subscribe(ativo => {
        this.ativo = ativo;
      });
    }

  }
  
  addAtivo() {
    this.ativoLDCService.addAtivo(this.ativo).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Ativo adicionado');
    }, err => {
      this.showToast('Ocorreu um problema ao adicionar esse ativo :(');
    });
  }
 
  deleteAtivo() {
    this.ativoLDCService.deleteAtivo(this.ativo.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Ativo deletado');
    }, err => {
      this.showToast('Ocorreu um problema ao excluir esse ativo :(');
    });
  }
 
  updateAtivo() {
    this.ativoLDCService.updateAtivo(this.ativo).then(() => {
      this.showToast('Ativo atualizado');
    }, err => {
      this.showToast('Ocorreu um problema ao atualizar esse ativo :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
