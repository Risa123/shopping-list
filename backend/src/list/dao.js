const {getListCollection,NotFound,checkUpdateError} = require("../database")

async function create(name,owner){
  await getListCollection().insertOne({_id:crypto.randomUUID(),name:name,archived:false,items:[],members:[],owner:owner})
}

async function remove(id){
   if((await getListCollection().deleteOne({_id:id})).deleteCount == 0){
      throw new NotFound("list not found")
   }
}

async function list(user){
  return await (await getListCollection().find({"$or":[{owner:user},{members:user}]})).toArray()
}

async function update(id,update){
   checkUpdateError(await getListCollection().updateOne({_id:id},update),"list not found")
}

async function get(id){
  const result = await getListCollection().findOne({_id:id})
  if(!result){
    throw new NotFound("list not found")
  }
  return result
}

async function getByOwner(owner){
   const result = await getListCollection().findOne({owner:owner})
   if(!result){
      throw new NotFound("list not found")
   }
   return result
}
async function getByUser(user){
  const result = await getListCollection().findOne({"$or":[{owner:user},{}]})
  if(!result){
    throw new NotFound("list not found")
  }
  return result
}

async function inviteMember(id,user){
  await update(id,{"$push":{members:user}})
}

async function kickMember(id,user){
  await update(id,{"$pull":{members:user}})
}

async function rename(id,newName){
  await update(id,{"$set":{name:newName}})
}

async function setArchiveStatus(id,status){
  await update(id,{"$set":{archived:status}})
}

module.exports = {create,remove,list,get,getByOwner,getByUser,inviteMember,kickMember,rename,setArchiveStatus}