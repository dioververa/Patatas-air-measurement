import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone, Output, ViewChild, OnDestroy, Renderer2, Inject, ChangeDetectionStrategy} from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';
import { PatatasApiService } from "../services/patatas-api.service";
import { forkJoin } from "rxjs";
import { map } from 'rxjs/operators';
import { Device } from "../../shared/models/device";

import { format, parseISO } from 'date-fns'
import { City } from "../../shared/models/city";
import { faPooStorm, faRadiation, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { differenceInHours } from "date-fns/esm";

@Component({
  selector: 'device-summary',
  styleUrls: ['./device-summary.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './device-summary.html'
})
export class DeviceSummaryComponent implements AfterViewInit, OnDestroy {


  devices = [];

  AirQualitColor = {
    0: 'rgb(241, 10, 41)',
    1: 'rgb(48, 241, 10)',
    2: 'rgb(14, 10, 241)'
  }

  constructor(
    private cd: ChangeDetectorRef,
    private patatasApiServ: PatatasApiService) {}

  ngAfterViewInit() {

    //Fork join patatasApiServ
    const arrayForkJoin = [
      this.patatasApiServ.getCities(),
      this.patatasApiServ.getDevices()
    ]

    forkJoin(arrayForkJoin).pipe(
      map(([cities, devices]) => {
        console.log('DeviceSummaryComponent cities: ', cities);
        console.log('DeviceSummaryComponent devices: ', devices);
        return (devices as Array<Device>)
          .filter(device => cities.some(city => city.Id === device.CityId + ''))
          .map( device => {
            return {
              Id: `PL-${device.Id}`,
              //LastActivity: format(parseISO(device.LastActivity), "MMM'.' d',' yyyy"),
              LastActivity: this.getDifferencieDates(parseISO(device.LastActivity)),
              Temperature: `${device.Temperature}°C`,
              Name: device.Name,
              NameCity: (cities as Array<City>).find( city => city.Id === device.CityId + '').Name,
              StormLevelIcon: device.StormLevel == "electric" ? 
                faPooStorm : device.StormLevel == 'radioactive' ? faRadiation : faCloudSun,
              AirQualityColor: this.AirQualitColor[device.AirQuality]
            }
          })
      }, error => {
        console.error(error);
      })
    ).subscribe( devices => {
      console.log('DeviceSummaryComponent devices: ', devices);
      this.devices = devices;
      this.cd.markForCheck();
    })

  }

  getDifferencieDates(LastActivityDate) {
    const today = new Date();
    let numberOfHours = differenceInHours(
      today,
      LastActivityDate
    )

    let days = Math.floor(numberOfHours / 24);
    let remainder = numberOfHours % 24;
    let hours = Math.floor(remainder);
    return `${days}d ${hours}h`
  }

  ngOnDestroy() {
    this.cd.detach();
  }
      
}
