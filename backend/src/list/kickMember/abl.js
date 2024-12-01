const {update} = require("../dao")

module.exports = async request => update(request.listID,{"$pull":{members:request.memberName}})