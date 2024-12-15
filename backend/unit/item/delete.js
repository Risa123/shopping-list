const {post,evaluteTest,getAuthToken,OK,getListID,getItemID} = require("../common")

module.exports = async()=>{
  const res = await post("item/delete",{
    authToken:getAuthToken(),
    listID:getListID(),
    itemID:getItemID(),
  })
  return await evaluteTest(res.status,null,null,OK)
}