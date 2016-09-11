"use strict";

/*
*
* you have three numbers
* you need to make sure that:
* #1 < #2
* #2 != #3
* #1 == #3
*
*
* */

//TODO: use the export and require directly
let Validator = require('../lib/validator');
let AndCondition = require('../lib/AndCondition');
var LessThan = require('../conditions/LessThan');
var NotEquals = require('../conditions/NotEquals');
var Equals = require('../conditions/Equals');

//TODO: add config;
// let maxInvitationsNumber = config.get('maxInvitationsNumber');
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
