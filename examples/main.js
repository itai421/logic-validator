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

let valid = new EventValidator(validEvent);
let invalid = new EventValidator(invalidEvent);


console.log(`valid: ${valid.validate()}`);
console.log(`invalid: ${invalid.validate()}`);

