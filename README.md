# logic-validator
A lightweight, declarative, OOP like node.js module for validating your code entities

## Installation
```
    npm i --save logic-validator
```

## Usages
Lets say for example that your are writing a program that manage the events of a conference hall.
Events are considered valid if:

 * The start date is before the end date.
 * The invitations number is less than max invitations number.

without using *logic-validator* your validation function would probably look something like this:  

```javascript
    function validate(event) {
        if (event.startDate < event.endDate) {
            return true;
        }
        if (event.numberOfInvetations < 600) {
            return true
        } 
        return false
    }
```

using *logic-validator* turn it to something like this: 
```javascript
    // taken from examples/event.validator.js
    
    class EventValidator extends Validator{
        constructor(event) {
            super(
                new AndCondition([
                    new StartDateIsBeforeEndDate(event.startDate, event.endDate),
                    new InvitationsNumberIsLessThanMaxInvitationsNumber(event.numberOfInvetations, maxInvitationsNumber)
                ])
            );
        }
    }
```
### where is the`validate` function?
The `validate` function is derived from the `Validator` class, so don't worry about it. Calling the validate from the outside looks like this:

```javascript
    // taken from examples/main.js

    let validator = new EventValidator(validEvent);
    
    console.log(`valid: ${validator.validate()}`);
```


The the example above uses **costume conditions** (such as `StartDateIsBeforeEndDate` and `InvitationsNumberIsLessThanMaxInvitationsNumber`).
There is also a why to write the example using  **generic conditions**:
```javascript
    class EventValidator extends Validator{
        constructor(event) {
            super(
                new AndCondition([
                    new LessThan(event.startDate, event.endDate),
                    new LessThan(event.numberOfInvetations, maxInvitationsNumber)
                ])
            );
        }
    }
```

## what the require returns
calling `require('logic-validator')` returns an object with the following classes as properties:

* Validator.
* Condition.  
* AndCondition. 
* OrCondition. 


## Creating complex Validator
You can also create more complex conditions like this:
```javascript   
    class EventValidator extends Validator{
        constructor(event) {
            super(
                new AndCondition([
                    new StartDateIsBeforeEndDate(event.startDate, event.endDate),
                    new InvitationsNumberIsLessThanMaxInvitationsNumber(event.numberOfInvetations, maxInvitationsNumber),
                    new OrCondition([
                        new LessThan(event.startDate, event.endDate),
                        new LessThan(event.numberOfInvetations, maxInvitationsNumber)                        
                    ])
                ])
            );
        }
    }
```
      
      
      

## creating costume conditions
The `StartDateIsBeforeEndDate` and the `InvitationsNumberIsLessThanMaxInvitationsNumber` are a costume conditions. Costume conditions help making the validation process readable and reusable.  
In order to create a costume conditions all you need to do is derive from `Condition` class:

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
the `validate` function is where the validation logic is placed. 




and so to use this package you need to create a costume condition or use a genric one. create a validator and than invke it from the outside


all the code in the example dir is code written as a consumer of this package wrote it and can be placed in a differnt source code. 


## Documentation
All the code shown in the documentation can be found in the `examples` dir. 

content:

 1. Using a `Validator`.
 2. creating a `Validator`.
 3. creating a `Condition`.
 4. contributing.

### Using a `Validator`.
A `Validator` instance expose a `validate` function. This is the function that does the validation itself:

```javascript
    let EventValidator = require('./event.validator');
    let validEvent = new Event(new Date(0), new Date(666666), 60);
    let valid = new EventValidator(validEvent);
    
    console.log(`valid: ${valid.validate()}`);
```


## using generic conditions

## what is a Validator
A `Validator` instance is responsible for validating conditions. The `validate` function of this instance is what usually will be called from outside

## what is a condition
A `Condition` instance is responsible for a single test case. The validation process involve validating each of the conditions. 



## how to call the validation class

pleases feel free to fork, and tweak and twist this package. It is more a desgin propeseal than an out of the box solution


*******
This function can easily become much complex 
*******
