const dao = require("../listDao")

module.exports = request => dao.create(request.name)