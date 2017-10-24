import { Task1Service } from './../../services/task1.service';
import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})

export class Task1Component implements OnInit {
  inputString:string;
  result: number;
  
  constructor(private task1Service: Task1Service) { 
  }

  ngOnInit() {
  }

  calculate(){
    if(this.task1Service.validate(this.inputString))
    console.log(this.inputString);
  }





}
