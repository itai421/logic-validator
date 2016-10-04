"use strict";

let numbersValidator = require('./NumbersValidator');

let validator = new numbersValidator(6, 7, 7);

console.log(validator.validate());