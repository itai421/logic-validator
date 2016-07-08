"use strict";

//TODO: use the export and require directly 
let Condition = require('./../lib/Condition');

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
