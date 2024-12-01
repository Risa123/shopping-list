const {update} = require("../dao")

module.exports = async request => await update(request.listID,request.itemID,{"$set":{"items.$.archived":request.status}})