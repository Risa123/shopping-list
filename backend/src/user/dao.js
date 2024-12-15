const {getUserCollection, checkUpdateError} = require("../database")

async function get(name){
  return await getUserCollection().findOne({name:name})
}

async function list(){
  return await (await getUserCollection().find({})).toArray()
}

async function login(id){
  let authToken = crypto.randomUUID()
  checkUpdateError(await getUserCollection().updateOne({_id:id},{"$set":{authToken:authToken}}))
  return authToken
}

async function logOff(authToken){
 checkUpdateError(await getUserCollection().updateOne({authToken:authToken},{"$set":{authToken:null}}))
}

async function getByAuthToken(authToken){
   const user = await getUserCollection().findOne({authToken:authToken})
   if(!user){
     throw new AuthException("invalid auth token")
   }
   return user
}

class AuthException extends Error{}

module.exports = {get,list,login,logOff,getByAuthToken,AuthException}