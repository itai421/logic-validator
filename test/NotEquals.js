"use strict";

let should = require('should/as-function');
let NotEquals = require('../conditions/NotEquals');

describe('NotEquals', function () {
    describe('#validate()', function () {
        context('when the values are equal', function () {
            it('should return return false', function () {
                let condition = new NotEquals(6,6);
                should(condition.validate()).not.be.true();
            });
        });
        context('when the values are not equal', function () {
            it('should return return true', function () {
                let condition = new NotEquals(5,6);
                should(condition.validate()).be.true();
            });
        });
    });
});
