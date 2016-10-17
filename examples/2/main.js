"use strict";

let numbersValidator = require('./validators/numbers.validator.js');

let validValidator = new numbersValidator(6, 7, 7);

console.log(`valid: ${validValidator.validate()}`);
