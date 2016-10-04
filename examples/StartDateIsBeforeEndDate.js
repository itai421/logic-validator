"use strict";

let Condition = require('logic-validator').Condition;

class StartDateIsBeforeEndDate extends Condition {
    
    constructor(startDate, endDate){
        super();
        this.startDate = startDate;
        this.endDate = endDate;
    }
    
    validate(){
        return this.startDate < this.endDate;
    }

}
    
module.exports = StartDateIsBeforeEndDate;
