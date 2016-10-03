"use strict";

let should = require('should/as-function');
let AndCondition = require('../lib/AndCondition');

let TrueCondition = require('./mocks/TrueCondition');
let trueCondition = new TrueCondition();
let FalseCondition = require('./mocks/FalseCondition');
let falseCondition = new FalseCondition();


describe('AndCondition', function () {
    describe('#validate()', function () {
        context('when validating array of one true condition', function () {
            it('should return return true', function () {
                let condition = new AndCondition([trueCondition]);
                should(condition.validate()).be.true();
            });
        });
        context('when validating array of one false condition', function () {
            it('should return return false', function () {
                let condition = new AndCondition([falseCondition]);
                should(condition.validate()).not.be.true();
            });
        });
        context('when validating array of true conditions', function () {
            it('should return return true', function () {
                let condition = new AndCondition([trueCondition, trueCondition]);
                should(condition.validate()).be.true();
            });
        });
        context('when validating array of true and false conditions', function () {
            it('should return return false', function () {
                let condition = new AndCondition([trueCondition, falseCondition]);
                should(condition.validate()).not.be.true();
            });
        });
        context('when validating array of false conditions', function () {
            it('should return return false', function () {
                let condition = new AndCondition([falseCondition, falseCondition]);
                should(condition.validate()).not.be.true();
            });
        });

    });
});
