import { Task1Service } from './../../services/task1.service';
import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import {ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})

export class Task1Component implements OnInit {
  inputString:string;
  result: number;
  labelForRef:string;
  refVal:number;

  //@ViewChild('popup1') popup1: Popup;
  
  
  constructor(private task1Service: Task1Service , private popup:Popup) { 
    
  }

  ngOnInit() {
  }

  calculate(){
    /*

    if(this.inputString && this.task1Service.validate(this.inputString)){

        let trimmed: string = this.inputString.replace(/\s/g, '').replace(/\n/g, '').trim();
        let splitString: string[] = trimmed.split(/[\+\/\-\*]/);
  
        let refString:string[] = [];
  
        for (let i = 0; i < splitString.length; i++) {
  
          if (splitString[i].indexOf('a') != -1) {
  
            this.popup.show();
            splitString[i]=this.refVal.toString();
  
          }
  
        }

        console.log(splitString);
      }
      */

      this.popup.show();


  }

  confirmEvent(){
    console.log(this.refVal);
    this.popup.hide();
    this.refVal=null;
  }

  cancelEvent(){
    this.inputString="";
    this.result=null;
    this.refVal=null;
  }

  







}
