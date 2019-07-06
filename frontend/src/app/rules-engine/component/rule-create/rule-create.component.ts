import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PupaRule} from "../../model/PupaRule";

@Component({
  selector: 'app-rule-create',
  templateUrl: './rule-create.component.html',
  styleUrls: ['./rule-create.component.css']
})
export class RuleCreateComponent implements OnInit {
  rule: PupaRule ;
  @Input() editable: boolean;

  @Output() dataEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.rule = new PupaRule();
  }

  saveRule(){
    this.dataEvent.emit(this.rule);
    this.rule = new PupaRule();
  }

}
