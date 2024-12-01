const {setArchiveStatus} = require("../dao")
const {ifOwnerThen} = require("../../common")

module.exports = async request => await ifOwnerThen(request,async() => await setArchiveStatus(request.listID,request.newName))