const {create} = require("../dao")
const {ifMemberOrOwnerThen} = require("../../common")

module.exports = async request => await ifMemberOrOwnerThen(request,async() => await create(request.listID,request.name))