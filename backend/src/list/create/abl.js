const {create} = require("../dao")

module.exports = async request => create(request.name)