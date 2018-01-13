import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { Observer } from "rxjs/Observer";
import { RandomDataService } from '../random-data.service';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css'],
  providers: [RandomDataService]
})
export class ChartDemoComponent implements OnInit {
  private chart:Chart;
  constructor(private dataService: RandomDataService) { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text:'Citywise Hit Stats'
      },
      credits: {
        enabled:false
      },
      series: [
        {
          name: 'Pune',
          data: []
        },
        {
          name: 'Mumbai',
          data: []
        }
      ]
    });
    this.dataService.data.subscribe((stats) => {
      this.add(stats[0], 0);
      this.add(stats[1], 1);
    });
  }

  add(value: number, seriesIndex: number) {
      this.chart.addPoint(value, seriesIndex);
  }

}
