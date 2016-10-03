"use strict";

let should = require('should/as-function');
let GreaterThanOrEquals = require('../conditions/GreaterThanOrEquals');

describe('GreaterThanOrEquals', function () {
    describe('#validate()', function () {
        context('when the values are equal', function () {
            it('should return return true', function () {
                let condition = new GreaterThanOrEquals(6,6);
                should(condition.validate()).be.true();
            });
        });
        context('when the first value is greater than the second one', function () {
            it('should return return true', function () {
                let condition = new GreaterThanOrEquals(6,5);
                should(condition.validate()).be.true();
            });
        });
        context('when the first value is less than the second one', function () {
            it('should return return fasle', function () {
                let condition = new GreaterThanOrEquals(5,6);
                should(condition.validate()).not.be.true();
            });
        });
    });
});
