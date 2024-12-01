const {create} = require("../dao")

module.exports = async request => await create(request.listID,request.name)