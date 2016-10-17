"use strict";

let Validator = require('logic-validator').Validator;
let AndCondition = require('logic-validator').AndCondition;
let StartDateIsBeforeEndDate = require('./../conditions/StartDateIsBeforeEndDate');
let NumberOfInvitationsIsLessThanMaximum = require('./../conditions/NumberOfInvitationsIsLessThanMaximum');

let maxNumberOfInvitations = 600;

class EventValidator extends Validator{
    constructor(event) {
        super(
            new AndCondition([
                new StartDateIsBeforeEndDate(event.startDate, event.endDate),
                new NumberOfInvitationsIsLessThanMaximum(event.numberOfInvetations, maxNumberOfInvitations)
            ])
        );
    }
}

module.exports = EventValidator;
