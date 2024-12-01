const {update} = require("../dao")

module.exports = async request => await update(request.listID,{"$set":{name:request.newName}})