const {getUserCollection} = require("../database")

async function get(name){
  return await getUserCollection().findOne({name:name})
}
async function list(){
  return await (await getUserCollection().find({})).toArray()
}
module.exports = {get,list}