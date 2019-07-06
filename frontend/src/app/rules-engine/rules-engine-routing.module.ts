import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RuleDashboardComponent} from './component/rule-dashboard/rule-dashboard.component';
import {RuleSetCreateComponent} from './component/ruleset-create/rule-set-create.component';
import {RuleDetailComponent} from './component/rule-detail/rule-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RuleDashboardComponent
  },
  {
    path: 'create',
    component: RuleSetCreateComponent,
    data: {
      isNewCreate: true,
      isEdit: false
    }
  },
  {
    path: 'detail/:ruleSetName',
    component: RuleSetCreateComponent,
    data: {
      isNewCreate: false,
      isEdit: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesEngineRoutingModule { }
