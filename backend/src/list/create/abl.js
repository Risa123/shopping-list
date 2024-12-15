const {create,get} = require("../dao")
const {getByAuthToken} = require("../../user/dao")
const {AuthException} = require("../../common")

module.exports = async request =>{
   let owner = await getByAuthToken(request.authToken)
   if(owner){
     return await get(await create(request.name,owner.name))
   }else{
      throw AuthException("invalid auth token")
   }
}