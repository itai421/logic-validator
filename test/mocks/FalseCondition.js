"use strict";

let Condition = require('logic-validator').Condition;

class FalseCondition extends Condition {

    constructor(value1, value2){
        super();
        this.value1 = value1;
        this.value2 = value2;
    }

    validate(){
        return false;
    }
}

module.exports = FalseCondition;
