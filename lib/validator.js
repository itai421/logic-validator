"use strict";

let Condition = require('./../lib/Condition');

class Validator extends Condition{
    constructor(condition){
        super();
        //TODO: test for Condition instances
        this.condition = condition;
    }

    validate(){
        return this.condition.validate();
    }
}

module.exports = Validator;
