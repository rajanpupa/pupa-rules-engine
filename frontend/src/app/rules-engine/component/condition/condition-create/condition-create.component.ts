import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Condition} from "../../../model/Condition";

@Component({
  selector: 'app-condition-create',
  templateUrl: './condition-create.component.html',
  styleUrls: ['./condition-create.component.css']
})
export class ConditionCreateComponent implements OnInit {

  @Input() condition: Condition;
  @Input() editable: boolean;

  @Output() dataEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.condition)
  }

  saveCondition(){
    this.dataEvent.emit(this.condition);
  }

}
