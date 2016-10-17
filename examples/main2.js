"use strict";

let numbersValidator = require('./numbers.validator');

let validator = new numbersValidator(6, 7, 7);

console.log(validator.validate());