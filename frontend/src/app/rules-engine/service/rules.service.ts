import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {PupaRule} from "../model/PupaRule";

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  readonly BACKEND_URL = environment.backend.baseUrl;
  readonly RULES_PATH =  'ui/rules';
  readonly RULE_DETAIL_PATH = 'ui/rules/';
  readonly RULE_CREATE_PATH = 'ui/rules/create/';//{ruleName}

  constructor(private http: HttpClient) { }

  getAvailableRules(): Observable<any> {
      return this.http.get(this.BACKEND_URL + this.RULES_PATH);
  }

  getRuleDetail(rule: string): Observable<any> {
    return this.http.get(this.BACKEND_URL + this.RULE_DETAIL_PATH + rule);
  }

  createNewRule(rule: PupaRule): Observable<any> {
    const url = this.BACKEND_URL + this.RULE_CREATE_PATH + rule.name;
    console.log('service: posting a new rule to ' + url)
    console.log(JSON.stringify(rule));
    return this.http.post(url, rule);
  }

}
