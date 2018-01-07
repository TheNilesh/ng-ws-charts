import { Injectable } from '@angular/core';
import { Observer } from "rxjs/Observer";

import { Message } from './models';

@Injectable()
export class ChartDrawService implements Observer<Message> {

  constructor() { }

  next(): Message {
    return new Message();
  }

}
