const {getListCollection,checkUpdateError} = require("../database")

async function create(listID,name){
  const item = {_id:crypto.randomUUID(),name:name,archived:false}
  checkUpdateError(await getListCollection().updateOne({_id:listID},{"$push":{items:item}}),"list not found")
  return item
}

async function remove(listID,itemID){
  checkUpdateError(await getListCollection().updateOne({_id:listID},{"$pull":{items:{_id:itemID}}}),"item or list not found")
}

async function update(listID,itemID,update){
  checkUpdateError(await getListCollection().updateOne({_id:listID,"items._id":itemID},update),"item or list not found")
}

async function rename(listID,itemID,newName){
  await update(listID,itemID,{"$set":{"items.$.name":newName}})
}

async function setArchiveStatus(listID,itemID,status){
  await update(listID,itemID,{"$set":{"items.$.archived":status}})
}

module.exports = {create,remove,rename,setArchiveStatus}