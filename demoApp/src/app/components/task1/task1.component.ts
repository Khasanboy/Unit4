import { Task1Service } from './../../services/task1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

 inputString:string;
 result: number;
  
  constructor(private task1Service: Task1Service) { }

  ngOnInit() {
  }

  calculate(){
    console.log(this.inputString);
  }



}
