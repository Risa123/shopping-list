const dao = require("../../database/listDao")

module.exports = request => dao.create(request.name)