import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesEngineRoutingModule } from './rules-engine-routing.module';
import { RuleDashboardComponent } from './component/rule-dashboard/rule-dashboard.component';
import { RuleCreateComponent } from './component/rule-create/rule-create.component';

@NgModule({
  declarations: [
    RuleDashboardComponent,
    RuleCreateComponent
  ],
  imports: [
    CommonModule,
    RulesEngineRoutingModule
  ]
})
export class RulesEngineModule { }
