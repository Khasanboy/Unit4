import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Task4Service} from '../../services/task4.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})

export class Task4Component implements OnInit {

  periods:Period[]=[];
  currencies:Currency[] = [];
  currentPeriod:Period;

  constructor() {
   
   }

  ngOnInit() {
    
    this.currencies = [new Currency(1, "EUR", 1, true), new Currency(2, "USD", 1.16, false),  new Currency(3, "SEK", 1.6, false),  new Currency(4, "GBP", 1.13, false)];
    let period1 = new Period(1, '2005.01', this.currencies);
    let period2 = new Period(2, '2005.02', this.currencies);

    this.periods = [period1, period2];
    this.currentPeriod = period1;
  }

  setCurrentPeriod(period){
    this.currentPeriod = period;
    console.log(this.currentPeriod);
  }

  getBaseCurrency(){
    return this.currencies[1];
  }

  calculateRate(cur1, cur2){
    return cur1.rate/cur2.rate;
  }

}

class Period{
  id:number;
  title:string;
  currencies:Currency[];
  rates:number[];

  constructor(id, title, currencies){
    this.id = id;
    this.title = title;
    this.currencies = currencies;
  }

}

class Currency{
  id:number;
  code:string;
  rate:number;
  isBase:boolean;

  constructor(id, code, rate, isBase){
    this.id = id;
    this.code = code;
    this.rate = rate;
    this.isBase = isBase;
  }
}