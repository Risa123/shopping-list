const {getListCollection} = require("../database")

async function create(name){
  await getListCollection().insertOne({_id:crypto.randomUUID(),name:name,archived:false,items:[],members:[]})
}
async function remove(id){
   await getListCollection().deleteOne({_id:id})
}
async function list(){
  return await (await getListCollection().find({})).toArray()
}
async function update(id,list){
   await getListCollection().updateOne({_id:id},list)
}
async function get(id){
  return await getListCollection().findOne({_id:id})
}
module.exports = {create,remove,list,update,get}