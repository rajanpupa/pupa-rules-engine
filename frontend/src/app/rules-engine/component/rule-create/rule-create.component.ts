import { Component, OnInit } from '@angular/core';
import {TreeNode} from "primeng/api";
import {PupaRule} from "../../model/PupaRule";
import {RuleToTreeNodeMapperService} from "../../service/mapper/rule-to-tree-node-mapper.service";
import {RuleComponentTypeConstant} from "../../model/constants/RuleComponentTypeConstant";
import {Condition} from "../../model/Condition";
import {Action} from "../../model/Action";
import {RulesService} from "../../service/rules.service";

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
  newAction: Action = new Action();

  constructor(
    private ruleToTreeNodeMapper: RuleToTreeNodeMapperService,
    private rulesService: RulesService
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

  // when the left panel tree node is selected
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
      this.newCondition = this.selectedTreeNode.data;
    }else if(this.selectedTreeNode.data.type === 'andcondition'){
      console.log('andcondition node selected');
      this.activeNodeIndex = this.typeConstants.CONDITION_AND;
      this.newCondition = this.selectedTreeNode.data;
    }else if(this.selectedTreeNode.data.type === 'orcondition'){
      console.log('orcondition node selected');
      this.activeNodeIndex = this.typeConstants.CONDITION_OR;
      this.newCondition = this.selectedTreeNode.data;
    }else if(this.selectedTreeNode.data.type === 'simpleaction'){
      console.log('simpleaction node selected');
      this.activeNodeIndex = this.typeConstants.ACTION_SIMPLE;
      this.newAction = this.selectedTreeNode.data;
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

  // middle panel button clicked
  setActiveButtonIndex(number: number) {
    // set the activeButtonIndex so that the template is visible
    this.activeButtonIndex = number;

    if(this.activeNodeIndex === this.typeConstants.CONDITION_PARENT){
      // add condition
      this.newCondition = this.createNewCondition();
    }else if(this.activeNodeIndex === this.typeConstants.CONDITION_AND){
      this.newCondition = this.createNewCondition();
    }else if(this.activeNodeIndex === this.typeConstants.CONDITION_OR){
      this.newCondition = this.createNewCondition();
    }else if(this.activeNodeIndex === this.typeConstants.ACTION_PARENT){
      this.newAction = this.createNewAction();
    }

    console.log(this.newCondition);


  }

  // new condition save event handle
  saveCondition(condition: Condition) {
    // creates a new condition
    if(condition.field.length > 0 && condition.operator.length > 0 && condition.value.length > 0){
      this.insertCondition(condition);
    }else {
      // error scenario
    }
  }

  // new condition save event handle
  saveAction(action: Action) {
    // creates a new condition
    if(action.field.length > 0 && action.value.length > 0){
      this.insertAction(action);
    }else {
      // error scenario
    }
  }

  // creates and returns a new Condition object
  private createNewCondition(): Condition {
    const conditoin = new Condition();
    conditoin.operator = 'equals';

    if(this.activeButtonIndex === 1){
      // add simple condition
      conditoin.type = 'simplecondition';
      conditoin.name = 'Simple Condition1';
    }else if(this.activeButtonIndex === 2){
      // add And condition
      conditoin.type = 'andcondition';
      conditoin.name = 'And Condition1';
    }else {
      // add or condition
      conditoin.type = 'orcondition';
      conditoin.name = 'OR Condition1';
    }

    return conditoin;
  }
  private createNewAction(): Action {
    const action = new Action();
    action.name = 'set field to value';
    action.field = 'field'
    action.value = 'value';
    return action;
  }

  private insertCondition(condition: Condition) {
    //console.log(this.selectedTreeNode.data);
    if(this.selectedTreeNode.data===undefined){
      // parent conditions node
      this.selectedTreeNode.parent.data.conditions.push(condition);
    }else{
      this.selectedTreeNode.data.conditions.push(condition);
    }
    this.refresh();
  }

  private insertAction(action: Action) {
    //console.log(this.selectedTreeNode.data);
    if(this.selectedTreeNode.data===undefined){
      // parent action node
      this.selectedTreeNode.parent.data.actions.push(action);
    }else{
      this.selectedTreeNode.data.actions.push(action);
    }
    this.refresh();
  }


  createNewRule() {
    console.log('creating new rule === ')
    console.log(this.rule);
    this.rulesService.createNewRule(this.rule).subscribe( a => {
      console.log('Successfully created:' )
      console.log(a)
    }, error => {
      console.error("Error creating rule");
      console.error(error);
    })
  }
}
