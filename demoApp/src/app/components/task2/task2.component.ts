import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Task2Service} from './../../services/task2.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  numbersString: string;
  sortedNumbers: string;

  constructor(
    private flashMessage: FlashMessagesService,
    private task2Service: Task2Service
  ) { }

  ngOnInit() {
  }

  sortNumbers(){
    if(this.task2Service.validateInput(this.numbersString)){

      let numArray:number[] = [];

      let trimmed = this.numbersString.trim().replace(/\s+/, ' ')
      let splitString: string[] = trimmed.split(' ');

      for(let i = 0; i<splitString.length; i++){
        if(splitString[i]=="")
          splitString.splice(i, 1);
      }
      
      splitString.forEach(s=>numArray.push(this.task2Service.parseInput(s)));

      numArray.sort(this.task2Service.compare);

      let output:string = '';

      for(let i = 0; i<numArray.length; i++){
       
        output+=numArray[i].toLocaleString()+' '
      }

      this.sortedNumbers = output;

    }else{
      this.flashMessage.show("You didn't enter valid input only 0-9,. characters are allowed ",  {cssClass: 'alert-danger', timeout:3000});
    }
    
  }

}
