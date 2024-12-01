const {getListCollection} = require("../database")

async function create(listID,name){
  await getListCollection().updateOne({_id:listID},{"$push":{items:{_id:crypto.randomUUID(),name:name,archived:false}}})
}
async function get(listID,itemID){
  return await getListCollection().findOne({_id:listID,"$elemMatch":{_id:itemID}})
}
async function remove(listID,itemID){
  await getListCollection().updateOne({_id:listID},{"$pull":{items:{_id:itemID}}})
}
async function update(listID,itemID,item){
  await getListCollection().updateOne({_id:listID,"items._id":itemID},item)
}
module.exports = {create,get,remove,update}