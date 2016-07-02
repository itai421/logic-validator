"use strict";

let Condition = require('./../lib/Condition');
 
class OrCondition extends Condition{
    constructor(conditions){
        super();
        //TODO: test for Condition instances
        this.conditions = conditions;
    }

    validate(){
        for (let condition of this.conditions) {
            if (condition.validate()) {
                return true;
            }
        }
        throw `failed validation!`;
    }
}

module.exports = OrCondition;


