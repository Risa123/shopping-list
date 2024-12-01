const {list} = require("../dao")
const {getByAuthToken} = require("../../user/dao")

module.exports = async request => await list((await getByAuthToken(request.authToken)).name)