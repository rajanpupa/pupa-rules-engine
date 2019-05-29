import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RuleDashboardComponent} from './component/rule-dashboard/rule-dashboard.component';
import {RuleCreateComponent} from './component/rule-create/rule-create.component';

const routes: Routes = [
  {
    path: '',
    component: RuleDashboardComponent
  },
  {
    path: 'create',
    component: RuleCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesEngineRoutingModule { }
