const {update} = require("../dao")

module.exports = async request => await update(request.listID,{"$set":{archived:request.status}})