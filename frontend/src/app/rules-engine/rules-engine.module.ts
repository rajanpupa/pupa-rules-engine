import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesEngineRoutingModule } from './rules-engine-routing.module';
import { RuleDashboardComponent } from './component/rule-dashboard/rule-dashboard.component';
import { RuleCreateComponent } from './component/rule-create/rule-create.component';
import {TableModule} from 'primeng/table';
import { RuleDetailComponent } from './component/rule-detail/rule-detail.component';
import {TreeModule} from 'primeng/tree';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    RuleDashboardComponent,
    RuleCreateComponent,
    RuleDetailComponent
  ],
  imports: [
    CommonModule,
    RulesEngineRoutingModule,
    TableModule,
    TreeModule,
    FormsModule,
    ButtonModule
  ]
})
export class RulesEngineModule { }
