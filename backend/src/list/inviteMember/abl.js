const {inviteMember} = require("../dao")
const {ifOwnerThen} = require("../../common")

module.exports = async request => await ifOwnerThen(request,async() => await inviteMember(request.listID,request.memberName))