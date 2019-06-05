import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RulesService} from '../../service/rules.service';
import {TreeNode} from 'primeng/api';
import {RuleToTreeNodeMapperService} from '../../service/mapper/rule-to-tree-node-mapper.service';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.css']
})
export class RuleDetailComponent implements OnInit {
  ruleName: string;
  ruleDetail: any;

  ruleTree: TreeNode[];

  constructor(
    private activeRoute: ActivatedRoute,
    private ruleService: RulesService,
    private ruleToTreeMapperService: RuleToTreeNodeMapperService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.ruleName = params.get('ruleName');

        // get the rule detail from backend
        this.ruleService.getRuleDetail(this.ruleName).subscribe(data => {
          this.ruleDetail = data;
          console.log(this.ruleDetail);
          this.ruleTree = this.ruleToTreeMapperService.ruleToTreeNode(this.ruleDetail);
        });
      }
    );


  }

}
