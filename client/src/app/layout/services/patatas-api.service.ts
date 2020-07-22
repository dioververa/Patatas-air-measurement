import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { City } from '../../shared/models/city';
import { Device } from '../../shared/models/device';

@Injectable()
export class PatatasApiService {

  private urlBase: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private configMain: AppConfig) { 
      this.urlBase = this.configMain.apiEndpoint;
  }

  getCities() {
    console.log('PatatasApiService getCities')
    return this.http.get<Array <City>>(`${this.urlBase}/cities`); 
  }

  getDevices() {
    return this.http.get < Array <Device>>(`${this.urlBase}/devices`);
  }
 
}