import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
