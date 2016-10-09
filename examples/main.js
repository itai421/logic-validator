"use strict";

let EventValidator = require('./event.validator');

let StartDateIsBeforeEndDate = require('./StartDateIsBeforeEndDate');

class Event {
    constructor(startDate, endDate, numberOfInvitations) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.numberOfInvetations = numberOfInvitations;
    }
}

let validEvent = new Event(new Date(0), new Date(666666), 60);

let invalidEvent = new Event(new Date(), new Date(), 60);

let validValidator = new EventValidator(validEvent);
let invalidValidator = new EventValidator(invalidEvent);


console.log(`valid: ${validValidator.validate()}`);
console.log(`invalid: ${invalidValidator.validate()}`);

