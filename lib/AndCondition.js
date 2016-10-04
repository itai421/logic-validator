"use strict";

let Condition = require('./../lib/Condition');
 
class AndCondition extends Condition{
    constructor(conditions){
        super();
        this.conditions = conditions;
    }
    
    validate(){
        for (let condition of this.conditions) {
            if (!condition.validate()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = AndCondition;


