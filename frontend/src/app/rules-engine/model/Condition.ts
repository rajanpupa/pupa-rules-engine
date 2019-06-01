export class Condition {
  // values: orcondition, andcondition, simplecondition
  type: string;
  name: string;

  // field set for orcondition, andcondition
  conditions: Condition[];

  // simplecondition properties
  field: string;
  operator: string;
  value: string;
}
