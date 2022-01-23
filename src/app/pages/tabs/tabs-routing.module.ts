import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivoLDCListPageModule } from '../ativo-ldclist/ativo-ldclist.module';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../ativo-ldclist/ativo-ldclist.module').then(m => m.AtivoLDCListPageModule)
            /*import('../idea-list/idea-list.module').then(m => m.IdeaListPageModule)*/
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../inventarios/inventarios.module').then(m => m.InventariosPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../relatorios/relatorios.module').then(m => m.RelatoriosPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../ativo-ldclist/ativo-ldclist.module').then(m => m.AtivoLDCListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
