const {get} = require("../dao")

module.exports = async request =>{
    let user = await get(request.name)
    return user != null && user.password == request.password
}