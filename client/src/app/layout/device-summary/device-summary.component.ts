import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone, Output, ViewChild, OnDestroy, Renderer2, Inject, ChangeDetectionStrategy} from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'device-summary',
  styleUrls: ['./device-summary.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './device-summary.html'
})
export class DeviceSummaryComponent implements AfterViewInit, OnDestroy {

  constructor() {}

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
      
}
