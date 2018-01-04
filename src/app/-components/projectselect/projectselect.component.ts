import { Component, OnInit } from '@angular/core';

import { ToscaapiService} from '../../-services/toscaapi.service';


import {Object_Tosca_generic} from '../../-class/object_generic';
import {TestCaseBundle} from '../../-class/testcasebundle';
import {execlist_wtestlog} from '../../-class/execlist_wtestlog';
import {RevUnqPair} from '../../-class/RevUnqPair';



@Component({
  selector: 'app-projectselect',
  templateUrl: './projectselect.component.html',
  styleUrls: ['./projectselect.component.css']
})
export class ProjectselectComponent implements OnInit {

  constructor(
    private toscaService: ToscaapiService
  ) { }




  active_projectid: string = '';
  project_listofExecLists: RevUnqPair[];

  selectedExecutionID: RevUnqPair ;


  ngOnInit() {
    //this.toscaService.getChildItems(this.optifacts_execfolder1_id).subscribe(data => this.project_listofExecLists = data);
  }

  load1(){
    this.toscaService.getChildItems(this.active_projectid).subscribe(data => this.project_listofExecLists = data);
  }

  


  optifacts_execfolder1_id: string = '39e320f4-73a4-c009-cc18-ed34ea1d13b3';
  optuitive_TZQA_execfolder2: string = '39e3cfb4-db8c-e35c-75a6-ad1666f1625a';


  //If A SET OF PROJECTS is implemented
  // menuofProjects: string[] = [
  // this.optifacts_execfolder1_id,
  // this.optuitive_TZQA_execfolder2
  // ];

  opti(){
    this.active_projectid = this.optifacts_execfolder1_id;
    this.load1();
  }

  optuitive(){
    this.active_projectid = this.optuitive_TZQA_execfolder2;
    this.load1();
  }

  executionload(unq: RevUnqPair)
  {
    this.selectedExecutionID = unq;

    //HOW DO I SEND IT TO TESTCASELIST COMPONENT?
    

    
  }


  // getObjectName(unq: string){
  //   return this.toscaService.getObject2(this.unq).subscribe(data => this.project_listofExecLists )

  // }

}
