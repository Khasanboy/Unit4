import { Injectable } from '@angular/core';

@Injectable()
export class Task2Service {

  constructor() { }

  validateInput(input: string) {

    //let trimmed: string = input.replace(/\s/g, ' ').replace(/\n/g, ' ').trim(); // To be sure that tabs or new line chars are also replaced to space

    if (!(/[^0-9,.\s]/g.test(input))) {
      return true;

    }else{

    return false;
    }

  }

  parseInput(input, locale = navigator.language){
    const format = Intl.NumberFormat(locale).format(1.1);
    const pattern = new RegExp(`[^-+0-9${ format.charAt( 1 ) }]`, 'g');
    const clean = input.replace(pattern, '');
    const normalized = clean.replace(format.charAt(1), '.');

    return parseFloat(normalized);
  }

  compare(a, b){
    return a - b;
  }

}
