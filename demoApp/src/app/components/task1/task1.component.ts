import { Task1Service } from './../../services/task1.service';
import { Component, OnInit } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})

export class Task1Component implements OnInit {
  inputString: string;
  result: number;
  refObjs: refObj[];

  constructor(
    private task1Service: Task1Service,
    private popup: Popup,
    private flashMessage: FlashMessagesService
  ) {

    this.popup.options = {
      header: "Eneter values for accounts",
      color: "#5cb85c",
      widthProsentage: 40,
      animationDuration: 1,
      showButtons: false, 
      animation: "fadeInDown"
  };
   
    this.popup.show(this.popup.options);
   }

  ngOnInit() {
  }

  calculate() {

    this.refObjs = [];
    let k = 0;
    let trimmed: string = this.inputString.replace(/\s/g, '').replace(/\n/g, '').trim();

    if (this.task1Service.validate(trimmed)) { //Validating the input

      let splitString: string[] = trimmed.split(/[\+\/\-\*]/);

      splitString.forEach((s, x)=>s==""?splitString.splice(x, 1):null);

      for (let i = 0; i < splitString.length; i++) {

        if (splitString[i].indexOf('a') != -1) {

          this.refObjs.push(new refObj(k, null, splitString[i]));
          k++;
        }

      }

      if (this.refObjs.length > 0) {
        this.popup.show();
      }
      else {
        this.result = eval(trimmed);
        if (this.result == Infinity || this.result == -Infinity || isNaN(this.result)) {
          this.result = null;
          this.flashMessage.show("Zero division is not allowed", { cssClass: 'alert-danger', timeout: 2000 })
        }
      }
    }
    else {
      this.flashMessage.show("You didn't anter valid input only 0-9, -, +, /, *, !, a  characters are allowed a! must be followed by number", { cssClass: 'alert-danger', timeout: 2000 });
    }

  }

  confirmEvent() {

    let output = this.inputString.replace(/\s/g, '').replace(/\n/g, '').trim();
    this.popup.hide();

    for (let j = 0; j < this.refObjs.length; j++){
      output = output.replace(this.refObjs[j].oldValue, this.refObjs[j].value);
    }
      

    this.result = eval(output);

    if (this.result == Infinity || this.result == -Infinity || isNaN(this.result)) {
      this.result = null;
      this.flashMessage.show("Zero division is not allowed", { cssClass: 'alert-danger', timeout: 2000 })
    }
  }

  cancelEvent() {
    this.popup.hide();
    this.inputString = "";
    this.result = null;
  }


}

class refObj {
  public id: number;
  public value: any;
  public oldValue: any;

  constructor(id, value, oldValue) {
    this.id = id;
    this.value = value;
    this.oldValue = oldValue;
  }
}

