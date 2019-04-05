package com.rajan.puparulesengine.rulesinterpreter.rule;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.rulesinterpreter.rule.condition.Condition;
import lombok.Data;

import java.util.List;

@Data
public class PupaRule {
    String type;
    String name;
    List<Condition> conditions;
    // List<Actions> actions;

    public void evaluate(JsonNode node){
        // evaluate the conditions and run the actions
    }

}
