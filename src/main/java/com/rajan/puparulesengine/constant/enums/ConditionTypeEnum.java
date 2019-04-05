package com.rajan.puparulesengine.constant.enums;

public enum ConditionTypeEnum {
    SIMPLE_CONDITION ("simplecondition"),
    OR_CONDITION ("orcondition"),
    AND_CONDITION ("andcondition")
    ;

    String conditionType;

    ConditionTypeEnum(String conditionType){
        this.conditionType = conditionType;
    }

    @Override
    public String toString(){
        return this.conditionType;
    }
}
