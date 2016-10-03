"use strict";

let Equals = require('./conditions/Equals');
let GreaterThan = require('./conditions/GreaterThan');
let GreaterThanOrEquals = require('./conditions/GreaterThanOrEquals');
let LessThan = require('./conditions/LessThan');
let LessThanOrEquals = require('./conditions/LessThanOrEquals');
let NotEquals = require('./conditions/NotEquals');

module.exports = {
    Equals: Equals,
    GreaterThan: GreaterThan,
    GreaterThanOrEquals: GreaterThanOrEquals,
    LessThan: LessThan,
    LessThanOrEquals: LessThanOrEquals,
    NotEquals: NotEquals
};
