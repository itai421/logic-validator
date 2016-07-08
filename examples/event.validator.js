"use strict";

//TODO: use the export and require directly
let Validator = require('../lib/validator');
let AndCondition = require('../lib/AndCondition');
let StartDateIsBeforeEndDate = require('./StartDateIsBeforeEndDate');

class EventValidator extends Validator{
    constructor(event) {
        super(
            new AndCondition([
                new StartDateIsBeforeEndDate(event.startDate, event.endDate)
            ])
        );
    }
}

module.exports = EventValidator;
