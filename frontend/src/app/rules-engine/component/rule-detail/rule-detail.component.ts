import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RulesService} from '../../service/rules.service';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.css']
})
export class RuleDetailComponent implements OnInit {
  ruleName: string;
  ruleDetail: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private ruleService: RulesService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.ruleName = params.get('ruleName');

        // get the rule detail from backend
        this.ruleService.getRuleDetail(this.ruleName).subscribe(data => {
          this.ruleDetail = data;
        });
      }
    );


  }

}
