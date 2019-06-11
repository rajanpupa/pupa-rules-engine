import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesEngineRoutingModule } from './rules-engine-routing.module';
import { RuleDashboardComponent } from './component/rule-dashboard/rule-dashboard.component';
import { RuleCreateComponent } from './component/rule-create/rule-create.component';
import {TableModule} from 'primeng/table';
import { RuleDetailComponent } from './component/rule-detail/rule-detail.component';
import {TreeModule} from 'primeng/tree';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ConditionCreateComponent} from "./component/condition/condition-create/condition-create.component";
import { ActionCreateComponent } from './component/action/action-create/action-create.component';

@NgModule({
  declarations: [
    RuleDashboardComponent,
    RuleCreateComponent,
    RuleDetailComponent,
    ConditionCreateComponent,
    ActionCreateComponent
  ],
  imports: [
    CommonModule,
    RulesEngineRoutingModule,
    TableModule,
    TreeModule,
    FormsModule,
    ButtonModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class RulesEngineModule { }
