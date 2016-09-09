"use strict";

//TODO: use the export and require directly
let Condition = require('./../lib/Condition');

//TODO: isn't that to generic?
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