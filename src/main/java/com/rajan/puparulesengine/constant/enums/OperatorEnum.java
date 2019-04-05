package com.rajan.puparulesengine.constant.enums;

public enum OperatorEnum {
    EQUALS ("equals"),
    NOT_EQUALS ("notequals"),
    FIELD_SET ("fieldset"),
    FIELD_NOT_SET ("fieldnotset")
    ;

    String operator;

    OperatorEnum(String operator){
        this.operator = operator;
    }

    @Override
    public String toString(){
        return this.operator;
    }
}
