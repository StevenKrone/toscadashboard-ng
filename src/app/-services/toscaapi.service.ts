import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


import {Object_Tosca_generic} from '../-class/object_generic';
import {TestCaseBundle} from '../-class/testcasebundle';
import {execlist_wtestlog} from '../-class/execlist_wtestlog';


@Injectable()
export class ToscaapiService {

  constructor(
    private http: Http
  ) { }



  //add object ID as parameter
  // getObject(){
  //   //var url = 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e34a80-7b62-0c76-b111-eb7830121572';
  //   var url = 'http://localhost:3000/api/object';
  //   var headers = new Headers();
  //   headers.append('Accept', 'text/json');
  //   //headers.append('Authorization', 'Basic QWRtaW46QWRtaW4=');
  //   return this.http.get(url, {headers: headers}).map((res:Response) => res.json());
  // }

  getObject2(obj: Object_Tosca_generic){
    //var obj = JSON.parse(obj_id);
    var unqId = obj.UniqueId

    //var url = 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e34a80-7b62-0c76-b111-eb7830121572';
    var url = 'http://localhost:3000/api/object/' + unqId;
    var headers = new Headers();
    headers.append('Accept', 'text/json');
    //headers.append('Authorization', 'Basic QWRtaW46QWRtaW4=');
    return this.http.get(url, {headers: headers}).map((res:Response) => res.json());
  }


  // getExecutionListWithTestCases(){
  //   //var url = 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e34a80-7b62-0c76-b111-eb7830121572';
  //   var url = 'http://localhost:3000/api/executionlistwithtests';
  //   var headers = new Headers();
  //   headers.append('Accept', 'text/json');
  //   //headers.append('Authorization', 'Basic QWRtaW46QWRtaW4=');
  //   return this.http.get(url, {headers: headers}).map((res:Response) => res.json());
  // }

  getExecutionListWithTestCases2(unqId: string){

    var con = parseInt(unqId);
    //var unqId = obj.UniqueId;    
    //var url = 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e34a80-7b62-0c76-b111-eb7830121572';
    var url = 'http://localhost:3000/api/execlist/'  + unqId;
    var headers = new Headers();
    headers.append('Accept', 'text/json');
    //headers.append('Authorization', 'Basic QWRtaW46QWRtaW4=');
    return this.http.get(url, {headers: headers}).map((res:Response) => res.json());
  }


  getChildItems(unqId: string){
    
        var con = parseInt(unqId);
        //var unqId = obj.UniqueId;    
        //var url = 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e34a80-7b62-0c76-b111-eb7830121572';
        var url = 'http://localhost:3000/api/objectitems/'  + unqId;
        var headers = new Headers();
        headers.append('Accept', 'text/json');
        //headers.append('Authorization', 'Basic QWRtaW46QWRtaW4=');
        return this.http.get(url, {headers: headers}).map((res:Response) => res.json());
      }






}
