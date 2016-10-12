"use strict";

let Validator = require('logic-validator').Validator;
let AndCondition = require('logic-validator').AndCondition;
let LessThan = require('logic-validator/conditions').LessThan;
let NotEquals = require('logic-validator/conditions').NotEquals;
let Equals = require('logic-validator/conditions').Equals;

let maxInvitationsNumber = 80;

class NumbersValidator extends Validator{
    constructor(num1, num2, num3) {
        super(
            new AndCondition([
                new LessThan(num1, num2),
                new NotEquals(num1, num3),
                new Equals(num2, num3)
            ])
        );
    }
}

module.exports = NumbersValidator;
