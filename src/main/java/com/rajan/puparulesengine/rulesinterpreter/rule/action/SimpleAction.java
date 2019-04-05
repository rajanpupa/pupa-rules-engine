package com.rajan.puparulesengine.rulesinterpreter.rule.action;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class SimpleAction extends Action{

    @Override
    public void act(JsonNode node) {
        ((ObjectNode)node).put(this.field, this.value);
    }
}
