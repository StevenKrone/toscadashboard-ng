import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Http, Response, HttpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

import { ToscaapiService} from './-services/toscaapi.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';


import { AppComponent } from './app.component';
import { TestcaselistComponent } from './-components/testcaselist/testcaselist.component';
import { TestcaseobjectComponent } from './-components/testcaseobject/testcaseobject.component';
import { LogobjectComponent } from './-components/logobject/logobject.component';
import { ProjectselectComponent } from './-components/projectselect/projectselect.component';




@NgModule({
  declarations: [
    AppComponent,
    TestcaselistComponent,
    TestcaseobjectComponent,
    LogobjectComponent,
    ProjectselectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule,
    HttpModule, HttpClientModule
  ],
  providers: [ToscaapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
