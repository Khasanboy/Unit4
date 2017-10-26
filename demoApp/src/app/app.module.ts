import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { PopupModule } from 'ng2-opd-popup';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';
import { Task4Component } from './components/task4/task4.component';

import { Task1Service } from './services/task1.service';

const appRoutes: Routes = [
  {path:'', component:Task1Component},
  {path:'task2', component:Task2Component},
  {path:'task3', component:Task3Component},
  {path:'task4', component:Task4Component}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    PopupModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component
  ],
 
  providers: [Task1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
