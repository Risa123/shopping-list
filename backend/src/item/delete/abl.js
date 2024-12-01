const {remove} = require("../dao")
const {ifMemberOrOwnerThen} = require("../../common")

module.exports = async request => await ifMemberOrOwnerThen(request,async() => await remove(request.listID,request.itemID))