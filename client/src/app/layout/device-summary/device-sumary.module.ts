import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceSummaryRoutingModule } from './device-summary-routing.module';
import { DeviceSummaryComponent } from './device-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [DeviceSummaryComponent],
  imports: [
    CommonModule,
    DeviceSummaryRoutingModule,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class DeviceSummaryLazyModule { }
