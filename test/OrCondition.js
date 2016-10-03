"use strict";

let should = require('should/as-function');
let OrCondition = require('../lib/OrCondition');

let TrueCondition = require('./mocks/TrueCondition');
let trueCondition = new TrueCondition();
let FalseCondition = require('./mocks/FalseCondition');
let falseCondition = new FalseCondition();


describe('OrCondition', function () {
    describe('#validate()', function () {
        context('when validating array of one true condition', function () {
            it('should return return true', function () {
                let condition = new OrCondition([trueCondition]);
                should(condition.validate()).be.true();
            });
        });
        context('when validating array of one false condition', function () {
            it('should return return false', function () {
                let condition = new OrCondition([falseCondition]);
                should(condition.validate()).not.be.true();
            });
        });
        context('when validating array of true conditions', function () {
            it('should return return true', function () {
                let condition = new OrCondition([trueCondition, trueCondition]);
                should(condition.validate()).be.true();
            });
        });
        context('when validating array of true and false conditions', function () {
            it('should return return true', function () {
                let condition = new OrCondition([trueCondition, falseCondition]);
                should(condition.validate()).be.true();
            });
        });
        context('when validating array of false conditions', function () {
            it('should return return false', function () {
                let condition = new OrCondition([falseCondition, falseCondition]);
                should(condition.validate()).not.be.true();
            });
        });
    });
});
