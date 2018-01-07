import { Injectable } from '@angular/core';
import { Observer } from "rxjs/Observer";
import { Observable } from "rxjs/Observable";

import { Message } from './models';

@Injectable()
export class RandomDataService implements Observable<Message> {

  _isScalar: boolean;

  constructor() { }

}