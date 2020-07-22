import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PatatasApiService } from '../services/patatas-api.service';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {

  $dataSource;
  displayedColumns: string[] = ['city', 'alert', 'warning', 'normal'];

  constructor(private patatasApiServ: PatatasApiService) {

    //render in table using async pipe subscribes to an Observable
    //returned by the function getCities
    this.$dataSource = this.patatasApiServ.getCities();
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
