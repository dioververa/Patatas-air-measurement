import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesListRoutingModule } from './cities-list-routing.module';
import { CitiesListComponent } from './cities-list.component';


@NgModule({
  declarations: [CitiesListComponent],
  imports: [
    CommonModule,
    CitiesListRoutingModule
  ]
})
export class CitiesListLazyModule { }
