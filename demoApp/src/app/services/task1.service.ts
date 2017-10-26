import { Injectable } from '@angular/core';

@Injectable()
export class Task1Service {

  constructor() { }

  validate(input: string) {

    let trimmed: string = input.replace(/\s/g, '').replace(/\n/g, '').trim();

    if (trimmed && !(/[^0-9\-\+\/\*\!\a]/g.test(trimmed))) {

      let splitString: string[] = trimmed.split(/[\+\/\-\*]/);

      for (let i = 0; i < splitString.length; i++) {

        if (splitString[i].indexOf('a') != -1 || splitString[i].indexOf('!') != -1) {

          if (!(splitString[i].lastIndexOf('a') == 0 && splitString[i].lastIndexOf('!') == 1))

            return false;

        }

      }

      return true;

    }

    return false;

  }


}
