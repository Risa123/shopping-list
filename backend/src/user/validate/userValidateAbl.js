const {get} = require("../../database/userDao")

module.exports = request =>{
    let user = get(request.name)
    return user != null && user.password == request.password
}