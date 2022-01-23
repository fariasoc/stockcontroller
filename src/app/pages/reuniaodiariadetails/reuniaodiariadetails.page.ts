import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtivoLDCService, Ativo, Reuniao } from 'src/app/services/ativo-ldc.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reuniaodiariadetails',
  templateUrl: './reuniaodiariadetails.page.html',
  styleUrls: ['./reuniaodiariadetails.page.scss'],
})
export class ReuniaodiariadetailsPage implements OnInit {

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
      this.ativoLDCService.getReuniao(id).subscribe(reuniao => {
        this.reuniao = reuniao;
      });
    }

  }

  addReuniao() {
    this.ativoLDCService.addReuniao(this.reuniao).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Anotação da reunião adicionada');
    }, err => {
      this.showToast('Ocorreu um problema ao adicionar essa anotação :(');
    });
  }

  deleteReuniao() {
    this.ativoLDCService.deleteReuniao(this.reuniao.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Anotação da reunião deletada');
    }, err => {
      this.showToast('Ocorreu um problema ao excluir essa anotação :(');
    });
  }

  updateReuniao() {
    this.ativoLDCService.updateReuniao(this.reuniao).then(() => {
      this.showToast('Reunião atualizado');
    }, err => {
      this.showToast('Ocorreu um problema ao atualizar essa reunião :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  } 

}
