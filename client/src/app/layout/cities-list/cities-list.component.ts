import { Component, OnInit } from '@angular/core';
import { PatatasApiService } from '../services/patatas-api.service';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {

  $dataSource;
  displayedColumns: string[] = ['Id', 'city', 'alert', 'warning', 'normal'];

  constructor(private patatasApiServ: PatatasApiService) { }

  ngAfterViewInit() {
    this.$dataSource = this.patatasApiServ.getCities();
  }

  ngOnInit(): void {
  }

}
