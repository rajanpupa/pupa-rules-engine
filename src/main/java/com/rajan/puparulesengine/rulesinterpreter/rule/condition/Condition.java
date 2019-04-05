package com.rajan.puparulesengine.rulesinterpreter.rule.condition;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.constant.enums.ConditionTypeEnum;
import com.rajan.puparulesengine.constant.enums.OperatorEnum;
import lombok.Data;

import java.util.List;

@Data
public abstract class Condition {
    ConditionTypeEnum type;
    String field;
    OperatorEnum operator;
    String value;
    List<Condition> conditions; // only populated for complex conditions

    public abstract boolean evaluate(JsonNode node);
}
