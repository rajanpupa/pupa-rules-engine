package com.rajan.puparulesengine.rulesinterpreter.rule.condition;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.constant.enums.OperatorEnum;

public class SimpleCondition extends Condition {
    @Override
    public boolean evaluate(JsonNode node) {
        //String field = node.get(this.field).asText();

        String nodeValue = getNodeValue(node, this.field);
        String conditionValue = this.value;

        OperatorEnum operatorEnum = this.operator;

        boolean result = false;
        switch(operatorEnum){
            case EQUALS:{
                result = conditionValue.equals(nodeValue);
                break;
            }
            case NOT_EQUALS:{
                result = ! conditionValue.equals(nodeValue);
                break;
            }
            case FIELD_NOT_SET:{
                result = !node.has(this.field);
                break;
            }
            case FIELD_SET:{
                result =  node.has(field);
                break;
            }
        }
        return result;
    }

    private String getNodeValue(JsonNode node, String field) {
         JsonNode n = node.get(field);
         if(n!=null){
             return n.asText();
         }
         return null;
    }
}
