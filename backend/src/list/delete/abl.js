const {remove} = require("../dao")
const {ifOwnerThen} = require("../../common")

module.exports = async request => await ifOwnerThen(request,async() => await remove(request.listID))