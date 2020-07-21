import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'cities-list' },
      { path: 'device-summary', loadChildren: () => import('./device-summary/device-sumary.module').then(m => m.DeviceSummaryLazyModule) },
      { path: 'cities-list', loadChildren: () => import('./cities-list/cities-list.module').then(m => m.CitiesListLazyModule) },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
