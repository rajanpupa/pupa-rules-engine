package com.rajan.puparulesengine.rulesinterpreter.rule.condition;

import com.fasterxml.jackson.databind.JsonNode;

public class AndCondition extends Condition {
    @Override
    public boolean evaluate(JsonNode node) {

        for(Condition condition: this.conditions){

            if(!condition.evaluate(node)){
                return false;
            }
        }

        return true;
    }
}
