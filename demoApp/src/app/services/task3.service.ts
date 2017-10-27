import { Injectable } from '@angular/core';

@Injectable()
export class Task3Service {

  constructor() { }

  calculate(firstRec, secondRec){

    let left = Math.max(firstRec.left, secondRec.left);
    let right = Math.min(firstRec.right, secondRec.right);
    let top = Math.max(firstRec.top, secondRec.top);
    let bottom = Math.min(firstRec.bottom, secondRec.bottom);

    let intersacArea = Math.max(0, right - left) * Math.max(0, bottom - top);

    return  intersacArea;

  }

}
