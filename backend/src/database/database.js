const {MongoClient} = require("mongodb")

const CONNECTION = "mongodb+srv://subjectTermMan:nuke2050@somecluster.zryzm.mongodb.net/?retryWrites=true&w=majority&appName=someCluster"
const client = new MongoClient(CONNECTION)
let usersCollection,listsCollection
async function connect(){
 try{
   await client.connect()
   const database = client.db("shoppingList")
   usersCollection = database.collection("users")
   listsCollection = database.collection("lists")
 }catch(e){
   await close()
   throw e
 }
}
async function close(){
 await client.close()
}
function getUsersCollection(){
   return usersCollection
}
function getListsCollection(){
  return listsCollection
}
module.exports = {connect,close,getUsersCollection,getListsCollection}