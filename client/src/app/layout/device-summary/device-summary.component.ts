import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone, Output, ViewChild, OnDestroy, Renderer2, Inject, ChangeDetectionStrategy} from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';
import { PatatasApiService } from "../services/patatas-api.service";
import { forkJoin } from "rxjs";
import { map, take } from 'rxjs/operators';
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

  AirQuality = {
    0: {
      color: 'rgb(32, 235, 49)',
      title: 'Normal',
      count: 0
    },
    1: {
      color: 'rgb(235, 232, 32)',
      title: 'Alert',
      count: 0
    },
    2: {
      color: 'rgb(235, 62, 32)',
      title: 'Warning',
      count: 0
    }
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
      take(1),
      map(([cities, devices]: [Array<City>, Array<Device>]) => {

        return (devices as Array<Device>)
          .filter(device => cities.some(city => city.Id === device.CityId + ''))
          .map( device => {

            (this.AirQuality[device.AirQuality] || {}).count += 1;
            return {
              Id: `PL-${device.Id}`,
              LastActivity: this.getDifferencieDates(parseISO(device.LastActivity)),
              Temperature: `${device.Temperature}°C`,
              Name: device.Name,
              NameCity: (cities as Array<City>).find( city => city.Id === device.CityId + '').Name,
              StormLevelIcon: device.StormLevel == "electric" ? 
                faPooStorm : device.StormLevel == 'radioactive' ? faRadiation : faCloudSun,
              AirQualityColor: this.AirQuality[device.AirQuality].color
            }
          })
      }, error => {
        console.error(error);
      })
    ).subscribe( devices => {
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

  getKeys(obj) {
    return Object.keys(obj)
  }

  ngOnDestroy() {
    this.cd.detach();
  }
      
}
