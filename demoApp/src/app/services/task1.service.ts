import { Injectable } from '@angular/core';

@Injectable()
export class Task1Service {

  message: string = '';
  constructor() { }

  validate(input: string) {

    this.message = '';

    if (input && !(/[^0-9\-\+\/\*\!\a\.]/g.test(input))) {

      let splitString: string[] = input.split(/[\+\/\-\*]/);

      splitString.forEach((s, x)=>s==""?splitString.splice(x, 1):null); //Deleting empty string element of array

      for (let i = 0; i < splitString.length; i++) {

        if (/^0\d+/.test(splitString[i]) || /\..*\./g.test(splitString[i])) { //checking for octal numbers ex 00000 or number with two or more dots
          this.message = 'Input has octal number or number with 2 dots';
          return false;
        }

        if (splitString[i].indexOf('a') != -1 || splitString[i].indexOf('!') != -1) {

          if (splitString[i].lastIndexOf('a') != 0 || splitString[i].lastIndexOf('!') != 1 || splitString[i].length == 2 || splitString[i].indexOf('.') != -1) {
            this.message = 'Input has incorrect reference format';
            return false;
          }

        }

      }

      return true;
    }

    else {
      this.message='Not valid input only 0-9-+/*.!a  characters are allowed'
      return false;
    }

  }


}
