import { Injectable } from '@angular/core';

@Injectable()
export class Task4Service {
  message: string = '';

  constructor() { }

  validate(input: string) {
    
        this.message = '';
    
        if (/[^A-Z]/g.test(input)) {
          this.message='Not valid input only A-Z capital latters allowed'
          return false;
        }
    
        else {
          return true;
        }
    
      }

}
