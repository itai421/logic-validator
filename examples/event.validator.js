"use strict";

let Validator = require('logic-validator').Validator;
let AndCondition = require('logic-validator').AndCondition;
let StartDateIsBeforeEndDate = require('./StartDateIsBeforeEndDate');
let InvitationsNumberIsLessThanMaxInvitationsNumber = require('./InvitationsNumberIsLessThanMaxInvitationsNumber');

let maxInvitationsNumber = 600;

class EventValidator extends Validator{
    constructor(event) {
        super(
            new AndCondition([
                new StartDateIsBeforeEndDate(event.startDate, event.endDate),
                new InvitationsNumberIsLessThanMaxInvitationsNumber(event.numberOfInvetations, maxInvitationsNumber)
            ])
        );
    }
}

module.exports = EventValidator;
