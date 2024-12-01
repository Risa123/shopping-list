const {logOff} = require("../dao")

module.exports = async request => await logOff(request.authToken)