import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { PatatasApiService } from './services/patatas-api.service';
import { HeaderComponent } from './common-components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    FontAwesomeModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [
    PatatasApiService
  ]
})
export class LayoutModule { }
