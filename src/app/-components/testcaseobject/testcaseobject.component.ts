import { Component, OnInit, Input } from '@angular/core';

import { ToscaapiService} from '../../-services/toscaapi.service';


import {Object_Tosca_generic} from '../../-class/object_generic';
import {TestCaseBundle} from '../../-class/testcasebundle';
import {execlist_wtestlog} from '../../-class/execlist_wtestlog';

import { TestCaseObject } from '../../-class/testcaseobject';



@Component({
  selector: 'app-testcaseobject',
  templateUrl: './testcaseobject.component.html',
  styleUrls: ['./testcaseobject.component.css']
})
export class TestcaseobjectComponent implements OnInit {

  @Input() UniqueId: Object_Tosca_generic;

  constructor(
    private toscaService: ToscaapiService
  ) { }

  //object: Object_Tosca_generic;

  visible: boolean;

  ondemand_object: TestCaseObject;

  ngOnInit() {
    //this.toscaService.getObject().subscribe(data => this.object = data);
  }

  load1() {
    this.toscaService.getObject2(this.UniqueId).subscribe(data => this.ondemand_object = data);
  }

  hide(){
    this.visible = !this.visible;

  }

  

}
