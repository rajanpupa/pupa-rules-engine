package com.rajan.puparulesengine.service.parser.action;

import com.fasterxml.jackson.databind.JsonNode;
import com.rajan.puparulesengine.rulesinterpreter.rule.action.Action;
import com.rajan.puparulesengine.rulesinterpreter.rule.action.SimpleAction;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ActionParser {
    // ACTION FIELDS
    static final String  TYPE = "type";
    static final String  FIELD = "field";
    static final String  VALUE = "value";
    // action types
    static final String  SIMPLE_ACTION = "simpleaction";

    public List<Action> parse(JsonNode actionsNode) throws Exception {
        List<Action> actions = new ArrayList<>();

        if(!actionsNode.isArray()){
            throw new Exception("Actions should be an array");
        }

        for(JsonNode actionNode: actionsNode){
            String actionType = actionNode.get(TYPE).asText();
            Action action = null;

            if( SIMPLE_ACTION.equalsIgnoreCase(actionType) ){
                action = new SimpleAction();
                action.setType( SIMPLE_ACTION );
                action.setField(actionNode.get(FIELD).asText());
                action.setValue(actionNode.get(VALUE).asText());
            }
            actions.add(action);
        }
        return actions;
    }
}
