const {getUsersCollection} = require("./database")

async function get(name){
  return await getUsersCollection().findOne({name:name})
}
module.exports = {get}