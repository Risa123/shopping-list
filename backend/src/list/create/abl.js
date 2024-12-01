const {create} = require("../dao")
const {getByAuthToken} = require("../../user/dao")
const {AuthException} = require("../../common")

module.exports = async request =>{
   let owner = await getByAuthToken(request.authToken)
   if(owner){
     await create(request.name)
   }else{
      throw AuthException("invalid auth token")
   }
}