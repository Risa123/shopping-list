const database = require("../database")

function create(name){
  database.getListsCollection().insert({name:name,archived:false,items:{},members:[]})
}
function addItem(listID,name){
  
}
function remove(id){
   database.getListCollection().removeOne({_id:id})
}
module.exports = {create,addItem,remove}