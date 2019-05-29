import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RulesEngineModule} from './rules-engine/rules-engine.module';

const routes: Routes = [
  {
    path: 'rule-engine',
    loadChildren: () => RulesEngineModule
  },
  {
    path: '',
    redirectTo: 'rule-engine', // change this to main landing page
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
