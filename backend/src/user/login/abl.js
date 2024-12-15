const {get,login,AuthException} = require("../dao")

module.exports = async request =>{
    let user = await get(request.name)
    if(user != null && user.password == request.password){
        return await login(user._id)
    }
    throw new AuthException("authorisation failed")
}