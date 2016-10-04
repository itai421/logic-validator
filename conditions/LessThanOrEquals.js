"use strict";

let Condition = require('./../lib/Condition');

class LessThanOrEquals extends Condition {

    constructor(value1, value2){
        super();
        this.value1 = value1;
        this.value2 = value2;
    }

    validate(){
        return this.value1 <= this.value2;
    }
}

module.exports = LessThanOrEquals;