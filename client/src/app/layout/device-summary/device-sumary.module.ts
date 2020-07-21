import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { DeviceSummaryRoutingModule } from './device-summary-routing.module';
import { DeviceSummaryComponent } from './device-summary.component';


@NgModule({
  declarations: [DeviceSummaryComponent],
  imports: [
    CommonModule,
    DeviceSummaryRoutingModule,
    MatTableModule
  ]
})
export class DeviceSummaryLazyModule { }
