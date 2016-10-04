"use strict";

let Condition = require('logic-validator').Condition;

class InvitationsNumberIsLessThanMaxInvitationsNumber extends Condition {

    constructor(invitationsNumber, max){
        super();
        this.invitationsNumber = invitationsNumber;
        this.maxInvitationsNumber = max;
    }

    validate(){
        return this.invitationsNumber < this.maxInvitationsNumber;
    }

}

module.exports = InvitationsNumberIsLessThanMaxInvitationsNumber;

