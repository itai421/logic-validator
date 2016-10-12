# logic-validator
A lightweight, dependency free, declarative, OOP node.js module for validating your code entities

## Installation
```
    npm i --save logic-validator
```

## Usages
Lets say for example that your are writing a program that manages the events of a conference hall.

Events are considered valid if:

 * The start date is before the end date.
 * The number of invitations is less than max number invitations ( which is 600 ).

Without using *logic-validator* your validation function would probably look something like this: 

```javascript
    function validate(event) {
        if (event.startDate < event.endDate) {
            return true;
        }
        if (event.numberOfInvetations < 600) {
            return true;
        } 
        return false
    }
```

Using *logic-validator* turns it to something like this: 
```javascript
    // taken from examples/event.validator.js
    
    class EventValidator extends Validator{
        constructor(event) {
            super(
                new AndCondition([
                    new StartDateIsBeforeEndDate(event.startDate, event.endDate),
                    new NumberOfInvitationsIsLessThanMaximum(event.numberOfInvetations, maxNumberOfInvitations)
                ])
            );
        }
    }
```
### Where is The `validate` Function?
The `validate` function is derived from the `Validator` class, so don't worry about it. Calling the validate from the outside looks like this:

```javascript
    // taken from examples/main.js

    let validValidator = new EventValidator(validEvent);
    
    console.log(`valid: ${validValidator.validate()}`);
```


The example above uses **costume conditions** (such as `StartDateIsBeforeEndDate` and `InvitationsNumberIsLessThanMaxInvitationsNumber`).
There is also a way to write the example using  **generic conditions**:
```javascript
    class EventValidator extends Validator{
        constructor(event) {
            super(
                new AndCondition([
                    new LessThan(event.startDate, event.endDate),
                    new LessThan(event.numberOfInvetations, maxNumberOfInvitations)
                ])
            );
        }
    }
```

## Requiring The Package
Calling `require('logic-validator')` returns an object with the following classes as properties:

* Validator.
* Condition. 
* AndCondition. 
* OrCondition. 


## Creating a Complex `Validator`
You can also create validators with  more complex conditions:
```javascript 
    class EventValidator extends Validator{
        constructor(event) {
            super(
                new AndCondition([
                    new StartDateIsBeforeEndDate(event.startDate, event.endDate),
                    new InvitationsNumberIsLessThanMaxInvitationsNumber(event.numberOfInvetations, maxNumberOfInvitations),
                    new OrCondition([
                        new LessThan(event.startDate, event.endDate),
                        new LessThan(event.numberOfInvetations, maxNumberOfInvitations)                        
                    ])
                ])
            );
        }
    }
```
      
      
      

## Creating Costume Conditions
The `StartDateIsBeforeEndDate` and the `InvitationsNumberIsLessThanMaxInvitationsNumber` are a costume conditions.
Costume conditions help making the validation process readable and reusable. 
In order to create a costume condition all you need to do is derive from `Condition` class:

```javascript
    //taken from examples/StartDateIsBeforeEndDate.js
    
    class StartDateIsBeforeEndDate extends Condition {
        
        constructor(startDate, endDate){
            super();
            this.startDate = startDate;
            this.endDate = endDate;
        }
        
        validate(){
            return this.startDate < this.endDate;
        }
    
    }
```
The `validate` function is where the validation logic is placed. 


## More Information 
For more information and for the full code of the examples used in this file, take a look at the `examples/` dir.
 

## Contributing
This package is a design proposal more than an out of the box solution,
so please feel free to fork it, tweak it and twist it.

If you think others can enjoy your contribution, please open a PR.

Enjoy :)
