import {Component, OnInit} from '@angular/core';
import { AppService } from './app.service';
import { RandomDataService } from "./random-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomDataService]
})
export class AppComponent implements OnInit {
  title = 'Dynamic Data Visualization using HighCharts';
  messages = [];

  constructor(
    private randomData: RandomDataService,
  ) {}


  ngOnInit(): void {
    //this.randomData.data.subscribe(data => console.log(data));
  }
}
