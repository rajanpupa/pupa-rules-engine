import {Condition} from './Condition';
import {Action} from "./Action";

export class PupaRule {
  type: string;
  name: string;

  // array of conditions
  conditions: Condition[];

  // action
  actions: Action[];
}
