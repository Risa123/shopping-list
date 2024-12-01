const {setArchiveStatus} = require("../dao")
const {ifMemberOrOwnerThen} = require("../../common")

module.exports = async request => await ifMemberOrOwnerThen(request,async() => await setArchiveStatus(request.listID,request.itemID,request.status))