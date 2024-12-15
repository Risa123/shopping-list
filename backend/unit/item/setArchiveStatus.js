const {post,evaluteTest,getAuthToken,OK,getListID,getItemID} = require("../common")

module.exports = async()=>{
  const res = await post("item/setArchiveStatus",{
    authToken:getAuthToken(),
    listID:getListID(),
    itemID:getItemID(),
    status:true
  })
  return await evaluteTest(res.status,null,null,OK)
}