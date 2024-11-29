const {getUserCollection} = require("../database")

async function get(name){
  return await getUserCollection().findOne({name:name})
}
module.exports = {get}