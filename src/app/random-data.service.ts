import { Injectable } from '@angular/core';
import { Observer } from "rxjs/Observer";
import { Observable } from "rxjs/Observable";

import { Message } from './models';

@Injectable()
export class RandomDataService {

  data: Observable<any>;

  constructor() { 
    this.data = Observable.create((observer) => {
      setInterval(() => {
        let hits: number[];
        hits = [];
        hits[0] = Math.floor(Math.random()*50);
        hits[1] = Math.floor(Math.random()*50);
        console.log(hits[0]);
        observer.next(hits);
      }, 3000);
      //observer.complete();
    });
  }

}