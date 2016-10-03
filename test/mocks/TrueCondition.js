"use strict";

let Condition = require('logic-validator').Condition;

class TrueCondition extends Condition {

    constructor(value1, value2){
        super();
        this.value1 = value1;
        this.value2 = value2;
    }

    validate(){
        return true;
    }
}

module.exports = TrueCondition;