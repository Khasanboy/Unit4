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
  sortedNumbers: number[];

  constructor(
    private flashMessage: FlashMessagesService,
    private task2Service: Task2Service
  ) { }

  ngOnInit() {
  }

  sortNumbers(){
    if(this.task2Service.validateInput(this.numbersString)){
      let numArray:number[] = [];
      let splitString: string[] = this.numbersString.split(/\s/);
      
      splitString.forEach(s=>numArray.push(parseFloat(s)));

      numArray.sort(this.task2Service.compare);

      console.log(numArray);

    }
    
  }

}
