"use strict";

//TODO: extends Validator? 
class OrCondition {
    constructor(conditions){
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


