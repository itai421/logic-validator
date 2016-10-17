"use strict";

let Condition = require('logic-validator').Condition;

class NumberOfInvitationsIsLessThanMaximum extends Condition {

    constructor(invitationsNumber, max){
        super();
        this.invitationsNumber = invitationsNumber;
        this.maxNumberOfInvitations = max;
    }

    validate(){
        return this.invitationsNumber < this.maxNumberOfInvitations;
    }

}

module.exports = NumberOfInvitationsIsLessThanMaximum;

