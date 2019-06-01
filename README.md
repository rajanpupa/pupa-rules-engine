# pupa-rules-engine

Rules engine is an application where you can define your rules, separate from your main application.
Once your rules are defined, your core application can use the rules engine to evaluate the logic.

Sometimes business people do not want some of the core business logic to be hardcoded in the application
or microservices. They want a separate and easy system where they can go any time and check the rules
as well as change the rules. Then they want the core business application to perform based on those rules 
defined by them in the system.

To solve this problem, Pupa rules engine provides Two things.

* Easy to use UI
* Rest based api's

The User Interface (UI) is where people can go and check the existing rules.
Make change to the existing rules
OR Create a new rule.

The rest based API's is where your backend application's can interact with the Pupa rules engine 
and send their input and get the evaluated output, based on the rules defined in Pupa Rules Engine.

### Structure of Rules
Each rule in the rules engine has a name, and a list of Conditions and Actions.

The name is to identify the Rule.

The conditions are where the logic to check different fields of your input can be defined.
You can configure simple AND, OR, EQUALS, NOT EQUALS etc logic.

The Action is the place where you perform some action on the passed input object.
The Actions are only executed if the conditions as a whole evaluate to true.
An example of Action would be to set a new field called citizen=CountryName based on the conditions


A rules engine which will take a json object and a list of rules as input,
run the rules and return the output based on the conditions and actions defined in the rules.

The rules passed, needs to be in the class path of this project.

### Test

```
Rule: sample1

{
	"type": "rule",
	"name": "Nepali_citizen_rule",
	"conditions" : [
					{
					    "name": "birth country is nepal",
					    "type": "simplecondition",
						"field": "country_of_birth",
						"operator": "equals",
						"value": "nepal"
					}
	],
	"actions": [
					{
					    "name": "pupulate citizen as nepal",
					    "type": "simpleaction",
						"field": "citizen",
						"value": "nepal"
					}
	]
}
```

```
Request:
HttpMethod: Post
Http Url: http://localhost:8080/rules/evaluate?rule=Nepali_citizen_rule

RequestBody:
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