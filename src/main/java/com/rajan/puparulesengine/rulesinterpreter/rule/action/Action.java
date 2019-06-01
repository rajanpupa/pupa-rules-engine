package com.rajan.puparulesengine.rulesinterpreter.rule.action;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;

@Data
public abstract class Action {
    String type;
    String name;
    String field;
    String value;

    public abstract void act(JsonNode node);
}
