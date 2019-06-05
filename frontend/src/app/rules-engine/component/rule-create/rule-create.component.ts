import { Component, OnInit } from '@angular/core';
import {TreeNode} from "primeng/api";
import {PupaRule} from "../../model/PupaRule";
import {RuleToTreeNodeMapperService} from "../../service/mapper/rule-to-tree-node-mapper.service";
import {RuleComponentTypeConstant} from "../../model/constants/RuleComponentTypeConstant";

@Component({
  selector: 'app-rule-create',
  templateUrl: './rule-create.component.html',
  styleUrls: ['./rule-create.component.css']
})
export class RuleCreateComponent implements OnInit {
  activeIndex = 0;
  typeConstants = RuleComponentTypeConstant;
  // data
  rule: PupaRule;
  ruleTree: TreeNode[];

  // which node is selected in left panel
  selectedTreeNode: TreeNode;

  constructor(
    private ruleToTreeNodeMapper: RuleToTreeNodeMapperService
  ) { }

  ngOnInit() {
    this.rule = new PupaRule();
    this.rule.name = 'New Rule';
    this.rule.type = 'rule';

    this.ruleTree = this.ruleToTreeNodeMapper.ruleToTreeNode(this.rule);
  }

  nodeSelect(event){
    //console.log('selected')
    //console.log(event)
    //console.log(this.selectedTreeNode.label);
  }

}
