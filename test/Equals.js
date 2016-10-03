"use strict";

let should = require('should/as-function');
let Equals = require('../conditions/Equals');

describe('Equals', function () {
    describe('#validate()', function () {
        context('when the values are equal', function () {
            it('should return return true', function () {
                let condition = new Equals(6,6);
                should(condition.validate()).be.true();
            });
        });
        context('when the values are not equal', function () {
            it('should return return false', function () {
                let condition = new Equals(5,6);
                should(condition.validate()).not.be.true();
            });
        });
    });
});
