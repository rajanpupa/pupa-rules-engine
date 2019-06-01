import {Condition} from './Condition';

export class PupaRule {
  type: string;
  name: string;

  // array of conditions
  conditions: Condition[];

  // action
  actions: Action[];
}
