const {get} = require("../dao")
const {ifMemberOrOwnerThen} = require("../../common")

module.exports = async request => await ifMemberOrOwnerThen(request,async() => await get(request.listID))