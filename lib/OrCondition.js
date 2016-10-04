"use strict";

let Condition = require('./../lib/Condition');
 
class OrCondition extends Condition{
    constructor(conditions){
        super();
        this.conditions = conditions;
    }

    validate(){
        for (let condition of this.conditions) {
            if (condition.validate()) {
                return true;
            }
        }
        return false;
    }
}

module.exports = OrCondition;


