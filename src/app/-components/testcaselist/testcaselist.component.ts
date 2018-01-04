import { Component, OnInit, Input } from '@angular/core';

import { ToscaapiService} from '../../-services/toscaapi.service';


import {Object_Tosca_generic} from '../../-class/object_generic';
import {TestCaseBundle} from '../../-class/testcasebundle';
import {execlist_wtestlog} from '../../-class/execlist_wtestlog';
import {RevUnqPair} from '../../-class/RevUnqPair';




@Component({
  selector: 'app-testcaselist',
  templateUrl: './testcaselist.component.html',
  styleUrls: ['./testcaselist.component.css']
})
export class TestcaselistComponent implements OnInit {

  
  constructor(
    private toscaService: ToscaapiService
  ) { }


  //Not sure why these guys are here. Relics of the past.
  object: Object_Tosca_generic;
  execlist: execlist_wtestlog;


  //New Guy on the Block
  @Input() UniqueId: RevUnqPair;
  

  //Placeholder
  unqId: string = 'No Value';


  //ExecutionLists folder for Optifacts
  unqId_EXECUTIONLISTS_folder: string = '39e320f4-73a4-c009-cc18-ed34ea1d13b3';


  //All of the Individual UniqueID's of the Execution Lists from Optifacts
  unqId_DoneChanges: string = '39e36391-230b-c977-1be0-2261b98d38d5';
  unqId_LabData: string = '39e35e46-40eb-1d29-1ecd-eda42f454488';
  unqId_1Trallar: string = '39e3620c-7df2-4816-d746-e7f65529f519';
  unqId_2Trallar: string = '39e3620f-eb61-d7f7-14f4-add8cb7299df';
  unqId_AfterMailOut: string = '39e33332-96f3-f261-1475-7b049205d354';
  unqId_LabDataChanges: string = '39e33426-d72f-6fff-d985-8ec2c9f27188';
  unqId_MailOut: string = '39e332dc-7a5f-0b16-6ca0-cf7e66c5237f';
  unqId_LisaTC: string = '39e33319-dee6-5e67-4b0a-883c350d6a2b';
  unqId_NonDataSystemCheck: string = '39e332e3-6539-baed-759a-8dcb92c064ae';
  unqId_OrderEntry: string = '39e3256a-55af-759e-757b-71ad570f0bb6';
  unqId_StockOrderEntry: string = '39e332d9-26fb-d01c-c579-dd4414cf7370';
  unqId_Trallar: string = '39e34813-b951-4153-70fe-1a79c4888856';
  unqId_TrallarPost: string = '39e35cb4-aedb-9d16-78b3-c7e7b8fda3f4';

  unqId_fulllist: string[] = [this.unqId_DoneChanges,
                             this.unqId_LabData,
                             this.unqId_1Trallar,
                             this.unqId_2Trallar,
                             this.unqId_AfterMailOut,
                             this.unqId_LabDataChanges,
                             this.unqId_MailOut,
                             this.unqId_LisaTC,
                             this.unqId_NonDataSystemCheck,
                             this.unqId_OrderEntry,
                             this.unqId_StockOrderEntry,
                             this.unqId_Trallar,
                             this.unqId_TrallarPost
  ];


  //Array of Revision/Unique Couple that comes from a ".../object/association/Items" Tosca API Call 
  unqId_filledlist: RevUnqPair[];
  



  ngOnInit() {
    //this.toscaService.getObject().subscribe(data => this.object = data);
    //this.toscaService.getExecutionListWithTestCases2(this.unqId).subscribe(data => this.execlist = data);
    //this.toscaService.getChildItems(this.unqId_EXECUTIONLISTS_folder).subscribe(data => this.unqId_filledlist = data);
    
  }

  load1() {
    this.toscaService.getExecutionListWithTestCases2(this.UniqueId.UniqueId).subscribe(data => this.execlist = data);
    //this.toscaService.getChildItems(this.unqId_EXECUTIONLISTS_folder).subscribe(data => this.unqId_filledlist = data);
    this.unqId = this.UniqueId.UniqueId;
  }



  // <!--  -->
  // <!-- Sends the "UniqueID"(of an ExecutionList) to Trigger a Request for the TestCase/LogObject Couple Package.      -->
  // <!--  -->
    
  loadExec(unq: string)
  {
    this.unqId = unq;
    this.toscaService.getExecutionListWithTestCases2(this.unqId).subscribe(data => this.execlist = data);
  }

}
