
import { Component, OnInit } from '@angular/core';

import { MockDataService } from '@core/services/mock-data.service';

@Component({
  selector: 'the-way-of-angular',
  templateUrl: './the-way-of-angular.component.html',
  styleUrls: ['./the-way-of-angular.component.scss']
})
export class TheWayOfAngularComponent implements OnInit {

  data: Array<any> = [];

  constructor(
    public mockDataService: MockDataService
  ) {
    this.mockDataService.mockData.subscribe(this.handleMockData.bind(this));
  }

  ngOnInit(): void {
    this.init();
  }

  init = () => {
    this.mockDataService.getMockData();
  };

  handleMockData = (data: Array<any>): void => {
    console.log(data);
    this.data = data;
  };

}
