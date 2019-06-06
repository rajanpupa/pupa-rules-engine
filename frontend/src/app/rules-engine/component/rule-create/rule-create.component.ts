import { Component, OnInit } from '@angular/core';
import {TreeNode} from "primeng/api";
import {PupaRule} from "../../model/PupaRule";
import {RuleToTreeNodeMapperService} from "../../service/mapper/rule-to-tree-node-mapper.service";
import {RuleComponentTypeConstant} from "../../model/constants/RuleComponentTypeConstant";
import {Condition} from "../../model/Condition";

@Component({
  selector: 'app-rule-create',
  templateUrl: './rule-create.component.html',
  styleUrls: ['./rule-create.component.css']
})
export class RuleCreateComponent implements OnInit {
  activeNodeIndex = 0;
  typeConstants = RuleComponentTypeConstant;
  activeButtonIndex = 0;
  // data
  rule: PupaRule;
  ruleTree: TreeNode[];

  // which node is selected in left panel
  selectedTreeNode: TreeNode;
  previousSelectedTreeNode: TreeNode;

  // add condition objects
  newCondition: Condition = new Condition();

  constructor(
    private ruleToTreeNodeMapper: RuleToTreeNodeMapperService
  ) { }

  ngOnInit() {
    this.rule = new PupaRule();
    this.rule.name = 'New Rule';
    this.rule.type = 'rule';

    this.rule.conditions = [];
    this.rule.actions = [];

    this.refresh();
  }

  refresh() {
    this.ruleTree = this.ruleToTreeNodeMapper.ruleToTreeNode(this.rule);
  }

  nodeUnSelect(event){
    console.log('node unselected: ' + this.selectedTreeNode.label);
  }


  nodeSelect(event){
    console.log('label: '+ this.selectedTreeNode.label);
    if( this.selectedTreeNode.data && this.selectedTreeNode.data.type && this.selectedTreeNode.data.type === 'rule'){
      console.log('==rule node selected')
      this.activeNodeIndex = this.typeConstants.PUPA_RULE;
    } else if(this.selectedTreeNode.label === 'conditions'){
      console.log('conditions node selected');
      this.activeNodeIndex = this.typeConstants.CONDITION_PARENT;
    }else if(this.selectedTreeNode.label === 'actions'){
      console.log('actions node selected');
      this.activeNodeIndex = this.typeConstants.ACTION_PARENT;
    }else if(this.selectedTreeNode.data.type === 'simplecondition'){
      console.log('simplecondition node selected');
      this.activeNodeIndex = this.typeConstants.CONDITION_SIMPLE;
    }else if(this.selectedTreeNode.data.type === 'andcondition'){
      console.log('andcondition node selected');
      this.activeNodeIndex = this.typeConstants.CONDITION_AND;
    }else if(this.selectedTreeNode.data.type === 'orcondition'){
      console.log('orcondition node selected');
      this.activeNodeIndex = this.typeConstants.CONDITION_OR;
    }else if(this.selectedTreeNode.data.type === 'simpleaction'){
      console.log('simpleaction node selected');
      this.activeNodeIndex = this.typeConstants.ACTION_SIMPLE;
    }
    this.handlePreviousSelected();
    this.activeButtonIndex = 0;
  }

  private handlePreviousSelected() {
    // refresh name in the treeview in UI
    if(this.previousSelectedTreeNode && this.previousSelectedTreeNode.data && this.previousSelectedTreeNode.data.name){
      this.previousSelectedTreeNode.label = this.previousSelectedTreeNode.data.name;
    }
    this.previousSelectedTreeNode = this.selectedTreeNode;
  }

  setActiveButtonIndex(number: number) {
    this.activeButtonIndex = number;
    if(this.activeNodeIndex === this.typeConstants.CONDITION_PARENT && this.activeButtonIndex === 1){
      this.newCondition = new Condition();
      this.newCondition.type = 'simplecondition';
      this.newCondition.name = 'Simple Condition1';
      this.newCondition.operator = 'equals';
    }

  }

  saveCondition() {
    // creates a new condition
    if(this.newCondition.field.length > 0 && this.newCondition.operator.length>0 && this.newCondition.value.length > 0){
      this.selectedTreeNode.parent.data.conditions.push(this.newCondition);
      this.refresh();
    }else {
      // error scenario
    }
  }
}
