import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent implements OnInit {
  private chart:Chart;
  private gData;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text:'My First Chart'
      },
      credits: {
        enabled:false
      },
      series: [
        {
          name: 'Line1',
          data: [10]
        }
      ]
    });
    
  }

  add() {
      this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
