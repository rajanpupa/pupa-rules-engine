# pupa-rules-engine

A rules engine which will take a json object and a list of rules as input,
run the rules and return the output based on the conditions and actions defined in the rules.

The rules passed, needs to be in the class path of this project.

### Test

```
Rule: sample1

{
	"type": "rule",
	"name": "Nepali citizen rule",
	"conditions" : [
					{
					    "type": "simplecondition",
						"field": "country_of_birth",
						"operator": "equals",
						"value": "nepal"
					}
	],
	"action": [
					{
					    "type": "simpleaction",
						"field": "citizen",
						"value": "nepal"
					}
	]
}
```

```
Request:

http://localhost:8080/evaluate?rule=sample1

{
    "country_of_birth": "nepal"
}
```

```
Response:

{
    "country_of_birth": "nepal",
    "citizen": "nepal"
}
```