const {post,evaluteTest,getAuthToken,OK, getListID} = require("../common")

module.exports = async()=>{
  const res = await post("list/delete",{
    authToken:getAuthToken(),
    listID:getListID()
  })
  return await evaluteTest(res.status,null,null,OK)
}
