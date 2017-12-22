import { Component, OnInit, Input } from '@angular/core';

import { ToscaapiService} from '../../-services/toscaapi.service';


import {Object_Tosca_generic} from '../../-class/object_generic';
import {TestCaseBundle} from '../../-class/testcasebundle';
import {execlist_wtestlog} from '../../-class/execlist_wtestlog';




@Component({
  selector: 'app-testcaseobject',
  templateUrl: './testcaseobject.component.html',
  styleUrls: ['./testcaseobject.component.css']
})
export class TestcaseobjectComponent implements OnInit {

  @Input() UniqueId: string;

  constructor(
    private toscaService: ToscaapiService
  ) { }

  object: Object_Tosca_generic;

  ondemand_object = '';

  ngOnInit() {
    //this.toscaService.getObject().subscribe(data => this.object = data);
  }

  load1() {
    this.ondemand_object = "Clicked"!
    this.toscaService.getObject2(this.UniqueId).subscribe(data => this.ondemand_object = data);
    //this.ondemand_object = "Worked!"!
  }

  

}
