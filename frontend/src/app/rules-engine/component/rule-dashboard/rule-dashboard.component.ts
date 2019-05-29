import { Component, OnInit } from '@angular/core';
import {RulesService} from '../../service/rules.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rule-dashboard',
  templateUrl: './rule-dashboard.component.html',
  styleUrls: ['./rule-dashboard.component.css']
})
export class RuleDashboardComponent implements OnInit {
  rules: string[];

  constructor(
    private router: Router,
    private rulesService: RulesService
  ) { }

  ngOnInit() {
    // load the available rules from backend
    this.rulesService.getAvailableRules().subscribe(result => {
      this.rules = result;
    });
  }

}
