import { Injectable } from '@angular/core';

@Injectable()
export class Task1Service {

  constructor() { }

  validate(input:string){
    if(/\(/.test(input)){
      return false;
    }

    return true;
  }

}
