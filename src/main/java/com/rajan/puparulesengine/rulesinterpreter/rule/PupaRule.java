package com.rajan.puparulesengine.rulesinterpreter.rule;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.rulesinterpreter.rule.action.Action;
import com.rajan.puparulesengine.rulesinterpreter.rule.condition.Condition;
import lombok.Data;

import java.util.List;

@Data
public class PupaRule {
    String type;
    String name;
    List<Condition> conditions;
    List<Action> actions;

    public void evaluate(JsonNode node){
        boolean result = true;
        // evaluate the conditions and run the actions
        for(Condition condition: conditions){
            if(!condition.evaluate(node)){
                result = false;
                break;
            }
        }

        if(result){
            System.out.println("All conditions passed at the rule " + name);
            System.out.println("Executing the actions");
            for(Action action: actions){
                action.act(node);
            }
        }else{
            System.out.println("Condition failed for rule " + name);
        }
    }

}
