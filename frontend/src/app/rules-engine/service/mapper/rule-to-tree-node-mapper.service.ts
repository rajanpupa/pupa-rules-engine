import {Injectable} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {PupaRule} from '../../model/PupaRule';
import {Condition} from '../../model/Condition';
import {Action} from "../../model/Action";
import {PupaRuleSet} from "../../model/PupaRuleSet";

@Injectable({
  providedIn: 'root'
})
export class RuleToTreeNodeMapperService {

  constructor() { }

  // returns a list of TreeNode wrapped in data
  public ruleToTreeNode(ruleSet: PupaRuleSet): TreeNode[]  {
    const rules = [];

    for(const rule of ruleSet.rules){
      const treeNode = this.mapToTreeNode(rule);
      rules.push(treeNode);
    }

    return [{
      label: ruleSet.name,
      data: ruleSet,
      expandedIcon: 'fa fa-registered ',
      collapsedIcon: 'fa fa-registered ',
      children: [
        {
          label: 'rules',
          children: rules,
        }
      ]
    }];
  }

  private mapToTreeNode(rule: PupaRule): any {
    const conditionsTreeNode = this.mapConditions(rule.conditions);
    const actionsTreeNode = this.mapActions(rule.actions);

    return {
      label: rule.name,
      data: rule,
      expandedIcon: 'fa fa-registered ',
      collapsedIcon: 'fa fa-registered ',
      children: [
        {
          label: 'conditions',
          children: conditionsTreeNode,
        }, {
          label: 'actions',
          children: actionsTreeNode,
        }
      ]
    };
  }

  private mapConditions(conditions: Condition[]) {
    const condTreeArray = [];
    if ( !conditions || conditions.length === 0 ) {
      return condTreeArray;
    }

    for ( const condition of conditions) {
      const childTree = this.mapConditions(condition.conditions);
      condTreeArray.push({
        label: condition.name,
        data: condition,
        children: childTree,
      });
    }

    return condTreeArray;
  }

  private mapActions(actions: Action[]) {
    const actionTreeArray = [];
    if ( !actions || actions.length === 0 ) {
      return actionTreeArray;
    }

    for ( const action of actions) {
      actionTreeArray.push({
        label: action.name,
        data: action,
      });
    }

    return actionTreeArray;
  }
}
