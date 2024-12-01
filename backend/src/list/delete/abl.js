const {remove} = require("../dao")

module.exports = async request => await remove(request.listID)