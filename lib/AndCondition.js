"use strict";

let Condition = require('./../lib/Condition');
 
class AndCondition extends Condition{
    constructor(conditions){
        super();
        //TODO: test for Condition instances
        this.conditions = conditions;
    }
    
    validate(){
        for (let condition of this.conditions) {
            if (condition.validate()) {
                throw `failed validation!`
            }
        }
        return true;
    }
}

module.exports = AndCondition;


