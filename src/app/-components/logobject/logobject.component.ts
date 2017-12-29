import { Component, OnInit, Input } from '@angular/core';

import { ToscaapiService} from '../../-services/toscaapi.service';

import {Object_Tosca_generic} from '../../-class/object_generic';
import {TestCaseBundle} from '../../-class/testcasebundle';
import {execlist_wtestlog} from '../../-class/execlist_wtestlog';

import { Object_ExecutionTestCaseLog } from '../../-class/logobject';


@Component({
  selector: 'app-logobject',
  templateUrl: './logobject.component.html',
  styleUrls: ['./logobject.component.css']
})
export class LogobjectComponent implements OnInit {

  @Input() UniqueId: Object_Tosca_generic;

  constructor(
    private toscaService: ToscaapiService
  ) { }

  ngOnInit() {
  }

  visible: boolean;
  visibleAttributes: boolean;
  visibleParameters: boolean;
  
  ondemand_object: Object_ExecutionTestCaseLog ;

  load1() {
    this.toscaService.getObject2(this.UniqueId).subscribe(data => this.ondemand_object = data);
  }

  hide(){
    this.visible = !this.visible;

  }

  hideAtt(){
    this.visibleAttributes = !this.visibleAttributes;

  }

  hideParam(){
    this.visibleParameters = !this.visibleParameters;

  }

}
