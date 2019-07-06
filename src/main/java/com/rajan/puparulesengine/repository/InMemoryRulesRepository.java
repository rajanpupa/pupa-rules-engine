package com.rajan.puparulesengine.repository;

import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class InMemoryRulesRepository {
    static final String RULES_FOLDER = "src/main/resources/rules/";

    Map<String, String> rules = new HashMap<>();

    public InMemoryRulesRepository() throws IOException {
        // load normal rule files
//        for( String fileName :  Arrays.asList("Nepali_citizen_rule", "Nepali_citizen_rule2") ){
//            rules.put(fileName, readFile(RULES_FOLDER + fileName + ".rule"));
//        }

        // load ruleset files
        for( String fileName :  Arrays.asList("Nepali_citizen_rule3") ){
            rules.put(fileName, readFile(RULES_FOLDER + fileName + ".rule.json"));
        }
    }

    // public methods
    public String getRule(String ruleName){
        return rules.get(ruleName);
    }

    public Collection<String> getRules(){
        return this.rules.keySet();
    }

    public boolean containsKey(String ruleName){
        return this.rules.containsKey(ruleName);
    }

    public void setRule(String ruleName, String ruleBody){
        rules.put(ruleName, ruleBody);
    }

    private static String readFile(String path) throws IOException {
        byte[] encoded = Files.readAllBytes(Paths.get(path));
        return new String(encoded, Charset.defaultCharset());
    }
}
