const {rename} = require("../dao")
const {ifOwnerThen} = require("../../common")

module.exports = async request => await ifOwnerThen(request,async() => await rename(request.listID,request.newName))