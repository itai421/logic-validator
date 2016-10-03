"use strict";

let should = require('should/as-function');
let LessThan = require('../conditions/LessThan');

describe('LessThan', function () {
    describe('#validate()', function () {
        context('when the values are equal', function () {
            it('should return return false', function () {
                let condition = new LessThan(6,6);
                should(condition.validate()).not.be.true();
            });
        });
        context('when the first value is greater than the second one', function () {
            it('should return return false', function () {
                let condition = new LessThan(6,5);
                should(condition.validate()).not.be.true();
            });
        });
        context('when the first value is less than the second one', function () {
            it('should return return true', function () {
                let condition = new LessThan(5,6);
                should(condition.validate()).be.true();
            });
        });
    });
});
