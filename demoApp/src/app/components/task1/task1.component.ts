import { Task1Service } from './../../services/task1.service';
import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import {ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})

export class Task1Component implements OnInit {
  inputString:string;
  result: number;
  refObjs : refObj[];
  
  constructor(
    private task1Service: Task1Service,
    private popup:Popup,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  calculate(){

    this.refObjs=[];
    let k = 0;

    if(this.inputString && this.task1Service.validate(this.inputString)){

        let trimmed: string = this.inputString.replace(/\s/g, '').replace(/\n/g, '').trim();
        let splitString: string[] = trimmed.split(/[\+\/\-\*]/);
  
        for (let i = 0; i < splitString.length; i++) {
  
          if (splitString[i].indexOf('a') != -1) {

            this.refObjs.push(new refObj(k, i, splitString[i], splitString[i]));
            k++;
          }
  
        }

        if(this.refObjs.length>0){
          this.popup.show();
        }
        else{
          this.result=eval(trimmed);
          if(this.result == Infinity || isNaN(this.result)){
            this.result=null;
            this.flashMessage.show("Zero division is not allowed",  {cssClass: 'alert-danger', timeout:3000})
          }
        }
      }
      else{
        this.flashMessage.show("You didn't anter valid input only 0-9, -, +, /, *, !, a  characters are allowed",  {cssClass: 'alert-danger', timeout:3000});
      }

  }

  confirmEvent(){
    
    let output = this.inputString.replace(/\s/g, '').replace(/\n/g, '').trim();
    this.popup.hide();

    for(let j = 0; j<this.refObjs.length; j++)
     output = output.replace(this.refObjs[j].oldValue, this.refObjs[j].value);

    this.result = eval(output);
    if(this.result == Infinity || isNaN(this.result)){
      this.result=null;
      this.flashMessage.show("Zero division is not allowed",  {cssClass: 'alert-danger', timeout:3000})
    }
  }

  cancelEvent(){
    this.inputString="";
    this.result=null;
  }

 
}

class refObj{
  public id:number;
  public index:number;
  public value:any;
  public oldValue:any;

  constructor(id, index, value, oldValue){
    this.id = id;
    this.index = index;
    this.value = value;
    this.oldValue = oldValue;
  }
}

