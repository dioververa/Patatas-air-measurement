import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { CitiesListRoutingModule } from '../cities-list/cities-list-routing.module';
import { DeviceSummaryComponent } from './device-summary.component';


@NgModule({
  declarations: [DeviceSummaryComponent],
  imports: [
    CommonModule,
    CitiesListRoutingModule,
    MatTableModule
  ]
})
export class DeviceSummaryLazyModule { }
