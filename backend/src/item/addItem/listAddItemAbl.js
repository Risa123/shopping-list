const dao = require("../database/listDao")

module.exports = request => dao.addItem(request.listID,request.name)