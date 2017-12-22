import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Http, Response, HttpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

import { ToscaapiService} from './-services/toscaapi.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { TestcaselistComponent } from './-components/testcaselist/testcaselist.component';
import { TestcaseobjectComponent } from './-components/testcaseobject/testcaseobject.component';
import { LogobjectComponent } from './-components/logobject/logobject.component';




@NgModule({
  declarations: [
    AppComponent,
    TestcaselistComponent,
    TestcaseobjectComponent,
    LogobjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    HttpModule, HttpClientModule
  ],
  providers: [ToscaapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
