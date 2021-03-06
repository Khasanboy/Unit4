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
import { Task2Service } from './services/task2.service';
import {Task3Service} from './services/task3.service';
import {Task4Service} from './services/task4.service';

const appRoutes: Routes = [
  {path:'', component:Task1Component},
  {path:'task2', component:Task2Component},
  {path:'task3', component:Task3Component},
  {path:'task4', component:Task4Component}
];

@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    PopupModule.forRoot()
  ],
 
  providers: [Task1Service, Task2Service, Task3Service, Task4Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
