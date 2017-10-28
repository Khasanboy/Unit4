import { Injectable } from '@angular/core';

@Injectable()
export class Task1Service {

  constructor() { }

  validate(input: string) {

    if (input && !(/[^0-9\-\+\/\*\!\a\.]/g.test(input))) {

      let splitString: string[] = input.split(/[\+\/\-\*]/);

      for (let i = 0; i < splitString.length; i++) {

        if (/^0\d+/.test(splitString[i].toString())) { //checking for octal numbers ex 00000
          return false;
        }

        if (splitString[i].indexOf('a') != -1 || splitString[i].indexOf('!') != -1) {

          if (splitString[i].lastIndexOf('a') != 0 || splitString[i].lastIndexOf('!') != 1 || splitString[i].length == 2) {
            return false;
          }

        }

      }

      return true;
    }

    else {
      return false;
    }

  }


}
