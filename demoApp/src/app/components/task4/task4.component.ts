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


  constructor(private popup: Popup,
    private flashMessage: FlashMessagesService) {

    this.popup.options = {
      header: "Add new currency",
      color: "#5cb85c",
      animationDuration: 1,
      showButtons: false,
      animation: "fadeInDown"
    };

  }

  ngOnInit() {

    this.currencies = [new Currency(1, "EUR", true), new Currency(2, "USD", false), new Currency(3, "SEK", false), new Currency(4, "GBP", false)];

    let period1 = new Period(1, '2005.01', [1, 1.16, 1.6, 1.13]);
    let period2 = new Period(2, '2005.02', [1, 1.21, 1.4, 1.18]);

    this.periods = [period1, period2];
    this.currentPeriod = period1;
    this.newCurrency = new Currency(null, null, false);
  }

  setCurrentPeriod(period) {
    this.currentPeriod = period;
    console.log(this.currentPeriod);
  }

  getBaseCurrency() {
    return this.currencies[1]; //this is static if we want dynamic it should loop through currencyies and get isBase == true one
  }

  calculateRate(cur1, cur2) {
    return cur1 / cur2;
  }

  addCurrency() {
    this.popup.show(this.popup.options);
  }


  confirmEvent() {
    this.popup.hide();
  }

  cancelEvent() {
    this.popup.hide();
    //this.newCurrency = null;
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