import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Task4Service } from '../../services/task4.service';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})

export class Task4Component implements OnInit {

  periods: Period[] = [];
  currencies: Currency[] = [];

  newCurrency: Currency;
  currentPeriod: Period;
  tempRates: number[];
  message:string='';


  constructor(private popup: Popup,
    private flashMessage: FlashMessagesService,
    private task4Service: Task4Service
    ) {

    this.popup.options = {
      header: "Add new currency",
      color: "#5cb85c",
      animationDuration: 1,
      showButtons: false,
      animation: "fadeInDown"
    };

  }

  ngOnInit() {

    this.currencies = [new Currency(0, "EUR", true), new Currency(1, "USD", false), new Currency(2, "SEK", false), new Currency(3, "GBP", false)];

    let period1 = new Period(1, '2005.01', [1, 0.86, 1.6, 1.13]);
    let period2 = new Period(2, '2005.02', [1, 0.70, 1.4, 1.18]);
    let period3 = new Period(2, '2005.03', [1, 0.75, 1.5, 1.22]);

    this.periods = [period1, period2, period3];
    this.currentPeriod = period1;
    this.newCurrency = new Currency(null, null, false);
    this.tempRates = [];
  }

  setCurrentPeriod(period) {
    this.currentPeriod = period;
    console.log(this.currentPeriod);
  }

  getBaseCurrency() {
    return this.currencies[0]; //this is static if we want dynamic it should loop through currencyies and get isBase == true one
  }

  calculateRate(cur1, cur2) {
    return cur1 / cur2;
  }

  addCurrency() {
    this.popup.show(this.popup.options);
  }


  confirmEvent() {
    if(this.task4Service.validate(this.newCurrency.code)){
    this.newCurrency = new Currency(this.currencies.length, this.newCurrency.code, false);
    this.currencies.push(this.newCurrency);
    this.popup.hide();
    this.newCurrency = new Currency(null, null, false);
    }
    else{
      this.popup.hide();
      this.newCurrency = new Currency(null, null, false);
      this.flashMessage.show(this.task4Service.message, { cssClass: 'alert-danger', timeout: 3000 });
    }
  }

  cancelEvent() {
    this.popup.hide();
    this.newCurrency = new Currency(null, null, false);
  }

  copyRates(){
     this.tempRates = this.currentPeriod.rates;
  }

  pasteRates(){

    this.currentPeriod.rates = this.tempRates;

  }

  saveChanges(){

  }

}

class Period {
  id: number;
  title: string;
  rates: number[] = [];
  //rates:Map<string, number>=new Map();

  constructor(id, title, rates) {
    this.id = id;
    this.title = title;
    this.rates = rates;
  }

}

class Currency {
  id: number;
  code: string;
  isBase: boolean;

  constructor(id, code, isBase) {
    this.id = id;
    this.code = code;
    this.isBase = isBase;
  }
}