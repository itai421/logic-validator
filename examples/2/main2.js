"use strict";

let numbersValidator = require('./validators/numbers.validator.js');

let validator = new numbersValidator(6, 7, 7);

console.log(validator.validate());