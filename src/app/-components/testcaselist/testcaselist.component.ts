import { Component, OnInit } from '@angular/core';

import { ToscaapiService} from '../../-services/toscaapi.service';


import {Object_Tosca_generic} from '../../-class/object_generic';
import {TestCaseBundle} from '../../-class/testcasebundle';
import {execlist_wtestlog} from '../../-class/execlist_wtestlog';



@Component({
  selector: 'app-testcaselist',
  templateUrl: './testcaselist.component.html',
  styleUrls: ['./testcaselist.component.css']
})
export class TestcaselistComponent implements OnInit {

  constructor(
    private toscaService: ToscaapiService
  ) { }

  object: Object_Tosca_generic;
  execlist: execlist_wtestlog;
  unqId: string = '39e3256a-55af-759e-757b-71ad570f0bb6';


  ngOnInit() {
    //this.toscaService.getObject().subscribe(data => this.object = data);
    this.toscaService.getExecutionListWithTestCases2(this.unqId).subscribe(data => this.execlist = data);
    
  }

}
