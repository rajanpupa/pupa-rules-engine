package com.rajan.puparulesengine.rulesinterpreter.rule.action;

import lombok.Data;

@Data
public abstract class Action {
    String type;
    String field;
    String value;

    public abstract void act();
}
