import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logobject',
  templateUrl: './logobject.component.html',
  styleUrls: ['./logobject.component.css']
})
export class LogobjectComponent implements OnInit {

  @Input() UniqueId: string;

  constructor() { }

  ngOnInit() {
  }

}
