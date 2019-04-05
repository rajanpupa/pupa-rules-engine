package com.rajan.puparulesengine.service.parser.condition;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.constant.enums.ConditionTypeEnum;
import com.rajan.puparulesengine.constant.enums.OperatorEnum;
import com.rajan.puparulesengine.rulesinterpreter.rule.condition.AndCondition;
import com.rajan.puparulesengine.rulesinterpreter.rule.condition.Condition;
import com.rajan.puparulesengine.rulesinterpreter.rule.condition.ORCondition;
import com.rajan.puparulesengine.rulesinterpreter.rule.condition.SimpleCondition;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ConditionParser {

    public List<Condition> parse(JsonNode conditionsNode) throws Exception {
        List<Condition> conditions = new ArrayList<>();

        if(!conditionsNode.isArray()){
            throw new Exception("Conditions should be an array");
        }

        for(JsonNode conditionNode: conditionsNode){
            String conditionType = conditionNode.get("type").asText();
            Condition newCondition;

            if(ConditionTypeEnum.SIMPLE_CONDITION.toString().equalsIgnoreCase(conditionType)){
                newCondition = new SimpleCondition();
                newCondition.setType(ConditionTypeEnum.SIMPLE_CONDITION);
                newCondition.setField(conditionNode.get("field").asText());
                newCondition.setOperator(getConditionOperator(conditionNode.get("operator").asText()));
            } else if(ConditionTypeEnum.AND_CONDITION.toString().equalsIgnoreCase(conditionType)){
                newCondition = new AndCondition();
                newCondition.setType(ConditionTypeEnum.AND_CONDITION);
                newCondition.setConditions(parse(conditionNode.get("conditions")));
            } else if(ConditionTypeEnum.OR_CONDITION.toString().equalsIgnoreCase(conditionType)){
                newCondition = new ORCondition();
                newCondition.setType(ConditionTypeEnum.OR_CONDITION);
                newCondition.setConditions(parse(conditionNode.get("conditions")));
            }
        }
        return conditions;
    }

    private OperatorEnum getConditionOperator(String operator) {
        switch (operator){
            case ("equals"): {
                return OperatorEnum.EQUALS;
            }
            case ("notequals"): {
                return OperatorEnum.NOT_EQUALS;
            }
            case ("fieldnotset"): {
                return OperatorEnum.FIELD_NOT_SET;
            }
            case ("fieldset"): {
                return OperatorEnum.FIELD_SET;
            }
            default: {
                return OperatorEnum.EQUALS;
            }
        }
    }
}
