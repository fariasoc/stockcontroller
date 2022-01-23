import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [AuthGuard]
  },

  { path: '', loadChildren: './pages/ativo-ldclist/ativo-ldclist.module#AtivoLDCListPageModule' },
  { path: 'ativo', loadChildren: './pages/ativo-ldcdetails/ativo-ldcdetails.module#AtivoLDCDetailsPageModule' },
  { path: 'ativo/:id', loadChildren: './pages/ativo-ldcdetails/ativo-ldcdetails.module#AtivoLDCDetailsPageModule' },

  { path: '', loadChildren: './pages/reuniaodiaria/reuniaodiaria.module#ReuniaodiariaPageModule' },
  { path: 'reuniao', loadChildren: './pages/reuniaodiariadetails/reuniaodiariadetails.module#ReuniaodiariadetailsPageModule' },
  { path: 'reuniao/:id', loadChildren: './pages/reuniaodiariadetails/reuniaodiariadetails.module#ReuniaodiariadetailsPageModule' },

  {
    path: 'ativo-ldclist',
    loadChildren: () => import('./pages/ativo-ldclist/ativo-ldclist.module').then( m => m.AtivoLDCListPageModule)
  },
  {
    path: 'ativo-ldcdetails',
    loadChildren: () => import('./pages/ativo-ldcdetails/ativo-ldcdetails.module').then( m => m.AtivoLDCDetailsPageModule)
  },
  {
    path: 'inventarios',
    loadChildren: () => import('./pages/inventarios/inventarios.module').then( m => m.InventariosPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./pages/relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'reuniaodiaria',
    loadChildren: () => import('./pages/reuniaodiaria/reuniaodiaria.module').then( m => m.ReuniaodiariaPageModule)
  },
  {
    path: 'reuniaodiariadetails',
    loadChildren: () => import('./pages/reuniaodiariadetails/reuniaodiariadetails.module').then( m => m.ReuniaodiariadetailsPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },



  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
