const {get} = require("../dao")

module.exports = async request => get(request.listID)