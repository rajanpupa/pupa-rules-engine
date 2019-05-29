import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  readonly BACKEND_URL = environment.backend.baseUrl;
  readonly RULES_PATH =  'ui/rules';
  readonly RULE_DETAIL_PATH = 'ui/rules/';

  constructor(private http: HttpClient) { }

  getAvailableRules(): Observable<any> {
      return this.http.get(this.BACKEND_URL + this.RULES_PATH);
  }

  getRuleDetail(rule: string): Observable<any> {
    return this.http.get(this.BACKEND_URL + this.RULE_DETAIL_PATH + rule);
  }
}
