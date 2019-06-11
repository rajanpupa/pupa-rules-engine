import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Action} from "../../../model/Action";

@Component({
  selector: 'app-action-create',
  templateUrl: './action-create.component.html',
  styleUrls: ['./action-create.component.css']
})
export class ActionCreateComponent implements OnInit {

  @Input() action: Action;
  @Input() editable: boolean;

  @Output() dataEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.action);
  }

  saveAction(){
    this.dataEvent.emit(this.action);
  }

}
