const {post,evaluteTest,getAuthToken,OK,getListID,getItemID} = require("../common")

module.exports = async()=>{
  const res = await post("item/rename",{
    authToken:getAuthToken(),
    listID:getListID(),
    itemID:getItemID(),
    newName:"test",
  })
  return await evaluteTest(res.status,null,null,OK)
}