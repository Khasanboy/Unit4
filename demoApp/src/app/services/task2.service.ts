import { Injectable } from '@angular/core';

@Injectable()
export class Task2Service {
  
  message='';

  constructor() { }

  validateInput(input: string) {
    
    this.message='';

    if (!(/[^0-9,.+-\s]/g.test(input))) {
      if(/\+\+*\+|\-\-*\-/g.test(input)){
        
        this.message='Input has double or more math operator repeated'
        return false
      }
      return true;

    }else{
    
    this.message='Not valid input, only 0-9,. characters are allowed';
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
