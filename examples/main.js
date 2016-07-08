"use strict";

let EventValidator = require('./event.validator');

let StartDateIsBeforeEndDate = require('./StartDateIsBeforeEndDate');

let validEvent = {
    startDate: new Date(0),
    endDate: new Date(666666)
};

let invalidEvent = {
    startDate: new Date(),
    endDate: new Date()
};

let valid = new EventValidator(validEvent, validEvent);
let invalid = new EventValidator(invalidEvent, invalidEvent);




console.log(`valid: ${valid.validate()}`);
console.log(`invalid: ${invalid.validate()}`);

