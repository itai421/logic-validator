"use strict";

var numbersValidator = require('./NumbersValidator');

var validator = new numbersValidator(6, 7, 7);

console.log(validator.validate());