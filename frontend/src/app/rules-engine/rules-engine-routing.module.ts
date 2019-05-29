import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RuleDashboardComponent} from './component/rule-dashboard/rule-dashboard.component';
import {RuleCreateComponent} from './component/rule-create/rule-create.component';
import {RuleDetailComponent} from './component/rule-detail/rule-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RuleDashboardComponent
  },
  {
    path: 'create',
    component: RuleCreateComponent
  },
  {
    path: 'detail/:ruleName',
    component: RuleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesEngineRoutingModule { }
