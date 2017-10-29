import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Task3Service} from '../../services/task3.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  firstX:number;
  firstY:number;
  firstWidth:number;
  firstHeight:number;
  secondX:number;
  secondY:number;
  secondWidth:number;
  secondHeight:number;
  result:number;

  constructor(
    private task3Service:Task3Service,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  calculate(){

    if(this.task3Service.validate(this.firstWidth, this.firstHeight, this.secondWidth, this.secondHeight)){
      
      let rectangle1 = new Rectangle(this.firstX, this.firstY, this.firstWidth, this.firstHeight);
      let rectangle2 = new Rectangle(this.secondX, this.secondY, this.secondWidth, this.secondHeight);
  
      this.result = this.task3Service.calculate(rectangle1, rectangle2);
    }
    else{
      this.flashMessage.show("Width or height of a rectangle can't be minus or 0",  {cssClass: 'alert-danger', timeout:3000})
    }

  }

}

class Rectangle{

  left:number;
  right:number;
  top:number;
  bottom:number;
  width:number;
  height:number;

  constructor(topLeftX, topLeftY, width, height){

    this.left = topLeftX;
    this.right = topLeftX+width;
    this.top = topLeftY;
    this.bottom = topLeftY + height;

    this.width = width;
    this.height = height;
  }
}
