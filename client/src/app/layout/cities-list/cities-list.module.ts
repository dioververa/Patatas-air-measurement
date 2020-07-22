import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'  
import { CitiesListRoutingModule } from './cities-list-routing.module';
import { CitiesListComponent } from './cities-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CitiesListComponent],
  imports: [
    CommonModule,
    CitiesListRoutingModule,
    MatTableModule,
    TranslateModule
  ]
})
export class CitiesListLazyModule { }
