import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Ativo {
  id?: string,
  nome: string,
  setor: string,
  lacre_num: number,
  status: boolean,
  resp_operacao: string,
  resp_estoque: string,
  data: Date,
}

export interface Reuniao {
  id?: string,
  dia: string,
  setor: string,
  anotacao: string,
  status: boolean,
  responsavel: string,
  prazo: Date,
}

@Injectable({
  providedIn: 'root'
})
export class AtivoLDCService {

  private reunioes: Observable<Reuniao[]>;
  private reuniaoCollection: AngularFirestoreCollection<Reuniao>;
  
  private ativos: Observable<Ativo[]>;
  private ativoCollection: AngularFirestoreCollection<Ativo>;

  private data = [
    {
      category: 'Embarque de Óleo',
      expanded: true,
      products: [
        { id: 0, name: 'Tanque de Lecitina', tag: '008' },
        { id: 1, name: 'Tanque de Goma', tag: '005' },
        { id: 2, name: 'Tanque de Tocoferol', tag: '009' },
        { id: 3, name: 'Tanque de degomaodo', tag: '007' }
      ]
    },
    {
      category: 'Embarque de farelo ',
      products: [
        { id: 0, name: 'Cancela 01', tag: '009' },
        { id: 1, name: 'Cancela 02', tag: '010' }
      ]
    },
    {
      category: 'Recebimento',
      products: [
        { id: 6, name: 'Tombador 01', tag: '001' },
        { id: 7, name: 'Barracão de casca', tag: '002' },
        { id: 8, name: 'Barracão de resíduo', tag: '003' }
      ]
    },
    {
      category: 'Portaria',
      products: [
        { id: 6, name: 'Balança 01', tag: '011' },
        { id: 7, name: 'Cancela 01', tag: '012' },
        { id: 8, name: 'Cancela 02', tag: '013' }
      ]
    }

  ];

  constructor(private afs: AngularFirestore) {

    this.ativoCollection = this.afs.collection<Ativo>('ativos');
    this.ativos = this.ativoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.reuniaoCollection = this.afs.collection<Reuniao>('reunioes');
    this.reunioes = this.reuniaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }


  getReunioes(): Observable<Reuniao[]> {
    return this.reunioes;
  }

  getAtivos(): Observable<Ativo[]> {
    return this.ativos;
  }

  getReuniao(id: string): Observable<Reuniao> {
    return this.reuniaoCollection.doc<Reuniao>(id).valueChanges().pipe(
      take(1),
      map(reuniao => {
        reuniao.id = id;
        return reuniao
      })
    );
  }

  getAtivo(id: string): Observable<Ativo> {
    return this.ativoCollection.doc<Ativo>(id).valueChanges().pipe(
      take(1),
      map(ativo => {
        ativo.id = id;
        return ativo
      })
    );
  }

  addAtivo(ativo: Ativo): Promise<DocumentReference> {
    return this.ativoCollection.add(ativo);
  }

  addReuniao(reuniao: Reuniao): Promise<DocumentReference> {
    return this.reuniaoCollection.add(reuniao);
  }   

  updateReuniao(reuniao: Reuniao): Promise<void> {
    return this.reuniaoCollection.doc(reuniao.id).update({ dia: reuniao.dia, 
      setor: reuniao.setor, anotacao: reuniao.anotacao, status: reuniao.status, 
      responsavel: reuniao.responsavel, prazo: reuniao.prazo })
  }

  updateAtivo(ativo: Ativo): Promise<void> {
    return this.ativoCollection.doc(ativo.id).update({ 
      nome: ativo.nome, 
      setor: ativo.setor, 
      lacre_num: ativo.lacre_num, 
      status: ativo.status,
      res_operacao: ativo.resp_operacao,
      res_estoque: ativo.resp_estoque,
      data: ativo.data
    })
  }
  

  updateStatus(ativo: Ativo): Promise<void> {
    return this.ativoCollection.doc(ativo.id).update({ status: ativo.status })
  }

  deleteReuniao(id: string): Promise<void> {
    return this.reuniaoCollection.doc(id).delete()
  }

  deleteAtivo(id: string): Promise<void> {
    return this.ativoCollection.doc(id).delete()
  }

  getdadosFake() {
    return this.data;
  }



}
