const {update} = require("../dao")

module.exports = async request => await update(request.listID,request.itemID,{"$set":{"items.$.name":request.newName}})