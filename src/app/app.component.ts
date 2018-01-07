import {Component, OnInit} from '@angular/core';
import { AppService } from './app.service';
import { RandomDataService } from "./random-data.service";
import { ChartDrawService } from "./chart-draw.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Spring WebSocket Demo with Angular 4';
  messages = [];

  constructor(
    private randomData: RandomDataService,
    private chartDrawService: ChartDrawService
  ) {}


  ngOnInit(): void {
    /*
    this._appService.onMessage((message: MessageEvent) => {
      var data = message.data;
      this.messages.push(data);
      if(this.messages.length > 100) {
        this.messages.slice(0, 1);
      }
    });

    this._appService.connectWebsocket();
    */
    //Here ChartDrawService is Observer and RandomDataService is Observable, Connect both
    
  }




}
