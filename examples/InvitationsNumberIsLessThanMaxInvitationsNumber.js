"use strict";

//TODO: use the export and require directly 
let Condition = require('./../lib/Condition');

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

