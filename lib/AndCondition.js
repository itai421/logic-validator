"use strict";

//TODO: extends Validator? 
class AndCondition {
    constructor(conditions){
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


