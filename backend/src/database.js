const {MongoClient} = require("mongodb")

const CONNECTION = "mongodb+srv://subjectTermMan:nuke2050@somecluster.zryzm.mongodb.net/?retryWrites=true&w=majority&appName=someCluster"
const client = new MongoClient(CONNECTION)
let userCollection,listCollection
async function connect(){
 try{
   await client.connect()
   const database = client.db("shoppingList")
   userCollection = database.collection("users")
   listCollection = database.collection("lists")
 }catch(e){
   await close()
   throw e
 }
}
async function close(){
 await client.close()
}
function getUserCollection(){
   return userCollection
}
function getListCollection(){
  return listCollection
}
module.exports = {connect,close,getUserCollection,getListCollection}