"use strict";

//TODO: use the export and require directly
let Validator = require('../lib/validator');
let AndCondition = require('../lib/AndCondition');
let StartDateIsBeforeEndDate = require('./StartDateIsBeforeEndDate');
let InvitationsNumberIsLessThanMaxInvitationsNumber = require('./InvitationsNumberIsLessThanMaxInvitationsNumber');

//TODO: add config;
// let maxInvitationsNumber = config.get('maxInvitationsNumber');
let maxInvitationsNumber = 80;

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
