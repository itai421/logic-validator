"use strict";

class Validator {
    constructor(condition){
        this.condition = condition;
    }

    validate(){
        return this.condition.validate();
    }
}

module.exports = Validator;
