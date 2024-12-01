const {r} = require("../dao")
const {ifMemberOrOwnerThen} = require("../../common")

module.exports = async request => await ifMemberOrOwnerThen(request,async() => await rename(request.listID,request.itemID,request.newName))