const {post,evaluteTest,getAuthToken,OK,getListID} = require("../common")

module.exports = async()=>{
  const res = await post("list/setArchiveStatus",{
    authToken:getAuthToken(),
    listID:getListID(),
    status:true
  })
  return await evaluteTest(res.status,null,null,OK)
}
