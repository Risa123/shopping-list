const {get,login} = require("../dao")

module.exports = async request =>{
    let user = await get(request.name)
    if(user != null && user.password == request.password){
        return await login(user._id)
    }
    return null
}