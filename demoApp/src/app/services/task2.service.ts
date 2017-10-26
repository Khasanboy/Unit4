import { Injectable } from '@angular/core';

@Injectable()
export class Task2Service {

  constructor() { }

  validateInput(input: string) {

    //let trimmed: string = input.replace(/\s/g, ' ').replace(/\n/g, ' ').trim(); // To be sure that tabs or new line chars are also replaced to space

    if (!(/[^0-9,.\s]/g.test(input))) {

      let splitString: string[] = input.split(/\s/);
      console.log(splitString);
      return true;

    }else{

    return false;
    }

  }

  compare(a, b){
    return a-b;
  }

}
