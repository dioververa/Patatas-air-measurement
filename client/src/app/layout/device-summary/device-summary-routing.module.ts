import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceSummaryComponent } from './device-summary.component';

const routes: Routes = [
  { path: '', component: DeviceSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceSummaryRoutingModule { }